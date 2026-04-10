import React, { useState } from "react";
import { X, Printer, ChevronLeft, ChevronRight, RotateCcw, QrCode } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { QRCodeSVG } from "qrcode.react";

interface EmbeddedBrowserWithPrintProps {
  url: string | null;
  title: string;
  onClose: () => void;
}

export default function EmbeddedBrowserWithPrint({
  url,
  title,
  onClose,
}: EmbeddedBrowserWithPrintProps) {
  const [showQR, setShowQR] = useState(false);

  if (!url) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: "100%" }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: "100%" }}
        transition={{ type: "spring", damping: 25, stiffness: 200 }}
        className="fixed inset-0 z-[60] bg-white flex flex-col"
      >
        {/* Browser Header */}
        <div className="bg-hcc-blue border-b-4 border-hcc-gold px-6 py-4 flex items-center justify-between shadow-xl">
          <div className="flex items-center gap-6">
            <button
              onClick={onClose}
              aria-label="Close browser"
              className="p-3 bg-white/10 hover:bg-white/20 rounded-xl transition-colors text-white shadow-inner"
            >
              <X size={32} />
            </button>
            <div className="flex flex-col">
              <h2 className="text-xl font-black text-white leading-none uppercase tracking-tight">{title}</h2>
              <p className="text-sm text-hcc-cyan truncate max-w-[200px] sm:max-w-md font-bold mt-1">
                {url}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden lg:flex items-center gap-2 mr-4 bg-white/10 rounded-lg p-1">
              <button aria-label="Go back" className="p-2 text-white/40 hover:text-white"><ChevronLeft size={24} /></button>
              <button aria-label="Go forward" className="p-2 text-white/40 hover:text-white"><ChevronRight size={24} /></button>
              <button aria-label="Refresh page" className="p-2 text-white/40 hover:text-white"><RotateCcw size={20} /></button>
            </div>
            
            <div className="flex items-center gap-3">
              <button
                onClick={() => setShowQR(true)}
                aria-label="Share via QR Code"
                className="flex items-center gap-3 bg-hcc-cyan text-hcc-blue px-8 py-4 rounded-xl font-black text-lg hover:bg-white transition-all shadow-lg uppercase tracking-widest"
              >
                <QrCode size={24} />
                <span>Share</span>
              </button>

              <button
                onClick={handlePrint}
                aria-label="Print this page"
                className="flex items-center gap-3 bg-hcc-gold text-hcc-blue px-8 py-4 rounded-xl font-black text-lg hover:bg-white transition-all shadow-lg uppercase tracking-widest"
              >
                <Printer size={24} />
                <span>Print</span>
              </button>
            </div>
          </div>
        </div>

        {/* Browser Content */}
        <div className="flex-1 bg-gray-50 relative">
          <iframe
            src={url}
            className="w-full h-full border-none"
            title={title}
            sandbox="allow-scripts allow-same-origin allow-forms"
          />
          
          {/* Overlay for same-origin restriction warning (optional) */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/70 text-white px-4 py-2 rounded-full text-xs pointer-events-none opacity-0 hover:opacity-100 transition-opacity">
            Some sites may not allow embedding
          </div>
        </div>

        {/* QR Code Modal Overlay */}
        <AnimatePresence>
          {showQR && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 z-[70] bg-hcc-blue/95 flex items-center justify-center p-8"
            >
              <motion.div
                initial={{ scale: 0.9, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 20 }}
                className="bg-white p-12 rounded-[3rem] shadow-2xl flex flex-col items-center max-w-lg w-full text-center"
              >
                <div className="mb-8 p-6 bg-hcc-blue/5 rounded-[2rem]">
                  <QRCodeSVG value={url} size={300} level="H" includeMargin={true} />
                </div>
                <h3 className="text-4xl font-black text-hcc-blue mb-4 uppercase tracking-tight">Scan to Share</h3>
                <p className="text-xl text-hcc-gray font-medium mb-10 leading-relaxed">
                  Scan this code with your phone to take this resource with you.
                </p>
                <button
                  onClick={() => setShowQR(false)}
                  className="w-full bg-hcc-blue text-white py-6 rounded-2xl font-black text-2xl uppercase tracking-widest hover:bg-hcc-gold hover:text-hcc-blue transition-all shadow-xl"
                >
                  Close
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </AnimatePresence>
  );
}
