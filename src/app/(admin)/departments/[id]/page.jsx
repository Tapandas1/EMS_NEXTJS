import { notFound } from "next/navigation";
import { getDepartmentById } from "@/services/department.service";

export default async function DepartmentDetailsPage({ params }) {
  const { id } = await params;
  const department = await getDepartmentById(id);

  if (!department) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-slate-950 px-6 py-10 text-slate-100 sm:px-10">
      <div className="mx-auto max-w-5xl">
        <div className="mb-10 rounded-[2rem] border border-white/10 bg-slate-900/80 p-8 shadow-2xl shadow-slate-950/40 backdrop-blur-xl">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.32em] text-cyan-300/80">Department details</p>
              <h1 className="mt-3 text-4xl font-semibold text-white">{department.name}</h1>
              <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-400">
                A focused overview of this department’s identity and metadata. Use this page to confirm the department record and its core attributes.
              </p>
            </div>
            <div className="rounded-3xl border border-slate-700/80 bg-slate-950/90 px-5 py-4 text-sm text-slate-300">
              Department ID
              <p className="mt-3 text-2xl font-semibold text-white">{department.id}</p>
            </div>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.3fr_0.7fr]">
          <section className="rounded-[1.75rem] border border-white/10 bg-slate-900/90 p-8 shadow-xl shadow-slate-950/20">
            <div className="mb-6 flex items-center justify-between gap-4">
              <div>
                <h2 className="text-xl font-semibold text-white">Core information</h2>
                <p className="mt-2 text-sm text-slate-400">Key details for this department record.</p>
              </div>
              <span className="rounded-full bg-cyan-500/15 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-cyan-300">
                Active
              </span>
            </div>

            <div className="space-y-4 text-sm text-slate-300">
              <div className="rounded-3xl bg-slate-950/80 p-5">
                <p className="text-xs uppercase tracking-[0.24em] text-slate-500">Department name</p>
                <p className="mt-2 text-lg font-semibold text-white">{department.name}</p>
              </div>

              <div className="rounded-3xl bg-slate-950/80 p-5">
                <p className="text-xs uppercase tracking-[0.24em] text-slate-500">Record ID</p>
                <p className="mt-2 text-lg font-semibold text-white">{department.id}</p>
              </div>
            </div>
          </section>

          <aside className="rounded-[1.75rem] border border-white/10 bg-slate-900/90 p-8 shadow-xl shadow-slate-950/20">
            <h3 className="text-xl font-semibold text-white">Details at a glance</h3>
            <p className="mt-3 text-sm leading-7 text-slate-400">This summary panel highlights the current department record and keeps the interface easy to scan.</p>

            <div className="mt-7 space-y-4 text-slate-300">
              <div className="rounded-3xl bg-slate-950/80 p-4">
                <p className="text-xs uppercase tracking-[0.24em] text-slate-500">Created</p>
                <p className="mt-2 text-sm text-slate-200">Instant department lookup</p>
              </div>
              <div className="rounded-3xl bg-slate-950/80 p-4">
                <p className="text-xs uppercase tracking-[0.24em] text-slate-500">Usage</p>
                <p className="mt-2 text-sm text-slate-200">Works with employee assignment and reporting views.</p>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
