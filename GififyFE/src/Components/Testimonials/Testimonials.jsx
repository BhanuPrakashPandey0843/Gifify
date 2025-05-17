import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    stat: "99%",
    desc: "surge in website traffic",
    quote:
      "Services leveraged Ribbit’s API to craft content at a much-needed cadence, witnessing an astounding surge in traffic as a result.",
    brand: "CloudBees",
  },
  {
    stat: "10,000+",
    desc: "hours saved",
    quote:
      "With Ribbit, Cushman & Wakefield saves thousands of hours creating content, allowing their team to focus on strategy and results.",
    brand: "Cushman & Wakefield",
  },
  {
    stat: "166%",
    desc: "increase in organic traffic",
    quote:
      "Over six months, Mongoose Media wrote 40+ blog posts that CEO Lauren Petrullo says wouldn’t have been possible without Ribbit.",
    brand: "WalkMe",
  },
  {
    stat: "50%",
    desc: "faster scale",
    quote:
      "2X needed a content solution that scaled. Ribbit proved to be the perfect fit for 2X’s growing team.",
    brand: "2X",
  },
];

const Testimonials = () => {
  const sliderRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(".testimonial-track", {
        x: "-50%",
        ease: "none",
        duration: 30,
        repeat: -1,
      });
    }, sliderRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="w-full py-16 px-4 sm:px-6 md:px-10 bg-white" ref={sliderRef}>
      {/* Header */}
      <div className="text-center mb-12">
        <div className="text-sm font-medium text-gray-500 mb-2 flex justify-center items-center gap-2">
          <span role="img" aria-label="case study">📋</span> Case Study
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
          Real marketers, surreal results
        </h2>
        <p className="mt-2 text-gray-600 text-sm sm:text-base max-w-2xl mx-auto">
          Thrive alongside other members of the 125k+ strong Jasper community as you journey towards AI success.
        </p>
      </div>

      {/* Testimonial Cards */}
      <div className="relative overflow-hidden">
        <div className="testimonial-track flex w-fit gap-6">
          {[...testimonials, ...testimonials].map((item, index) => (
            <div
              key={index}
              className="min-w-[280px] sm:min-w-[320px] md:min-w-[340px] max-w-sm p-6 bg-white border border-gray-200 rounded-2xl shadow-lg flex-shrink-0 hover:shadow-xl transition-shadow duration-300"
            >
              <h3 className="text-2xl font-bold text-[#1b1a30] mb-1">{item.stat}</h3>
              <p className="text-sm text-gray-500 font-medium mb-3">{item.desc}</p>
              <p className="text-sm text-gray-800 mb-4 leading-relaxed italic">“{item.quote}”</p>
              <p className="text-sm font-semibold text-gray-900">{item.brand}</p>
              <a className="mt-2 inline-block text-sm text-[#6056FF] font-medium hover:underline" href="#">
                Read more
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
