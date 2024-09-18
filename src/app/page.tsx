'use client'

import Hero from "@/app/components/Home/Hero";
import { useEffect } from "react";
import Lenis from '@studio-freight/lenis'

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis()

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  }, []);

  return (
    <>
      <Hero />
    </>
  );
}
