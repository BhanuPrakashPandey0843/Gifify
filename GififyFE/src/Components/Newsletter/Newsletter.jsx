import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const Newsletter = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".glass-card", {
        opacity: 0,
        y: 60,
        duration: 1.2,
        ease: "power3.out",
      });
      gsap.from(".cta-heading", {
        opacity: 0,
        y: -40,
        delay: 0.3,
        duration: 1,
        ease: "power3.out",
      });
      gsap.from(".cta-buttons button", {
        opacity: 0,
        y: 20,
        stagger: 0.2,
        delay: 0.6,
        duration: 1,
        ease: "power2.out",
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="min-h-[80vh] flex items-center justify-center px-4 sm:px-6 md:px-12 py-16 sm:py-20 bg-gradient-to-br from-[#eae8ff] via-[#f6f5ff] to-[#eae8ff]"
    >
      <div className="glass-card relative w-full max-w-5xl px-6 sm:px-10 py-12 sm:py-16 rounded-3xl backdrop-blur-2xl bg-white/25 border border-white/30 shadow-2xl text-center overflow-hidden z-10">
        {/* Shine overlay (z-[1]) */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-[#6056FF]/20 to-transparent rounded-3xl pointer-events-none z-[1]" />

        {/* Blue shimmer overlay (z-[0]) */}
        <div className="absolute inset-0 rounded-3xl bg-[#6056FF]/10 animate-pulse pointer-events-none z-0" />

        {/* Actual content (z-[2]) */}
        <div className="relative z-[2]">
          {/* Badge */}
          <div className="inline-block bg-white/80 text-[#6056FF] text-[0.7rem] sm:text-xs font-semibold px-4 py-1 rounded-full mb-5 border border-[#6056FF]/30 shadow-sm">
            💎 Call to Action
          </div>

          {/* Heading */}
          <h2 className="cta-heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#1b1a30] mb-6 leading-snug">
            Get started with <span className="text-[#6056FF]">Gifify</span> today
          </h2>

          {/* Buttons */}
          <div className="cta-buttons flex flex-wrap justify-center gap-4 sm:gap-6 mb-6">
            <button className="bg-[#6056FF] hover:bg-[#4e47cc] text-white font-semibold px-5 sm:px-6 py-3 text-sm sm:text-base rounded-lg shadow-lg transition-all duration-300">
              Try for free
            </button>
            <button className="bg-white hover:bg-gray-100 text-[#1b1a30] border border-gray-300 hover:border-gray-400 font-semibold px-5 sm:px-6 py-3 text-sm sm:text-base rounded-lg shadow-md transition-all duration-300">
              Request Demo
            </button>
          </div>

          {/* Subtext */}
          <p className="text-sm sm:text-base text-gray-700">
            Free plan <span className="mx-1.5">•</span> No card required
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
