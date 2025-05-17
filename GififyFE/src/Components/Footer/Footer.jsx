import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const footerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".footer-section", {
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 80%",
        },
        y: 50,
        opacity: 0,
        stagger: 0.2,
        duration: 1,
        ease: "power3.out",
      });

      gsap.from(".footer-logo", {
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top bottom",
        },
        opacity: 0,
        scale: 0.9,
        duration: 1.5,
        ease: "power4.out",
      });

      gsap.utils.toArray(".footer-link").forEach((el) => {
        gsap.from(el, {
          scrollTrigger: {
            trigger: el,
            start: "top 90%",
          },
          opacity: 0,
          x: -10,
          duration: 0.6,
          ease: "power2.out",
        });
      });
    }, footerRef);

    return () => ctx.revert();
  }, []);

  return (
    <footer
      ref={footerRef}
      className="bg-white text-gray-700 text-sm border-t border-gray-200 font-avantt"
    >
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8">
        {/* Platform */}
        <div className="footer-section">
          <h4 className="font-semibold text-gray-400 mb-4">Platform</h4>
          <ul className="space-y-2">
            {[
              "Marketing Editor",
              "Brand Voice",
              "Style Guide",
              "Visual Guidelines",
              "Gifify Chat",
              "AI Image Suite",
              "Gifify Browser Extension",
            ].map((item) => (
              <li key={item} className="footer-link hover:text-[#6056FF] transition">
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Solutions */}
        <div className="footer-section">
          <h4 className="font-semibold text-gray-400 mb-4">Solutions</h4>
          <ul className="space-y-2">
            {[
              "Product Marketing",
              "Content Marketing",
              "Performance Marketing",
              "Field & Events Marketing",
              "Brand Marketing",
              "PR & Communications",
            ].map((item) => (
              <li key={item} className="footer-link hover:text-[#6056FF] transition">
                {item}
              </li>
            ))}
          </ul>
          <h4 className="font-semibold text-gray-400 mt-6 mb-4">Become a Partner</h4>
          <ul className="space-y-2">
            <li className="footer-link hover:text-[#6056FF] transition">Become a Solutions Partner</li>
            <li className="footer-link hover:text-[#6056FF] transition">Become a Tech Partner</li>
          </ul>
        </div>

        {/* Resources */}
        <div className="footer-section">
          <h4 className="font-semibold text-gray-400 mb-4">Resources</h4>
          <ul className="space-y-2">
            {[
              "Blog",
              "Events & Webinars",
              "Customer Stories",
              "Prompt Library",
              "The State of AI in Marketing Report",
            ].map((item) => (
              <li key={item} className="footer-link hover:text-[#6056FF] transition">
                {item}
              </li>
            ))}
          </ul>
          <h4 className="font-semibold text-gray-400 mt-6 mb-4">Solutions by Industry</h4>
          <ul className="space-y-2">
            {["Technology", "eCommerce & Retail", "Insurance", "Media & Publishing"].map((item) => (
              <li key={item} className="footer-link hover:text-[#6056FF] transition">
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Company */}
        <div className="footer-section">
          <h4 className="font-semibold text-gray-400 mb-4">Company</h4>
          <ul className="space-y-2">
            <li className="footer-link hover:text-[#6056FF] transition">Careers at Gifify</li>
            <li className="footer-link hover:text-[#6056FF] transition">Legal Information</li>
          </ul>
          <h4 className="font-semibold text-gray-400 mt-6 mb-4">Get Support</h4>
          <ul className="space-y-2">
            <li className="footer-link hover:text-[#6056FF] transition">Contact Support</li>
            <li className="footer-link hover:text-[#6056FF] transition">Help Center</li>
            <li className="footer-link hover:text-[#6056FF] transition">Customer Success</li>
          </ul>
        </div>

        {/* Actions */}
        <div className="footer-section">
          <div className="space-y-3">
            <button className="bg-[#6056FF] hover:bg-[#4e47d6] text-white px-4 py-2 rounded-md font-medium w-full transition">
              Start Free Trial
            </button>
            <button className="border border-gray-300 hover:border-gray-400 text-black px-4 py-2 rounded-md font-medium w-full transition">
              Request demo
            </button>
          </div>
          <address className="text-xs text-gray-400 mt-4 not-italic">
            Ranchi Jharkhand India 834001
          </address>
        </div>
      </div>

      {/* Logo Text Fade */}
      <div className="px-6 flex justify-center items-center bg-gray-50">
        <h1 className="footer-logo text-gray-400 text-[12rem] font-extrabold select-none leading-none tracking-tight">
          Gifify
        </h1>
      </div>
    </footer>
  );
};

export default Footer;
