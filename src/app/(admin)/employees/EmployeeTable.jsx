import Link from "next/link";
import { getEmployees } from "@/services/employee.service";

export default async function EmployeeTable({ status }) {
 
  await new Promise((resolve) => setTimeout(resolve, 3000));

  const employees = await getEmployees(status);

  if (employees.length === 0) {
    return <div className="p-6">No employees found</div>;
    // throw new Error("Database connection failed");
  }

  return (
    <table className="w-full border">
      <thead>
        <tr>
          <th className="border p-2">Code</th>

          <th className="border p-2">Name</th>

          <th className="border p-2">Designation</th>

          <th className="border p-2">Department</th>

          <th className="border p-2">Status</th>
        </tr>
      </thead>

      <tbody>
        {employees.map((employee) => (
          <tr key={employee.id}>
            <td className="border p-2">{employee.employeeCode}</td>

            <td className="border p-2">
              <Link
                href={`/employees/${employee.id}`}
                className="text-blue-600 hover:underline"
              >
                {employee.user.name}
              </Link>
            </td>

            <td className="border p-2">{employee.designation}</td>

            <td className="border p-2">{employee.department.name}</td>

            <td className="border p-2">{employee.status}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
