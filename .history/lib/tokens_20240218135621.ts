import { getVerificationTokenByEmail } from "@/data/verification-token";
import { getPasswordResetTokenByEmail } from "@/data/password-reset-token";
import { v4 as uuidv4 } from "uuid"
import { db } from "./db";

export const generatePasswordResetToken = async (email: string) => {
    const token = uuidv4();
    const expire = new Date(new Date().getTime() + 3600 * 1000);

    const existingToken = await getPasswordResetTokenByEmail(email);

    if (existingToken) {
        await db.passwordResetToken.delete({
            where: { id: existingToken.id } 
        });
    }

    const passwordResetToken = await db.res
}

export const generateVerificationToken = async (email: string) => {
    const token = uuidv4();
    const expire = new Date(new Date().getTime() + 3600 * 1000);

    const existingToken = await getVerificationTokenByEmail(email);

    if (existingToken) {
        await db.verificationToken.delete({
            where: {
            id: existingToken.id,
            },
        });
    }

    const verficationToken = await db.verificationToken.create({
        data: {
            email,
            token,
            expire
        }
    });

    return verficationToken;
}