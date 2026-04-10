import React from "react";
import { 
  Utensils, 
  Home, 
  Stethoscope, 
  Briefcase, 
  GraduationCap, 
  HandHelping,
  ShieldCheck,
  Bus
} from "lucide-react";
import { motion } from "motion/react";

interface Resource {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  url: string;
  color: string;
}

const resources: Resource[] = [
  {
    id: "food",
    title: "Food Assistance",
    description: "Local food banks and meal programs",
    icon: <Utensils size={32} />,
    url: "https://www.hccs.edu/support-services/counseling/hcc-cares/food--hunger/",
    color: "bg-white text-hcc-blue border-hcc-blue/10 hover:border-hcc-gold"
  },
  {
    id: "housing",
    title: "Housing Support",
    description: "Shelters and emergency housing",
    icon: <Home size={32} />,
    url: "https://www.hccs.edu/support-services/counseling/hcc-cares/emergency-shelters--housing/",
    color: "bg-white text-hcc-blue border-hcc-blue/10 hover:border-hcc-gold"
  },
  {
    id: "health",
    title: "Health Services",
    description: "Free clinics and mental health support",
    icon: <Stethoscope size={32} />,
    url: "https://www.hccs.edu/support-services/counseling/hcc-cares/healthcare/",
    color: "bg-white text-hcc-blue border-hcc-blue/10 hover:border-hcc-gold"
  },
  {
    id: "jobs",
    title: "Job Training",
    description: "Employment resources and workshops",
    icon: <Briefcase size={32} />,
    url: "https://www.hccs.edu/support-services/counseling/hcc-cares/loss-of-job/",
    color: "bg-white text-hcc-blue border-hcc-blue/10 hover:border-hcc-gold"
  },
  {
    id: "education",
    title: "Child Care",
    description: "Support for student parents",
    icon: <GraduationCap size={32} />,
    url: "https://www.hccs.edu/support-services/support-for-student-parents/childcare-parenting-pregnancy/",
    color: "bg-white text-hcc-blue border-hcc-blue/10 hover:border-hcc-gold"
  },
  {
    id: "legal",
    title: "Drug and Alcohol",
    description: "Support and recovery resources",
    icon: <ShieldCheck size={32} />,
    url: "https://www.hccs.edu/support-services/drug--alcohol-abuse-prevention/",
    color: "bg-white text-hcc-blue border-hcc-blue/10 hover:border-hcc-gold"
  },
  {
    id: "transport",
    title: "Transportation",
    description: "Bus passes and transit assistance",
    icon: <Bus size={32} />,
    url: "https://www.hccs.edu/support-services/counseling/hcc-cares/transportation/",
    color: "bg-white text-hcc-blue border-hcc-blue/10 hover:border-hcc-gold"
  },
  {
    id: "community",
    title: "Recently Incarcerated",
    description: "Re-entry support and resources",
    icon: <HandHelping size={32} />,
    url: "https://www.hccs.edu/support-services/counseling/hcc-cares/recently-incarcerated/",
    color: "bg-white text-hcc-blue border-hcc-blue/10 hover:border-hcc-gold"
  }
];

interface CareResourceGridProps {
  onOpenUrl: (url: string, title: string) => void;
}

export default function CareResourceGrid({ onOpenUrl }: CareResourceGridProps) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 min-h-0 overflow-y-auto py-2 pr-2">
      {resources.map((resource, index) => (
        <motion.button
          key={resource.id}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ 
            delay: index * 0.05,
            type: "spring",
            stiffness: 120,
            damping: 15 
          }}
          whileHover={{ 
            y: -8,
            scale: 1.02,
            borderColor: "var(--color-hcc-gold)",
            boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
          }}
          whileTap={{ scale: 0.96 }}
          onClick={() => onOpenUrl(resource.url, resource.title)}
          aria-label={`Open ${resource.title} resource`}
          className="group relative flex flex-col items-center justify-center text-center p-4 sm:p-8 rounded-[1.5rem] sm:rounded-[3rem] bg-white border-2 border-hcc-blue/5 transition-all shadow-sm overflow-hidden min-h-[160px] sm:aspect-square lg:aspect-auto lg:min-h-[220px]"
        >
          {/* Subtle accent corner */}
          <div className="absolute top-0 right-0 w-12 sm:w-20 h-12 sm:h-20 bg-hcc-gold/5 rounded-bl-[1.5rem] sm:rounded-bl-[3rem] group-hover:bg-hcc-gold/20 transition-colors duration-500" />
          
          <div className="relative mb-3 sm:mb-6 p-3 sm:p-5 rounded-xl sm:rounded-2xl bg-hcc-blue/5 text-hcc-blue group-hover:text-hcc-gold group-hover:bg-hcc-blue group-hover:scale-110 transition-all duration-500 shrink-0">
            {React.cloneElement(resource.icon as React.ReactElement, { size: 32 })}
          </div>
          
          <div className="relative flex flex-col items-center min-h-0">
            <h3 className="text-sm sm:text-xl font-black text-hcc-blue tracking-tight leading-tight uppercase">
              {resource.title}
            </h3>
            <p className="mt-2 text-[10px] sm:text-sm text-hcc-gray font-medium leading-tight px-2 line-clamp-2 sm:line-clamp-none">
              {resource.description}
            </p>
          </div>
          
          {/* Bottom indicator */}
          <div className="absolute bottom-3 sm:bottom-6 w-6 sm:w-10 h-1.5 bg-hcc-blue/10 rounded-full group-hover:bg-hcc-gold group-hover:w-16 transition-all duration-500" />
        </motion.button>
      ))}
    </div>
  );
}
