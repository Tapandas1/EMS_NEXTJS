"use client";

import { useFormStatus } from "react-dom";

export default function SubmitButton({
  text = "Submit",
}) {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className="bg-blue-600 text-white px-4 py-2 rounded"
    >
      {pending
        ? "Please wait..."
        : text}
    </button>
  );
}