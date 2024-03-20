interface ProtectedLayoutProps

const ProtectedLayout = ({children}: Readonly<{ children: React.ReactNode; }>) => {
    return (
        <body>
            { children }
        </body>
    )
}

export default ProtectedLayout