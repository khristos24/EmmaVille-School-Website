import { AlertCircle } from "lucide-react";
import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";

export function InoculationInfo() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-8 md:py-12 bg-amber-50" ref={ref}>
      <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-2xl shadow-lg p-6 md:p-8 border-l-4 border-amber-500"
        >
          <div className="flex items-start gap-4">
            <div className="bg-amber-100 p-3 rounded-full flex-shrink-0">
              <AlertCircle className="text-amber-600" size={28} />
            </div>
            <div>
              <h3 
                className="text-xl md:text-2xl text-emerald-800 mb-3"
                style={{ fontFamily: "Playfair Display, serif" }}
              >
                Important: Student Health Requirements
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Parents are reminded to ensure all student inoculations are up to 
                date before enrollment. Please contact the school office for approved 
                guidelines and required documentation.
              </p>
              <div className="mt-4 flex flex-wrap gap-3 text-sm">
                <a 
                  href="tel:+2348186281225"
                  className="text-emerald-600 hover:text-emerald-700 transition-colors"
                >
                  📞 Call for more information
                </a>
                <span className="text-gray-400">•</span>
                <a 
                  href="mailto:emmavilleacademy@gmail.com"
                  className="text-emerald-600 hover:text-emerald-700 transition-colors"
                >
                  ✉️ Email us your questions
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
