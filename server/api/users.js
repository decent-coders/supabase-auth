import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  // const page = event.query?.page ? parseInt(event.query.page) : 1;
  const query = getQuery(event);
  // const page = parseInt(query.page) || 1;
  // const pageSize = 5;
  const skip = parseInt(query.skip) || 0;
  const [count, users] = await prisma.$transaction([
    prisma.user.count(),
    prisma.user.findMany({
      skip: skip,
      take: 8,
      orderBy: { id: "desc" },
    }),
  ]);

  return { count, users };
});
//   const page = parseInt(query.page) || 1;
