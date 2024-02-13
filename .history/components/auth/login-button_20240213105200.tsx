"use client";
import use

interface LoginButtonProps{
    children: React.ReactNode;
    mode?: "modal" | "redirect";
    asChild?: boolean;
}

export const LoginButton = ({children, mode="redirect", asChild}:LoginButtonProps) => {
    const onClick = ()=>{
        console.log("success login")
    };
    if (mode === "modal") {
        return(
            <span>

            </span>
        )
    }
    return(
        <span onClick={onClick} className="cursor-pointer">
            {children}
        </span>
    )
}