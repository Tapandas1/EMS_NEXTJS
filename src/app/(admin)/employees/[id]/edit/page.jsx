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
    <div className="bg-slate-950 min-h-screen px-6 py-10 text-slate-100 sm:px-10">
      <div className="mx-auto max-w-6xl space-y-8">
        <div className="rounded-[2rem] border border-white/10 bg-slate-900/80 p-8 shadow-2xl shadow-slate-950/40 backdrop-blur-xl">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-cyan-300/80">Employee management</p>
              <h1 className="mt-3 text-4xl font-semibold text-white">Edit Employee</h1>
              <p className="mt-2 max-w-2xl text-sm leading-7 text-slate-400">
                Update employee information with the same form fields and workflow, now presented in a more polished admin experience.
              </p>
            </div>
            <div className="rounded-3xl bg-slate-950/90 px-5 py-4 text-sm text-slate-300 shadow-inner shadow-slate-950/20">
              Admin-only edit view
            </div>
          </div>
        </div>

        <div className="rounded-[1.75rem] border border-white/10 bg-slate-900/80 p-8 shadow-2xl shadow-slate-950/30">
          <EmployeeEditForm
            employee={serializedEmployee}
            departments={departments}
          />
        </div>
      </div>
    </div>
  );
}
