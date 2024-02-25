const ProtectedLayout = ({children}: Readonly<{ children: React.ReactNode; }>) => {
    return (
        <div className={classN}>
            { children }
        </div>
    )
}

export default ProtectedLayout