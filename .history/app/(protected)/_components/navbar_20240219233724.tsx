"use client";

import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import { IoIosArrowRoundBack } from "react-icons/io";
import { AiOutlineMenu } from "react-icons/ai";
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
                <div className='w-full h-full flex items-center justify-start'>
                    <Link href="/">
                        <IoIosArrowRoundBack size={35} className={color?"text-black hover:text-blue-600": "text-slate-100 hover:text-blue-600"} />
                    </Link>
                </div>
                <div onClick={handleNav}>
                    <AiOutlineMenu size={25} className='text-black'/>
                </div>
            </div>
            <div className={nav ? 'fixed md:hidden  left-0 top-0 w-full h-screen bg-[#94b4b1]/70' : "" }>
            <div className={nav ? 'fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen p-10 ease-in duration-500 bg-[#94b4b1]' : "fixed left-[-100%] h-screen top-0 p-10 ease-in duration-500"}>
                <div>
                    <div className='flex w-full  items-center justify-between'>
                        <Image src='' alt='' width='65' height='35'  />
                        <div onClick={handleNav} className='rounded-full bg-slate-100 shadow-lg shadow-[#94b4b1] p-3 cursor-pointer'>
                            <AiOutlineClose />
                        </div>
                    </div>
                </div>
                <div className='py-4 flex flex-col'>
                    <ul>
                        <Link href='#Profile' className='scroll-smooth' scroll={false}>
                            <li className='ml-10 pt-8 text-base uppercase text-black hover:text-blue-600'>home</li>
                        </Link>
                        <Link href='#Profile' className='scroll-smooth' scroll={false}>
                            <li className='ml-10 pt-10 text-base uppercase text-black hover:text-blue-600'>skill</li>
                        </Link>
                        <Link href='#Project' className='scroll-smooth' scroll={false}>
                            <li className='ml-10 pt-10 text-base uppercase text-black hover:text-blue-600'>project</li>
                        </Link>
                    </ul>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Navbar