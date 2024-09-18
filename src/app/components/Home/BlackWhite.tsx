'use client'

import { useRef } from "react";
import { useScroll, useTransform, motion } from 'framer-motion';
import guy from '@/assets/images/guy.png';

export function BlackWhite() {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start start', 'end end']
    })
    const xBlackDiv = useTransform(scrollYProgress, [0, 1], ["0", "-20vw"])
    const xWhiteDiv = useTransform(scrollYProgress, [0, 1], ["0", "-100vw"])
    const xWhiteText = useTransform(scrollYProgress, [0, 1], ["-40vw", "0vw"])
    const xWhiteGuy = useTransform(scrollYProgress, [0, 1], ["-5vw", "0vw"])

    return (
        <section ref={container} className='h-[400vh]'>
            <div className='h-screen w-[200vw] sticky top-0 flex'>
                <motion.div style={{ x: xBlackDiv }} className='w-screen bg-black h-screen flex justify-center items-center'>
                    <h1 className='text-[25rem]'>Black</h1>
                </motion.div>
                <motion.div style={{ x: xWhiteDiv }} className='w-screen bg-white text-black h-screen flex justify-center items-center overflow-hidden relative'>
                    <motion.h1 style={{ x: xWhiteText }} className='text-[28rem] altform pb-24'>White</motion.h1>
                    <motion.img style={{ x: xWhiteGuy }} className="absolute top-1/2 left-1/2 translate-x-1/2 translate-y-1/2 h-52" src={guy.src} />
                </motion.div>
            </div>
            <div>Black</div>
        </section>
    )
}
