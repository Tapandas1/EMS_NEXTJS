"use server";

import bcrypt from "bcryptjs";
import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";

export async function registerUser(
  prevState,
  formData
) {
  try {
    const {
      name,
      email,
      password,
    } = Object.fromEntries(
      formData.entries()
    );

    if (!name || !email || !password) {
      return {
        success: false,
        message: "All fields are required",
      };
    }

    const existingUser =
      await prisma.user.findUnique({
        where: {
          email,
        },
      });

    if (existingUser) {
      return {
        success: false,
        message:
          "User already exists with this email",
      };
    }

    const hashedPassword =
      await bcrypt.hash(password, 10);

    await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
        role: "USER",
      },
    });

  } catch (error) {
    return {
      success: false,
      message: error.message,
    };
  }

  redirect("/login");
}