import React from 'react'
import {Carousel,CarouselContent,CarouselItem,CarouselNext, CarouselPrevious, } from "@/components/ui/carousel"
import Image from 'next/image'
import { Button } from '../ui/button'
import Link from 'next/link'
import { FaRegImages } from 'react-icons/fa'

const HomePaging = () => {
  return (
    <div className='h-auto w-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-800 to-zinc-900 py-28 px-4'>
      <div className='md:flex items-center justify-between'>
        <div className='md:w-[50%] w-full h-full'>
          <h1 className='text-slate-100 md:text-7xl text-4xl font-bold text-justify'>Having for your <span className="inline bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">Waifu</span> come true</h1>
          <p className='text-slate-100 pt-8 text-justify'>
            Indulge in your deepest otaku fantasies with ZechtNime, the premier destination for waifu enthusiasts worldwide. Immerse yourself in a captivating collection of handpicked waifu images meticulously curated to cater to every taste and preference.
          </p>
          <p className='text-slate-100 pt-4 text-justify'>
            Explore a diverse range of waifus from across anime, manga, and gaming universes, meticulously organized to provide an unparalleled browsing experience. Whether you long for the gentle embrace of a kawaii neko or the fierce loyalty of a powerful warrior, ZechtNime has your dream waifu waiting.
          </p>
          <div className='py-8 md:w-[50%] h-auto flex justify-center items-center'>
            <Button asChild size="xl">
              <Link href="/image" className='text-slate-100 hover:text-blue-600 flex justify-center items-center gap-4' >
                <FaRegImages size={30} />
                See more image
              </Link>
            </Button>
          </div>
        </div>
        <div className='md:w-[50%] w-full h-full md:flex items-center justify-center'>
          <Image width={500} height={500} alt='home' src="/images/1.jpg" className='md:w-[400px] w-full md:h-[500px] h-[500px]' />
        </div>
      </div>
      <div className='w-full h-full pt-14'>
        <h1 className='text-slate-100 md:text-5xl text-4xl font-bold text-center relative pb-4'>
          Why should you choose <span className="inline bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">ZechtNime</span>
          <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 md:w-[750px] w-[350px] h-0.5 border-b-2">
          </span>
        </h1>
        <div className='md:flex items-center justify-between pt-8'>
          <div className='md:w-[50%] w-full h-full md:flex items-center justify-start md:py-0 py-8'>
            <Image width={500} height={500} alt='home' src="/images/2.jpg" className='md:w-[500px] w-full md:h-[700px] h-[500px]' />
          </div>
          <div className='md:w-[50%] w-full h-full md:flex items-center justify-start'>
            <div className='md:w-[80%] w-full'>
              <h1 className='text-slate-100 text-4xl font-bold md:text-justify text-center'>Immersive <span className="inline bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">Experience</span></h1>
              <p className='text-slate-100 pt-8 text-xl text-justify'>
                With ZechtNime, users can immerse themselves in a world of fantasy and excitement, where they can explore and discover their dream waifu to enhance their overall anime experience.
              </p>
            </div>
          </div>
        </div>
        <div className='md:flex items-center justify-between pt-8'>
          <div className='md:w-[50%] w-full h-full md:py-0 py-8 md:hidden items-center justify-start'>
            <Image width={500} height={500} alt='home' src="/images/3.jpeg" className='md:w-[500px] w-full md:h-[700px] h-[500px]' />
          </div>
          <div className='md:w-[50%] w-full h-full md:flex items-center justify-start'>
            <div className='md:w-[80%] w-full'>
              <h1 className='text-slate-100 text-4xl font-bold md:text-justify text-center'><span className="inline bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">User-Friendly</span> Interface</h1>
              <p className='text-slate-100 pt-8 text-xl text-justify'>
                ZechtNime offers a user-friendly interface that makes browsing and discovering waifu images a seamless and enjoyable experience for users of all levels of expertise.
              </p>
            </div>
          </div>
          <div className='md:w-[50%] w-full h-full md:flex hidden items-center justify-start md:py-0 py-8'>
            <Image width={500} height={500} alt='home' src="/images/3.jpeg" className='md:w-[500px] w-full md:h-[700px] h-[500px]' />
          </div>
        </div>
        <div className='md:flex items-center justify-between pt-8'>
          <div className='md:w-[50%] w-full h-full md:flex items-center justify-start md:py-0 py-8'>
              <Image width={500} height={500} alt='home' src="/images/4.png" className='md:w-[500px] w-full md:h-[700px] h-[500px]' />
            </div>
          <div className='md:w-[50%] w-full h-full md:flex items-center justify-start'>
            <div className='md:w-[80%] w-full'>
              <h1 className='text-slate-100 text-4xl font-bold md:text-justify text-center'><span className="inline bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">Our mission</span> is simple</h1>
              <p className='text-slate-100 pt-8 text-xl text-justify'>
                To make your waifu dreams a reality. With ZechtNime, you can escape into a world where your favorite characters come to life, where every image is a gateway to a universe of endless possibilities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePaging