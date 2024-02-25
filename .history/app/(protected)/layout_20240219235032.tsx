import Navbar from "./_components/navbar";

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