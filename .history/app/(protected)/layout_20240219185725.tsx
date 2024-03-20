interface ProtectedLayoutProps{
    children: React.ReactNode,
}

const ProtectedLayout = ({children} : ProtectedLayoutProps) => {
    return (
        <body>
            <Navbar/>
            { children }
        </body>
    )
}

export default ProtectedLayout