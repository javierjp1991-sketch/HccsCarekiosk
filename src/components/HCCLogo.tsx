import React from "react";
import hccLogo from "../assets/hcc-logo.svg";

interface HCCLogoProps {
  variant?: "primary" | "secondary" | "white" | "gold";
  className?: string;
  size?: number;
}

export default function HCCLogo({ variant = "primary", className = "", size }: HCCLogoProps) {
  return (
    <div className={`flex items-center justify-center ${className}`} style={size ? { width: size } : undefined}>
      <img 
        src={hccLogo} 
        alt="Houston City College Logo" 
        className="w-full h-auto object-contain"
      />
    </div>
  );
}

export function HCCLogomark({ size = 100, className = "" }: { size?: number; className?: string }) {
  return (
    <div className={`flex items-center justify-center ${className}`} style={{ width: size }}>
      <img 
        src={hccLogo} 
        alt="HCC Eagle Logomark" 
        className="w-full h-auto object-contain"
      />
    </div>
  );
}
