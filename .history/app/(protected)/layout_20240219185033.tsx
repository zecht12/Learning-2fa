interface ProtectedLayoutProps{
    children: React.ReactNode,
}

const ProtectedLayout = ({children} : Pro) => {
    return (
        <body>
            { children }
        </body>
    )
}

export default ProtectedLayout