import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";

const galleryImages = [
  {
    image: "https://images.unsplash.com/photo-1728023881214-1d71a7a30a01?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50cyUyMGNvbGxhYm9yYXRpb24lMjB0ZWFtd29ya3xlbnwxfHx8fDE3NjM0ODI4NjZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    label: "community_gallery1.jpg - students collaborating",
  },
  {
    image: "https://images.unsplash.com/photo-1582036683218-7ac701f6cb5e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2hvb2wlMjBjaGlsZHJlbiUyMHBsYXlpbmd8ZW58MXx8fHwxNzYzNTczNzgzfDA&ixlib=rb-4.1.0&q=80&w=1080",
    label: "community_gallery2.jpg - students playing",
  },
  {
    image: "https://images.unsplash.com/photo-1634219355134-47e8e0727e80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMHN0dWRlbnRzJTIwc21pbGluZ3xlbnwxfHx8fDE3NjM1NzM3ODN8MA&ixlib=rb-4.1.0&q=80&w=1080",
    label: "community_gallery3.jpg - school events",
  },
  {
    image: "https://images.unsplash.com/photo-1758270704524-596810e891b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXZlcnNlJTIwc3R1ZGVudHMlMjBjb21tdW5pdHl8ZW58MXx8fHwxNzYzNTczNzg0fDA&ixlib=rb-4.1.0&q=80&w=1080",
    label: "community_gallery4.jpg - diverse students",
  },
];

export function CommunitySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="community" className="py-12 md:py-20 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-8 md:mb-12"
        >
          <h2
            className="text-3xl md:text-5xl text-emerald-800 mb-3 md:mb-4"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            Community & Culture
          </h2>
          <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto px-4">
            An inclusive environment where lasting friendships are formed
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
          {galleryImages.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative overflow-hidden rounded-xl md:rounded-2xl group aspect-square"
            >
              <img
                src={item.image}
                alt={item.label}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-10 md:mt-16 bg-emerald-50 rounded-2xl p-6 md:p-12 text-center"
        >
          <h3
            className="text-2xl md:text-3xl text-emerald-800 mb-3 md:mb-4"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            More Than Just Academics
          </h3>
          <p className="text-gray-700 text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
            At Emmaville Academy, we foster a vibrant community where students
            from diverse backgrounds come together to learn, grow, and support
            one another. Through clubs, events, and collaborative projects,
            students build lifelong connections and develop essential social
            skills.
          </p>
        </motion.div>
      </div>
    </section>
  );
}