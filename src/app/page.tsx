'use client'

import { Hero, Navbar } from "./components";
import { useEffect } from "react";
import Lenis from '@studio-freight/lenis'

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis();

    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
    </>
  );
}
