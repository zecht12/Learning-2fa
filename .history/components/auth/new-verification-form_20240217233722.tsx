"use client"
import { CardWrapper } from "./card-wrapper"

export const NewVerificationForm = () => {
    return(
        <CardWrapper s headerLabel="Confirm your verification!" backButtonHref="/auth/login" backButtonLabel="Back to login">
            <div className="flex items-center justify-center w-full">

            </div>
        </CardWrapper>
    )
}