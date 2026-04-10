import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { HCCLogomark } from "@/src/components/HCCLogo";
import CareAttractScreen from "@/src/components/CareAttractScreen";
import CareSurveyScreen from "@/src/components/CareSurveyScreen";
import CareKioskHeader from "@/src/components/CareKioskHeader";
import CareKioskFooter from "@/src/components/CareKioskFooter";
import CareResourceGrid from "@/src/components/CareResourceGrid";
import EmbeddedBrowserWithPrint from "@/src/components/EmbeddedBrowserWithPrint";

const IDLE_TIMEOUT = 90000; // 90 seconds

type ScreenState = "attract" | "survey" | "home";

export default function App() {
  const [screenState, setScreenState] = useState<ScreenState>("attract");
  const [lastActivity, setLastActivity] = useState(Date.now());
  const [embeddedUrl, setEmbeddedUrl] = useState<string | null>(null);
  const [embeddedTitle, setEmbeddedTitle] = useState<string>("");

  const handleWake = () => {
    setScreenState("survey");
    setLastActivity(Date.now());
  };

  const handleCompleteSurvey = () => {
    setScreenState("home");
    setLastActivity(Date.now());
  };

  const handleActivity = () => {
    setLastActivity(Date.now());
  };

  const handleOpenUrl = (url: string, title: string) => {
    setEmbeddedUrl(url);
    setEmbeddedTitle(title);
    setLastActivity(Date.now());
  };

  const handleAskForHelp = () => {
    // Replace with your actual Webex or Teams URL
    const helpUrl = "https://webex.com/meet/hcc-student-care"; 
    handleOpenUrl(helpUrl, "Live Support");
  };

  const handleCloseEmbed = () => {
    setEmbeddedUrl(null);
    setEmbeddedTitle("");
    setLastActivity(Date.now());
  };

  // Idle timeout → return to attract screen
  useEffect(() => {
    if (screenState === "attract") return;
    const check = setInterval(() => {
      if (Date.now() - lastActivity > IDLE_TIMEOUT) {
        setScreenState("attract");
        setEmbeddedUrl(null);
      }
    }, 5000);
    return () => clearInterval(check);
  }, [screenState, lastActivity]);

  // Track activity
  useEffect(() => {
    if (screenState === "attract") return;
    const events = ["touchstart", "mousedown", "keydown"];
    const handler = () => handleActivity();
    events.forEach((e) => window.addEventListener(e, handler));
    return () => events.forEach((e) => window.removeEventListener(e, handler));
  }, [screenState]);

  return (
    <div className="h-dvh bg-white font-sans selection:bg-hcc-gold/30 overflow-hidden flex flex-col">
      {screenState === "attract" && <CareAttractScreen onTap={handleWake} />}
      {screenState === "survey" && <CareSurveyScreen onComplete={handleCompleteSurvey} />}

      {/* Embedded browser overlay */}
      <EmbeddedBrowserWithPrint
        url={embeddedUrl}
        title={embeddedTitle}
        onClose={handleCloseEmbed}
      />

      {/* Main home screen */}
      <div className="flex-1 flex flex-col relative overflow-hidden">
        {/* Subtle background texture/logo watermark */}
        <div className="absolute top-[85%] left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.04] pointer-events-none flex items-center justify-center overflow-hidden">
          <HCCLogomark size={4000} />
        </div>

        <CareKioskHeader />

        <main className="flex-1 flex flex-col px-4 sm:px-8 py-4 sm:py-6 relative z-10 overflow-hidden">
          <div className="max-w-7xl mx-auto w-full h-full flex flex-col">
            <div className="text-center mb-4 sm:mb-6">
              <h2 className="text-3xl sm:text-5xl font-black text-hcc-blue tracking-tight">
                How can we help you today?
              </h2>
              <p className="mt-1 sm:mt-2 text-sm sm:text-lg text-hcc-gray font-medium">
                Select a resource below to explore support options
              </p>
            </div>

            <div className="flex-1 min-h-0 overflow-y-auto">
              <CareResourceGrid onOpenUrl={handleOpenUrl} />
            </div>
            
            <div className="mt-4 sm:mt-6 p-4 sm:p-8 bg-hcc-blue rounded-[1.5rem] sm:rounded-[2.5rem] text-white flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-8 shadow-xl relative overflow-hidden shrink-0">
              <div className="absolute top-0 right-0 opacity-10 pointer-events-none translate-x-1/4 -translate-y-1/4">
                <HCCLogomark size={400} />
              </div>
              <div className="relative z-10 text-center sm:text-left">
                <h3 className="text-xl sm:text-3xl font-black tracking-tight">Need a <span className="text-hcc-gold">human</span> touch?</h3>
                <p className="text-white/80 text-sm sm:text-lg font-medium">Our staff member is standing by to guide you.</p>
              </div>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleAskForHelp}
                aria-label="Ask for help from a staff member"
                className="bg-hcc-gold text-hcc-blue px-6 sm:px-10 py-3 sm:py-5 rounded-full font-black text-sm sm:text-xl shadow-lg transition-all uppercase tracking-widest relative z-10 whitespace-nowrap"
              >
                ASK FOR HELP
              </motion.button>
            </div>
          </div>
        </main>

        <CareKioskFooter 
          onHome={() => setEmbeddedUrl(null)}
          onHelp={handleAskForHelp}
          onContact={() => handleOpenUrl("https://www.hccs.edu/contact-us/", "Contact HCC")}
        />
      </div>
    </div>
  );
}
