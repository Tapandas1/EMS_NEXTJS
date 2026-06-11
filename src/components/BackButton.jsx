"use client";

import { useRouter } from "next/navigation";

export default function BackButton() {
  const router = useRouter();

  return (
    <button
      onClick={() => router.back()}
      className="border px-4 py-2 rounded mb-4"
    >
      Back
    </button>
  );
}