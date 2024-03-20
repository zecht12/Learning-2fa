import { Inter } from "next/font/google";
import Navbar from "./_components/navbar";

const inter = Inter({ subsets: ["latin"] });

interface ProtectedLayoutProps{
    children: React.ReactNode,
}

const ProtectedLayout = async ({children}: Readonly<{children: React.ReactNode}>) => {
    return (
        <div className={inter.className}>
            <Navbar/>
            {children}
        </div>
    )
}

export default ProtectedLayout