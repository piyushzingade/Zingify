"use client";

import DotPattern from "@/components/ui/dot-pattern";
import { Spotlight } from "@/components/ui/spotlight";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export default function Nike() {
  return (
    <div className="h-[90vh] max-h-[900px] relative flex items-center justify-center group selection:none">
      <DotPattern
        className={cn(
          "[mask-image:radial-gradient(900px_circle_at_center,white,transparent)]"
        )}
      />
      <div className="relative max-w-7xl h-full w-full  max-sm:items-end">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 3.35 }}>
          <Spotlight className="top-[-35%] left-[-35%]" />
        </motion.div>

        {/* Main Text - Left Side */}
        <div className="absolute top-1/3 left-10 transform -translate-y-1/2 max-sm:top-10 max-sm:transform-none">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="font-bold lg:text-[5rem] md:text-[4rem] text-4xl leading-[0.78]"
          >
            <h2 className="bg-gradient-to-b from-zinc-200 font-mono stroke-[3] to-zinc-600 bg-clip-text text-transparent tracking-tighter">
              Nike Kobe X<br />
              All Star Edition
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.85 }}
            className="text-2xl md:text-3xl font-bold font-mono text-black bg-white w-fit rounded-sm px-2 py-1 mt-4"
          >
            Strike with Precision.
          </motion.p>
        </div>

        {/* Image -  */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.3 }}
          className="absolute right-[-15%] top-1/2 transform -translate-y-1/2 max-sm:right-0 max-sm:top-1/2"
        >
          <img
            src="/hero.png"
            alt=""
            className="w-[100%] object-contain z-10 max-sm:my-36"
          />
        </motion.div>

        {/* MAMBA - Right Side Vertical */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.85 }}
          className="absolute w-1 font-bold font-mono text-zinc-400 flex-col flex max-sm:flex-row max-sm:w-max max-sm:bottom-10 max-sm:left-10 items-center justify-center right-10 bottom-56 text-3xl"
        >
          <span>M</span>
          <span>A</span>
          <span>M</span>
          <span>B</span>
          <span>A</span>
        </motion.div>

        {/* MENTALITY - Right Side Vertical */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.95 }}
          className="absolute w-1 font-bold font-mono flex-col max-sm:flex-row max-sm:w-max max-sm:bottom-10 flex items-center justify-center right-0 bottom-5 text-3xl"
        >
          {["M", "E", "N", "T", "A", "L", "I", "T", "Y"].map(
            (letter, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.75 + index * 0.1 }}
                className="text-zinc-400 bg-clip-text"
              >
                {letter}
              </motion.span>
            )
          )}
        </motion.div>
      </div>
    </div>
  );
}
