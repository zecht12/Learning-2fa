"use client";

import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
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
        <nav className='flex flex-col items-center xl:justify-center gap-y-4 fixed h-max bottom-0 mt-auto xl:right-[2%] z-50 w-screen xl:w-16 top-0 xl:max-w-md xl:h-screen'>
            <div className='flex w-full xl:flex-col items-center justify-between xl:justify-center gap-y-10 px-4 md:px-40 xl:px-0 h-[80px] bg-white/10 xl:h-max py-8 backdrop-blur-sm text-3xl xl:text-xl xl:rounded-full'>
                <div className='w-full h-full flex items-center justify-start'>
                    <Button asChild>
                        <Link href="/">

                        </Link>
                    </Button>
                </div>
                <ul>
                    <Link href="/" className='scroll-smooth' scroll={false}>
                        <li className={color? 'ml-10 text-base uppercase text-black  hover:text-blue-600' : 'ml-10 text-base uppercase text-slate-100  hover:text-blue-600' }>Home</li>
                    </Link>
                </ul>
            </div>
        </div>
    )
}

export default Navbar