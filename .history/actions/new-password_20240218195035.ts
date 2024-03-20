"use server"

import { NewPasswordSchema } from "@/schemas"
import * as z from "zod"

export const newPassword = (values: z.infer<typeof NewPasswordSchema>, token?: string | null) =>{
    if (!token) {
        return {error:"Token tidak ditemukan"}
    }
    const validatedField = NewPasswordSchema.safeParse(values);
    if (!validatedField.success) {
        return{error:"Terjadi kesalahan"}
    }
    const {password} = validatedField.data;
    const existingToken = await getPasswo
}