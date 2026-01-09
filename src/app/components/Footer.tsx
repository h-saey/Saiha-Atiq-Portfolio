import { motion } from "motion/react";
import { Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative bg-[#1a1535] py-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Copyright */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-white/60 text-sm font-['Arial_Nova',_Arial,_sans-serif] flex items-center gap-2"
          >
            © 2026 Saiha Atiq. Made with
            <Heart size={16} className="text-[#E094B0] fill-[#E094B0]" />
            and Code
          </motion.p>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white/40 text-sm font-['Lekton']"
          >
            Crafting ideas with light and code
          </motion.p>

          {/* Signature */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <img src="/saiha.png" alt="SA Logo" className="h-15 w-auto" />
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
