import { Target, Eye, Heart } from "lucide-react";
import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";

const values = [
  {
    icon: Target,
    title: "Mission",
    description:
      "To empower students to achieve academic excellence, discover their unique passions, and become compassionate, responsible leaders.",
    color: "emerald",
  },
  {
    icon: Eye,
    title: "Vision",
    description:
      "To be the leading academy where students are inspired to shape a better world.",
    color: "amber",
  },
  {
    icon: Heart,
    title: "Core Values",
    description:
      "Integrity • Curiosity • Resilience • Community • Excellence",
    color: "emerald",
  },
];

export function MissionVisionValues() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-12 md:py-20 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-8">
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {values.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="bg-cream-50 rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div
                  className={`w-14 h-14 md:w-16 md:h-16 rounded-full bg-${item.color}-100 flex items-center justify-center mb-4 md:mb-6`}
                >
                  <Icon
                    className={`text-${item.color}-600`}
                    size={28}
                    strokeWidth={2}
                  />
                </div>
                <h3
                  className="text-xl md:text-2xl text-emerald-800 mb-3 md:mb-4"
                  style={{ fontFamily: "Playfair Display, serif" }}
                >
                  {item.title}
                </h3>
                <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}