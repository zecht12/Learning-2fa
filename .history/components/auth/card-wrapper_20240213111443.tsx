"use client";

import { Card } from "../ui/card";

interface CardWrapperProps{
    children: React.ReactNode,
    headerLabel: string,
    backButtonLabel:string,
    backButtonHref: string,
    showSocial: boolean
};

export const CardWrapper = ({children, backButtonHref, backButtonLabel,headerLabel,showSocial}:CardWrapperProps) => {
    return (
        <Card>
            
        </Card>
    )
}
