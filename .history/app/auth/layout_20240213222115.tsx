const AuthLayout = ({children}:{children: React.ReactNode}) => {
    return (
        <div className="h-full flex items-center justify-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-600 to-zinc-900">
            {children}
        </div>
    )
}

export default AuthLayout