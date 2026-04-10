import { motion } from "motion/react";
import HCCLogo, { HCCLogomark } from "@/src/components/HCCLogo";

interface CareAttractScreenProps {
  onTap: () => void;
}

export default function CareAttractScreen({ onTap }: CareAttractScreenProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onTap}
      role="button"
      aria-label="Welcome screen. Tap anywhere to begin."
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-hcc-blue text-white cursor-pointer overflow-hidden pt-24"
    >
      {/* Background Stylized Eagle */}
      <div className="absolute top-[85%] left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.07] pointer-events-none">
        <HCCLogomark size={4000} />
      </div>

      <motion.div
        animate={{
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="mb-8 sm:mb-12 mt-8 sm:mt-12 relative z-10"
      >
        <div className="bg-white shadow-2xl flex items-center justify-center rounded-full w-[260px] h-[260px] sm:w-[340px] sm:h-[340px] scale-[0.9] sm:scale-[1.1]">
          <HCCLogo size={200} className="sm:hidden" />
          <HCCLogo size={280} className="hidden sm:block" />
        </div>
      </motion.div>
      
      <div className="text-center relative z-10 px-6">
        <h2 className="text-3xl sm:text-5xl font-black mb-2 uppercase tracking-tight">Houston City College</h2>
        <h3 className="text-xl sm:text-3xl font-bold mb-6 text-hcc-gold uppercase tracking-widest">Student Care Kiosk</h3>
        <p className="text-lg sm:text-2xl font-medium opacity-80 animate-pulse uppercase tracking-widest">Tap anywhere to begin</p>
      </div>
    </motion.div>
  );
}
