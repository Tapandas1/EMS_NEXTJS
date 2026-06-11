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
    <div className="min-h-screen flex items-center justify-center">
      <form action={formAction} className="w-96 p-6 border rounded">

        <h1 className="text-xl font-bold mb-4">
          Register User
        </h1>

        {state?.error && (
          <p className="text-red-500">{state.error}</p>
        )}

        {state?.success && (
          <p className="text-green-600">{state.success}</p>
        )}

        <input
          name="name"
          placeholder="Name"
          className="border p-2 w-full mb-2"
        />

        <input
          name="email"
          placeholder="Email"
          className="border p-2 w-full mb-2"
        />

        <input
          name="password"
          type="password"
          placeholder="Password"
          className="border p-2 w-full mb-2"
        />

        <select name="role" className="border p-2 w-full mb-4">
          <option value="USER">USER</option>
          <option value="ADMIN">ADMIN</option>
        </select>
        <SubmitButton />
      </form>
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
