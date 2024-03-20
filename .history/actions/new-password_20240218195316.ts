"use server"

import { getPasswordResetTokenByToken } from "@/data/password-reset-token"
import { NewPasswordSchema } from "@/schemas"
import * as z from "zod"

export const newPassword = async (values: z.infer<typeof NewPasswordSchema>, token?: string | null) =>{
    if (!token) {
        return {error:"Token tidak ditemukan"}
    }
    const validatedField = NewPasswordSchema.safeParse(values);
    if (!validatedField.success) {
        return{error:"Terjadi kesalahan"}
    }
    const {password} = validatedField.data;
    const existingToken = await getPasswordResetTokenByToken(token);
    if(!existingToken){
        return {error:"Token tidak tersedia"}
    }
    const hasExpire = new Date(existingToken.expire)< new Date();
    if (hasExpire) {
        return
    }
}