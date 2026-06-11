import Image from "next/image";
import { getEmployeeById } from "@/services/employee.service";
import Link from "next/link";
import DeactivateEmployee from "./DeactivateEmployee";
import BackButton from "@/components/BackButton";
import { getCurrentUser } from "@/lib/current-user";

export async function generateMetadata({ params }) {
  const { id } = await params;
  const employee = await getEmployeeById(id);

  return {
    title: employee
      ? `${employee.user.name} | Employee Details`
      : "Employee Not Found",

    description: employee
      ? `${employee.user.name} works as ${employee.designation}`
      : "Employee details page",
  };
}

export default async function EmployeeDetailsPage({ params }) {
  const currentUser = await getCurrentUser();
  const { id } = await params;
  const employee = await getEmployeeById(id);

  if (!employee) {
    return <div>Employee not found</div>;
  }

  return (
    <div className="p-6">
      <BackButton />
      <h1 className="text-3xl font-bold mb-6">Employee Details</h1>

      <div className="flex gap-6">
        <Image
          src={employee.profileImage}
          alt={employee.user.name}
          width={150}
          height={150}
          className="rounded-full"
        />

        <div className="space-y-2">
          <p>
            <strong>Employee Code:</strong> {employee.employeeCode}
          </p>

          <p>
            <strong>Name:</strong> {employee.user.name}
          </p>

          <p>
            <strong>Email:</strong> {employee.user.email}
          </p>

          <p>
            <strong>Designation:</strong> {employee.designation}
          </p>

          <p>
            <strong>Department:</strong> {employee.department.name}
          </p>

          <p>
            <strong>Status:</strong> {employee.status}
          </p>

          <p>
            <strong>Salary:</strong> ₹{employee.salary.toString()}
          </p>
          <div className="mt-4 flex gap-3">
            {currentUser?.role === "ADMIN" && (
              <Link
                href={`/employees/${employee.id}/edit`}
                className="bg-yellow-500 text-white px-4 py-2 rounded"
              >
                Edit Employee Details
              </Link>
            )}

            {currentUser?.role === "ADMIN" && employee.status === "ACTIVE" && (
              <DeactivateEmployee employeeId={employee.id} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
