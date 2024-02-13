"use client";
interface CardWrapperProps{
    children: React.ReactNode,
    headerLabel: string,
    backButtonLabel:string,
    backButtonHref: string,
    showSocial: boolean
};

export const CardWrapper = ({children, backButtonHrefbackButtonLabel,headerLabel,showSocial}:CardWrapperProps) => {
    return (
        <div>CardWrapper</div>
    )
}
