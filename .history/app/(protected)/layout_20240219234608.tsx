import Navbar from "./_components/navbar";

interface ProtectedLayoutProps{
    children: React.ReactNode,
}

const ProtectedLayout = async ({children} : ProtectedLayoutProps) => {
    return (
            <div c>
                <Navbar/>
                { children }
            </div>
    )
}

export default ProtectedLayout