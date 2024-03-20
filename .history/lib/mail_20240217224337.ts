import {Resend} from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendVerificationEmail = async(email:string, token:string) => {
    const confirmLink = `http://localhost:3000/auth/new-verification?token=${token}`;
    await resend.emails.send({
        from:"onboarding@resend.dev",
        to: email, 
        subject: 'Please verify your account',
        text: `Hello,\n\nYou are receiving this because you have requested the reset of your password for your Onboarding Account.\n\nPlease click on the following link,
        text: `Hello! Click on the following link to verify your account:\n${confirmLink}`,
        html:`<h1>Hello!</h1><p>Click on the following button to verify your account.</p><a href="${confirmLink}" target="_blank">Ver
        html:`<p>Hello!</p><br/>
              <p>Click on the following button to verify your account:</p>
    })
}