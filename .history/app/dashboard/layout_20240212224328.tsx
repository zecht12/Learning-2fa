
import "@/app/globals.css";

const DashboardLayout = ({ children }: {children:React.ReactNode}) => {
    return (
        <html lang='en'>
            <body className={inter.className}>
                {children}
            </body>
        </html>
    )
}

export default DashboardLayout