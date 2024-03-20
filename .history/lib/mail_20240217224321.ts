import {Resend} from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendVerificationEmail = async(email:string, token:string) => {
    const confirmLink = `http://localhost:3000/auth/new-verification?token=${token}`;
    await resend.emails.send({
        from:"onboarding@resend.dev",
        to: email, 
        subject: 'Please verify your account',
        text: `Hello,\n\nYou are receiving this because you have requested the reset of your password for your Onboarding Account.\n\nPlease click on the following link,
    })
}