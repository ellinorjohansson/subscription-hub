import mongoose from 'mongoose'; // Library to work with mongodb in node.js. Make it easier to work with schemas and models

/*
1. Hämtar MongoDB-URL
2. Skapar en global cache
3. Ser till att:
    endast EN anslutning skapas
    återanvänder anslutningen
4. Hanterar fel korrekt 
*/

const MONGODB_URL = process.env.MONGODB_URL; // Get the database url from env

if (!MONGODB_URL) {
  throw new Error('Please define the MONGODB_URL environment variable inside .env'); // Controll if url does exist and if not -> throw error
}

// Cache structure for typescript. Important so multiple connection dosent happen
interface MongooseCache {
  conn: typeof mongoose | null; //conn -> Done connection.
  promise: Promise<typeof mongoose> | null; //promise -> ongoing connection
}

// global variable. "To say to typescript that there is a global variable named mongoose". For connection between reloads for example in node.js
declare global {
  var mongoose: MongooseCache | undefined;
}

const cached: MongooseCache = global.mongoose || { conn: null, promise: null }; // If there is a global cache, use it. If not create a new one.

// Save cache global so it survives hot reloads and you don't need multiple db-connections
if (!global.mongoose) {
  global.mongoose = cached;
}

// async function that connects to db
async function connectDB() {
  if (cached.conn) { // if connection already exist, return
    return cached.conn;
  }

  if (!cached.promise) { // if no connection exist
    // create options
    const opts = {
      bufferCommands: false, // mongoose dosent que queries if db is down
    };

    // Start connection to mongodb
    cached.promise = mongoose.connect(MONGODB_URL!, opts).then((mongoose) => { // save promise so multiple anrop dosent create multple connections. ! means "i know where it is"
      return mongoose;
    });
  }

  // wait on the connection
  try {
    cached.conn = await cached.promise; // save it in conn
  } catch (e) { // If something goes wrong, nollställ promise and send error 
    cached.promise = null;
    throw e;
  }

  return cached.conn; // Return the db connection
}

export default connectDB;