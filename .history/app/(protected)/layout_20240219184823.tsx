
const inter = Inter({ subsets: ["latin"] });

const ProtectedLayout = ({children}: Readonly<{ children: React.ReactNode; }>) => {
    return (
        <div className={className}>
            { children }
        </div>
    )
}

export default ProtectedLayout