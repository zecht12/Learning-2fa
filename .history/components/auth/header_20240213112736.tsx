import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";

const font = Poppins({
    subsets: ["latin"],
    weight:["600"]
});

interface HeaderProps{
    label:string
};

export const Header = ({label}:HeaderProps) => {
    return(
        <div className="w-full flex flex-col items-center justify-center gap-y-4">
            <h1 className={cn("text-3xl font-se"), font.className}>
                Auth 🔑 
            </h1>
        </div>
    )
};