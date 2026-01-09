import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import aboutImage from "@/assets/images/About_Pic.png";

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section id="about" className="relative py-20 bg-[#202342] overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-10 w-64 h-64 bg-[#BD6AD2]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-64 h-64 bg-[#E094B0]/10 rounded-full blur-3xl" />
      </div>

      {/* Decorative Stars */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.3, 1, 0.3],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div ref={ref} className="relative max-w-6xl mx-auto px-6">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-['Cinzel_Decorative'] text-4xl md:text-5xl mb-4">
            <span className="bg-gradient-to-r from-[#BD6AD2] via-[#E094B0] to-[#FBBD8C] bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#BD6AD2] via-[#E094B0] to-[#FBBD8C] mx-auto rounded-full" />
        </motion.div>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden border-2 border-white/10 shadow-2xl">
              {/* Decorative corner elements */}
              <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-[#BD6AD2] rounded-tl-2xl" />
              <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-[#FBBD8C] rounded-br-2xl" />

              <img
                src={aboutImage}
                alt="Saiha Atiq"
                className="w-full h-auto rounded-2xl"
              />

              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#BD6AD2]/20 via-transparent to-[#FBBD8C]/20 rounded-2xl" />
            </div>

            {/* Floating decorative elements */}
            <motion.div
              animate={{
                y: [0, -10, 0],
                rotate: [0, 5, 0],
              }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -top-6 -right-6 w-12 h-12 bg-gradient-to-br from-[#BD6AD2] to-[#E094B0] rounded-full blur-sm opacity-60"
            />
            <motion.div
              animate={{
                y: [0, 10, 0],
                rotate: [0, -5, 0],
              }}
              transition={{ duration: 5, repeat: Infinity }}
              className="absolute -bottom-6 -left-6 w-16 h-16 bg-gradient-to-br from-[#E094B0] to-[#FBBD8C] rounded-full blur-sm opacity-60"
            />
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 relative overflow-hidden">
              {/* Decorative gradient */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#BD6AD2]/20 to-transparent rounded-bl-full" />

              <h3 className="font-['Cinzel_Decorative'] text-2xl text-white mb-4">
                SAIHA ATIQ
              </h3>
              <p className="font-['Lekton'] text-[#E094B0] mb-2">
                Front-end Developer & Designer
              </p>

              <div className="w-16 h-0.5 bg-gradient-to-r from-[#BD6AD2] to-[#E094B0] my-4" />

              <p className="text-white/80 leading-relaxed font-['Arial_Nova',_Arial,_sans-serif]">
                I'm Saiha Atiq, a creative soul designer and front-end developer
                passionate about transforming ideas into beautiful digital
                experiences. With a keen eye for aesthetics and a love for clean
                code, I bridge the gap between design and technology.
              </p>

              <p className="text-white/70 leading-relaxed mt-4 font-['Arial_Nova',_Arial,_sans-serif]">
                My journey in the digital world combines UI/UX design, front-end
                development, WordPress expertise, and graphic design. I believe
                in creating experiences that are not only visually stunning but
                also intuitive and user-friendly. Each project is an opportunity
                to craft something meaningful that resonates with users.
              </p>

              <div className="mt-6 grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-white/5 rounded-lg border border-white/10">
                  <p className="text-2xl font-['Cinzel_Decorative'] bg-gradient-to-r from-[#BD6AD2] to-[#E094B0] bg-clip-text text-transparent">
                    1
                  </p>
                  <p className="text-white/60 text-sm font-['Lekton']">
                    Year Experience
                  </p>
                </div>
                <div className="text-center p-4 bg-white/5 rounded-lg border border-white/10">
                  <p className="text-2xl font-['Cinzel_Decorative'] bg-gradient-to-r from-[#E094B0] to-[#FBBD8C] bg-clip-text text-transparent">
                    5
                  </p>
                  <p className="text-white/60 text-sm font-['Lekton']">
                    Projects Done
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
