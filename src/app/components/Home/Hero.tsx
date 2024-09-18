import React from 'react'
import heroImg from "@/assets/images/hero.png"
import Image from 'next/image'

export default function Hero() {
    return (
        <main className='bg-white text-black flex flex-col items-center'>
            <div className='mt-32 text-center'>
                <h3 className='font-light text-5xl'>Hi! Our name is</h3>
                <h1 className='altform font-bold text-[12rem]' style={{ lineHeight: "140px" }}>PandaPay</h1>
            </div>
            <div className='w-full h-[75vh]'>
                <Image className='w-full h-full object-contain' src={heroImg} alt='hero' />
            </div>
            <div className='flex altform px-16 text-3xl my-16'>
                <div className='w-1/4'>
                    <p>Who we are</p>
                </div>
                <div className='w-3/4'>
                    <div className='w-3/4'>
                        <p>We’re in the payment solutions business – and in the “caring for our customers” business. For us, it’s not just about transactions, it’s about making life simpler for entrepreneurs, so we can help them succeed.</p>
                        <p className='mt-4'>With PandaPay, what you see is what you get. No surprises, no fuss, no hidden fees or hidden agenda. It’s all there in black & white.</p>
                        <button className='bg-black rounded-3xl text-white px-5 py-2 text-xs font-light mt-10'>Our Solutions</button>
                    </div>
                </div>
            </div>
        </main>
    )
}
