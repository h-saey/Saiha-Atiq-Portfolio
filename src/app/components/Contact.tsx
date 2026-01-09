import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef, useState } from "react";
import { SiBehance } from "react-icons/si";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Github,
  Linkedin,
  Instagram,
  // Target, // not needed
} from "lucide-react";
import contactImage from "@/assets/images/Contact_me.png";

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  // const handleSubmit = (e: React.FormEvent) => {
  //   e.preventDefault();
  //   console.log("Form submitted:", formData);
  //   setFormData({ name: "", email: "", subject: "", message: "" });
  // };

  // const handleChange = (
  //   e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  // ) => {
  //   setFormData({
  //     ...formData,
  //     [e.target.name]: e.target.value,
  //   });
  // };

  return (
    <section
      id="contact"
      className="relative py-20 bg-gradient-to-b from-[#202342] via-[#2a2050] to-[#1a1535] overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-10 w-96 h-96 bg-[#BD6AD2]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-[#FBBD8C]/10 rounded-full blur-3xl" />
      </div>

      {/* Stars */}
      <div className="absolute inset-0">
        {[...Array(40)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{ opacity: [0.2, 1, 0.2] }}
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
              Contact
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#BD6AD2] via-[#E094B0] to-[#FBBD8C] mx-auto rounded-full mb-4" />
          <p className="text-white/60 max-w-2xl mx-auto font-['Arial_Nova',_Arial,_sans-serif]">
            Let's work together to bring your ideas to life
          </p>
        </motion.div>

        {/* Side by Side: Illustration + Contact Info */}
        <div className="flex flex-col lg:flex-row gap-12 items-center justify-center">
          {/* Left Side - Illustration */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full lg:w-1/2 relative rounded-2xl overflow-hidden"
          >
            <img
              src={contactImage}
              alt="Contact illustration"
              className="w-full h-auto rounded-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#202342] via-transparent to-transparent" />
          </motion.div>

          {/* Right Side - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="w-full lg:w-1/2 space-y-8"
          >
            {/* Contact Info */}
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.4 }}
                className="flex items-center gap-4 text-white/80"
              >
                <div className="p-3 bg-gradient-to-br from-[#BD6AD2] to-[#E094B0] rounded-lg">
                  <Mail size={20} className="text-white" />
                </div>
                <div>
                  <p className="text-white/60 text-sm font-['Lekton']">Email</p>
                  <p className="font-['Arial_Nova',_Arial,_sans-serif]">
                    saeyha123456@gmail.com
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.5 }}
                className="flex items-center gap-4 text-white/80"
              >
                <div className="p-3 bg-gradient-to-br from-[#E094B0] to-[#FBBD8C] rounded-lg">
                  <Phone size={20} className="text-white" />
                </div>
                <div>
                  <p className="text-white/60 text-sm font-['Lekton']">Phone</p>
                  <p className="font-['Arial_Nova',_Arial,_sans-serif]">
                    +92 327 861 7051
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.6 }}
                className="flex items-center gap-4 text-white/80"
              >
                <div className="p-3 bg-gradient-to-br from-[#BD6AD2] to-[#FBBD8C] rounded-lg">
                  <MapPin size={20} className="text-white" />
                </div>
                <div>
                  <p className="text-white/60 text-sm font-['Lekton']">
                    Location
                  </p>
                  <p className="font-['Arial_Nova',_Arial,_sans-serif]">
                    Pakistan
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.7 }}
              className="flex gap-4"
            >
              {[
                {
                  icon: <Github size={20} />,
                  href: "https://github.com/h-saey",
                },
                {
                  icon: <Linkedin size={20} />,
                  href: "http://www.linkedin.com/in/saiha-atiq",
                },
                {
                  icon: <Instagram size={20} />,
                  href: "https://www.instagram.com/saeyha1/",
                },
                {
                  icon: <SiBehance size={20} />,
                  href: "https://www.behance.net/saihaatiq",
                },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -5 }}
                  className="p-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg hover:bg-gradient-to-br hover:from-[#BD6AD2] hover:to-[#E094B0] hover:border-transparent transition-all text-white"
                >
                  {social.icon}
                </motion.a>
              ))}
            </motion.div>

            {/* Form Section (Commented Out) */}
            {/*
            <form onSubmit={handleSubmit} className="space-y-6">
              ... all your inputs and submit button ...
            </form>
            */}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
