
"use client";

import { ArrowLeft, ArrowRight, Quote } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

type Testimonial = {
  description: string;
  name: string;
  designation: string;
  src: string;
  imageHint: string;
};

export const AnimatedTestimonials = ({
  testimonials,
  autoplay = false,
  className,
}: {
  testimonials: Testimonial[];
  autoplay?: boolean;
  className?: string;
}) => {
  const [active, setActive] = useState(0);

  const handleNext = () => {
    setActive((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    if (autoplay) {
      const interval = setInterval(handleNext, 5000);
      return () => clearInterval(interval);
    }
  }, [autoplay, testimonials.length]);

  return (
    <div className={cn("relative w-full max-w-4xl mx-auto py-20 px-4", className)}>
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12 md:gap-8">
        {/* Left Side: Image and Decorative Shapes */}
        <div className="relative h-80 w-full max-w-sm mx-auto">
          {/* Background circle */}
          <div className="absolute top-0 right-0 w-60 h-60 bg-card/50 rounded-full blur-xl" />
          {/* Bottom left shape */}
           <div className="absolute bottom-0 left-0 w-32 h-32 bg-accent/20 rounded-2xl blur-xl" />

          <AnimatePresence>
            <motion.div
              key={active}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5, ease: "circOut" }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <Image
                src={testimonials[active].src}
                alt={testimonials[active].name}
                width={320}
                height={320}
                draggable={false}
                className="h-64 w-64 md:h-80 md:w-80 rounded-full object-cover object-center border-4 border-white/10 shadow-2xl shadow-primary/20"
                data-ai-hint={testimonials[active].imageHint}
              />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Right Side: Quote and Details */}
        <div className="relative flex flex-col justify-between py-4 h-full min-h-[350px]">
          <Quote className="absolute top-0 left-0 w-16 h-16 text-primary/30 transform -translate-x-4 -translate-y-4" />
          {/* Bottom right shape */}
          <div className="absolute bottom-0 right-0 w-32 h-32 bg-primary/20 rounded-full blur-xl" />

          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="flex-grow"
            >
              <motion.div
                className="text-lg md:text-xl text-white/80 text-left leading-relaxed prose prose-p:my-2 prose-br:my-2"
                style={{ minHeight: '150px' }} // Set a min-height to avoid layout shifts
                dangerouslySetInnerHTML={{ __html: testimonials[active].description }}
              />
            </motion.div>
          </AnimatePresence>

          <div>
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{ duration: 0.3, delay: 0.1, ease: "easeInOut" }}
              >
                <div className="text-2xl font-bold text-white font-headline">
                  {testimonials[active].name.split('\n').map((line, i) => (
                    <p key={i}>{line}</p>
                  ))}
                </div>
                {testimonials[active].designation && (
                  <p className="text-sm text-accent">
                    {testimonials[active].designation}
                  </p>
                )}
              </motion.div>
            </AnimatePresence>

            <div className="flex gap-4 pt-8">
              <button
                onClick={handlePrev}
                className="h-10 w-10 rounded-full bg-card/80 flex items-center justify-center group/button border border-border hover:border-primary transition-colors"
              >
                <ArrowLeft className="h-5 w-5 text-white/70 group-hover/button:text-white transition-colors" />
              </button>
              <button
                onClick={handleNext}
                className="h-10 w-10 rounded-full bg-card/80 flex items-center justify-center group/button border border-border hover:border-primary transition-colors"
              >
                <ArrowRight className="h-5 w-5 text-white/70 group-hover/button:text-white transition-colors" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
