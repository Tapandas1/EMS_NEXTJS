import { prisma } from "@/lib/prisma";
import { cache } from "react";
// export async function getDepartments() {
//   return prisma.department.findMany({
//     orderBy: {
//       name: "asc",
//     },
//   });
// }
export const getDepartments = cache(
  async () => {
    return prisma.department.findMany({
      include: {
        _count: {
          select: {
            employees: true,
          },
        },
      },
      orderBy: {
        name: "asc",
      },
    });
  }
);

export async function getDepartmentById(id) {
  return prisma.department.findUnique({
    where: {
      id,
    },
    include: {
      employees: true,
    },
  });
}