import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { generateEmpCode } from "@/lib/employeecode";

export async function POST(req) {
  try {
    const body = await req.json();

    const {
      userId,
      departmentId,
      designation,
      salary,
      joiningDate,
      profileImage,
    } = body;

    // 1. Validation (IMPORTANT because userId is mandatory)
    if (!userId || !departmentId || !designation || !salary || !joiningDate) {
      return NextResponse.json(
        { message: "Missing required fields" },
        { status: 400 }
      );
    }

    // 2. Check if employee already exists for user (1–1 relation)
    const existingEmployee = await prisma.employee.findUnique({
      where: { userId },
    });

    if (existingEmployee) {
      return NextResponse.json(
        { message: "Employee already exists for this user" },
        { status: 400 }
      );
    }

    // 3. Generate employee code
    const lastEmployee = await prisma.employee.findFirst({
      orderBy: { createdAt: "desc" },
    });

    const employeeCode = generateEmpCode(lastEmployee?.employeeCode);

    // 4. Create employee
    const employee = await prisma.employee.create({
      data: {
        employeeCode,
        designation,
        salary, // Prisma handles Decimal automatically if string/number
        joiningDate: new Date(joiningDate),
        profileImage,
        userId,
        departmentId,
      },
    });

    return NextResponse.json({
      message: "Employee created successfully",
      employee,
    });
  } catch (error) {
    return NextResponse.json(
      { message: "Server error", error: error.message },
      { status: 500 }
    );
  }
}