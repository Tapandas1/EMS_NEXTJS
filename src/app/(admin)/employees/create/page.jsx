import { getUsersWithoutEmployee } from "@/services/user.service";
import { getDepartments } from "@/services/department.service";
import EmployeeForm from "./EmployeeForm";
import { redirect } from "next/navigation";
import { getCurrentUser } from "@/lib/current-user";

export default async function CreateEmployeePage() {
   const currentUser = await getCurrentUser();

  if (!currentUser || currentUser.role !== "ADMIN") {
    redirect("/unauthorized");
  }
  const users = await getUsersWithoutEmployee();
  const departments = await getDepartments();

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">
        Create Employee
      </h1>

      <EmployeeForm
        users={users}
        departments={departments}
      />
    </div>
  );
}