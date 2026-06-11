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
      className="space-y-4 max-w-md"
    >
      <div>
        <label>Name</label>

        <input
          type="text"
          name="name"
          className="border p-2 w-full"
        />
      </div>

      <div>
        <label>Email</label>

        <input
          type="email"
          name="email"
          className="border p-2 w-full"
        />
      </div>

      <div>
        <label>Password</label>

        <input
          type="password"
          name="password"
          className="border p-2 w-full"
        />
      </div>

      {state?.message && (
        <p className="text-red-500">
          {state.message}
        </p>
      )}

    <SubmitButton text="Register" />
    </form>
  );
}