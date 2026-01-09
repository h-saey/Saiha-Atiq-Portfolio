import { motion } from "motion/react";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { projects } from "../data/projects";
import { useState } from "react";

export function ProjectDetailPage() {
  const { slug } = useParams(); // <-- get slug from URL
  const navigate = useNavigate();

  // Find the project by slug
  const project = projects.find(
    (p) => p.slug.toLowerCase() === slug?.toLowerCase()
  );

  //
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const closeModal = () => setSelectedImage(null);
  //

  if (!project) {
    return (
      <div className="min-h-screen bg-[#202342] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl text-white mb-4">Project Not Found</h1>
          <button
            onClick={() => navigate("/portfolio")}
            className="text-[#E094B0] hover:text-white transition-colors"
          >
            Back to Portfolio
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#202342] pt-24 pb-20">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-40 left-10 w-96 h-96 bg-[#BD6AD2]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-40 right-10 w-96 h-96 bg-[#FBBD8C]/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6">
        {/* Back Button */}
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={() => navigate("/portfolio")}
          className="cursor-poniter mb-8 flex items-center gap-2 text-white/80 hover:text-white transition-colors font-['Lekton'] cursor-pointer"
        >
          <ArrowLeft size={20} />
          Back to Portfolio
        </motion.button>

        {/* Project Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="flex flex-wrap items-center gap-4 mb-4">
            <h1 className="font-['Cinzel_Decorative'] text-4xl md:text-5xl">
              <span className="bg-gradient-to-r from-[#BD6AD2] via-[#E094B0] to-[#FBBD8C] bg-clip-text text-transparent">
                {project.title}
              </span>
            </h1>
            <span className="px-4 py-2 bg-gradient-to-r from-[#BD6AD2] to-[#E094B0] rounded-full text-white text-sm font-['Lekton']">
              {project.category}
            </span>
          </div>
          <p
            className="text-white/70 text-lg font-['Arial_Nova',_Arial,_sans-serif] max-w-3xl"
            dangerouslySetInnerHTML={{ __html: project.longDescription }}
          />

          {/* <p className="text-white/70 text-lg font-['Arial_Nova',_Arial,_sans-serif] max-w-3xl">
            {project.longDescription}
          </p> */}

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 mt-6">
            {project.liveUrl && (
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href={project.liveUrl}
                className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#BD6AD2] via-[#E094B0] to-[#FBBD8C] rounded-full text-white font-['Lekton'] hover:shadow-lg hover:shadow-[#BD6AD2]/50 transition-shadow"
              >
                <ExternalLink size={18} />
                View Live
              </motion.a>
            )}
            {project.githubUrl && (
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href={project.githubUrl}
                className="flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/30 rounded-full text-white font-['Lekton'] hover:bg-white/20 transition-colors"
              >
                <Github size={18} />
                View Code
              </motion.a>
            )}
          </div>
        </motion.div>

        {/* Main Project Image */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12 rounded-2xl overflow-hidden border border-white/10"
        >
          <ImageWithFallback
            src={project.image}
            alt={project.title}
            className="w-full h-auto"
          />
        </motion.div>

        {/* Tools Used */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-12 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8"
        >
          <h2 className="font-['Cinzel_Decorative'] text-2xl md:text-3xl mb-6">
            <span className="bg-gradient-to-r from-[#BD6AD2] via-[#E094B0] to-[#FBBD8C] bg-clip-text text-transparent">
              Tools & Technologies
            </span>
          </h2>
          <div className="flex flex-wrap gap-3">
            {project.tools.map((tool) => (
              <span
                key={tool}
                className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-white/80 font-['Lekton'] text-sm"
              >
                {tool}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Additional Images */}
        {/* Project Gallery - Uniform */}
        {/* {project.images.length > 1 && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-12"
          >
            <h2 className="font-['Cinzel_Decorative'] text-2xl md:text-3xl mb-8">
              <span className="bg-gradient-to-r from-[#BD6AD2] via-[#E094B0] to-[#FBBD8C] bg-clip-text text-transparent">
                Project Gallery
              </span>
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {project.images.map((image, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="rounded-2xl overflow-hidden border border-white/10 hover:border-white/30 transition-all"
                >
                  <ImageWithFallback
                    src={image}
                    alt={`${project.title} - ${index + 1}`}
                    className="w-full h-64 sm:h-48 md:h-56 lg:h-64 object-cover"
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        )} */}

        {project.images.length > 1 && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-12"
          >
            <h2 className="font-['Cinzel_Decorative'] text-2xl md:text-3xl mb-8">
              <span className="bg-gradient-to-r from-[#BD6AD2] via-[#E094B0] to-[#FBBD8C] bg-clip-text text-transparent">
                Project Gallery
              </span>
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {project.images.map((image, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="rounded-2xl overflow-hidden border border-white/10 hover:border-white/30 transition-all cursor-pointer"
                  onClick={() => setSelectedImage(image)} // <-- added click handler
                >
                  <ImageWithFallback
                    src={image}
                    alt={`${project.title} - ${index + 1}`}
                    className="w-full h-64 sm:h-48 md:h-56 lg:h-64 object-cover"
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {selectedImage && (
          <div
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
            onClick={closeModal}
          >
            <motion.img
              src={selectedImage}
              alt="Selected"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="max-h-full max-w-full rounded-xl shadow-lg"
            />
          </div>
        )}

        {/* Navigation to other projects */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex justify-center"
        >
          <button
            onClick={() => navigate("/portfolio")}
            className="px-8 py-4 bg-white/10 backdrop-blur-sm border cursor-pointer border-white/30 rounded-full text-white font-['Lekton'] hover:bg-white/20 transition-colors"
          >
            View All Projects
          </button>
        </motion.div>
      </div>
    </div>
  );
}
