const ProtectedLayout = ({children}: Readonly<{ children: React.ReactNode; }>) => {
    return (
        <div className={c}>
            { children }
        </div>
    )
}

export default ProtectedLayout