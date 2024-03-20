import React from 'react'
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const DashboardLayout = ({ children }: any) => {
    return (
        <html lang='en'>
            <body>
                {children}
            </body>
        </html>
    )
}

export default DashboardLayout