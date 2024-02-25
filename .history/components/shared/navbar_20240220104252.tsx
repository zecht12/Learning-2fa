"use client";

import Image from 'next/image';
import Link from 'next/link';
import { IoIosArrowRoundBack } from "react-icons/io";
import React, { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation';
import { AiOutlineMenu } from "react-icons/ai"

const Navbar = () => {
    const pathname = usePathname();
    const {}
    const settings = pathname === "/settings";
    const [color, setColor] = useState(false);

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
    },[])
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
                <div>
                    <AiOutlineMenu size={35} className={color?"text-black hover:text-blue-600": "text-slate-100 hover:text-blue-600"} onClick={handleNav}/>
                </div>
            </div>
        </div>
    )
}

export default Navbar