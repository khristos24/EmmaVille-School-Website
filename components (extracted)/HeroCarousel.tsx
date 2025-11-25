import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "./ui/button";
import { motion, AnimatePresence } from "motion/react";

interface Slide {
  image: string;
  title: string;
  label: string;
}

const slides: Slide[] = [
  {
    image: "https://images.unsplash.com/photo-1632215861513-130b66fe97f4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxOaWdlcmlhbiUyMHN0dWRlbnRzJTIwY2xhc3Nyb29tJTIwbGVhcm5pbmd8ZW58MXx8fHwxNzYzNTczNzgyfDA&ixlib=rb-4.1.0&q=80&w=1080",
    title: "Nurturing Curious Minds and Building Character",
    label: "hero_slide1.jpg - classroom scene",
  },
  {
    image: "https://images.unsplash.com/photo-1575467678971-7cd5c2937dc6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50cyUyMFNURU0lMjBsYWIlMjBzY2llbmNlfGVufDF8fHx8MTc2MzU3Mzc4Mnww&ixlib=rb-4.1.0&q=80&w=1080",
    title: "A Private K–12 Academy in Port Harcourt",
    label: "hero_slide2.jpg - STEM lab",
  },
  {
    image: "https://images.unsplash.com/photo-1614442848457-36ddcbb0876d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2hvb2wlMjBwZXJmb3JtaW5nJTIwYXJ0cyUyMHN0dWRlbnRzfGVufDF8fHx8MTc2MzU3Mzc4Mnww&ixlib=rb-4.1.0&q=80&w=1080",
    title: "Dedicated to Academic Excellence",
    label: "hero_slide3.jpg - performing arts",
  },
  {
    image: "https://images.unsplash.com/photo-1759675934052-1d82517c76c8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50cyUyMG91dGRvb3IlMjBncm91cCUyMHNjaG9vbHxlbnwxfHx8fDE3NjM1NzM3ODJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    title: "Lifelong Learning Starts Here",
    label: "hero_slide4.jpg - outdoor students",
  },
];

export function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative h-[500px] md:h-[700px] overflow-hidden" id="home">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7 }}
          className="absolute inset-0"
        >
          <div className="absolute inset-0 bg-black/40 z-10" />
          <img
            src={slides[currentSlide].image}
            alt={slides[currentSlide].label}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 z-20 flex items-center justify-center">
            <div className="text-center text-white px-6 max-w-4xl">
              <motion.h2
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-3xl md:text-6xl mb-6 md:mb-8 px-4"
                style={{ fontFamily: "Playfair Display, serif" }}
              >
                {slides[currentSlide].title}
              </motion.h2>
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                <Button 
                  onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                  className="bg-amber-500 hover:bg-amber-600 text-white px-6 py-5 md:px-8 md:py-6 text-sm md:text-base"
                >
                  Discover More
                </Button>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full backdrop-blur-sm transition-all"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full backdrop-blur-sm transition-all"
      >
        <ChevronRight size={24} />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide
                ? "bg-white w-8"
                : "bg-white/50 hover:bg-white/75"
            }`}
          />
        ))}
      </div>
    </div>
  );
}