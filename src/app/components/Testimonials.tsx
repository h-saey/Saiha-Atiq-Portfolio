import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  rating: number;
}

export function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Mahnoor Hanif",
      role: "Founder Of Mindversity",
      content:
        "Saiha is an exceptional designer and developer. Her attention to detail and creative vision transformed our website into something truly special. Highly recommended!",
      rating: 5,
    },
    // {
    //   id: 2,
    //   name: "Michael Chen",
    //   role: "Founder, CreativeHub",
    //   content:
    //     "Working with Saiha was a pleasure. She understood our brand perfectly and delivered designs that exceeded our expectations. Her technical skills are impressive too!",
    //   rating: 5,
    // },
    // {
    //   id: 3,
    //   name: "Emma Williams",
    //   role: "Marketing Director",
    //   content:
    //     "The UI/UX designs Saiha created for our app were intuitive and beautiful. Our users love the new interface, and engagement has increased significantly.",
    //   rating: 5,
    // },
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section
      id="testimonials"
      className="relative py-20 bg-[#202342] overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-96 h-96 bg-[#BD6AD2]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#FBBD8C]/10 rounded-full blur-3xl" />
      </div>

      <div ref={ref} className="relative max-w-5xl mx-auto px-6">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-['Cinzel_Decorative'] text-4xl md:text-5xl mb-4">
            <span className="bg-gradient-to-r from-[#BD6AD2] via-[#E094B0] to-[#FBBD8C] bg-clip-text text-transparent">
              Testimonials
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#BD6AD2] via-[#E094B0] to-[#FBBD8C] mx-auto rounded-full mb-4" />
          <p className="text-white/60 max-w-2xl mx-auto font-['Arial_Nova',_Arial,_sans-serif]">
            What clients say about working with me
          </p>
        </motion.div>

        {/* Testimonial Slider */}
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 md:p-12 overflow-hidden"
          >
            {/* Glass effect background */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-white/5" />

            {/* Quote icon */}
            <div className="absolute top-8 right-8 opacity-10">
              <Quote size={80} className="text-[#BD6AD2]" />
            </div>

            {/* Content */}
            <div className="relative z-10">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
              >
                {/* Rating Stars */}
                <div className="flex gap-1 mb-6">
                  {/* SVG Definition for gradient */}
                  <svg width="0" height="0" style={{ position: "absolute" }}>
                    <defs>
                      <linearGradient
                        id="starGradient"
                        x1="0%"
                        y1="0%"
                        x2="100%"
                        y2="0%"
                      >
                        <stop offset="0%" stopColor="#BD6AD2" />
                        <stop offset="50%" stopColor="#E094B0" />
                        <stop offset="100%" stopColor="#FBBD8C" />
                      </linearGradient>
                    </defs>
                  </svg>

                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.1 * i }}
                    >
                      <svg
                        className="w-6 h-6"
                        fill="url(#starGradient)"
                        viewBox="0 0 20 20"
                      >
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </svg>
                    </motion.div>
                  ))}
                </div>

                {/* Testimonial Content */}
                <p className="text-white/90 text-lg mb-8 leading-relaxed font-['Arial_Nova',_Arial,_sans-serif]">
                  "{testimonials[currentIndex].content}"
                </p>

                {/* Author */}
                <div>
                  <h4 className="text-white font-['Cinzel_Decorative'] text-xl">
                    {testimonials[currentIndex].name}
                  </h4>
                  <p className="text-[#E094B0] font-['Lekton']">
                    {testimonials[currentIndex].role}
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Navigation Buttons */}
          <div className="flex justify-center gap-4 mt-8">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={prevTestimonial}
              className="p-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full hover:bg-white/10 hover:border-white/30 transition-all cursor-pointer"
            >
              <ChevronLeft className="text-white" size={24} />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={nextTestimonial}
              className="p-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full hover:bg-white/10 hover:border-white/30 transition-all cursor-pointer"
            >
              <ChevronRight className="text-white" size={24} />
            </motion.button>
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center gap-2 mt-6 ">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`transition-all ${
                  index === currentIndex
                    ? "w-8 h-2 bg-gradient-to-r from-[#BD6AD2] via-[#E094B0] to-[#FBBD8C] rounded-full cursor-pointer"
                    : "w-2 h-2 bg-white/30 rounded-full hover:bg-white/50 cursor-pointer"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
