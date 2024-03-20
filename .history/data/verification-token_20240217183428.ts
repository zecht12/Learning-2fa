import { db } from "@/lib/db";

import React from 'react'

const VerificationTokenByEmail = async (token:string) => {
    try {
        const verificationToken = await db.verificationToken.findUnique({
            where
        })
    } catch {
        return null;
    }
}

export default VerificationTokenByEmail