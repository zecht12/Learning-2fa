import { db } from "@/lib/db";

import React from 'react'

const VerificationTokenByEmail = async (token:string) => {
const user = await db.user.update({
}

export default VerificationTokenByEmail