import { db } from "@/lib/db";

export const getTwoFactorConfirmationByUserId = async (userId: string)=>{
    try {
        const twoFactorConfirmation = await db.tw
    } catch {
        return null;
    }
}