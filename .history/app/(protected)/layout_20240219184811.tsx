const ProtectedLayout = ({children}: Readonly<{ children: React.ReactNode; }>) => {
    return (
        <div className="">
            { children }
        </div>
    )
}

export default ProtectedLayout