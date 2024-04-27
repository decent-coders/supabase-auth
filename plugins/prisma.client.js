import { PrismaClient } from "@prisma/client";

export const prisma = new PrismaClient();

// Optional: Define middleware to make Prisma available throughout the app
export default defineNuxtPlugin(async (nuxtApp) => {
  nuxtApp.provide("prisma", prisma);
});
