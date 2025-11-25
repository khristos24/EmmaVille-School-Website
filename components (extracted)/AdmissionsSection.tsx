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
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1634219355134-47e8e0727e80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMHN0dWRlbnRzJTIwc21pbGluZ3xlbnwxfHx8fDE3NjM1NzM3ODN8MA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="admissions_cta.jpg - students smiling outdoors"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/90 to-emerald-700/80" />
      </div>

      {/* Content */}
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
            Join Our Community
          </h2>
          <p className="text-cream-100 text-base md:text-xl mb-6 md:mb-8 max-w-2xl mx-auto">
            Admissions are open for new students. Registration forms are available 
            for ₦5,000. Basic child information is required.
          </p>

          {/* Special Offer Box */}
          <div className="bg-amber-500/90 backdrop-blur-sm rounded-2xl p-6 mb-8 max-w-2xl mx-auto">
            <div className="flex items-center justify-center mb-2">
              <span className="text-white text-2xl md:text-3xl">🎓</span>
            </div>
            <p className="text-white text-sm md:text-base">
              <strong>Special Offer:</strong> 20–50% discount available for a limited 
              number of January OSSD first intakers.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-amber-500 hover:bg-amber-600 text-white px-6 py-5 md:px-8 md:py-6 shadow-lg hover:shadow-xl transition-all w-full sm:w-auto"
            >
              <FileText className="mr-2" size={20} />
              Contact Admissions
            </Button>
            <Button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white hover:bg-cream-50 text-emerald-800 px-6 py-5 md:px-8 md:py-6 shadow-lg hover:shadow-xl transition-all w-full sm:w-auto"
            >
              <Calendar className="mr-2" size={20} />
              Schedule a Visit
            </Button>
          </div>

          <p className="text-cream-100 mt-6 md:mt-8 text-xs md:text-sm">
            All enquiries and application steps should be completed through our contact channels below.
          </p>
        </motion.div>
      </div>
    </section>
  );
}