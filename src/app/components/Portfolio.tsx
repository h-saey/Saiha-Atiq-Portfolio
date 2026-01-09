import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef, useState } from "react";
import { ExternalLink } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useNavigate } from "react-router-dom";
import { projects } from "../data/projects";

interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
}

export function Portfolio() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [activeFilter, setActiveFilter] = useState("All");
  const navigate = useNavigate();

  const categories = [
    "All",
    "UI/UX",
    "Front-end",
    "Graphic Design",
    "WordPress",
  ];

  // Show only first 6 projects as featured
  const featuredProjects = projects.slice(0, 6);

  const filteredProjects =
    activeFilter === "All"
      ? featuredProjects
      : featuredProjects.filter((project) => project.category === activeFilter);

  return (
    <section
      id="portfolio"
      className="relative py-20 bg-gradient-to-b from-[#202342] via-[#2a2050] to-[#202342] overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-10 w-96 h-96 bg-[#BD6AD2]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-[#FBBD8C]/5 rounded-full blur-3xl" />
      </div>

      <div ref={ref} className="relative max-w-7xl mx-auto px-6">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-['Cinzel_Decorative'] text-4xl md:text-5xl mb-4">
            <span className="bg-gradient-to-r from-[#BD6AD2] via-[#E094B0] to-[#FBBD8C] bg-clip-text text-transparent">
              PORTFOLIO
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#BD6AD2] via-[#E094B0] to-[#FBBD8C] mx-auto rounded-full mb-4" />
          <p className="text-white/60 max-w-2xl mx-auto font-['Arial_Nova',_Arial,_sans-serif]">
            Explore my latest work and creative projects
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-6 py-2 rounded-full cursor-pointer font-['Lekton'] transition-all ${
                activeFilter === category
                  ? "bg-gradient-to-r from-[#BD6AD2] via-[#E094B0] to-[#FBBD8C] text-white shadow-lg shadow-[#BD6AD2]/30"
                  : "bg-white/5 text-white/60 hover:bg-white/10 hover:text-white border border-white/10"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              onClick={() => navigate(`/portfolio/${project.slug}`)}
              className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:border-white/30 transition-all cursor-pointer"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#202342] via-transparent to-transparent opacity-60" />

                {/* Hover overlay with glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#BD6AD2]/0 via-[#E094B0]/20 to-[#FBBD8C]/0 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="text-xl text-white mb-1 font-['Cinzel_Decorative']">
                      {project.title}
                    </h3>
                    <p className="text-[#E094B0] text-sm font-['Lekton']">
                      {project.category}
                    </p>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="p-2 bg-gradient-to-br from-[#BD6AD2] to-[#E094B0] rounded-lg opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer"
                  >
                    <ExternalLink
                      className="text-white cursor-pointer"
                      size={18}
                    />
                  </motion.button>
                </div>
                <p className="text-white/60 text-sm font-['Arial_Nova',_Arial,_sans-serif]">
                  {project.description}
                </p>

                {/* Decorative line */}
                <div className="mt-4 h-1 w-0 group-hover:w-full bg-gradient-to-r from-[#BD6AD2] via-[#E094B0] to-[#FBBD8C] rounded-full transition-all duration-500" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* See More Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex justify-center mt-12"
        >
          <button
            onClick={() => navigate("/portfolio")}
            className="group relative px-8 py-4 bg-gradient-to-r from-[#BD6AD2] via-[#E094B0] to-[#FBBD8C] rounded-full text-white font-['Lekton'] overflow-hidden transition-all hover:shadow-lg hover:shadow-[#BD6AD2]/50 hover:scale-105 cursor-pointer"
          >
            <span className="relative z-10">See More Projects</span>
          </button>
        </motion.div>
      </div>
    </section>
  );
}
