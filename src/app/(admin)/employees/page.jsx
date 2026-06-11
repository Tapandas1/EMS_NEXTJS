import Link from "next/link";
import { Suspense } from "react";
import EmployeeTable from "./EmployeeTable";
import { getCurrentUser } from "@/lib/current-user";
export const dynamic = "force-dynamic";

export default async function EmployeesPage({ searchParams }) {
  const currentUser = await getCurrentUser();
  const status = (await searchParams)?.status || "ALL";

  return (
    <div className="p-6">
      <div className="flex justify-between mb-4">
        <h1 className="text-2xl font-bold">Employees</h1>

        {currentUser?.role === "ADMIN" && (
          <Link
            href="/employees/create"
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Add Employee
          </Link>
        )}
      </div>

      <div className="flex gap-4 mb-6">
        <Link
          href="/employees?status=ALL"
          className={
            status === "ALL"
              ? "bg-blue-500 text-white px-3 py-2 rounded"
              : "border px-3 py-2 rounded"
          }
        >
          All
        </Link>

        <Link
          href="/employees?status=ACTIVE"
          className={
            status === "ACTIVE"
              ? "bg-blue-500 text-white px-3 py-2 rounded"
              : "border px-3 py-2 rounded"
          }
        >
          Active
        </Link>

        <Link
          href="/employees?status=INACTIVE"
          className={
            status === "INACTIVE"
              ? "bg-blue-500 text-white px-3 py-2 rounded"
              : "border px-3 py-2 rounded"
          }
        >
          Inactive
        </Link>
      </div>

      <Suspense fallback={<div>Loading Employees...</div>}>
        <EmployeeTable status={status} />
      </Suspense>
    </div>
  );
}
