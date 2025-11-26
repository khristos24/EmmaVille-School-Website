'use client';

import { Button } from "./ui/button";
import { Calendar, FileText } from "lucide-react";
import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";

export function AdmissionsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="admissions" className="relative py-20 md:py-32" ref={ref}>
      <div className="absolute inset-0">
        <img
          src="/images/hero-campus.jpg"
          alt="Emmaville Academy entrance"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/90 to-emerald-700/80" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 sm:px-8 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2
            className="text-3xl md:text-6xl text-white mb-4 md:mb-6"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            Join Our School
          </h2>
          <p className="text-cream-100 text-base md:text-xl mb-6 md:mb-8 max-w-2xl mx-auto">
            Admissions are open for new students. Registration forms are
            available for N5,000. Basic child information is required. Affordable School Fees.
          </p>

          <div className="bg-emerald-900/70 border border-white/15 rounded-2xl p-6 md:p-8 mb-8 max-w-3xl mx-auto shadow-lg space-y-4">
            <div className="text-center space-y-2">
              <p className="text-amber-200 font-semibold text-lg md:text-xl uppercase tracking-wide">
                Big News
              </p>
              <p className="text-white text-base md:text-lg leading-relaxed">
                We’re now an <strong>OSSD, Twelveth Grade Centre</strong>, shaping
                world-class, future-ready graduates. Partnered with{" "}
                <strong>Convoy International Academy</strong> — first intakes{" "}
                <strong>January 2026 </strong>(A 7 months program).
              </p>
            </div>
            <div className="bg-amber-500/90 backdrop-blur-sm rounded-xl p-5 md:p-6 text-center space-y-2 shadow-lg">
              <span className="text-white text-2xl md:text-3xl tracking-wide uppercase block">
                January Intake
              </span>
              <p className="text-white text-sm md:text-base">
                <strong>Special Offer:</strong> 20-50% discount available for a
                limited number of January OSSD first intakers.
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="bg-amber-500 hover:bg-amber-600 text-white px-6 py-5 md:px-8 md:py-6 shadow-lg hover:shadow-xl transition-all w-full sm:w-auto"
            >
              <FileText className="mr-2" size={20} />
              Contact Admissions
            </Button>
            <Button
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="bg-white hover:bg-cream-50 text-emerald-800 px-6 py-5 md:px-8 md:py-6 shadow-lg hover:shadow-xl transition-all w-full sm:w-auto"
            >
              <Calendar className="mr-2" size={20} />
              Schedule a Visit
            </Button>
          </div>

          <p className="text-cream-100 mt-6 md:mt-8 text-xs md:text-sm">
            All enquiries and application steps should be completed through our
            contact channels below.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
