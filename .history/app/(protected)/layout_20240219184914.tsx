import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const ProtectedLayout = ({children}: Readonly<{ children: React.ReactNode; }>) => {
    return (
        <body>
            { children }
        </body>
    )
}

export default ProtectedLayout