import Navbar from "./_components/navbar";

interface ProtectedLayoutProps{
    children: React.ReactNode,
}

const ProtectedLayout = async ({children} : ProtectedLayoutProps) => {
    return (
            <div className="h-full w-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-800 to-zinc-900 pt-28">
                <Navbar/>
                { children }
            </div>
    )
}

export default ProtectedLayout