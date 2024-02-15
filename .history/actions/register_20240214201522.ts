"use server";

import * as z from "zod";
import { re } from "@/schemas";

export const register = async (values : z.infer<typeof LoginSchema>) => {
    const validatedField = LoginSchema.safeParse(values);

    if (!validatedField.success) {
        return{error: "Terjadi kesalahan!"}
    };
    return{success: "Berhasil login!"}
};