import { notFound } from "next/navigation";
import { getDepartmentById } from "@/services/department.service";

export default async function DepartmentDetailsPage({ params }) {
  const { id } = await params;
  const department = await getDepartmentById(id);

  if (!department) {
    notFound();
  }

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">Department Details</h1>

      <div className="border rounded p-4">
        <p>
          <strong>ID:</strong> {department.id}
        </p>

        <p>
          <strong>Name:</strong> {department.name}
        </p>
      </div>
    </div>
  );
}
