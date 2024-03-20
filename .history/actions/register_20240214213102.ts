"use server";

import * as z from "zod";
import { RegisterSchema } from "@/schemas";
import bcrypt from "bcrypt";
import db

export const register = async (values : z.infer<typeof RegisterSchema>) => {
    const validatedField = RegisterSchema.safeParse(values);

    if (!validatedField.success) {
        return{error: "Terjadi kesalahan!"}
    };
    const {email, password, name} = validatedField.data;
    const hashedPassword = await bcrypt.hash(password, 10);
    return{success: "Berhasil login!"}
};