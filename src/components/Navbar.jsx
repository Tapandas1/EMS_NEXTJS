import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="border-b border-white/10 bg-slate-950/95 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-4">
          <Link href="/" className="text-lg font-semibold tracking-tight text-white">
            EmployeeMS
          </Link>
          <div className="hidden items-center gap-3 text-sm text-slate-300 sm:flex">
            <Link href="/" className="transition hover:text-white">
              Home
            </Link>
            <Link href="/dashboard" className="transition hover:text-white">
              Dashboard
            </Link>
            <Link href="/employees" className="transition hover:text-white">
              Employees
            </Link>
            <Link href="/departments" className="transition hover:text-white">
              Departments
            </Link>
          </div>
        </div>

        <div className="hidden items-center gap-3 sm:flex">
          <Link
            href="/login"
            className="rounded-full border border-slate-700 bg-slate-900/90 px-4 py-2 text-sm font-semibold text-white transition hover:border-slate-500"
          >
            Login
          </Link>
          <Link
            href="/user/register"
            className="inline-flex items-center justify-center rounded-full bg-cyan-500 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400"
          >
            Register
          </Link>
        </div>
      </div>
    </nav>
  );
}
