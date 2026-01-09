import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface HennaDesign {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
}

export function HennaPage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const navigate = useNavigate();

  const hennaDesigns: HennaDesign[] = [
    {
      id: 27,
      title: "Modern Abstract Mehndi",
      description:
        "A delicate finger-focused henna design with fine lines and minimal detailing.",
      image: "/assets/images/Henna/Henna_27.jpg",
      category: "Modern",
    },
    {
      id: 28,
      title: "Modern Back Hand Elegance",
      description:
        "An artistic henna design blending modern creativity with fine strokes.",
      image: "/assets/images/Henna/Henna_28.jpg",
      category: "Modern",
    },
    {
      id: 29,
      title: "Festive Back Hand Design",
      description:
        "A stylish Back hand henna trail perfect for festive celebrations.",
      image: "/assets/images/Henna/Henna_29.jpg",
      category: "Festive",
    },
    {
      id: 30,
      title: "ButterFly Name Tattoo",
      description:
        "Minimal Butterfly with custom Name Henna Design for parties or fun",
      image: "/assets/images/Henna/Henna_30.jpg",
      category: "Tattoo",
    },
    {
      id: 31,
      title: "Bridal Palm Design",
      description:
        "A richly detailed bridal palm mehndi designed for Elegant wedding looks.",
      image: "/assets/images/Henna/Henna_31.jpg",
      category: "Bridal",
    },
    {
      id: 32,
      title: "Minimal tulip DEsign",
      description:
        "An artistic Minimal Tulip henna design blending Floral creativity.",
      image: "/assets/images/Henna/Henna_32.jpg",
      category: "Minimal",
    },
    {
      id: 33,
      title: "Traditional Engagement Henna DEsign",
      description:
        "An Engagement traditional design perfect for ladies going for a desi but Minimal look.",
      image: "/assets/images/Henna/Henna_33.jpg",
      category: "Engagement",
    },
    {
      id: 1,
      title: "Modern Eid Henna",
      description:
        "Contemporary henna styles featuring clean lines, creative layouts, and fresh patterns.",
      image: "/assets/images/Henna/Henna_1.jpg",
      category: "Modern",
    },
    {
      id: 2,
      title: "Elegant Sword Tattoo Design",
      description:
        "Beautiful Sword tattoo Wrapped around with elegant Vines of Roses",
      image: "/assets/images/Henna/Henna_2.jpg",
      category: "Tattoo",
    },
    {
      id: 3,
      title: "Roses Traditional Henna DEsign",
      description:
        "This Floral mehndi showcases Beautiful Rose designs and bold outlines with rich detail.",
      image: "/assets/images/Henna/Henna_3.jpg",
      category: "Modern",
    },
    {
      id: 4,
      title: "Eid Traditional Henna",
      description:
        "Classic henna patterns rooted in cultural motifs, symmetry, and timeless detailing.",
      image: "/assets/images/Henna/Henna_4.jpg",
      category: "Traditional",
    },
    {
      id: 5,
      title: "Traditional Full Hand Pattern",
      description:
        "An extended traditional mehndi flowing from wrist to palm with intricate detailing and symmetry.",
      image: "/assets/images/Henna/Henna_5.jpg",
      category: "Traditional",
    },
    {
      id: 6,
      title: "Minimal Bridal Hand Design",
      description:
        "A lighter bridal mehndi design with clean spacing and refined details for a soft and modern bridal appearance.",
      image: "/assets/images/Henna/Henna_6.jpg",
      category: "Bridal",
    },
    {
      id: 7,
      title: "Skull With Roses Henna",
      description:
        "A Playful floral mehndi design created for festive events, adding charm and Playfulness Spook to the hands.",
      image: "/assets/images/Henna/Henna_7.jpg",
      category: "Festive",
    },
    {
      id: 8,
      title: "Cultural Festive Mehndi",
      description:
        "A festive traditional design perfect for Eid, family gatherings, and cultural celebrations.",
      image: "/assets/images/Henna/Henna_8.jpg",
      category: "Traditional",
    },
    {
      id: 9,
      title: "Palestine Support Henna Design",
      description:
        "A beautiful intricate Design representing Palestininan Flag for full support",
      image: "/assets/images/Henna/Henna_9.jpg",
      category: "Festive",
    },
    {
      id: 10,
      title: "Floral Festive Mehndi",
      description:
        "A Floral festive design perfect for Parties, Fun Events, Friends Gathering",
      image: "/assets/images/Henna/Henna_10.jpg",
      category: "Festive",
    },
    {
      id: 11,
      title: "Independence Day Henna Design",
      description:
        "Henna Design Represnting the Happiness and celebration of Pakistan Independence Day",
      image: "/assets/images/Henna/Henna_11.jpg",
      category: "Festive",
    },
    {
      id: 12,
      title: "Minimal Modern Mehndi",
      description:
        "A clean and minimal henna design featuring fine lines and open spaces for a modern aesthetic.",
      image: "/assets/images/Henna/Henna_12.png",
      category: "Modern",
    },
    {
      id: 13,
      title: "Arabic Bridal Fusion",
      description:
        "A fusion of Arabic flowy strokes with traditional bridal filling, creating a balanced and modern bridal look.",
      image: "/assets/images/Henna/Henna_13.png",
      category: "Bridal",
    },
    {
      id: 14,
      title: "Traditional Palm Pattern",
      description:
        "A lively mehndi design with playful patterns, ideal for parties, engagements, and celebrations.",
      image: "/assets/images/Henna/Henna_14.png",
      category: "Traditional",
    },
    {
      id: 15,
      title: "Traditional Palm Pattern",
      description:
        "A lively mehndi design with playful patterns, ideal for parties, engagements, and celebrations.",
      image: "/assets/images/Henna/Henna_15.png",
      category: "Traditional",
    },
    {
      id: 16,
      title: "Minimalist Back hand Design",
      description:
        "A refined palm design using minimal strokes for a chic modern feel.",
      image: "/assets/images/Henna/Henna_16.png",
      category: "Minimal",
    },
    {
      id: 17,
      title: "Modern Festive Fusion",
      description:
        "A blend of modern strokes and festive elements, creating a fresh and stylish mehndi look.",
      image: "/assets/images/Henna/Henna_17.png",
      category: "Modern",
    },
    {
      id: 18,
      title: "Bold Celebration Mehndi",
      description:
        "A stylish Bold Half Hand mehndi design perfect for casual and modern looks.",
      image: "/assets/images/Henna/Henna_18.png",
      category: "Modern",
    },
    {
      id: 19,
      title: "Traditional Palm Pattern",
      description:
        "A classic palm-focused mehndi design featuring small roses and fine lines rooted in cultural tradition.",
      image: "/assets/images/Henna/Henna_19.png",
      category: "Traditional",
    },
    {
      id: 20,
      title: "Full Coverage Traditional Mehndi",
      description:
        "Intricately packed patterns covering the hands and wrists, designed for Girls who love bold traditional designs.",
      image: "/assets/images/Henna/Henna_20.png",
      category: "Traditional",
    },
    {
      id: 21,
      title: "Cute Star Henna Design",
      description:
        "A cute galaxy themed mehndi design perfect for casual and modern looks.",
      image: "/assets/images/Henna/Henna_21.png",
      category: "Tattoo",
    },
    {
      id: 22,
      title: "Minimalist Palm Design",
      description:
        "A refined Back Palm design using minimal strokes for a chic modern feel.",
      image: "/assets/images/Henna/Henna_22.png",
      category: "Modern",
    },
    {
      id: 23,
      title: "Full Coverage Bridal Mehndi",
      description:
        "Intricately packed patterns covering the hands and wrists, designed for brides who love bold traditional designs.",
      image: "/assets/images/Henna/Henna_23.jpeg",
      category: "Bridal",
    },
    {
      id: 24,
      title: "Traditional Eid Henna",
      description:
        "A classic palm design inspired by traditional mehndi artistry.",
      image: "/assets/images/Henna/Henna_24.jpg",
      category: "Traditional",
    },
    {
      id: 25,
      title: "Traditional Engagement Henna",
      description: "A Traditional Fingers Engagement design",
      image: "/assets/images/Henna/Henna_25.jpg",
      category: "Traditional",
    },
    {
      id: 26,
      title: "Modern Floral Mehndi",
      description:
        "A Complex modern henna design featuring Floral patterns and Leaves.",
      image: "/assets/images/Henna/Henna_26.png",
      category: "Modern",
    },
  ];

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
          className="mb-8 flex cursor-pointer items-center gap-2 text-white/80 hover:text-white transition-colors font-['Lekton']"
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
              Henna Art Gallery
            </span>
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-[#BD6AD2] via-[#E094B0] to-[#FBBD8C] mx-auto rounded-full mb-6" />
          <p className="text-white/70 max-w-3xl mx-auto text-lg font-['Arial_Nova',_Arial,_sans-serif]">
            Explore my collection of intricate henna designs, from traditional
            bridal mehndi to contemporary patterns. Each design is crafted with
            precision and artistry, celebrating the ancient art of henna.
          </p>
        </motion.div>

        {/* Henna Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {hennaDesigns.map((design, index) => (
            <motion.div
              key={design.id}
              initial={{ opacity: 0, scale: 0.9 }}
              // animate={isInView ? { opacity: 1, scale: 1 } : {}}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:border-white/30 transition-all"
            >
              {/* Image */}
              <div className="relative h-80 overflow-hidden">
                <ImageWithFallback
                  src={design.image}
                  alt={design.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#202342] via-transparent to-transparent opacity-60" />

                {/* Category Tag */}
                <div className="absolute top-4 right-4 px-4 py-2 bg-gradient-to-r from-[#BD6AD2] to-[#E094B0] rounded-full text-white text-sm font-['Lekton']">
                  {design.category}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl text-white mb-2 font-['Cinzel_Decorative']">
                  {design.title}
                </h3>
                <p className="text-white/60 text-sm font-['Arial_Nova',_Arial,_sans-serif]">
                  {design.description}
                </p>

                {/* Decorative line */}
                <div className="mt-4 h-1 w-0 group-hover:w-full bg-gradient-to-r from-[#BD6AD2] via-[#E094B0] to-[#FBBD8C] rounded-full transition-all duration-500" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* About Henna Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          // animate={isInView ? { opacity: 1, y: 0 } : {}}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-20 bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 md:p-12"
        >
          <h2 className="font-['Cinzel_Decorative'] text-3xl md:text-4xl mb-6 text-center">
            <span className="bg-gradient-to-r from-[#BD6AD2] via-[#E094B0] to-[#FBBD8C] bg-clip-text text-transparent">
              My Henna Journey
            </span>
          </h2>
          <p className="text-white/70 text-center max-w-3xl mx-auto leading-relaxed font-['Arial_Nova',_Arial,_sans-serif]">
            With years of experience in the art of henna, I specialize in
            creating unique designs that blend traditional techniques with
            modern aesthetics. From intricate bridal mehndi to contemporary
            patterns, each design is carefully crafted to celebrate special
            moments and create lasting memories. Whether it's for weddings,
            festivals, or personal expression, I bring passion and precision to
            every creation.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
