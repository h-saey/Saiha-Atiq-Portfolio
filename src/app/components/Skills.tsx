import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import {
  CodeXml,
  Palette,
  Globe,
  Figma,
  Coffee,
  Book,
  Heart,
  Camera,
} from "lucide-react";

interface SkillBarProps {
  name: string;
  percentage: number;
  delay: number;
}

function SkillBar({ name, percentage, delay }: SkillBarProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div ref={ref} className="space-y-2">
      <div className="flex justify-between items-center">
        <span className="text-white/80 font-['Lekton']">{name}</span>
        <span className="text-white/60 font-['Lekton']">{percentage}%</span>
      </div>
      <div className="h-2 bg-white/10 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: `${percentage}%` } : {}}
          transition={{ duration: 1, delay, ease: "easeOut" }}
          className="h-full bg-gradient-to-r from-[#BD6AD2] via-[#E094B0] to-[#FBBD8C] rounded-full"
        />
      </div>
    </div>
  );
}

export function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const softwareSkills = [
    { name: "Figma", percentage: 50 },
    { name: "Canva", percentage: 85 },
    { name: "Git / Github", percentage: 50 },
    { name: "Visual Studio", percentage: 85 },
  ];

  const designSkills = [
    { name: "UI/UX Design", percentage: 30 },
    { name: "Graphic Design", percentage: 65 },
    { name: "Social Media Design", percentage: 75 },
    { name: "Brand Identity Basics", percentage: 55 },
    { name: "Design Principles & Color Theory", percentage: 60 },
  ];

  const codingSkills = [
    { name: "HTML", percentage: 75 },
    { name: "CSS", percentage: 70 },
    { name: "Tailwind CSS", percentage: 60 },
    { name: "Bootstrap", percentage: 55 },
    { name: "JavaScript", percentage: 45 },
    { name: "React", percentage: 35 },
    { name: "Framer Motion", percentage: 30 },
    { name: "GSAP", percentage: 25 },
    { name: "WordPress", percentage: 50 },
  ];

  const languages = ["English", "Urdu"];
  const personalSkills = [
    "Creative Thinking",
    "Problem Solving",
    "Attention to Detail",
    "Adaptability",
    "Self-Learning",
  ];

  const hobbies = ["Henna Art", "Digital Art", "Reading", "Design Exploration"];

  return (
    <section
      id="skills"
      className="relative py-20 bg-gradient-to-b from-[#202342] via-[#2a2050] to-[#202342] overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-96 h-96 bg-[#BD6AD2]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#FBBD8C]/5 rounded-full blur-3xl" />
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
              My Skills
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#BD6AD2] via-[#E094B0] to-[#FBBD8C] mx-auto rounded-full" />
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Software Skills */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-gradient-to-br from-[#BD6AD2] to-[#E094B0] rounded-lg">
                <Figma className="text-white" size={24} />
              </div>
              <h3 className="font-['Cinzel_Decorative'] text-xl text-white">
                Software Skills
              </h3>
            </div>
            <div className="space-y-4">
              {softwareSkills.map((skill, index) => (
                <SkillBar
                  key={skill.name}
                  name={skill.name}
                  percentage={skill.percentage}
                  delay={0.2 + index * 0.1}
                />
              ))}
            </div>
          </motion.div>

          {/* Design Skills */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-gradient-to-br from-[#E094B0] to-[#FBBD8C] rounded-lg">
                <Palette className="text-white" size={24} />
              </div>
              <h3 className="font-['Cinzel_Decorative'] text-xl text-white">
                Design Skills
              </h3>
            </div>
            <div className="space-y-4">
              {designSkills.map((skill, index) => (
                <SkillBar
                  key={skill.name}
                  name={skill.name}
                  percentage={skill.percentage}
                  delay={0.3 + index * 0.1}
                />
              ))}
            </div>
          </motion.div>

          {/* Coding Skills */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-gradient-to-br from-[#BD6AD2] to-[#FBBD8C] rounded-lg">
                <CodeXml className="text-white" size={24} />
              </div>
              <h3 className="font-['Cinzel_Decorative'] text-xl text-white">
                Coding Skills
              </h3>
            </div>
            <div className="space-y-4">
              {codingSkills.map((skill, index) => (
                <SkillBar
                  key={skill.name}
                  name={skill.name}
                  percentage={skill.percentage}
                  delay={0.4 + index * 0.1}
                />
              ))}
            </div>
          </motion.div>

          {/* Languages */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-gradient-to-br from-[#E094B0] to-[#FB968B] rounded-lg">
                <Globe className="text-white" size={24} />
              </div>
              <h3 className="font-['Cinzel_Decorative'] text-xl text-white">
                Languages
              </h3>
            </div>
            <div className="space-y-3">
              {languages.map((lang, index) => (
                <motion.div
                  key={lang}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className="flex items-center gap-2 text-white/80 font-['Lekton']"
                >
                  <div className="w-2 h-2 bg-gradient-to-r from-[#BD6AD2] to-[#E094B0] rounded-full" />
                  {lang}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Personal Skills */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-gradient-to-br from-[#FBBD8C] to-[#FB968B] rounded-lg">
                <Heart className="text-white" size={24} />
              </div>
              <h3 className="font-['Cinzel_Decorative'] text-xl text-white">
                Personal Skills
              </h3>
            </div>
            <div className="space-y-3">
              {personalSkills.map((skill, index) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  className="flex items-center gap-2 text-white/80 font-['Lekton']"
                >
                  <div className="w-2 h-2 bg-gradient-to-r from-[#E094B0] to-[#FBBD8C] rounded-full" />
                  {skill}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Hobbies & Interests */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-gradient-to-br from-[#BD6AD2] to-[#E094B0] rounded-lg">
                <Camera className="text-white" size={24} />
              </div>
              <h3 className="font-['Cinzel_Decorative'] text-xl text-white">
                Hobbies
              </h3>
            </div>
            <div className="space-y-3">
              {hobbies.map((hobby, index) => (
                <motion.div
                  key={hobby}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.7 + index * 0.1 }}
                  className="flex items-center gap-2 text-white/80 font-['Lekton']"
                >
                  <div className="w-2 h-2 bg-gradient-to-r from-[#BD6AD2] to-[#FBBD8C] rounded-full" />
                  {hobby}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Experience & Education */}
        <div className="grid md:grid-cols-2 gap-8 mt-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-gradient-to-br from-[#BD6AD2] to-[#E094B0] rounded-lg">
                <Coffee className="text-white" size={24} />
              </div>
              <h3 className="font-['Cinzel_Decorative'] text-xl text-white">
                Experience
              </h3>
            </div>
            <div className="space-y-4">
              <div className="border-l-2 border-[#E094B0] pl-4 mt-6">
                <p className="text-[#FBBD8C] font-['Lekton']">2023 – Present</p>
                <h4 className="text-white">
                  Aspiring Frontend Developer & UI/UX Designer
                </h4>
                <p className="text-white/60 text-sm mt-1">
                  Learning React, Tailwind CSS, UI/UX design principles, and
                  WordPress through personal and academic projects
                </p>
              </div>
              <div className="border-l-2 border-[#BD6AD2] pl-4">
                <p className="text-[#E094B0] font-['Lekton']">2023 – Present</p>
                <h4 className="text-white">Volunteer Graphic Designer</h4>
                <p className="text-white/60 text-sm mt-1">
                  Designing social media posts, event creatives, and digital
                  content using Canva for a nonprofit organization
                </p>
              </div>

              <div className="border-l-2 border-[#BD6AD2] pl-4 mt-6">
                <p className="text-[#E094B0] font-['Lekton']">2021 – Present</p>
                <h4 className="text-white">Creative Designer (Canva)</h4>
                <p className="text-white/60 text-sm mt-1">
                  Social media design, basic brand visuals, and digital graphics
                  for practice and small projects
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-gradient-to-br from-[#E094B0] to-[#FBBD8C] rounded-lg">
                <Book className="text-white" size={24} />
              </div>
              <h3 className="font-['Cinzel_Decorative'] text-xl text-white">
                Education
              </h3>
            </div>
            <div className="space-y-4">
              <div className="border-l-2 border-[#BD6AD2] pl-4">
                <p className="text-[#E094B0] font-['Lekton']">
                  2022 – 2026 (Expected)
                </p>
                <h4 className="text-white">
                  Bachelor of Computer Science (BCS)
                </h4>
                <p className="text-white/60 text-sm mt-1">
                  University of the Punjab — Gujranwala Campus
                </p>
                <p className="text-white/60 text-sm mt-1">CGPA: 3.7 / 4.0</p>
                <p className="text-white/60 text-sm mt-1">
                  Relevant Coursework: Web Development, Software Engineering,
                  Database Systems
                </p>
              </div>

              <div className="border-l-2 border-[#E094B0] pl-4 mt-6">
                <p className="text-[#FBBD8C] font-['Lekton']">2020 – 2022</p>
                <h4 className="text-white">FSc – Pre-Medical</h4>
                <p className="text-white/60 text-sm mt-1">
                  Punjab College — Gujranwala
                </p>
                <p className="text-white/60 text-sm mt-1">Marks: 1051 / 1100</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
