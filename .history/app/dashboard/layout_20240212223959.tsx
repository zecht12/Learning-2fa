import { Inter } from "next/font/google";
import "@/app";

const inter = Inter({ subsets: ["latin"] });

const DashboardLayout = ({ children }: any) => {
    return (
        <html lang='en'>
            <body className={inter.className}>
                {children}
            </body>
        </html>
    )
}

export default DashboardLayout