import Link from "next/link";
import { Suspense } from "react";
import EmployeeTable from "./EmployeeTable";
import { getCurrentUser } from "@/lib/current-user";
export const dynamic = "force-dynamic";

export default async function EmployeesPage({ searchParams }) {
  const currentUser = await getCurrentUser();
  const status = (await searchParams)?.status || "ALL";

  return (
    <div className="bg-slate-950 min-h-screen px-6 py-10 text-slate-100 sm:px-10">
      <div className="mx-auto max-w-7xl space-y-8">
        <header className="rounded-[2rem] border border-white/10 bg-slate-900/80 p-8 shadow-2xl shadow-slate-950/40 backdrop-blur-xl">
          <div className="flex flex-col gap-6 xl:flex-row xl:items-center xl:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-cyan-300/80">Team management</p>
              <h1 className="mt-3 text-4xl font-semibold text-white">Employees</h1>
              <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-400">
                View and filter your employee roster, then drill into details with a polished, easy-to-scan interface.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <div className="rounded-3xl border border-slate-700/80 bg-slate-950/90 px-5 py-4 text-sm text-slate-300 shadow-inner shadow-slate-950/20">
                Status: <span className="font-semibold text-white">{status}</span>
              </div>

              {currentUser?.role === "ADMIN" && (
                <Link
                  href="/employees/create"
                  className="inline-flex items-center justify-center rounded-2xl bg-cyan-500 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400"
                >
                  Add Employee
                </Link>
              )}
            </div>
          </div>
        </header>

        <nav className="rounded-[1.75rem] border border-white/10 bg-slate-900/80 p-4 shadow-xl shadow-slate-950/20">
          <div className="grid gap-3 sm:grid-cols-3">
            {[
              { label: "All", value: "ALL" },
              { label: "Active", value: "ACTIVE" },
              { label: "Inactive", value: "INACTIVE" },
            ].map((item) => (
              <Link
                key={item.value}
                href={`/employees?status=${item.value}`}
                className={`rounded-2xl border px-4 py-3 text-center text-sm font-medium transition ${
                  status === item.value
                    ? "border-cyan-400 bg-cyan-500 text-slate-950 shadow-lg shadow-cyan-500/10"
                    : "border-slate-700 bg-slate-950/80 text-slate-300 hover:border-slate-500 hover:bg-slate-900"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </nav>

        <section className="rounded-[2rem] border border-white/10 bg-slate-900/80 p-6 shadow-2xl shadow-slate-950/30">
          <Suspense fallback={<div className="text-center text-slate-400">Loading Employees...</div>}>
            <EmployeeTable status={status} />
          </Suspense>
        </section>
      </div>
    </div>
  );
}
