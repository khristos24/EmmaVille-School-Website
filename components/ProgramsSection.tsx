'use client';

import { Button } from "./ui/button";
import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import homeData from "@/content/home.json";

const programs = homeData.programs;

export function ProgramsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="programs" className="py-12 md:py-20 bg-cream-50">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-10 md:mb-16"
          ref={ref}
        >
          <h2
            className="text-3xl md:text-5xl text-emerald-800 mb-3 md:mb-4"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            Our Programs
          </h2>
          <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto px-4">
            Our programs are designed to inspire confidence, creativity, and
            curiosity across STEM, Arts, and Leadership development.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6 mb-8 md:mb-12">
          {programs.map((program, index) => (
            <motion.div
              key={program.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all hover:-translate-y-2"
            >
              <div className="relative h-48 md:h-56 overflow-hidden">
                <img
                  src={program.image}
                  alt={program.label}
                  className="w-full h-full object-cover transition-transform hover:scale-110 duration-500"
                />
              </div>
              <div className="p-5 md:p-6">
                <h3 className="text-lg md:text-xl text-emerald-800 mb-2 md:mb-3">
                  {program.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {program.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Button
            onClick={() =>
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="bg-amber-500 hover:bg-amber-600 text-white px-6 py-5 md:px-8 md:py-6 w-full sm:w-auto"
          >
            Request More Information
          </Button>
        </div>
      </div>
    </section>
  );
}
