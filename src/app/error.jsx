"use client";

export default function GlobalError({
  error,
  reset,
}) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold text-red-600">
        Something went wrong
      </h1>

      <p className="mt-2">
        {error.message}
      </p>

      <button
        onClick={() => reset()}
        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
      >
        Try Again
      </button>
    </div>
  );
}