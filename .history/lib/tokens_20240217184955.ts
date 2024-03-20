import { VerificationTokenByEmail } from "@/data/verification-token";
import { v4 as uuidv4 } from "uuid"
import db

export const GenerateVerificationToken= async (email:string)=>{
    const token = uuidv4();
    const expire = new Date(new Date().getTime()+ 3600 *1000);
    const existingToken = await VerificationTokenByEmail(email);

}