import { getDepartments } from "@/services/department.service";
import Link from "next/link";
export const revalidate = 60;

export default async function DepartmentsPage() {
  const departments = await getDepartments();

  return (
    <div className="bg-slate-950 min-h-screen px-6 py-10 text-slate-100 sm:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 rounded-[2rem] border border-white/10 bg-slate-900/80 p-8 shadow-2xl shadow-slate-950/40 backdrop-blur-xl">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.32em] text-cyan-300/80">Team overview</p>
              <h1 className="mt-3 text-4xl font-semibold text-white">Departments</h1>
              <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
                Browse your company departments, view headcounts, and open each team’s details for faster people management.
              </p>
            </div>
            <div className="rounded-3xl bg-slate-950/90 px-5 py-4 text-sm text-slate-300 shadow-inner shadow-slate-950/30">
              Total departments: <span className="font-semibold text-white">{departments.length}</span>
            </div>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {departments.map((department) => (
            <Link
              href={`/departments/${department.id}`}
              key={department.id}
              className="group block overflow-hidden rounded-[1.75rem] border border-white/10 bg-slate-900/80 p-6 text-slate-100 transition hover:-translate-y-1 hover:border-cyan-400/30 hover:bg-slate-900/95 hover:shadow-xl hover:shadow-cyan-500/10"
            >
              <div className="mb-4 flex items-center justify-between gap-4">
                <div>
                  <h2 className="text-xl font-semibold text-white">{department.name}</h2>
                  <p className="mt-2 text-sm text-slate-400">Department overview</p>
                </div>
                <span className="rounded-full border border-slate-700/80 bg-slate-950/80 px-3 py-1 text-xs uppercase tracking-[0.24em] text-cyan-300">
                  View
                </span>
              </div>

              <div className="mt-4 rounded-3xl bg-slate-950/80 px-4 py-5">
                <p className="text-sm uppercase tracking-[0.24em] text-slate-500">Total employees</p>
                <p className="mt-3 text-3xl font-semibold text-white">{department._count.employees}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
