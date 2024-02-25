import { Inter } from "next/font/google";
import { auth } from "@/auth";
import { SessionProvider } from "next-auth/react";
import Navbar from "@/components/shared/navbar";

const inter = Inter({ subsets: ["latin"] });

interface ProtectedLayoutProps{
    children: React.ReactNode,
}

const ProtectedLayout = async ({children} : ProtectedLayoutProps) => {
    const session = await auth();
    return (
        <SessionProvider session={session}>
            <body className={inter.className}>
                <Navbar/>
                { children }
            </body>
        </SessionProvider>
    )
}

export default ProtectedLayout