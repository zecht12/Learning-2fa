import { getVerificationTokenByEmail } from "@/data/verification-token";
import { v4 as uuidv4 } from "uuid"
import { db } from "./db";

export const GenerateVerificationToken = async (email:string | null)=>{
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