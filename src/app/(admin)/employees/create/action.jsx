"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { generateEmpCode } from "@/lib/employeecode";
import { getCurrentUser } from "@/lib/current-user";

export async function createEmployee(prevState, formData) {
  try {
    const currentUser = await getCurrentUser();

if (!currentUser || currentUser.role !== "ADMIN") {
  throw new Error("Unauthorized");
}
    const {
      userId,
      departmentId,
      designation,
      salary,
      joiningDate,
      profileImage,
    } = Object.fromEntries(formData.entries());

    if (!userId || !departmentId || !designation || !salary || !joiningDate) {
      return {
        success: false,
        message: "All required fields must be filled",
      };
    }

    const lastEmployee = await prisma.employee.findFirst({
      orderBy: {
        createdAt: "desc",
      },
    });

    const employeeCode = generateEmpCode(lastEmployee?.employeeCode);

    await prisma.employee.create({
      data: {
        employeeCode,
        designation,
        salary,
        joiningDate: new Date(joiningDate),
        profileImage,
        userId,
        departmentId,
      },
    });

    revalidatePath("/employees");
  } catch (error) {
    return {
      success: false,
      message: error.message,
    };
  }

  redirect("/employees");
}
