"use client";

import React, { useRef, useEffect } from "react";
import { FaTimes, FaHospitalSymbol, FaInfo } from "react-icons/fa";

type SidebarProps = {
  isOpen: boolean;
  toggleSidebar: () => void;
};

const AboutUs: React.FC<SidebarProps> = ({ isOpen, toggleSidebar }) => {
  const sidebarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    return () => {
      document.removeEventListener("mousedown", () => {});
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      ref={sidebarRef}
      className="fixed right-0 z-50 transition-transform duration-300 p-8 md:w-[60rem] w-[90%] max-w-md h-screen"
      style={{
        top: "190px",
        backgroundImage: "url('/img/specialist_background.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        borderRadius: "0.5rem",
      }}
    >
      {/* Semi-transparent overlay to create a mask effect */}
      <div className="absolute inset-0" style={{ backgroundColor: "rgba(129, 216, 208, 0.8)", borderRadius: "8px" }}></div>

      {/* Close button */}
      <button
        onClick={toggleSidebar}
        className="bg-red-500 text-white z-20 absolute right-4 top-4"
        style={{
          fontSize: "2rem",
          padding: "0.5rem 0.75rem",
        }}
      >
        <FaInfo />
      </button>

      {/* Content Area */}
      <div className="relative flex flex-col justify-center text-black items-center p-6 z-10">
        <img
          src="/img/specialistasia_logo_banner_black.png"
          alt="About Specialist Asia"
          className="mb-8 max-w-[80%] h-auto"
        />
        <h1 className="text-2xl font-bold mb-3">About Specialist Asia</h1>
        <p className="text-lg mb-5">
          <strong>Specialist Asia</strong> offers exclusive membership-based healthcare concierge service, designed to provide
          personalized support and priority access to world-class healthcare.
        </p>
        <p className="text-lg mb-3">
          Our team of dedicated experts ensures that all the details,
          including healthcare coordination, translations, and local liaisons, are managed seamlessly.
        </p>
        <p className="text-lg mb-3">
          As a member, you gain tailored assistance with everything from pre-trip healthcare consultations to travel arrangements,
          appointment scheduling, and post-treatment follow-ups.
        </p>
        <p className="text-lg mb-3">
          Whether for consultation or treatment, our local experts ensure every step of your journey is smooth, allowing
          you to focus solely on recovery and well-being.
        </p>
        <p className="text-lg mb-5">
          Seamlessly navigate the complexities of traveling overseas for healthcare treatment across Asia.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
