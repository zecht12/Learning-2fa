import { db } from "@/lib/db";

import React from 'react'

const VerificationTokenByEmail = async (token:string) => {
    try {
        const verificationToken = await db.verificationToken.find
    } catch {
        return null;
    }
}

export default VerificationTokenByEmail