
'use client';

import type { Metadata } from 'next';
import { motion }from 'framer-motion';

export default function LifestylePage() {
  const titleVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.3,
        duration: 0.8,
        ease: "easeOut"
      },
    }),
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-background text-white text-center p-4">
       <div className="relative w-full h-screen flex flex-col items-center justify-center text-center text-white overflow-hidden">
        <video
          src="/lifestyle.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 p-4 container mx-auto px-4 md:px-6">
          <motion.h1 
            className="text-4xl md:text-6xl font-headline font-bold flex flex-col items-center space-y-2 md:space-y-4"
            initial="hidden"
            animate="visible"
            viewport={{ once: true, amount: 0.8 }}
          >
            <motion.span custom={0} variants={titleVariants}>I AM</motion.span>
            <motion.span custom={1} variants={titleVariants} className="text-primary">GREATLY BLESSED</motion.span>
            <motion.span custom={2} variants={titleVariants} className="text-accent">HIGHLY FAVOURED</motion.span>
            <motion.span custom={3} variants={titleVariants} className="text-primary">DEEPLY LOVED</motion.span>
          </motion.h1>
        </div>
      </div>
    </main>
  );
}
