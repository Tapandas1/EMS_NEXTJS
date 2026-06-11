import { prisma } from "@/lib/prisma";

export async function getUsersWithoutEmployee() {
  return prisma.user.findMany({
    where: {
      employee: null,
    },
    orderBy: {
      name: "asc",
    },
  });
}