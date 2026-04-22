import mongoose, { Schema, Model } from "mongoose";

export interface IUsers {
  _id?: string;
  username: string;
  password: string;
}

const UserSchema = new Schema<IUsers>({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const User: Model<IUsers> =
  mongoose.models.User || mongoose.model<IUsers>("User", UserSchema);

export default User;
