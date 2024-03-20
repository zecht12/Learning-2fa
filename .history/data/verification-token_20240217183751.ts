import { db } from "@/lib/db";

import React from 'react'

const getVeri = async (email:string) => {
    try {
        const verificationToken = await db.verificationToken.findFirst({
            where: {email}
        });
        return verificationToken;
    } catch {
        return null;
    }
}

const VerificationTokenByEmail = async (token:string) => {
    try {
        const verificationToken = await db.verificationToken.findUnique({
            where: {token}
        });
        return verificationToken;
    } catch {
        return null;
    }
}

export default VerificationTokenByEmail