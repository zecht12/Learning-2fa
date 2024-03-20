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

const Navbar = () => {
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
        <div className={color ? "fixed w-full h-20 bg-slate-100 shadow-xl z-[100]" : " fixed w-full shadow-xl h-20 z-[100]"}>
            <div className='flex justify-between items-center w-full h-full px-6 2xl:px-16 '>
                <div className='flex items-center justify-start'>
                    {settings &&(
                        <Link href="/home">
                            <IoIosArrowRoundBack size={35} className={color?"text-black hover:text-blue-600": "text-slate-100 hover:text-blue-600"} />
                        </Link>
                    )}
                    {!settings && (
                        <Link href="/home">
                            <Image src="/next.svg" alt="image" width={35} height={35} />
                        </Link>
                    )}
                </div>
                <div className={color?'w- h-10 p-2 rounded-lg bg-black':'w-auto h-10 p-2 rounded-lg bg-slate-100'}>
                    <Avatar src={user?.image} />
                    <div className="relative">
                        <AiOutlineMenu size={25} onClick={toggleMenu} className={color?"text-slate-100 hover:text-blue-600 cursor-pointer": "text-black hover:text-blue-600 cursor-pointer"} />
                        {menuOpen && (
                            <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg z-10 flex justify-center items-center">
                                <Button asChild variant="link" size="sm">
                                    <button type="submit" onClick={onClick}>
                                        Sign Out
                                    </button>
                                </Button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar;
