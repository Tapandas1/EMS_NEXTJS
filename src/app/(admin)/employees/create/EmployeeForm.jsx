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
      className="space-y-4 max-w-xl"
    >
      <div>
        <label>User</label>

        <select
          name="userId"
          className="border p-2 w-full"
        >
          <option value="">
            Select User
          </option>

          {users.map((user) => (
            <option
              key={user.id}
              value={user.id}
            >
              {user.name}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label>Department</label>

        <select
          name="departmentId"
          className="border p-2 w-full"
        >
          <option value="">
            Select Department
          </option>

          {departments.map((dept) => (
            <option
              key={dept.id}
              value={dept.id}
            >
              {dept.name}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label>Designation</label>

        <input
          type="text"
          name="designation"
          className="border p-2 w-full"
        />
      </div>

      <div>
        <label>Salary</label>

        <input
          type="number"
          name="salary"
          className="border p-2 w-full"
        />
      </div>

      <div>
        <label>Joining Date</label>

        <input
          type="date"
          name="joiningDate"
          className="border p-2 w-full"
        />
      </div>

      <div>
        <label>Profile Image URL</label>

        <input
          type="text"
          name="profileImage"
          className="border p-2 w-full"
        />
      </div>

      {state?.message && (
        <p className="text-red-500">
          {state.message}
        </p>
      )}

    <SubmitButton text="Create Employee" />
    </form>
  );
}