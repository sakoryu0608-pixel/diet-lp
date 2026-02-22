/*
 * Design: 美VARI Beauty Salon 四条烏丸整体院 ダイエットLP
 * Style: Japanese LP style with coral/pink header, full-width image content, floating CTA
 * Colors: #f4777c (coral header), #f0f0f0 (bg), #505050 (footer text), #eeeeee (border)
 * Font: Noto Sans JP for Japanese text
 */

import { useState, useEffect } from "react";

export default function Home() {
  const [showCta, setShowCta] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show CTA after scrolling 300px
      setShowCta(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#f0f0f0] font-['Noto_Sans_JP',sans-serif]">
      {/* Header Bar */}
      <header className="w-full bg-[#f4777c] overflow-hidden">
        <div className="max-w-[980px] mx-auto px-4">
          <h1 className="text-white text-[13px] font-bold text-center py-[2px] leading-[19.5px]">
            美VARI Beauty Salon 四条烏丸整体院｜ダイエット
          </h1>
        </div>
      </header>

      {/* Main Content - Full width LP image */}
      <main className="w-full">
        <div className="max-w-[980px] mx-auto">
          <img
            data-node-id="2-5"
            className="w-full h-auto block"
            src="https://files.manuscdn.com/user_upload_by_module/session_file/310419663031725279/kTrXCtwRXHsEvbJp.webp"
            alt="美VARI Beauty Salon ダイエットメニュー"
            loading="eager"
          />
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full bg-white">
        <div className="max-w-[980px] mx-auto px-4 pt-[88px] pb-[20px]">
          <div className="border-t border-[#eeeeee] pt-[22px]">
            <p className="text-[#505050] text-xs font-normal pl-[15px]">
              © ダイエットメニュー
            </p>
          </div>
        </div>
      </footer>

      {/* Floating CTA Button */}
      <div
        className={`fixed bottom-6 right-6 z-50 transition-all duration-500 ease-out ${
          showCta
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10 pointer-events-none"
        }`}
      >
        <a
          href="#"
          className="block cta-bounce"
          aria-label="体験お申し込みはこちらから"
          onClick={(e) => {
            e.preventDefault();
            // CTA click handler - can be linked to booking page
          }}
        >
          <img
            data-node-id="2-612"
            className="w-[280px] md:w-[350px] lg:w-[400px] h-auto drop-shadow-2xl hover:scale-105 transition-transform duration-300"
            src="https://files.manuscdn.com/user_upload_by_module/session_file/310419663031725279/bSKzYxAquaRcqBgu.webp"
            alt="体験お申し込みはこちらから"
          />
        </a>
      </div>
    </div>
  );
}
