import { PrismaClient } from "@prisma/client";

export const db = globalThis.prisma || new PrismaClient();

if (condition) globalThis.prisma = db;