import { db } from "@/lib/db";

export const getPasswordResetTokenByEmail = async (token:string) =>{
    try {
        const passwordToken = await db.passwordResetToken.get(token);
    } catch {
        return null;
    }
}