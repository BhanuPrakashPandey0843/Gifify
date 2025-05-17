import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { Sparkles, UploadCloud, Youtube, Wand2 } from "lucide-react";

const Hero = () => {
  const containerRef = useRef(null);
  const buttonRef = useRef(null);
  const tagsRef = useRef([]);

  useEffect(() => {
    gsap.from(containerRef.current, {
      opacity: 0,
      y: 60,
      duration: 1,
      ease: "power3.out",
    });

    gsap.from(tagsRef.current, {
      opacity: 0,
      y: 20,
      duration: 0.4,
      stagger: 0.1,
      delay: 0.5,
    });

    gsap.from(buttonRef.current, {
      scale: 0.8,
      opacity: 0,
      duration: 0.6,
      ease: "back.out(1.7)",
      delay: 0.3,
    });
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center bg-[#f9f8ff] px-4 py-12 text-center">
      <div className="max-w-4xl w-full" ref={containerRef}>
        <div className="text-sm mb-4 text-[#6c6c6c] font-medium flex items-center justify-center gap-2">
          <Sparkles size={18} className="text-[#7e5cf0]" />
          <span className="bg-[#f3f1fd] text-[#7e5cf0] px-3 py-1 rounded-full">
            ⚡ Quick Assignment — AI-Powered Video to GIF Generator
          </span>
        </div>

        <h1 className="text-4xl sm:text-5xl font-extrabold text-[#191919] mb-4 leading-tight">
          Convert Video <span className="text-[#7e5cf0]">into Captioned GIFs</span><br /> using Just a Prompt
        </h1>

        <p className="text-[#777] mb-8 text-base sm:text-lg">
          Upload or paste a video link, describe what you want, and let AI do the rest.
          Perfect for <strong>funny moments</strong>, <strong>quotes</strong>, or <strong>inspirational clips</strong>.
        </p>

        <div className="relative max-w-xl mx-auto mb-5">
          <input
            type="text"
            placeholder="e.g., funny moments, sad quotes..."
            className="w-full rounded-xl py-4 px-6 pr-36 border border-[#ddd] shadow-md text-sm sm:text-base focus:outline-none"
          />
          <button
            ref={buttonRef}
            className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-[#7e5cf0] hover:bg-[#6846d8] text-white px-4 py-2 rounded-lg text-sm sm:text-base shadow flex items-center gap-1"
          >
            <Wand2 size={16} />
            Generate GIFs
          </button>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
          <div className="flex items-center gap-2 bg-white px-4 py-3 border rounded-lg shadow hover:shadow-md cursor-pointer transition">
            <Youtube size={18} className="text-red-600" />
            <input
              type="text"
              placeholder="Paste YouTube video link"
              className="border-none outline-none w-48 text-sm bg-transparent"
            />
          </div>
          <label className="flex items-center gap-2 bg-white px-4 py-3 border rounded-lg shadow hover:shadow-md cursor-pointer transition">
            <UploadCloud size={18} className="text-blue-500" />
            <span className="text-sm">Upload MP4</span>
            <input type="file" accept="video/mp4" className="hidden" />
          </label>
        </div>

        <div className="flex flex-wrap justify-center gap-3 text-sm text-[#5c5c5c]">
          {['Funny Moments', 'Sad Quotes', 'Motivational Clips', 'Custom Text Clips'].map((item, i) => (
            <span
              key={item}
              ref={(el) => (tagsRef.current[i] = el)}
              className="border border-[#ddd] bg-white px-4 py-2 rounded-full shadow-sm hover:shadow-md cursor-pointer transition-transform hover:scale-105"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
