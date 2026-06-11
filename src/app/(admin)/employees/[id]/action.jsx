"use server";

import { deactivateEmployee } from "@/services/employee.service";
import { getCurrentUser } from "@/lib/current-user";

import { revalidatePath } from "next/cache";

import { redirect } from "next/navigation";

export async function deactivateEmployeeAction(id) {
  const currentUser = await getCurrentUser();

  if (!currentUser || currentUser.role !== "ADMIN") {
    throw new Error("Unauthorized");
  }
  await deactivateEmployee(id);

  revalidatePath("/employees");

  redirect("/employees");
}
