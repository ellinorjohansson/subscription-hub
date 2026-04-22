"use client";

import { FormEvent, useEffect, useState } from "react";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const { status } = useSession();

  const [mode, setMode] = useState<"login" | "signup">("login");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (status === "authenticated") {
      router.replace("/dashboard");
    }
  }, [router, status]);

  const handleLogin = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError("");

    if (!username || !password) {
      setError("Username and password are required.");
      return;
    }

    setLoading(true);
    const result = await signIn("credentials", {
      username,
      password,
      redirect: false,
    });
    setLoading(false);

    if (result?.error) {
      setError("Invalid username or password.");
      return;
    }

    router.push("/dashboard");
  };

  const handleSignup = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError("");

    if (!username || !password) {
      setError("Username and password are required.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    setLoading(true);
    try {
      const response = await fetch("/api/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      if (!response.ok) {
        const data = (await response.json()) as { error?: string };
        setError(data.error ?? "Signup failed.");
        setLoading(false);
        return;
      }

      const result = await signIn("credentials", {
        username,
        password,
        redirect: false,
      });

      if (result?.error) {
        setError("Account created, but auto-login failed.");
        setLoading(false);
        return;
      }

      router.push("/dashboard");
    } catch {
      setError("Network error. Please try again.");
    }
    setLoading(false);
  };

  if (status === "loading" || status === "authenticated") {
    return null;
  }

  return (
    <main className="flex min-h-screen items-center justify-center px-4 py-8">
      <section className="w-full max-w-md rounded-3xl border border-amber-200/10 bg-[linear-gradient(180deg,rgba(24,18,13,0.96),rgba(17,13,10,0.96))] p-7 shadow-[0_30px_90px_rgba(0,0,0,0.45)] sm:p-9">
        <div className="mb-7">
          <h1 className="text-3xl font-semibold tracking-[0.01em] text-amber-50">
            Welcome friend!
          </h1>
          <p className="mt-2 text-sm text-amber-100/70">
            Track subscriptions with a clean personal dashboard.
          </p>
        </div>

        <div className="mb-6 grid grid-cols-2 rounded-xl border border-amber-200/10 bg-amber-100/5 p-1">
          <button
            type="button"
            onClick={() => setMode("login")}
            className={`cursor-pointer rounded-lg px-4 py-2 text-sm font-medium transition ${
              mode === "login"
                ? "bg-amber-600 text-amber-50 shadow-[0_6px_20px_rgba(217,119,6,0.35)]"
                : "text-amber-100/75 hover:bg-amber-100/10"
            }`}
          >
            Login
          </button>
          <button
            type="button"
            onClick={() => setMode("signup")}
            className={`cursor-pointer rounded-lg px-4 py-2 text-sm font-medium transition ${
              mode === "signup"
                ? "bg-amber-600 text-amber-50 shadow-[0_6px_20px_rgba(217,119,6,0.35)]"
                : "text-amber-100/75 hover:bg-amber-100/10"
            }`}
          >
            Signup
          </button>
        </div>

        <form
          onSubmit={mode === "login" ? handleLogin : handleSignup}
          className="flex flex-col gap-4"
        >
          <div className="flex flex-col gap-2">
            <label
              htmlFor="username"
              className="text-sm font-medium text-amber-100/90"
            >
              Username
            </label>
            <input
              id="username"
              type="text"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
              className="rounded-xl border border-amber-200/20 bg-amber-100/5 px-3 py-2.5 text-amber-50 outline-none transition placeholder:text-amber-100/35 focus:border-amber-500/75 focus:ring-2 focus:ring-amber-500/25"
              placeholder="Enter username"
              autoComplete="username"
            />
          </div>

          <div className="flex flex-col gap-2 mt-1">
            <label
              htmlFor="password"
              className="text-sm font-medium text-amber-100/90"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              className="rounded-xl border border-amber-200/20 bg-amber-100/5 px-3 py-2.5 text-amber-50 outline-none transition placeholder:text-amber-100/35 focus:border-amber-500/75 focus:ring-2 focus:ring-amber-500/25"
              placeholder="Enter password"
              autoComplete={
                mode === "login" ? "current-password" : "new-password"
              }
            />
          </div>

          {mode === "signup" && (
            <div className="flex flex-col gap-2 mt-1">
              <label
                htmlFor="confirm-password"
                className="text-sm font-medium text-amber-100/90"
              >
                Confirm password
              </label>
              <input
                id="confirm-password"
                type="password"
                value={confirmPassword}
                onChange={(event) => setConfirmPassword(event.target.value)}
                className="rounded-xl border border-amber-200/20 bg-amber-100/5 px-3 py-2.5 text-amber-50 outline-none transition placeholder:text-amber-100/35 focus:border-amber-500/75 focus:ring-2 focus:ring-amber-500/25"
                placeholder="Repeat password"
                autoComplete="new-password"
              />
            </div>
          )}

          {error && (
            <p className="rounded-lg border border-red-400/30 bg-red-500/10 px-3 py-2 text-sm text-red-200">
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="mt-2 cursor-pointer rounded-xl bg-[linear-gradient(135deg,rgba(217,119,6,0.95),rgba(180,83,9,0.9))] px-4 py-2.5 font-semibold text-amber-50 shadow-[0_10px_30px_rgba(180,83,9,0.35)] transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {loading
              ? "Please wait..."
              : mode === "login"
                ? "Login"
                : "Create Account"}
          </button>
        </form>
      </section>
    </main>
  );
}
