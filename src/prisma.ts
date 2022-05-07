import { PrismaClient } from "@prisma/client";

export const prisma = new PrismaClient({
  //quero que a cada operação realizada gere um log para ver as operações
  log: ["query"],
});
