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

const SettingNavbar = () => {
    const pathname = usePathname();
    const settings = pathname === "/settings";
    const [color, setColor] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const user = useCurrentUser();
    const onClick = () => {
        logout();
    }

    useEffect (() => {
        const changeColor = () => {
            if(window.scrollY >= 20) {
                setColor(true);
            } else {
                setColor(false);
            }
        }

        window.addEventListener('scroll', changeColor);
        return() => {
            window.removeEventListener('scroll', changeColor);
        }
    },[]);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    }

    return (
        <div className=" fixed w-full shadow-xl shadow-slate-600 bg-transparent h-20 z-[100]">
            <div className='flex justify-between items-center w-full h-full px-6 2xl:px-16 '>
                <div className='flex items-center justify-start'>
                    {settings &&(
                        <Link href="/home">
                            <IoIosArrowRoundBack size={35} className="text-black hover:text-blue-600" />
                        </Link>
                    )}
                    {!settings && (
                        <Link href="/home" className='flex items-center gap-3'>
                            <Image src="/images/logo.jpg" alt="image" width={40} height={40} className='rounded-full' />
                            <p className={cn( "text-red-500 font-outline-1 md:text-2xl", font.className,)}>
                                TopGamers
                            </p>
                        </Link>
                    )}
                </div>
            </div>
        </div>
    )
}

export default SettingNavbar;
