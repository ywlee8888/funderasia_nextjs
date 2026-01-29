"use client";

import React, { useRef, useEffect, useState } from "react";
import { FaInfo } from "react-icons/fa";

type SidebarProps = {
  isOpen: boolean;
  toggleSidebar: () => void;
};

const AboutUs: React.FC<SidebarProps> = ({ isOpen, toggleSidebar }) => {
  const sidebarRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState(190);
  const [isDragging, setIsDragging] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target as Node)
      ) {
        toggleSidebar();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("mouseup", handleMouseUp);
      document.addEventListener("mousemove", handleMouseMove);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("mousemove", handleMouseMove);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, [isOpen, toggleSidebar]);

  const handleMouseDown = (event: React.MouseEvent) => {
    setIsDragging(true);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (event: MouseEvent) => {
    if (isDragging) {
      setPosition(position + event.movementY);
    }
  };

  if (!isOpen) return null;

  return (
    <div
      ref={sidebarRef}
      className="absolute right-0 z-50 transition-transform duration-300 p-8 w-full sm:w-full md:w-[60rem]"
      style={{
        top: `${position}px`,
        backgroundImage: "url('/img/specialist_background.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        borderRadius: "0.5rem",
      }}
      onMouseDown={handleMouseDown}
    >
      {/* Semi-transparent overlay */}
      <div
        className="absolute inset-0"
        style={{
          backgroundColor: "rgba(30, 41, 59, 0.85)",
          borderRadius: "8px",
        }}
      ></div>

      {/* Close button */}
      <button
        onClick={toggleSidebar}
        className="bg-red-500 text-white z-20 absolute left-[-3.5rem] top-4"
        style={{
          fontSize: "2rem",
          padding: "0.5rem 0.75rem",
        }}
      >
        <FaInfo />
      </button>

      {/* Content Area */}
      <div className="relative flex flex-col justify-center text-white items-center p-6 z-10">
        <img
          src="/img/logo.png"
          alt="About Funder Asia"
          className="mb-8 w-[40%] sm:w-[20%] h-auto"
        />
        <h1 className="text-2xl md:text-3xl font-bold mb-3">
          About Funder Asia
        </h1>
        <div className="text-left w-full">
          <p className="text-md md:text-lg mt-3 mb-5">
            <strong>Funder Asia</strong> is a strategic M&A advisory boutique
            focused on Asia’s middle market. We partner with founders and
            business owners to navigate complex transactions with confidence,
            from sell-side and buy-side advisory to cross-border deals and
            strategic exits.
          </p>
          <p className="text-md md:text-lg mb-3">
            Our team provides <strong>mandate-driven advisory services</strong>,
            ensuring confidentiality, alignment with stakeholder objectives, and
            disciplined execution. We guide clients through every stage of a
            transaction, from valuation, positioning, and buyer outreach to
            negotiation and closing.
          </p>
          <p className="text-md md:text-lg mb-3">
            For founders preparing for an exit, Funder Asia offers{" "}
            <strong>strategic preparation services</strong>, including governance,
            business structuring, and value optimisation, helping maximise
            outcomes while ensuring smooth shareholder and succession planning.
          </p>
          <p className="text-md md:text-lg mb-3">
            We also specialise in <strong>cross-border M&A</strong>, managing
            regulatory, cultural, and operational complexities to enable
            seamless transactions across Asia. Our advisory ensures clarity,
            compliance, and execution certainty throughout the deal process.
          </p>
          <p className="text-md md:text-lg mb-5">
            Through a combination of experience, strategic insight, and trusted
            networks, Funder Asia helps founders and middle-market companies
            achieve their growth, liquidity, and transition objectives with
            confidence.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
