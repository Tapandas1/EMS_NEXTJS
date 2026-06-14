"use client";

import { useActionState } from "react";
import { updateEmployee } from "./action";
import SubmitButton from "@/components/SubmitButton";

const initialState = {
  success: false,
  message: "",
};

export default function EmployeeEditForm({
  employee,
  departments,
}) {
  const updateAction =
    updateEmployee.bind(
      null,
      employee.id
    );

  const [state, formAction] =
    useActionState(
      updateAction,
      initialState
    );

  return (
    <form
      action={formAction}
      className="space-y-6 max-w-xl mx-auto rounded-3xl bg-slate-900/95 p-6 shadow-2xl shadow-slate-950/30 ring-1 ring-white/10"
    >
      <div className="space-y-2">
        <label className="block text-sm font-medium text-slate-200">
          Employee Code
        </label>

        <input
          value={employee.employeeCode}
          disabled
          className="w-full rounded-2xl border border-slate-700 bg-slate-950/90 px-4 py-3 text-sm text-slate-100 outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
        />
      </div>

      <div className="space-y-2">
        <label className="block text-sm font-medium text-slate-200">
          Designation
        </label>

        <input
          name="designation"
          defaultValue={employee.designation}
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
          defaultValue={employee.salary}
          className="w-full rounded-2xl border border-slate-700 bg-slate-950/90 px-4 py-3 text-sm text-slate-100 outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
        />
      </div>

      <div className="space-y-2">
        <label className="block text-sm font-medium text-slate-200">
          Department
        </label>

        <select
          name="departmentId"
          defaultValue={employee.departmentId}
          className="w-full rounded-2xl border border-slate-700 bg-slate-950/90 px-4 py-3 text-sm text-slate-100 outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
        >
          {departments.map((dept) => (
            <option key={dept.id} value={dept.id}>
              {dept.name}
            </option>
          ))}
        </select>
      </div>

      <div className="space-y-2">
        <label className="block text-sm font-medium text-slate-200">
          Status
        </label>

        <select
          name="status"
          defaultValue={employee.status}
          className="w-full rounded-2xl border border-slate-700 bg-slate-950/90 px-4 py-3 text-sm text-slate-100 outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
        >
          <option value="ACTIVE">ACTIVE</option>
          <option value="INACTIVE">INACTIVE</option>
        </select>
      </div>

      <div className="space-y-2">
        <label className="block text-sm font-medium text-slate-200">
          Joining Date
        </label>

        <input
          type="date"
          name="joiningDate"
          defaultValue={new Date(employee.joiningDate).toISOString().split("T")[0]}
          className="w-full rounded-2xl border border-slate-700 bg-slate-950/90 px-4 py-3 text-sm text-slate-100 outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
        />
      </div>

      <div className="space-y-2">
        <label className="block text-sm font-medium text-slate-200">
          Profile Image
        </label>

        <input
          type="text"
          name="profileImage"
          defaultValue={employee.profileImage}
          className="w-full rounded-2xl border border-slate-700 bg-slate-950/90 px-4 py-3 text-sm text-slate-100 outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
        />
      </div>

      {state?.message && (
        <p className="text-sm text-rose-300">
          {state.message}
        </p>
      )}

      <SubmitButton text="Update Employee" />
    </form>
  );
}