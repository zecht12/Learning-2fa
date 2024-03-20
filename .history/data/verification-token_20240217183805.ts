import { db } from "@/lib/db";

import React from 'react'

const getVerificationToken = async (email:string) => {
    try {
        const verificationToken = await db.verificationToken.findFirst({
            where: {email}
        });
        return verificationToken;
    } catch {
        return null;
    }
}

exconst VerificationTokenByEmail = async (token:string) => {
    try {
        const verificationToken = await db.verificationToken.findUnique({
            where: {token}
        });
        return verificationToken;
    } catch {
        return null;
    }
}