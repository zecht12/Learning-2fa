"use client";

import Link from 'next/link';
import { IoIosArrowRoundBack } from "react-icons/io";
import React from 'react'
import { usePathname } from 'next/navigation';
import { Poppins } from 'next/font/google';

const font = Poppins({
    subsets: ["latin"],
    weight: ["600"]
});

const EditSettingNavbar = () => {
    const pathname = usePathname();
    const settings = pathname === "/settings";

    return (
        <div className=" fixed w-full bg-transparent h-20 z-[100]">
            <div className='flex justify-between items-center w-full h-full px-6 2xl:px-16 '>
                <div className='flex items-center justify-start'>
                    <Link href="/home">
                        <IoIosArrowRoundBack size={35} className="text-white hover:text-blue-600" />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default EditSettingNavbar;
