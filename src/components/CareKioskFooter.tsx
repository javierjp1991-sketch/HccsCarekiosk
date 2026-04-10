import { Home, HelpCircle, Phone } from "lucide-react";
import { motion } from "motion/react";

interface CareKioskFooterProps {
  onHome?: () => void;
  onHelp?: () => void;
  onContact?: () => void;
}

export default function CareKioskFooter({ onHome, onHelp, onContact }: CareKioskFooterProps) {
  return (
    <footer className="bg-hcc-blue px-4 sm:px-12 py-2 sm:py-4 flex items-center justify-around shadow-2xl relative z-20 shrink-0">
      <motion.button 
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={onHome}
        aria-label="Go to Home"
        className="flex flex-col items-center gap-1 text-hcc-gold transition-all"
      >
        <Home size={20} className="sm:w-6 sm:h-6" />
        <span className="text-[8px] sm:text-[10px] font-black uppercase tracking-widest">Home</span>
      </motion.button>
      
      <motion.button 
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={onHelp}
        aria-label="Get Help"
        className="flex flex-col items-center gap-1 text-white/70 hover:text-hcc-gold transition-all"
      >
        <HelpCircle size={20} className="sm:w-6 sm:h-6" />
        <span className="text-[8px] sm:text-[10px] font-black uppercase tracking-widest">Help</span>
      </motion.button>
      
      <motion.button 
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={onContact}
        aria-label="Contact Us"
        className="flex flex-col items-center gap-1 text-white/70 hover:text-hcc-gold transition-all"
      >
        <Phone size={20} className="sm:w-6 sm:h-6" />
        <span className="text-[8px] sm:text-[10px] font-black uppercase tracking-widest">Contact</span>
      </motion.button>
    </footer>
  );
}
