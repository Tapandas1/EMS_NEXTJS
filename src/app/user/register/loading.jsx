export default function Loading() {
  return (
    <div className="flex min-h-[240px] items-center justify-center rounded-3xl bg-slate-50 p-10 text-center shadow-sm ring-1 ring-slate-200">
      <div className="space-y-3">
        <div className="mx-auto h-10 w-10 animate-spin rounded-full border-4 border-slate-300 border-t-sky-500" />
        <p className="text-sm text-slate-600">Loading Registration Page...</p>
      </div>
    </div>
  );
}