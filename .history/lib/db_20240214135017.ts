import { PrismaClient } from "@prisma/client";

declare glo

export const db = globalThis.prisma || new PrismaClient();

if (process.env.NODE_ENV !== "production") globalThis.prisma = db;