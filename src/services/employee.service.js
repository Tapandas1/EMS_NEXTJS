import { prisma } from "@/lib/prisma";

// export async function getEmployees() {
//   return prisma.employee.findMany({
//     include: {
//       user: true,
//       department: true,
//     },
//     orderBy: {
//       createdAt: "desc",
//     },
//   });
// }

export async function getEmployees(
  status = "ALL"
) {
  const where =
    status !== "ALL"
      ? { status }
      : {};

  return prisma.employee.findMany({
    where,
    include: {
      user: true,
      department: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });
}

export async function getEmployeeById(id) {
  return prisma.employee.findUnique({
    where: {
      id,
    },
    include: {
      user: true,
      department: true,
    },
  });
}

export async function updateEmployee(
  id,
  data
) {
  return prisma.employee.update({
    where: { id },
    data,
  });
}

export async function deactivateEmployee(id) {
  return prisma.employee.update({
    where: {
      id,
    },
    data: {
      status: "INACTIVE",
    },
  });
}