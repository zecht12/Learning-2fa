"use server";

import { ResetSchema } from "@/schemas";
import * as z from "zod";
import { getUserByEmail } from "@/data/user";

export const reset = async(values: z.infer<typeof ResetSchema>) =>{
    const validatedField = ResetSchema.safeParse(values);
    if (!validatedField.success) {
        return {error:"Email salah!"}
    }

    const {email} = validatedField.data;
    const existingUser =  await getUserByEmail(email);
    if (!existingUser) {
        return{error:"Email tidak dapat ditemukan!"}
    }

    return
}