"use client"
import { CardWrapper } from "./card-wrapper"
import { BeatLoader } from "react-spinners"
import { useSearchParams } from "next/navigation"
import { useCallback, useEffect, useState } from "react"
import { newVerification } from "@/actions/new-verification"

export const NewVerificationForm = () => {
    const [error, setError] = useState<string | undefined>();
    const [success, setSuccess] = useState<string | undefined>();
    const searchParams = useSearchParams();
    const token = searchParams.get("token");
    const onSubmit = useCallback(() =>{
        if (!token){
            setError("Token menghilang. Silakan ulangi lagi.");
            return;
        }
        newVerification(token).then((data)=>{
            setSuccess(data.success);
            setError(data.error);
        }).;
    },[token])
    useEffect(()=>{
        onSubmit();
    },[onSubmit])
    return(
        <CardWrapper headerLabel="Confirm your verification!" backButtonHref="/auth/login" backButtonLabel="Back to login">
            <div className="flex items-center justify-center w-full">
                <BeatLoader/>
            </div>
        </CardWrapper>
    )
}