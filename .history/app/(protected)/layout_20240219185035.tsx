interface ProtectedLayoutProps{
    children: React.ReactNode,
}

const ProtectedLayout = ({children} : ProtectedLayoutProps) => {
    return (
        <body>
            { children }
        </body>
    )
}

export default ProtectedLayout