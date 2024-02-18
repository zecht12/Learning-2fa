"use client"
import { CardWrapper } from "./card-wrapper"
import { BeatLoader } from "react-spinners"
import { useSearchParams } from "next/navigation"
import { useCallback, useEffect } from "react"

export const NewVerificationForm = () => {
    const searchParams = useSearchParams();
    const token = searchParams.get("token");
    const onSubmit = useCallback(() =>{
        console.log(token)
    },[token])
    useEffect(()=>{
        if(token){
    },[])
    return(
        <CardWrapper headerLabel="Confirm your verification!" backButtonHref="/auth/login" backButtonLabel="Back to login">
            <div className="flex items-center justify-center w-full">
                <BeatLoader/>
            </div>
        </CardWrapper>
    )
}