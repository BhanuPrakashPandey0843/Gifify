import React, { useEffect, useState } from 'react';
import { gsap } from 'gsap';

const GoToTopButton = () => {
  const [visible, setVisible] = useState(false);

  // Show button when scroll Y is more than 300px
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  // GSAP animation on visible change
  useEffect(() => {
    if (visible) {
      gsap.to('#goTopBtn', { duration: 0.4, opacity: 1, y: 0, pointerEvents: 'auto', ease: 'power3.out' });
    } else {
      gsap.to('#goTopBtn', { duration: 0.4, opacity: 0, y: 50, pointerEvents: 'none', ease: 'power3.in' });
    }
  }, [visible]);

  const scrollToTop = () => {
    gsap.to(window, { duration: 1, scrollTo: 0, ease: "power2.inOut" });
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

