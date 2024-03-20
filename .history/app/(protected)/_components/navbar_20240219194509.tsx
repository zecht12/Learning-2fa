"use client";

import Image from 'next/image';
import React from 'react'

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
        <div className='h-[80px] w-full'>
            <div className='h-full w-full flex items-center justify-between py-4 px-8'>
                <div className='w-full h-full flex items-center justify-start'>
                    <Image src="/next.svg" alt='logo' width={40} height={40}/>
                </div>
                <ul>
                    <li>Home</li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar