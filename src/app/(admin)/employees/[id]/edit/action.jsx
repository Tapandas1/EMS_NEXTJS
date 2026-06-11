"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { getCurrentUser } from "@/lib/current-user";

export async function updateEmployee(id, prevState, formData) {
  try {
   const currentUser = await getCurrentUser();

  if (!currentUser || currentUser.role !== "ADMIN") {
    redirect("/unauthorized");
  } 
    const {
      designation,
      salary,
      departmentId,
      status,
      joiningDate,
      profileImage,
    } = Object.fromEntries(formData.entries());

    await prisma.employee.update({
      where: {
        id,
      },
      data: {
        designation,
        salary,
        departmentId,
        status,
        joiningDate: new Date(joiningDate),
        profileImage,
      },
    });

    revalidatePath("/employees");
    revalidatePath(`/employees/${id}`);
  } catch (error) {
    return {
      success: false,
      message: error.message,
    };
  }

  redirect(`/employees/${id}`);
}
