import React, { useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

gsap.registerPlugin(ScrollToPlugin);

const GoToTopButton = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.pageYOffset > 300);
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  useEffect(() => {
    gsap.to('#goTopBtn', {
      duration: 0.4,
      opacity: visible ? 1 : 0,
      y: visible ? 0 : 50,
      pointerEvents: visible ? 'auto' : 'none',
      ease: 'power3.out',
    });
  }, [visible]);

  const scrollToTop = () => {
    gsap.to(window, {
      duration: 1,
      scrollTo: { y: 0, autoKill: true },
      ease: 'power2.inOut',
    });
  };

  return (
    <button
      id="goTopBtn"
      onClick={scrollToTop}
      aria-label="Go to top"
      className="
        fixed bottom-8 right-8 
        w-14 h-14 rounded-full 
        bg-[#6056FF] 
        flex justify-center items-center
        shadow-xl
        text-white 
        cursor-pointer
        opacity-0 
        translate-y-12
        pointer-events-none
        transition-colors duration-300
        hover:bg-[#4a43cc]
        focus:outline-none 
        focus:ring-4
        focus:ring-[#6056FF]/50
        z-50
      "
      title="Go to top"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-7 w-7"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={3}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
      </svg>
    </button>
  );
};

export default GoToTopButton;
