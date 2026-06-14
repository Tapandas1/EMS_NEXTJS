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
    <div className="bg-slate-950 min-h-screen px-6 py-10 text-slate-100 sm:px-10">
      <div className="mx-auto max-w-6xl space-y-8">
        <div className="rounded-[2rem] border border-white/10 bg-slate-900/80 p-8 shadow-2xl shadow-slate-950/40 backdrop-blur-xl">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <BackButton />
              <p className="text-sm uppercase tracking-[0.3em] text-cyan-300/80">Employee profile</p>
              <h1 className="mt-3 text-4xl font-semibold text-white">{employee.user.name}</h1>
              <p className="mt-2 max-w-2xl text-sm leading-7 text-slate-400">
                A complete view of the employee record with fast access to editing and status actions.
              </p>
            </div>
            <div className="rounded-3xl bg-slate-950/90 px-5 py-4 text-sm text-slate-300 shadow-inner shadow-slate-950/20">
              <p className="uppercase tracking-[0.3em] text-slate-500">Status</p>
              <p className="mt-3 text-2xl font-semibold text-white">{employee.status}</p>
            </div>
          </div>

          <div className="mt-10 grid gap-8 xl:grid-cols-[360px_1fr]">
            <aside className="rounded-[1.75rem] border border-white/10 bg-slate-950/90 p-6 shadow-xl shadow-slate-950/20">
              <div className="flex items-center justify-center overflow-hidden rounded-[1.5rem] border border-white/10 bg-slate-900/80 p-3">
                <Image
                  src={employee.profileImage}
                  alt={employee.user.name}
                  width={220}
                  height={220}
                  className="h-56 w-56 rounded-[1.5rem] object-cover"
                />
              </div>

              <div className="mt-8 space-y-4 text-sm text-slate-300">
                <div className="rounded-3xl bg-slate-900/90 p-4">
                  <p className="text-xs uppercase tracking-[0.24em] text-slate-500">Employee code</p>
                  <p className="mt-2 text-lg font-semibold text-white">{employee.employeeCode}</p>
                </div>
                <div className="rounded-3xl bg-slate-900/90 p-4">
                  <p className="text-xs uppercase tracking-[0.24em] text-slate-500">Department</p>
                  <p className="mt-2 text-lg font-semibold text-white">{employee.department.name}</p>
                </div>
              </div>
            </aside>

            <section className="space-y-8">
              <div className="rounded-[1.75rem] border border-white/10 bg-slate-950/90 p-8 shadow-xl shadow-slate-950/20">
                <h2 className="text-xl font-semibold text-white">Basic information</h2>
                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-3xl bg-slate-900/80 p-5">
                    <p className="text-xs uppercase tracking-[0.24em] text-slate-500">Email</p>
                    <p className="mt-2 text-sm text-slate-200">{employee.user.email}</p>
                  </div>
                  <div className="rounded-3xl bg-slate-900/80 p-5">
                    <p className="text-xs uppercase tracking-[0.24em] text-slate-500">Designation</p>
                    <p className="mt-2 text-sm text-slate-200">{employee.designation}</p>
                  </div>
                  <div className="rounded-3xl bg-slate-900/80 p-5">
                    <p className="text-xs uppercase tracking-[0.24em] text-slate-500">Salary</p>
                    <p className="mt-2 text-sm text-slate-200">₹{employee.salary.toString()}</p>
                  </div>
                  <div className="rounded-3xl bg-slate-900/80 p-5">
                    <p className="text-xs uppercase tracking-[0.24em] text-slate-500">Department ID</p>
                    <p className="mt-2 text-sm text-slate-200">{employee.department.id}</p>
                  </div>
                </div>
              </div>

              <div className="rounded-[1.75rem] border border-white/10 bg-slate-950/90 p-8 shadow-xl shadow-slate-950/20">
                <h2 className="text-xl font-semibold text-white">Actions</h2>
                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  {currentUser?.role === "ADMIN" && (
                    <Link
                      href={`/employees/${employee.id}/edit`}
                      className="inline-flex items-center justify-center rounded-2xl bg-yellow-500 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-yellow-400"
                    >
                      Edit Employee Details
                    </Link>
                  )}

                  {currentUser?.role === "ADMIN" && employee.status === "ACTIVE" && (
                    <DeactivateEmployee employeeId={employee.id} />
                  )}
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
