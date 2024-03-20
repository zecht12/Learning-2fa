import { Inter } from "next/font/google";
import Navbar from "./_components/navbar";

const inter = Inter({ subsets: ["latin"] });

interface ProtectedLayoutProps{
    children: React.ReactNode,
}

const ProtectedLayout = ({children} : ProtectedLayoutProps) => {
    
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