import { db } from "@/lib/db";

import React from 'react'

econst getVerificationToken = async (email:string) => {
    try {
        const verificationToken = await db.verificationToken.findFirst({
            where: {email}
        });
        return verificationToken;
    } catch {
        return null;
    }
}

export const VerificationTokenByEmail = async (token:string) => {
    try {
        const verificationToken = await db.verificationToken.findUnique({
            where: {token}
        });
        return verificationToken;
    } catch {
        return null;
    }
}