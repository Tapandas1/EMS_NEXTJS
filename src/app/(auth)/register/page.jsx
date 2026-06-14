"use client";

import { useActionState, useEffect } from "react";
import { useFormStatus } from "react-dom";
import { registerUser } from "@/app/(auth)/register/actions/user.actions";
import { useRouter } from "next/navigation";

const initialState = {
  error: "",
  success: "",
};


export default function RegisterPage() {
  const [state, formAction] = useActionState(registerUser,initialState);
  const router = useRouter();

  useEffect(() => {
    if (state?.success) {
      router.push("/login");
    }
  }, [state, router]);

  return (
    <div className="min-h-screen bg-slate-950 px-4 py-10 text-slate-100">
      <div className="mx-auto w-full max-w-md rounded-[32px] bg-slate-900/95 p-8 shadow-2xl shadow-slate-950/40 ring-1 ring-white/10">
        <form action={formAction} className="space-y-5">
          <div>
            <h1 className="text-2xl font-semibold tracking-tight text-white">
              Register User
            </h1>
            <p className="mt-2 text-sm text-slate-400">
              Create your account to manage employees.
            </p>
          </div>

          {state?.error && (
            <p className="rounded-2xl bg-rose-500/10 px-4 py-3 text-sm text-rose-200 ring-1 ring-rose-500/20">
              {state.error}
            </p>
          )}

          {state?.success && (
            <p className="rounded-2xl bg-emerald-500/10 px-4 py-3 text-sm text-emerald-200 ring-1 ring-emerald-500/20">
              {state.success}
            </p>
          )}

          <div className="space-y-4">
            <div className="space-y-2">
              <label className="block text-sm font-medium text-slate-200">Name</label>
              <input
                name="name"
                placeholder="Name"
                className="w-full rounded-3xl border border-slate-700 bg-slate-950/90 px-4 py-3 text-sm text-white outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
              />
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-slate-200">Email</label>
              <input
                name="email"
                placeholder="Email"
                className="w-full rounded-3xl border border-slate-700 bg-slate-950/90 px-4 py-3 text-sm text-white outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
              />
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-slate-200">Password</label>
              <input
                name="password"
                type="password"
                placeholder="Password"
                className="w-full rounded-3xl border border-slate-700 bg-slate-950/90 px-4 py-3 text-sm text-white outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
              />
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-slate-200">Role</label>
              <select
                name="role"
                className="w-full rounded-3xl border border-slate-700 bg-slate-950/90 px-4 py-3 text-sm text-white outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
              >
                <option value="USER">USER</option>
                <option value="ADMIN">ADMIN</option>
              </select>
            </div>
          </div>

          <SubmitButton />
        </form>
      </div>
    </div>
  );
}

// ✅ IMPORTANT: must be inside form tree
function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className="bg-blue-500 text-white p-2 w-full"
    >
      {pending ? "Loading..." : "Register"}
    </button>
  );
}
