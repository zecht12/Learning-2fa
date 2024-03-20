import Navbar from "./_components/navbar";

const inter = Inter({ subsets: ["latin"] });

interface ProtectedLayoutProps{
    children: React.ReactNode,
}

const ProtectedLayout = async ({children}: Readonly<{children: React.ReactNode}>) => {
    return (
        <body className={inter.className}>
            <Navbar/>
            {children}
        </body>
    )
}

export default ProtectedLayout