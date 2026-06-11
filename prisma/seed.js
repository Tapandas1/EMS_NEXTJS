const { PrismaClient, Role } = require("@prisma/client");
const bcrypt = require("bcryptjs");

const prisma = new PrismaClient();

async function main() {
  const departments = [
    { name: "IT" },
    { name: "HR" },
    { name: "Finance" },
    { name: "Operations" },
  ];

  for (const department of departments) {
    await prisma.department.upsert({
      where: {
        name: department.name,
      },
      update: {},
      create: department,
    });
  }

  const hashedPassword = await bcrypt.hash("admin123", 10);

  await prisma.user.upsert({
    where: {
      email: "admin@ems.com",
    },
    update: {},
    create: {
      name: "System Admin",
      email: "admin@ems.com",
      password: hashedPassword,
      role: Role.ADMIN,
    },
  });

  console.log("Seed completed successfully");
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });