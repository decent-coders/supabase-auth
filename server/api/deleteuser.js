import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const deleteUser = await prisma.user.delete({
    where: {
      id: body.id,
    },
  });
  return deleteUser;
});
