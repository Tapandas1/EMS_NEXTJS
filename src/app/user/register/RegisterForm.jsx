"use client";

import { useActionState } from "react";
import { registerUser } from "./action";
import SubmitButton from "@/components/SubmitButton";

const initialState = {
  success: false,
  message: "",
};

export default function RegisterForm() {
  const [state, formAction] =
    useActionState(
      registerUser,
      initialState
    );

  return (
    <form
      action={formAction}
      className="space-y-6 w-full max-w-md"
    >
      <div className="space-y-2">
        <label className="block text-sm font-medium text-slate-200">
          Name
        </label>

        <input
          type="text"
          name="name"
          className="w-full rounded-3xl border border-slate-700 bg-slate-950/90 px-4 py-3 text-sm text-white outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
        />
      </div>

      <div className="space-y-2">
        <label className="block text-sm font-medium text-slate-200">
          Email
        </label>

        <input
          type="email"
          name="email"
          className="w-full rounded-3xl border border-slate-700 bg-slate-950/90 px-4 py-3 text-sm text-white outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
        />
      </div>

      <div className="space-y-2">
        <label className="block text-sm font-medium text-slate-200">
          Password
        </label>

        <input
          type="password"
          name="password"
          className="w-full rounded-3xl border border-slate-700 bg-slate-950/90 px-4 py-3 text-sm text-white outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
        />
      </div>

      {state?.message && (
        <p className="rounded-2xl bg-rose-500/10 px-4 py-3 text-sm text-rose-200 ring-1 ring-rose-500/10">
          {state.message}
        </p>
      )}

      <SubmitButton text="Register" />
    </form>
  );
}