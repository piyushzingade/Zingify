"use client";

import DotPattern from "@/components/ui/dot-pattern";
import { Spotlight } from "@/components/ui/spotlight";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export default function Nike() {
  return (
    <div className="min-h-[60vh] sm:h-[90vh] max-h-[900px] relative flex items-center justify-center group selection:none px-4">
      <DotPattern
        className={cn(
          "[mask-image:radial-gradient(900px_circle_at_center,white,transparent)]"
        )}
      />
      <div className="relative max-w-7xl h-full w-full flex flex-col md:block">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 3.35 }}>
          <Spotlight className="block top-[-30%] left-[-20%] sm:top-[-25%] sm:left-[-25%] md:top-[-35%] md:left-[-35%]" />
        </motion.div>

        {/* Main Text */}
        <div className="w-full text-center md:text-left md:absolute md:top-1/3 md:left-10 transform md:-translate-y-1/2 pt-6 md:pt-0">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="font-bold text-3xl sm:text-4xl md:text-[4rem] lg:text-[5rem] leading-tight md:leading-[0.78]"
          >
            <h2 className="bg-gradient-to-b from-zinc-200 font-mono stroke-[3] to-zinc-600 bg-clip-text text-transparent tracking-tighter">
              Nike Kobe X<br />
              All Star Edition
            </h2>
          </motion.div>
        </div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.3 }}
          className="w-full flex justify-center my-8 md:my-0 md:absolute md:right-[-15%] md:top-1/2 md:transform md:-translate-y-1/2"
        >
          <img
            src="/hero.png"
            alt=""
            className="w-[80%] md:w-[100%] object-contain z-10"
          />
        </motion.div>

        {/* Strike with Precision */}
        <div className="w-full flex justify-center md:justify-start md:absolute md:top-[45%] md:left-10">
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.85 }}
            className="text-xl sm:text-2xl md:text-3xl font-bold font-mono text-black bg-white rounded-sm px-2 py-1"
          >
            Strike with Precision.
          </motion.p>
        </div>

        {/* MAMBA and MENTALITY */}
        <div className="w-full flex flex-col items-center gap-4 mt-4 md:mt-0">
          {/* MAMBA */}
          <motion.div
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.85 }}
            className="font-bold font-mono text-zinc-400 flex flex-row md:flex-col items-center md:absolute md:right-10 md:bottom-56 text-2xl md:text-3xl gap-2 md:gap-0"
          >
            <span>M</span>
            <span>A</span>
            <span>M</span>
            <span>B</span>
            <span>A</span>
          </motion.div>

          {/* MENTALITY */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.95 }}
            className="font-bold font-mono flex flex-row md:flex-col items-center md:absolute md:right-0 md:bottom-5 text-2xl md:text-3xl gap-1 md:gap-0"
          >
            {["M", "E", "N", "T", "A", "L", "I", "T", "Y"].map((letter, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.75 + index * 0.1 }}
                className="text-zinc-400"
              >
                {letter}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}

