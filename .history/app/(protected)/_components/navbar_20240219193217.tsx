"use client";

import Image from 'next/image';
import React from 'react'

const Navbar = () => {
    return (
        <div className='h-[45px] w-full'>
            <div className='h-full w-full'>
                <div className='w-full h-full '>
                    <Image src="/next.svg" alt='logo' width={40} height={40}/>
                </div>
            </div>
        </div>
    )
}

export default Navbar