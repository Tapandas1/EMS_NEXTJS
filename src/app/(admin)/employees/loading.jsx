export default function Loading() {
  return (
    <div className="flex min-h-[240px] items-center justify-center rounded-3xl bg-slate-900/95 p-8 text-center shadow-sm ring-1 ring-white/10">
      <div className="space-y-2">
        <div className="mx-auto h-10 w-10 animate-spin rounded-full border-4 border-slate-700 border-t-cyan-400" />
        <p className="text-sm text-slate-200">Loading employees...</p>
      </div>
    </div>
  );
}