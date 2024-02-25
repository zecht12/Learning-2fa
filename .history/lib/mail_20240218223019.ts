import {Resend} from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendTwoFactorEmail = async (
    email: string, 
    token: string
) => {
    await resend.emails.send({
        from: "onboarding@resend.dev",
        to: email,
        subject: "2FA code",
        html: `<p>Here your 2FA code: ${}</p>`
    });
}

export const sendPasswordResetEmail = async (
    email: string, 
    token: string
    ) => {
    const confirmLink = `http://localhost:3000/auth/new-password?token=${token}`;
    await resend.emails.send({
        from: "onboarding@resend.dev",
        to: email,
        subject: "Reset your password",
        html: `<p>Click <a href="${confirmLink}">here</a> to confirm email.</p>`
    });
}

export const sendVerificationEmail = async (
    email: string, 
    token: string
    ) => {
    const confirmLink = `http://localhost:3000/auth/new-verification?token=${token}`;
    await resend.emails.send({
        from: "onboarding@resend.dev",
        to: email,
        subject: "Confirm your email",
        html: `<p>Click <a href="${confirmLink}">here</a> to confirm email.</p>`
    });
};