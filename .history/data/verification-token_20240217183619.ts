import { db } from "@/lib/db";

import React from 'react'

const VerificationTokenByEmail = async (email:string) => {
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