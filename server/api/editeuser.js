import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const updateUser = await prisma.user.update({
    where: {
      id: body.id,
    },
    data: {
      name: body.name,
      email: body.email,
      title: body.title,
    },
  });
  return updateUser;
});
