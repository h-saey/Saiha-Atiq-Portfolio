import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef, useState } from "react";
import { ExternalLink, ArrowLeft } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { useNavigate } from "react-router-dom";
import { projects } from "../data/projects";

export function PortfolioPage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const [activeFilter, setActiveFilter] = useState("All");
  const navigate = useNavigate();

  const categories = [
    "All",
    "UI/UX",
    "Front-end",
    "Graphic Design",
    "WordPress",
  ];

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <div className="min-h-screen bg-[#202342] pt-24 pb-20">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-40 left-10 w-96 h-96 bg-[#BD6AD2]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-40 right-10 w-96 h-96 bg-[#FBBD8C]/10 rounded-full blur-3xl" />
      </div>

      <div ref={ref} className="relative max-w-7xl mx-auto px-6">
        {/* Back Button */}
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={() => navigate("/")}
          className="mb-8 flex items-center gap-2 text-white/80 hover:text-white transition-colors font-['Lekton'] cursor-pointer"
        >
          <ArrowLeft size={20} />
          Back to Home
        </motion.button>

        {/* Page Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="font-['Cinzel_Decorative'] text-5xl md:text-6xl mb-6">
            <span className="bg-gradient-to-r from-[#BD6AD2] via-[#E094B0] to-[#FBBD8C] bg-clip-text text-transparent">
              All Projects
            </span>
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-[#BD6AD2] via-[#E094B0] to-[#FBBD8C] mx-auto rounded-full mb-6" />
          <p className="text-white/70 max-w-3xl mx-auto text-lg font-['Arial_Nova',_Arial,_sans-serif]">
            Explore my complete portfolio of UI/UX designs, front-end
            development, and graphic design projects.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
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
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
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
                    <ExternalLink className="text-white" size={18} />
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
        </div>
      </div>
    </div>
  );
}
