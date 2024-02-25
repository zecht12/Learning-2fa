import { db } from "@/lib/db";

export const getTwoFactorTokenByEmail = async (token: sting) =>{
    try {
        const twoFactorToken = await db.twoFactorToken.findUnique({
            w
        })
    } catch {
        return null;
    }
}