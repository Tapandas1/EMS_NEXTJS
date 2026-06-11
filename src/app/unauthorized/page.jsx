import Link from "next/link";

export default function UnauthorizedPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">

      <h1 className="text-3xl font-bold mb-4">
        Unauthorized
      </h1>

      <p className="mb-6 text-gray-600">
        You do not have permission to access this page.
      </p>

      <Link
        href="/login"
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Go to login
      </Link>

    </div>
  );
}