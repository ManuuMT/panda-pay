"use client";

import heroImg from "@/assets/images/hero.png";
import { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";

export function Hero() {
  // * Hooks
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });
  const translate = useTransform(scrollYProgress, [0, 1], [0, -100]);

  const helloText = "Hi! Our name is".split(" ");
  const variant = {
    hidden: (custom: number) => ({ opacity: 0, y: custom }),
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <main
      ref={container}
      className="bg-white text-black flex flex-col items-center"
    >
      <div className="mt-32 text-center">
        <h3 className="flex gap-2 justify-center">
          {helloText.map((word, i) => (
            <motion.div
              key={word}
              variants={variant}
              initial="hidden"
              animate="show"
              custom={(i + 1) * 10}
            >
              <h3 className="font-light text-5xl">{word}</h3>
            </motion.div>
          ))}
        </h3>
        <div className="overflow-hidden">
          <motion.h1
            className="altform font-bold text-[12rem]"
            style={{ lineHeight: "140px" }}
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            PandaPay
          </motion.h1>
        </div>
      </div>
      <motion.div className="w-full h-[75vh]" style={{ translateY: translate }}>
        <motion.img
          initial={{ scale: 1.1, opacity: 0, filter: "blur(8px)" }}
          animate={{ scale: 1, opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 0.5, delay: 1 }}
          className="w-full h-full object-contain"
          src={heroImg.src}
          alt="hero"
        />
      </motion.div>
      <div className="flex altform px-16 text-3xl my-24">
        <div className="w-1/4">
          <p>Who we are</p>
        </div>
        <div className="w-3/4">
          <div className="w-3/4">
            <p>
              We’re in the payment solutions business – and in the “caring for
              our customers” business. For us, it’s not just about transactions,
              it’s about making life simpler for entrepreneurs, so we can help
              them succeed.
            </p>
            <p className="mt-4">
              With PandaPay, what you see is what you get. No surprises, no
              fuss, no hidden fees or hidden agenda. It’s all there in black &
              white.
            </p>
            <button className="bg-black rounded-3xl text-white px-6 py-3 text-xs font-light mt-10">
              Our Solutions
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
