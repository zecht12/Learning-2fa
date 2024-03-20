"use client";

import Image from 'next/image';
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
        <div className={color ? "fixed w-full h-20 bg-[#94b4b1] shadow-xl z-[100]" : " fixed w-full shadow-xl h-20 z-[100]"}>
            <div className='flex justify-between items-center w-full h-full px-6 2xl:px-16 '>
                <div className='w-full h-full flex items-center justify-start'>
                    <Image src="/next.svg" alt='logo' width={40} height={40}/>
                </div>
                <ul>
                    <Link
                </ul>
            </div>
        </div>
    )
}

export default Navbar