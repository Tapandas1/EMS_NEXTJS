"use client";

import { deactivateEmployeeAction } from "./action";

export default function DeactivateEmployee({ employeeId }) {
  const action = deactivateEmployeeAction.bind(null, employeeId);

  return (
    <form action={action}>
      <button type="submit" className="bg-red-500 text-white px-4 py-2 rounded">
        Deactivate Employee
      </button>
    </form>
  );
}
