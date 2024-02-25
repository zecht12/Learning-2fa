"use client";

import Image from 'next/image';
import React from 'react'

const Navbar = () => {
    return (
        <nav className='flex flex-col items-center xl:justify-center gap-y-4 fixed h-max bottom-0 mt-auto xl:right-[2%] z-50 w-screen xl:w-16 top-0 xl:max-w-md xl:h-screen'>
            <div className='flex w-full xl:flex-col items-center justify-between xl:justify-center gap-y-10 px-4 md:px-40 xl:px-0 h-[80px] bg-white/10 xl:h-max py-8 backdrop-blur-sm text-3xl xl:text-xl xl:rounded-full'>
                <div className='w-full h-full flex items-center justify-start'>
                    <Image src="/next.svg" alt='logo' width={40} height={40}/>
                </div>
                <ul>
                    <li>Home</li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar