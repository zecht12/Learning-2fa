"use server";

import * as z from "zod";
import { LoginSchema } from "@/schemas";

export const login = async (values : z.infer<typeof LoginSchema>) => {
    const validatedField = LoginSchema.safeParse(values);

    if (!validatedField.success) {
        return{error: "Terjadi kesalahan!"}
    };
    const {email, password}
};