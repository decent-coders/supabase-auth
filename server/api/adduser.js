import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const res = await prisma.user.create({
    data: {
      name: body.name,
      email: body.email,
      title: body.title,
    },
  });
  return res;
});
