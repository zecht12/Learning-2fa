"use server";

import * as z from "zod";
import bcrypt from "bcryptjs";
import { db } from "@/lib/db";
import { update } from "@/auth";
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
    if (user.isOAuth) {
        values.email = undefined;
        values.password = undefined;
        values.newPassword = undefined;
        values.isTwoFactorEnabled = undefined;
    }
    if (values.email && values.email !== user.email) {
        const existingUser = await getUserByEmail(values?.email);
        if (existingUser && existingUser.id !== user.id) {
            return {error: "Email telah terpakai!"}
        }
        const verificationToken = await generateVerificationToken(values.email);
        await sendVerificationEmail(
            verificationToken.email??"",
            verificationToken.token??"",
        )
        return{success: "Konfirmasi email telah terkirim!"}
    }
    if (values.password && values.newPassword && dbUser.password) {
        const passwordMatch = await bcrypt.compare(values.password, dbUser.password);
        if (!passwordMatch) {
            return {error:"Password salah!"}
        }
        const hashedPassword = await bcrypt.hash(values.newPassword,10);
        values.password = hashedPassword;
        values.newPassword = undefined;
    }
    const updatedUser = await db.user.update({
        where: { id: dbUser.id },
        data: {
          ...values,
        }
      });
    
        update({
        user: {
            name: updatedUser.name,
            email: updatedUser.email,
            isTwoFactorEnabled: updatedUser.isTwoFactorEnabled,
            role: updatedUser.role,
        }
    });
    return{success:"Setting telah di update"}
}