'use client'
import Link from 'next/link';
import { IoMdHome } from "react-icons/io";

const Sidebar = () => {
    return(
        <nav className='flex flex-col items-center xl:justify-center gap-y-4 fixed h-max bottom-0 mt-auto xl:right-[2%] z-50 w-screen xl:w-16 top-0 xl:max-w-md xl:h-screen'>
            <div className='flex w-full xl:flex-col items-center justify-between xl:justify-center gap-y-10 px-4 md:px-40 xl:px-0 h-[80px] bg-white/10 xl:h-max py-8 backdrop-blur-sm text-3xl xl:text-xl xl:rounded-full'>
                <Link className="relative flex items-center group transition-all duration-300 dela" href="/" >
                    <IoMdHome size={} className='text-slate-100 hover:text-blue-600' />
                </Link>
            </div>
        </nav>
    )
};

export default Sidebar;
