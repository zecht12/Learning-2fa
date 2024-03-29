import { Inter } from "next/font/google";
import Navbar from "./_components/navbar";
import { auth } from "@/auth";

interface ProtectedLayoutProps{
    children: React.ReactNode,
}

const ProtectedLayout = async ({children} : ProtectedLayoutProps) => {
    const session = await auth();
    return (
            <div>
                <Navbar/>
                { children }
            </div>
    )
}

export default ProtectedLayout