import { Inter } from "next/font/google";
import Navbar from "./_components/navbar";

const inter = Inter({ subsets: ["latin"] });

interface ProtectedLayoutProps{
    children: React.ReactNode,
}

const ProtectedLayout = ({children} : ProtectedLayoutProps) => {
    return (
        <body className={inter.className}>
            <Navbar/>
            { children }
        </body>
    )
}

export default ProtectedLayout