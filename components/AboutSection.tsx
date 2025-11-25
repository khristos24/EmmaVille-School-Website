'use client';

import { Button } from "./ui/button";
import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";

export function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-12 md:py-20 bg-cream-50" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="relative order-1 md:order-none"
          >
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img
                src="/images/about-campus.jpg"
                alt="Campus walkway and playground"
                className="w-full h-[350px] md:h-[500px] object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 md:w-32 md:h-32 bg-amber-400 rounded-full -z-10" />
            <div className="absolute -top-4 -left-4 w-20 h-20 md:w-24 md:h-24 bg-emerald-200 rounded-full -z-10" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="order-2 md:order-none"
          >
            <h2
              className="text-3xl md:text-5xl text-emerald-800 mb-4 md:mb-6"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              About Emmaville Academy
            </h2>
            <p className="text-gray-700 text-base md:text-lg mb-4 md:mb-6 leading-relaxed">
              Emmaville Academy is a private K-12 school dedicated to nurturing
              curious minds and building character through a rigorous,
              personalized curriculum and a supportive community.
            </p>
            <div className="bg-emerald-50 border-l-4 border-emerald-600 p-4 mb-6 md:mb-8 rounded-r-lg">
              <p className="text-emerald-800 italic">
                "Educating the whole child — intellectually, socially, and
                ethically."
              </p>
            </div>
            <Button
              onClick={() =>
                document
                  .getElementById("programs")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-5 md:px-8 md:py-6 w-full md:w-auto"
            >
              Learn More
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
