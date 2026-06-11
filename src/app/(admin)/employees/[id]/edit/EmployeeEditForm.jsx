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
      className="space-y-4 max-w-xl"
    >
      <div>
        <label>
          Employee Code
        </label>

        <input
          value={
            employee.employeeCode
          }
          disabled
          className="border p-2 w-full bg-gray-100"
        />
      </div>

      <div>
        <label>
          Designation
        </label>

        <input
          name="designation"
          defaultValue={
            employee.designation
          }
          className="border p-2 w-full"
        />
      </div>

      <div>
        <label>Salary</label>

        <input
          type="number"
          name="salary"
          defaultValue={
            employee.salary
          }
          className="border p-2 w-full"
        />
      </div>

      <div>
        <label>
          Department
        </label>

        <select
          name="departmentId"
          defaultValue={
            employee.departmentId
          }
          className="border p-2 w-full"
        >
          {departments.map(
            (dept) => (
              <option
                key={dept.id}
                value={dept.id}
              >
                {dept.name}
              </option>
            )
          )}
        </select>
      </div>

      <div>
        <label>Status</label>

        <select
          name="status"
          defaultValue={
            employee.status
          }
          className="border p-2 w-full"
        >
          <option value="ACTIVE">
            ACTIVE
          </option>

          <option value="INACTIVE">
            INACTIVE
          </option>
        </select>
      </div>

      <div>
        <label>
          Joining Date
        </label>

        <input
          type="date"
          name="joiningDate"
          defaultValue={new Date(
            employee.joiningDate
          )
            .toISOString()
            .split("T")[0]}
          className="border p-2 w-full"
        />
      </div>

      <div>
        <label>
          Profile Image
        </label>

        <input
          type="text"
          name="profileImage"
          defaultValue={
            employee.profileImage
          }
          className="border p-2 w-full"
        />
      </div>

      {state?.message && (
        <p className="text-red-500">
          {state.message}
        </p>
      )}

      <SubmitButton
        text="Update Employee"
      />
    </form>
  );
}