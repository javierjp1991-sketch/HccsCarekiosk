import { motion } from "motion/react";
import { ArrowRight, ClipboardCheck } from "lucide-react";

interface CareSurveyScreenProps {
  onComplete: () => void;
}

export default function CareSurveyScreen({ onComplete }: CareSurveyScreenProps) {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[60] bg-white flex flex-col"
    >
      {/* Header */}
      <div className="bg-hcc-blue text-white p-4 sm:p-6 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-lg">
        <div className="flex items-center gap-3 sm:gap-4">
          <div className="bg-hcc-gold p-2 rounded-lg text-hcc-blue shrink-0">
            <ClipboardCheck size={24} className="sm:w-7 sm:h-7" />
          </div>
          <div>
            <h2 className="text-lg sm:text-2xl font-black uppercase tracking-tight leading-tight">Student Support Survey</h2>
            <p className="text-white/70 text-xs sm:text-sm font-medium">Please take a moment to help us improve our services.</p>
          </div>
        </div>
        
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onComplete}
          className="w-full sm:w-auto bg-hcc-gold text-hcc-blue px-6 py-3 rounded-full font-black flex items-center justify-center gap-2 shadow-md uppercase tracking-widest text-xs sm:text-sm"
        >
          Continue to Resources
          <ArrowRight size={16} className="sm:w-[18px] sm:h-[18px]" />
        </motion.button>
      </div>

      {/* Survey Iframe */}
      <div className="flex-1 bg-gray-50 relative">
        <iframe 
          src="https://hccs.co1.qualtrics.com/jfe/form/SV_25WyNx7NwMRz1FH"
          className="w-full h-full border-none"
          title="HCC Student Support Survey"
        />
        
        {/* Floating action button at bottom for easier access on kiosks */}
        <div className="absolute bottom-4 right-4 sm:bottom-8 sm:right-8">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={onComplete}
            className="bg-hcc-blue text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-black flex items-center gap-2 sm:gap-3 shadow-2xl uppercase tracking-widest text-sm sm:text-lg border-2 border-hcc-gold"
          >
            I'm Finished / Skip
            <ArrowRight size={20} className="sm:w-6 sm:h-6" />
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}
