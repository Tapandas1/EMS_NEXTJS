import RegisterForm from "./RegisterForm";

export default function RegisterPage() {
  return (
    <div className="min-h-screen bg-slate-950 px-4 py-10 text-slate-100">
      <div className="mx-auto w-full max-w-lg rounded-[32px] bg-slate-900/95 p-8 shadow-2xl shadow-slate-950/40 ring-1 ring-white/10">
        <div className="mb-8 space-y-3 text-center">
          <p className="text-sm font-medium uppercase tracking-[0.24em] text-cyan-300/90">
            Welcome
          </p>
          <h1 className="text-3xl font-semibold tracking-tight text-white">
            Register
          </h1>
          <p className="mx-auto max-w-md text-sm text-slate-400">
            Create your account to start managing employees and departments.
          </p>
        </div>

        <RegisterForm />
      </div>
    </div>
  );
}