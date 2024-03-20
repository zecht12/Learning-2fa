import { db } from "@/lib/db";

export const getTwoFactorTokenByEmail = async (token: sting) =>{
    try {
        const twoFactorToken = await db.twoFactorToken.f
    } catch {
        return null;
    }
}