import { Inter } from "next/font/google";
import <globals className="css"></globals>

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