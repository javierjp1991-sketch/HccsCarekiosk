import HCCLogo from "@/src/components/HCCLogo";
import { Info } from "lucide-react";

export default function CareKioskHeader() {
  return (
    <header className="bg-white border-b border-hcc-blue/5 border-t-4 border-t-hcc-blue px-4 sm:px-10 py-2 sm:py-4 flex items-center justify-between shadow-sm relative z-20 shrink-0">
      <div className="flex items-center gap-4">
        <HCCLogo size={100} className="sm:hidden" />
        <HCCLogo size={140} className="hidden sm:block" />
      </div>
      
      <div className="flex items-center gap-4 sm:gap-8">
        <div className="text-right hidden sm:block border-r border-hcc-blue/10 pr-8">
          <p className="text-[11px] text-hcc-gray font-bold uppercase tracking-widest">Houston City College</p>
          <p className="text-base font-black text-hcc-blue tracking-tight uppercase">Student Care Kiosk</p>
        </div>
        <button 
          aria-label="Information"
          className="p-2 sm:p-3 rounded-lg sm:rounded-xl bg-hcc-blue text-white hover:bg-hcc-gold transition-all shadow-md"
        >
          <Info size={20} className="sm:w-6 sm:h-6" />
        </button>
      </div>
    </header>
  );
}
