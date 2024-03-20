const ProtectedLayout = ({children}: Readonly<{ children: React.ReactNode; }>) => {
    return (
        <div c>
            { children }
        </div>
    )
}

export default ProtectedLayout