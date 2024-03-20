import { db } from "@/lib/db";

import React from 'react'

const VerificationTokenByEmail = async (email:string) => {
    try {
        const verificationToken = await db.verificationToken.findUnique({
            where: {e}
        });
        return verificationToken;
    } catch {
        return null;
    }
}

export default VerificationTokenByEmail