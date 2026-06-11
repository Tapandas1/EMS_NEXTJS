import { getEmployeeById } from "@/services/employee.service";
import { getDepartments } from "@/services/department.service";
import EmployeeEditForm from "./EmployeeEditForm";
import { notFound, redirect } from "next/navigation";
import { getCurrentUser } from "@/lib/current-user";
export default async function EditEmployeePage({ params }) {
  const currentUser = await getCurrentUser();

  if (!currentUser || currentUser.role !== "ADMIN") {
    redirect("/unauthorized");
  }
  const { id } = await params;

  const employee = await getEmployeeById(id);

  if (!employee) {
    notFound();
  }

  const departments = await getDepartments();

  const serializedEmployee = JSON.parse(JSON.stringify(employee));

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Edit Employee</h1>

      <EmployeeEditForm
        employee={serializedEmployee}
        departments={departments}
      />
    </div>
  );
}
