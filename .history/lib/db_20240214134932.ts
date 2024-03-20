import { PrismaClient } from "@prisma/client";

export const db = globalThis.prisma || new PrismaClient();

if (proc) globalThis.prisma = db;