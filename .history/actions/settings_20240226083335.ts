"use server";

import * as z from "zod";
import bcrypt from "bcryptjs";
import { db } from "@/lib/db";
import { SettingsSchema } from "@/schemas";
import { getUserByEmail, getUserById } from "@/data/user";
import { currentUser } from "@/lib/auth";
import { generateVerificationToken } from "@/lib/tokens";
import { sendVerificationEmail } from "@/lib/mail";

export const settings = async (values: z.infer<typeof SettingsSchema>) => {
    const user = await currentUser();
    if (!user) {
        return {error:"Tidak terauthorisasi"}
    }
    const dbUser = await getUserById(user.id??"");
    if (!dbUser) {
        return {error:"Tidak terauthorisasi"}
    }
    await db.user.update({
        where
    })

}