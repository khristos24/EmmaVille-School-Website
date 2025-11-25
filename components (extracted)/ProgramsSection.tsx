import { Button } from "./ui/button";
import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";

const programs = [
  {
    title: "STEM Labs",
    image: "https://images.unsplash.com/photo-1605781645799-c9c7d820b4ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2llbmNlJTIwbGFib3JhdG9yeSUyMHN0dWRlbnRzfGVufDF8fHx8MTc2MzUxMTc2Nnww&ixlib=rb-4.1.0&q=80&w=1080",
    description: "Hands-on science, technology, engineering, and mathematics experiences that prepare students for tomorrow's challenges.",
    label: "program_stem.jpg",
  },
  {
    title: "Visual & Performing Arts",
    image: "https://images.unsplash.com/photo-1598389118600-9a83ceb4ebe6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnQlMjBjbGFzcyUyMHN0dWRlbnRzJTIwcGFpbnRpbmd8ZW58MXx8fHwxNzYzNTY0NDM5fDA&ixlib=rb-4.1.0&q=80&w=1080",
    description: "Nurturing creativity through music, drama, dance, and visual arts with dedicated studios and performance spaces.",
    label: "program_arts.jpg",
  },
  {
    title: "Sports & Leadership",
    image: "https://images.unsplash.com/photo-1760035435867-4f4dc47853a0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50cyUyMHNwb3J0cyUyMGF0aGxldGljc3xlbnwxfHx8fDE3NjM1NzM3ODJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    description: "Developing physical fitness, teamwork, and leadership skills through athletics and competitive sports programs.",
    label: "program_sports.jpg",
  },
  {
    title: "Character Education",
    image: "https://images.unsplash.com/photo-1728023881214-1d71a7a30a01?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50cyUyMGNvbGxhYm9yYXRpb24lMjB0ZWFtd29ya3xlbnwxfHx8fDE3NjM0ODI4NjZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    description: "Building strong moral foundations through community service, mentorship, and values-based learning.",
    label: "program_character.jpg",
  },
];

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
                <p className="text-gray-600 text-sm leading-relaxed">{program.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-amber-500 hover:bg-amber-600 text-white px-6 py-5 md:px-8 md:py-6 w-full sm:w-auto"
          >
            Request More Information
          </Button>
        </div>
      </div>
    </section>
  );
}