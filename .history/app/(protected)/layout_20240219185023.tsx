interface ProtectedLayoutProps{
    children: React.ReactNode,
}

const ProtectedLayout = ({children}) => {
    return (
        <body>
            { children }
        </body>
    )
}

export default ProtectedLayout