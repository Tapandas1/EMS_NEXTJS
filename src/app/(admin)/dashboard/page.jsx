import { getDepartments } from "@/services/department.service";
import { getEmployees } from "@/services/employee.service";

export const dynamic = "force-dynamic";

export default async function DashboardPage() {
  const [departments, employees] = await Promise.all([
    getDepartments(),
    getEmployees(),
  ]);

  const activeEmployees = employees.filter((employee) => employee.status === "ACTIVE");
  const inactiveEmployees = employees.filter((employee) => employee.status === "INACTIVE");
  const recentHires = employees.slice(0, 6);
  const topDepartments = [...departments]
    .sort((a, b) => b._count.employees - a._count.employees)
    .slice(0, 4);

  return (
    <div className="bg-slate-950 min-h-screen px-6 py-10 text-slate-100 sm:px-10">
      <div className="mx-auto max-w-7xl space-y-8">
        <header className="rounded-[2rem] border border-white/10 bg-slate-900/80 p-8 shadow-2xl shadow-slate-950/40 backdrop-blur-xl">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.32em] text-cyan-300/80">Admin dashboard</p>
              <h1 className="mt-4 text-4xl font-semibold text-white">Your people operations overview</h1>
              <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-400">
                Monitor workforce health, department capacity, and hiring momentum from a single elegant view.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              <div className="rounded-3xl border border-white/10 bg-slate-950/90 px-6 py-5 text-slate-100 shadow-inner shadow-slate-950/20">
                <p className="text-sm uppercase tracking-[0.25em] text-slate-400">Employees</p>
                <p className="mt-4 text-4xl font-semibold text-white">{employees.length}</p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-slate-950/90 px-6 py-5 text-slate-100 shadow-inner shadow-slate-950/20">
                <p className="text-sm uppercase tracking-[0.25em] text-slate-400">Active</p>
                <p className="mt-4 text-4xl font-semibold text-white">{activeEmployees.length}</p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-slate-950/90 px-6 py-5 text-slate-100 shadow-inner shadow-slate-950/20">
                <p className="text-sm uppercase tracking-[0.25em] text-slate-400">Inactive</p>
                <p className="mt-4 text-4xl font-semibold text-white">{inactiveEmployees.length}</p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-slate-950/90 px-6 py-5 text-slate-100 shadow-inner shadow-slate-950/20">
                <p className="text-sm uppercase tracking-[0.25em] text-slate-400">Departments</p>
                <p className="mt-4 text-4xl font-semibold text-white">{departments.length}</p>
              </div>
            </div>
          </div>
        </header>

        <div className="grid gap-8 xl:grid-cols-[1.3fr_0.7fr]">
          <section className="space-y-8 rounded-[2rem] border border-white/10 bg-slate-900/80 p-8 shadow-2xl shadow-slate-950/30">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h2 className="text-2xl font-semibold text-white">Department capacity</h2>
                <p className="mt-2 text-sm text-slate-400">
                  See your most staffed teams and where headcount is concentrated.
                </p>
              </div>
              <div className="rounded-3xl bg-slate-950/80 px-4 py-3 text-sm text-slate-300">
                Top teams by employee count
              </div>
            </div>

            <div className="grid gap-4 lg:grid-cols-2">
              {topDepartments.map((department) => (
                <div
                  key={department.id}
                  className="rounded-3xl border border-white/10 bg-slate-950/90 p-5 shadow-inner shadow-slate-950/20"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-xl font-semibold text-white">{department.name}</h3>
                      <p className="mt-2 text-sm text-slate-400">{department._count.employees} employee{department._count.employees === 1 ? "" : "s"}</p>
                    </div>
                    <span className="rounded-full bg-cyan-500/15 px-3 py-1 text-xs uppercase tracking-[0.24em] text-cyan-300">
                      {department._count.employees}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <aside className="space-y-8 rounded-[2rem] border border-white/10 bg-slate-900/80 p-8 shadow-2xl shadow-slate-950/30">
            <div>
              <h2 className="text-2xl font-semibold text-white">Hiring momentum</h2>
              <p className="mt-2 text-sm text-slate-400">Recent hires and on-boarding progress for the latest employee additions.</p>
            </div>

            <div className="space-y-4 rounded-3xl bg-slate-950/90 p-4">
              {recentHires.length > 0 ? (
                recentHires.map((employee) => (
                  <div key={employee.id} className="flex items-center justify-between rounded-3xl border border-slate-800 bg-slate-900/80 px-4 py-4">
                    <div>
                      <p className="text-sm text-slate-300">{employee.user.name}</p>
                      <p className="text-xs text-slate-500">{employee.department.name} · {employee.designation}</p>
                    </div>
                    <span className="text-xs uppercase tracking-[0.24em] text-cyan-300">{employee.status}</span>
                  </div>
                ))
              ) : (
                <div className="rounded-3xl border border-slate-800 bg-slate-900/80 px-4 py-6 text-center text-sm text-slate-400">
                  No recent hires available.
                </div>
              )}
            </div>
          </aside>
        </div>

        <section className="rounded-[2rem] border border-white/10 bg-slate-900/80 p-8 shadow-2xl shadow-slate-950/30">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="text-2xl font-semibold text-white">Workforce health</h2>
              <p className="mt-2 text-sm text-slate-400">Quick insights into active versus inactive employees across the organization.</p>
            </div>
            <div className="rounded-3xl bg-slate-950/80 px-4 py-3 text-sm text-slate-300">
              Status distribution
            </div>
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div className="rounded-3xl border border-white/10 bg-slate-950/90 p-6 shadow-inner shadow-slate-950/20">
              <p className="text-sm uppercase tracking-[0.25em] text-slate-500">Active employees</p>
              <p className="mt-4 text-4xl font-semibold text-white">{activeEmployees.length}</p>
              <div className="mt-4 h-3 overflow-hidden rounded-full bg-slate-800">
                <div
                  className="h-full rounded-full bg-cyan-500"
                  style={{ width: `${employees.length ? (activeEmployees.length / employees.length) * 100 : 0}%` }}
                />
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-slate-950/90 p-6 shadow-inner shadow-slate-950/20">
              <p className="text-sm uppercase tracking-[0.25em] text-slate-500">Inactive employees</p>
              <p className="mt-4 text-4xl font-semibold text-white">{inactiveEmployees.length}</p>
              <div className="mt-4 h-3 overflow-hidden rounded-full bg-slate-800">
                <div
                  className="h-full rounded-full bg-rose-500"
                  style={{ width: `${employees.length ? (inactiveEmployees.length / employees.length) * 100 : 0}%` }}
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}