import { Inter } from "next/font/google";
import Navbar from "./_components/navbar";
import { auth } from "@/auth";
import { SessionProvider } from "next-auth/react";

const inter = Inter({ subsets: ["latin"] });

interface ProtectedLayoutProps{
    children: React.ReactNode,
}

const ProtectedLayout = async ({children} : ProtectedLayoutProps) => {
    const session = await auth();
    return (
        <SessionProvider session={session}>
            <body className={inter.className,"p"}>
                <Navbar/>
                { children }
            </body>
        </SessionProvider>
    )
}

export default ProtectedLayout