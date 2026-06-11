import { getDepartments } from "@/services/department.service";
import Link from "next/link";
export const revalidate = 60;

export default async function DepartmentsPage() {
  const departments = await getDepartments();

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Departments</h1>

      <div className="space-y-3">
        {departments.map((department) => (
          <Link
            href={`/departments/${department.id}`}
            key={department.id}
            className="block border rounded p-4 hover:bg-gray-50"
          >
            <p>{department.name}</p>
            <p>
              <strong>Total Employees:</strong> {department._count.employees}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
