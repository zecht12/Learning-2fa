"use server";
import { db } from "@/lib/db";
import { getUserByEmail } from "@/data/user";
import { getVerificationTokenByToken } from "@/data/verification-token";

export const newVerification = async (token:string) =>{
    const existingToken = await getVerificationTokenByToken(token);
    if (!existingToken) {
        return {error:"Terjadi kesalahan  saat memproses permintaan verifikasi."};
    }
    const hasExpire = new Date(existingToken?.expire??"")< new Date();
    if (hasExpire) {
        return {error:"Token kadaluarsa. Silakan buat ulang tokennya."}
    }
    const existingUser = await getUserByEmail(e)
}