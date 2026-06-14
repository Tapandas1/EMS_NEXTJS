"use client";

import { useActionState } from "react";
import {createEmployee}  from "./action";
import SubmitButton from "@/components/SubmitButton";

const initialState = {
  success: false,
  message: "",
};

export default function EmployeeForm({
  users,
  departments,
}) {
  const [state, formAction] =
    useActionState(
      createEmployee,
      initialState
    );

  return (
    <form
      action={formAction}
      className="space-y-6 max-w-xl mx-auto rounded-3xl bg-slate-900/95 p-6 shadow-2xl shadow-slate-950/30 ring-1 ring-white/10"
    >
      <div className="space-y-2">
        <label className="block text-sm font-medium text-slate-200">
          User
        </label>

        <select
          name="userId"
          className="w-full rounded-2xl border border-slate-700 bg-slate-950/90 px-4 py-3 text-sm text-slate-100 outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
        >
          <option value="">Select User</option>

          {users.map((user) => (
            <option key={user.id} value={user.id}>
              {user.name}
            </option>
          ))}
        </select>
      </div>

      <div className="space-y-2">
        <label className="block text-sm font-medium text-slate-200">
          Department
        </label>

        <select
          name="departmentId"
          className="w-full rounded-2xl border border-slate-700 bg-slate-950/90 px-4 py-3 text-sm text-slate-100 outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
        >
          <option value="">Select Department</option>

          {departments.map((dept) => (
            <option key={dept.id} value={dept.id}>
              {dept.name}
            </option>
          ))}
        </select>
      </div>

      <div className="space-y-2">
        <label className="block text-sm font-medium text-slate-200">
          Designation
        </label>

        <input
          type="text"
          name="designation"
          className="w-full rounded-2xl border border-slate-700 bg-slate-950/90 px-4 py-3 text-sm text-slate-100 outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
        />
      </div>

      <div className="space-y-2">
        <label className="block text-sm font-medium text-slate-200">
          Salary
        </label>

        <input
          type="number"
          name="salary"
          className="w-full rounded-2xl border border-slate-700 bg-slate-950/90 px-4 py-3 text-sm text-slate-100 outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
        />
      </div>

      <div className="space-y-2">
        <label className="block text-sm font-medium text-slate-200">
          Joining Date
        </label>

        <input
          type="date"
          name="joiningDate"
          className="w-full rounded-2xl border border-slate-700 bg-slate-950/90 px-4 py-3 text-sm text-slate-100 outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
        />
      </div>

      <div className="space-y-2">
        <label className="block text-sm font-medium text-slate-200">
          Profile Image URL
        </label>

        <input
          type="text"
          name="profileImage"
          className="w-full rounded-2xl border border-slate-700 bg-slate-950/90 px-4 py-3 text-sm text-slate-100 outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
        />
      </div>

      {state?.message && (
        <p className="text-sm text-rose-300">
          {state.message}
        </p>
      )}

      <SubmitButton text="Create Employee" />
    </form>
  );
}