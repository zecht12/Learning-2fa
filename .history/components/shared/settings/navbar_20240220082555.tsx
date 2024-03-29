"use client";

import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import { IoIosArrowRoundBack } from "react-icons/io";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import React, { useEffect, useState } from 'react'

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const [color, setColor] = useState(false)

    const handleNav = () => {
        setNav(!nav)
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
    },[])
    return (
        <div className={color ? "fixed w-full h-20 bg-slate-100 shadow-xl z-[100]" : " fixed w-full shadow-xl h-20 z-[100]"}>
            <div className='flex justify-between items-center w-full h-full px-6 2xl:px-16 '>
                <Link href="/">
                    <IoIosArrowRoundBack size={35} className={color?"text-black hover:text-blue-600": "text-slate-100 hover:text-blue-600"} />
                </Link>
            </div>
        </div>
    )
}

export default Navbar