"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

interface PhoneGalleryProps {
  images: string[];
  alt: string;
  interval?: number;
  priority?: boolean;
}

export function PhoneGallery({
  images,
  alt,
  interval = 3500,
  priority = false,
}: PhoneGalleryProps) {
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.3 }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isPaused || !inView || images.length <= 1) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % images.length);
    }, interval);
    return () => clearInterval(id);
  }, [isPaused, inView, images.length, interval]);

  return (
    <div
      ref={ref}
      className="relative mx-auto"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="relative w-[260px] h-[540px] md:w-[280px] md:h-[580px] mx-auto">
        {/* Ambient glow */}
        <div className="absolute -inset-10 bg-gradient-to-b from-mint/20 via-mint/10 to-sand/10 blur-3xl rounded-full opacity-70 -z-10" />

        {/* iPhone shell */}
        <div className="relative w-full h-full rounded-[48px] md:rounded-[52px] bg-gradient-to-b from-[#2a2a2a] to-[#1a1a1a] p-[3px] shadow-[0_40px_100px_-20px_rgba(0,0,0,0.35),_0_0_0_1px_rgba(255,255,255,0.05)_inset]">
          {/* Inner bezel highlight */}
          <div className="absolute inset-[1px] rounded-[47px] md:rounded-[51px] bg-gradient-to-b from-white/[0.08] to-transparent pointer-events-none z-20" />

          {/* Screen */}
          <div className="relative w-full h-full rounded-[45px] md:rounded-[49px] overflow-hidden bg-white">
            {/* Dynamic Island */}
            <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-[80px] md:w-[90px] h-[22px] md:h-[26px] bg-black rounded-full z-10" />

            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 1.02 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="absolute inset-0"
              >
                <Image
                  src={images[index]}
                  alt={`${alt} ${index + 1}`}
                  fill
                  sizes="(max-width: 768px) 260px, 280px"
                  className="object-cover"
                  priority={priority && index === 0}
                />
              </motion.div>
            </AnimatePresence>

            {/* Glass reflection */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/[0.06] via-transparent to-transparent pointer-events-none z-10" />
          </div>
        </div>

        {/* Side buttons */}
        <div className="absolute -left-[1.5px] top-[130px] w-[3px] h-[55px] bg-[#2a2a2a] rounded-l-sm" />
        <div className="absolute -right-[1.5px] top-[95px] w-[3px] h-[28px] bg-[#2a2a2a] rounded-r-sm" />
        <div className="absolute -right-[1.5px] top-[130px] w-[3px] h-[28px] bg-[#2a2a2a] rounded-r-sm" />
      </div>

      {/* Progress dots */}
      {images.length > 1 && (
        <div className="flex justify-center gap-1.5 mt-6">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              aria-label={`عرض الصورة ${i + 1}`}
              className={`h-1.5 rounded-full transition-all duration-500 ${
                i === index
                  ? "w-7 bg-ink"
                  : "w-1.5 bg-ink/20 hover:bg-ink/40"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
