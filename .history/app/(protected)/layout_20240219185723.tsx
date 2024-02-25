interface ProtectedLayoutProps{
    children: React.ReactNode,
}

const ProtectedLayout = ({children} : ProtectedLayoutProps) => {
    return (
        <body>
            <Nav
            { children }
        </body>
    )
}

export default ProtectedLayout