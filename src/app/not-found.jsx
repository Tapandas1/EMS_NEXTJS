import Link from "next/link";

export default function NotFound() {
  return (
    <div className="p-6 text-center ml-50 mr-50 mb-50 mt-50">
      <h2 className="text-3xl font-bold mb-4">
        Page Not Found
      </h2>

      <p className="mb-4">
        The page you are looking for
        does not exist.
      </p>

      <Link
        href="/employees"
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Back to Employees
      </Link>
    </div>
  );
}