"use client";

import { Dialog,DialogContent,DialogTrigger } from "../ui/dialog";
import { useRouter } from "next/navigation";

interface LoginButtonProps{
    children: React.ReactNode;
    mode?: "modal" | "redirect";
    asChild?: boolean;
}

export const LoginButton = ({children, mode="redirect", asChild}:LoginButtonProps) => {
    const router = useRouter();
    const onClick = ()=>{
        router.push("/auth/login")
    };
    if (mode === "modal") {
        return(
            <Dialog>
                <DialogTrigger asChild={asChild}>
                    {}
                </DialogTrigger>
            </Dialog>
        )
    }
    return(
        <span onClick={onClick} className="cursor-pointer">
            {children}
        </span>
    )
}