import Image from "next/image";

const stats = [
  { value: "250+", label: "Employees" },
  { value: "18", label: "Departments" },
  { value: "98%", label: "Team retention" },
];

const highlights = [
  {
    title: "Centralized employee profiles",
    description: "Quickly browse skills, attendance, leave status, and contact details in one unified dashboard.",
  },
  {
    title: "Department planning",
    description: "Organize teams, track headcount, and review department performance with easy-to-read cards.",
  },
  {
    title: "Actionable insights",
    description: "Use smart reports to manage growth, spot staffing gaps, and keep your people operations running smoothly.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <div className="relative overflow-hidden">
        <div className="absolute inset-x-0 top-0 h-72 bg-gradient-to-b from-cyan-500/20 via-transparent to-transparent" />
        <div className="relative mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
          <div className="grid items-center gap-16 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="max-w-2xl">
              <p className="inline-flex rounded-full border border-cyan-400/30 bg-cyan-500/10 px-4 py-1 text-sm font-medium text-cyan-300">
                Employee management reimagined
              </p>
              <h1 className="mt-8 text-5xl font-semibold tracking-tight text-white sm:text-6xl">
                Run your people operations with clarity and speed.
              </h1>
              <p className="mt-6 text-lg leading-8 text-slate-300">
                Manage employees, review departments, approve requests, and keep everyone aligned with a modern workspace built for teams.
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <a href="/login" className="inline-flex items-center justify-center rounded-full bg-cyan-500 px-7 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400">
                  Sign in
                </a>
                <a href="/user/register" className="inline-flex items-center justify-center rounded-full border border-slate-700 bg-slate-900/90 px-7 py-3 text-sm font-semibold text-white transition hover:border-slate-500">
                  Create account
                </a>
              </div>

              <div className="mt-12 grid gap-4 sm:grid-cols-3">
                {stats.map((item) => (
                  <div key={item.label} className="rounded-3xl border border-white/10 bg-slate-900/80 px-5 py-6 shadow-xl shadow-cyan-500/10">
                    <p className="text-3xl font-semibold text-white">{item.value}</p>
                    <p className="mt-2 text-sm text-slate-400">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-2xl">
              <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900/90 shadow-2xl shadow-slate-950/40">
                <div className="pointer-events-none absolute inset-x-0 top-0 h-56 bg-gradient-to-b from-cyan-400/15 to-transparent" />
                <Image
                  src="/hero-illustration.svg"
                  width={880}
                  height={640}
                  alt="Employee management illustration"
                  className="h-auto w-full"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="border-t border-white/10 bg-slate-950/95">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-3">
            {highlights.map((item) => (
              <div key={item.title} className="rounded-3xl border border-white/10 bg-slate-900/80 p-8 shadow-xl shadow-slate-950/20">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-500/10 text-cyan-300">
                  <span className="text-xl">✓</span>
                </div>
                <h2 className="text-xl font-semibold text-white">{item.title}</h2>
                <p className="mt-3 text-sm leading-6 text-slate-400">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
