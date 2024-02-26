"use client";

import Image from 'next/image';
import Link from 'next/link';
import { IoIosArrowRoundBack } from "react-icons/io";
import React, { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation';
import { AiOutlineMenu } from "react-icons/ai"
import { useCurrentUser } from '@/hooks/use-current-user';
import { logout } from '@/actions/logout';
import { Button } from '../ui/button';
import Avatar from './avatar';
import { Poppins } from 'next/font/google';
import { cn } from '@/lib/utils';

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
                    {settings &&(
                        <Link href="/home">
                            <IoIosArrowRoundBack size={35} className="text-white hover:text-blue-600" />
                        </Link>
                    )}
                </div>
            </div>
        </div>
    )
}

export default EditSettingNavbar;
