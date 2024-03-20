"use server";

import * as z from "zod";
import { RegisterSchema } from "@/schemas";
import bcrypt from "bcrypt";
import { db } from "@/lib/db";
import { getUserByEmail } from "@/data/user";
import { GenerateVerificationToken } from "@/lib/tokens";

export const register = async (values : z.infer<typeof RegisterSchema>) => {

    const validatedField = RegisterSchema.safeParse(values);
    if (!validatedField.success) {
        return{error: "Terjadi kesalahan!"}
    };
    const {email, password, name} = validatedField.data;
    const hashedPassword = await bcrypt.hash(password, 10);

    const exitingUser = await getUserByEmail(email);
    if (exitingUser) {
        return {error:  "Email telah terdaftar."};
    }
    await db.user.create({
        data:{
            name,
            email,
            password: hashedPassword,
        }
    })

    const verifi

    return{success: "User berhasil dibuat!"}
};