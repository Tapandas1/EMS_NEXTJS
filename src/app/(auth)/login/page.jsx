"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.message || "Login failed");
        return;
      }

      // success → redirect
      router.push("/departments");
    } catch (err) {
      setError("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <div className="absolute inset-0 overflow-hidden">
        <div className="pointer-events-none absolute left-1/3 top-0 h-80 w-80 -translate-x-1/2 rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="pointer-events-none absolute right-10 top-1/2 h-72 w-72 rounded-full bg-violet-500/20 blur-3xl" />
      </div>

      <div className="relative mx-auto flex min-h-screen items-center justify-center px-6 py-16">
        <div className="grid w-full max-w-5xl gap-8 overflow-hidden rounded-[2rem] bg-slate-900/90 p-8 shadow-2xl shadow-slate-950/30 backdrop-blur-sm sm:grid-cols-[minmax(320px,420px)_1fr]">
          <div className="flex flex-col justify-center gap-6">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-cyan-300/80">Welcome back</p>
              <h1 className="mt-4 text-4xl font-semibold text-white">Login to your dashboard</h1>
              <p className="mt-3 text-slate-400">Access employee profiles, department details, and team insights with a secure, beautifully designed login screen.</p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-slate-950/90 p-6 shadow-xl shadow-slate-950/30">
              <form onSubmit={handleLogin} className="space-y-5">
                {error && (
                  <p className="rounded-xl border border-red-400/20 bg-red-500/10 px-4 py-3 text-sm text-red-200">{error}</p>
                )}

                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-300">Email address</label>
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full rounded-2xl border border-slate-700/80 bg-slate-950/90 px-4 py-3 text-sm text-white outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-300">Password</label>
                  <input
                    type="password"
                    placeholder="Password"
                    className="w-full rounded-2xl border border-slate-700/80 bg-slate-950/90 px-4 py-3 text-sm text-white outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="flex w-full items-center justify-center rounded-2xl bg-cyan-500 px-4 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400 disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {loading ? "Logging in..." : "Login"}
                </button>
              </form>
            </div>
          </div>

          <div className="relative hidden overflow-hidden rounded-[1.75rem] border border-white/10 bg-gradient-to-br from-cyan-500/10 via-slate-900/70 to-violet-500/10 p-8 sm:block">
            <div className="absolute inset-x-0 top-0 h-40 bg-white/5 blur-3xl" />
            <div className="relative z-10 flex h-full flex-col justify-between">
              <div className="space-y-4">
                <p className="inline-flex items-center rounded-full bg-slate-950/60 px-4 py-1 text-xs uppercase tracking-[0.24em] text-cyan-300">Secure access</p>
                <h2 className="text-3xl font-semibold text-white">Fast, elegant access control</h2>
                <p className="text-slate-300">Your employee data is protected with modern security and a clean login experience designed for HR teams and admins.</p>
              </div>

              <div className="grid gap-4 text-slate-200">
                <div className="rounded-3xl bg-white/5 p-5">
                  <p className="text-sm text-slate-400">Need help?</p>
                  <p className="mt-2 text-sm">Contact your administrator if you can’t sign in.</p>
                </div>
                <div className="rounded-3xl bg-white/5 p-5">
                  <p className="text-sm text-slate-400">New here?</p>
                  <p className="mt-2 text-sm">Register from the main page to get started.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
