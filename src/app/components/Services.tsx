import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Palette, Code, Globe, Sparkles } from "lucide-react";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  delay: number;
}

function ServiceCard({
  icon,
  title,
  description,
  features,
  delay,
}: ServiceCardProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      whileHover={{ y: -10, scale: 1.02 }}
      className="group relative bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 overflow-hidden hover:border-white/30 transition-all"
    >
      {/* Galaxy texture background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#BD6AD2]/40 to-transparent rounded-full blur-2xl" />
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-[#FBBD8C]/40 to-transparent rounded-full blur-2xl" />
      </div>

      {/* Sparkle effect on hover */}
      <motion.div
        className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity"
        animate={{
          rotate: [0, 360],
        }}
        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
      >
        <Sparkles className="text-[#FBBD8C]" size={20} />
      </motion.div>

      {/* Content */}
      <div className="relative z-10">
        {/* Icon */}
        <motion.div
          whileHover={{ rotate: 5, scale: 1.1 }}
          className="inline-block p-4 bg-gradient-to-br from-[#BD6AD2] via-[#E094B0] to-[#FBBD8C] rounded-xl mb-6 shadow-lg group-hover:shadow-[#BD6AD2]/50 transition-shadow"
        >
          {icon}
        </motion.div>

        {/* Title */}
        <h3 className="font-['Cinzel_Decorative'] text-2xl text-white mb-3">
          {title}
        </h3>

        {/* Description */}
        <p className="text-white/70 mb-6 font-['Arial_Nova',_Arial,_sans-serif]">
          {description}
        </p>

        {/* Features */}
        <div className="space-y-2">
          {features.map((feature, index) => (
            <motion.div
              key={feature}
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: delay + 0.1 + index * 0.1 }}
              className="flex items-center gap-2 text-white/60 text-sm font-['Lekton']"
            >
              <div className="w-1.5 h-1.5 bg-gradient-to-r from-[#BD6AD2] to-[#E094B0] rounded-full" />
              {feature}
            </motion.div>
          ))}
        </div>

        {/* Hover glow effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#BD6AD2]/0 via-[#E094B0]/5 to-[#FBBD8C]/0 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />
      </div>
    </motion.div>
  );
}

export function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const services = [
    {
      icon: <Palette className="text-white" size={32} />,
      title: "UI/UX Design",
      description:
        "Designing clean and user-friendly interfaces while learning UX principles and Figma tools.",
      features: [
        "User Research & Wireframing",
        "Prototyping with Figma",
        "Visual Design & Layouts",
        "Usability Feedback",
      ],
    },
    {
      icon: <Code className="text-white" size={32} />,
      title: "Front-end Development",
      description:
        "Building responsive websites using HTML, CSS, JavaScript, and React with Tailwind CSS.",
      features: [
        "React Components & State Management",
        "Tailwind CSS & Responsive Layouts",
        "Basic JavaScript/DOM Manipulation",
        "Cross-browser Compatible Design",
      ],
    },
    {
      icon: <Globe className="text-white" size={32} />,
      title: "WordPress",
      description:
        "Creating and customizing WordPress websites, including themes, plugins, and layouts.",
      features: [
        "Theme Customization & Setup",
        "Plugin Installation & Configuration",
        "E-commerce & Portfolio Sites",
        "Basic SEO & Site Optimization",
      ],
    },
    {
      icon: <Sparkles className="text-white" size={32} />,
      title: "Graphic Design",
      description:
        "Designing creative graphics for social media, personal projects, and nonprofit initiatives.",
      features: [
        "Canva Designs",
        "Social Media Posts & Banners",
        "Brand Identity Basics",
        "Digital Artwork/ Logos",
      ],
    },
  ];

  return (
    <section
      id="services"
      className="relative py-20 bg-[#202342] overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-96 h-96 bg-[#BD6AD2]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#FBBD8C]/10 rounded-full blur-3xl" />
      </div>

      {/* Floating stars */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.2, 1, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 2 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div ref={ref} className="relative max-w-7xl mx-auto px-6">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-['Cinzel_Decorative'] text-4xl md:text-5xl mb-4">
            <span className="bg-gradient-to-r from-[#BD6AD2] via-[#E094B0] to-[#FBBD8C] bg-clip-text text-transparent">
              Services
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#BD6AD2] via-[#E094B0] to-[#FBBD8C] mx-auto rounded-full mb-4" />
          <p className="text-white/60 max-w-2xl mx-auto font-['Arial_Nova',_Arial,_sans-serif]">
            Transforming ideas into reality with creativity and code
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              icon={service.icon}
              title={service.title}
              description={service.description}
              features={service.features}
              delay={0.2 + index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
