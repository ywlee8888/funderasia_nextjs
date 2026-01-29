"use client";

import React, { useRef, useState } from "react";

const AboutUsMobile: React.FC = () => {
  const sidebarRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState(190);

  return (
    <div
      ref={sidebarRef}
      style={{
        top: `${position}px`,
        backgroundImage: "url('/img/memberbackground.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        borderRadius: "0.5rem",
      }}
    >
      {/* Semi-transparent overlay */}
      <div
        className="absolute inset-0"
        style={{
          backgroundColor: "rgba(22, 61, 68, 0.85)",
          backdropFilter: "blur(4px)",
          borderRadius: "8px",
        }}
      ></div>

      {/* Content Area */}
      <div className="relative flex flex-col justify-center text-white items-center p-6 z-10">       
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-bold mb-3">
          About Funder Asia
        </h1>
        <div className="text-left w-full">
          <p className="text-md sm:text-lg md:text-xl lg:text-xl mt-3 mb-5">
            <strong>Funder Asia</strong> is a strategic M&A advisory boutique
            focused on Asia’s middle market. We partner with founders and
            business owners to navigate complex transactions with confidence,
            from sell-side and buy-side advisory to cross-border deals and
            strategic exits.
          </p>
          <p className="text-md sm:text-lg md:text-xl lg:text-xl mb-3">
            Our team provides <strong>mandate-driven advisory services</strong>,
            ensuring confidentiality, alignment with stakeholder objectives, and
            disciplined execution. We guide clients through every stage of a
            transaction, from valuation, positioning, and buyer outreach to
            negotiation and closing.
          </p>
          <p className="text-md sm:text-lg md:text-xl lg:text-xl mb-3">
            For founders preparing for an exit, Funder Asia offers{" "}
            <strong>strategic preparation services</strong>, including
            governance, business structuring, and value optimisation, helping
            maximise outcomes while ensuring smooth shareholder and succession
            planning.
          </p>
          <p className="text-md sm:text-lg md:text-xl lg:text-xl mb-3">
            We also specialise in <strong>cross-border M&A</strong>, managing
            regulatory, cultural, and operational complexities to enable
            seamless transactions across Asia. Our advisory ensures clarity,
            compliance, and execution certainty throughout the deal process.
          </p>
          <p className="text-md sm:text-lg md:text-xl lg:text-xl mb-5">
            Through experience, strategic insight, and trusted networks, Funder
            Asia helps founders and middle-market companies achieve their
            growth, liquidity, and transition objectives with confidence.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUsMobile;
