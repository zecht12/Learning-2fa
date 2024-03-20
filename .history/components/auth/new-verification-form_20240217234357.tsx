"use client"
import { CardWrapper } from "./card-wrapper"
import { BeatLoader } from "react-spinners"
import { useSearchParams } from "next/navigation"

export const NewVerificationForm = () => {
    const searchParams = useSearchParams();
    const toke = searchParams.et
    return(
        <CardWrapper headerLabel="Confirm your verification!" backButtonHref="/auth/login" backButtonLabel="Back to login">
            <div className="flex items-center justify-center w-full">
                <BeatLoader/>
            </div>
        </CardWrapper>
    )
}