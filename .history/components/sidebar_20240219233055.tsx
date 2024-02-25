'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { HiHome, HiUser, HiViewColumns, HiRectangleGroup, HiChatBubbleBottomCenterText, HiEnvelope } from 'react-icons/hi2';


export const navData = [
    { name: 'home', path: '/', icon: <HiHome /> },
    { name: 'about', path: '/about', icon: <HiUser /> },
    { name: 'services', path: '/services', icon: <HiRectangleGroup /> },
    { name: 'work', path: '/work', icon: <HiViewColumns /> },
    {
        name: 'contact',
        path: '/contact',
        icon: <HiEnvelope />,
    },
];

const Sidebar = () => {
    const pathname = usePathname();
    
    return(
        <nav className='flex flex-col items-center xl:justify-center gap-y-4 fixed h-max bottom-0 mt-auto xl:right-[2%] z-50 w-screen xl:w-16 top-0 xl:max-w-md xl:h-screen'>
            <div className='flex w-full xl:flex-col items-center justify-between xl:justify-center gap-y-10 px-4 md:px-40 xl:px-0 h-[80px] bg-white/10 xl:h-max py-8 backdrop-blur-sm text-3xl xl:text-xl xl:rounded-full'>
                <Link className="relative flex items-center hover:text-blue-600 group transition-all duration-300 dela" href="/" >
                    Home
                </Link>
            </div>
        </nav>
    )
};

export default Sidebar;
