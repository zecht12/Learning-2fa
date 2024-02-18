import { VerificationTokenByEmail } from "@/data/verification-token";
import { v4 as uuidv4 } from "uuid"
import { db } from "./db";

export const generateVerificationToken = async (email: string) => {
    const token = uuidv4();
    const expires = new Date(new Date().getTime() + 3600 * 1000);

    const existingToken = await VerificationTokenByEmail(email);

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
            expire: expires,
        }
    });

    return verficationToken;
};