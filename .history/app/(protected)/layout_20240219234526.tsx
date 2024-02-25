import { Inter } from "next/font/google";
import Navbar from "./_components/navbar";
import { auth } from "@/auth";

interface ProtectedLayoutProps{
    children: React.ReactNode,
}

const ProtectedLayout = async ({children} : ProtectedLayoutProps) => {

    return (
            <div>
                <Navbar/>
                { children }
            </div>
    )
}

export default ProtectedLayout