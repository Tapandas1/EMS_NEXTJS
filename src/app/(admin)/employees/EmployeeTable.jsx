import Link from "next/link";
import { getEmployees } from "@/services/employee.service";

export default async function EmployeeTable({ status }) {
 
  await new Promise((resolve) => setTimeout(resolve, 3000));

  const employees = await getEmployees(status);

  if (employees.length === 0) {
    return <div className="p-6 text-sm text-slate-300">No employees found</div>;
    // throw new Error("Database connection failed");
  }

  return (
    <div className="overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/95 shadow-sm shadow-slate-950/40">
      <table className="w-full border-separate border-spacing-0 text-sm">
        <thead className="bg-slate-950 text-left text-xs uppercase tracking-wide text-slate-500">
          <tr>
            <th className="px-4 py-3">Code</th>
            <th className="px-4 py-3">Name</th>
            <th className="px-4 py-3">Designation</th>
            <th className="px-4 py-3">Department</th>
            <th className="px-4 py-3">Status</th>
          </tr>
        </thead>

        <tbody>
          {employees.map((employee) => (
            <tr key={employee.id} className="border-t border-slate-800 transition hover:bg-slate-950">
              <td className="px-4 py-4 text-slate-300">{employee.employeeCode}</td>
              <td className="px-4 py-4 text-slate-100">
                <Link
                  href={`/employees/${employee.id}`}
                  className="text-sky-300 hover:underline"
                >
                  {employee.user.name}
                </Link>
              </td>
              <td className="px-4 py-4 text-slate-300">{employee.designation}</td>
              <td className="px-4 py-4 text-slate-300">{employee.department.name}</td>
              <td className="px-4 py-4 text-slate-300">{employee.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
