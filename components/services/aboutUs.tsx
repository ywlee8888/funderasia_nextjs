"use client";

import React, { useRef, useEffect } from "react";
import { FaInfo } from "react-icons/fa";

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
      className="fixed right-0 w-full sm:w-[60rem] z-50 transition-transform duration-300 p-4 sm:p-8 h-full overflow-y-auto"
      style={{
        top: "190px",
        height: "calc(100vh - 190px)", // Ensure it fits in the viewport
        backgroundImage: "url('/img/specialist_background.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        borderRadius: "0.5rem",
      }}
    >
      <div className="absolute inset-0" style={{ backgroundColor: "rgba(129, 216, 208, 0.8)", borderRadius: "8px" }}></div>

      <button
        onClick={toggleSidebar}
        className="bg-red-500 text-white z-20 absolute left-4 top-4 flex items-center justify-center w-10 h-10 rounded-full shadow-lg"
        style={{
          fontSize: "1.5rem", // Reduced size for mobile
        }}
      >
        <FaInfo />
      </button>

      <div className="relative flex flex-col justify-center text-black items-center p-6 z-10">
        <img
          src="/img/specialistasia_logo_banner_black.png"
          alt="About Specialist Asia"
          className="mb-4 max-w-xs h-auto" // Reduced max width for mobile
        />
        <h1 className="text-xl font-bold mb-2 text-center">About Specialist Asia</h1>
        <p className="text-base mb-3 text-center">
          <strong>Specialist Asia</strong> offers exclusive membership-based healthcare concierge service, designed to provide
          personalized support and priority access to world-class healthcare.
        </p>
        <p className="text-base mb-3 text-center">
          Our team of dedicated experts ensures that all the details,
          including healthcare coordination, translations, and local liaisons, are managed seamlessly.
        </p>
        <p className="text-base mb-3 text-center">
          As a member, you gain tailored assistance with everything from pre-trip healthcare consultations to travel arrangements,
          appointment scheduling, and post-treatment follow-ups.
        </p>
        <p className="text-base mb-3 text-center">
          Whether for consultation or treatment, our local experts ensure every step of your journey is smooth, allowing
          you to focus solely on recovery and well-being.
        </p>
        <p className="text-base mb-5 text-center">
          Seamlessly navigate the complexities of traveling overseas for healthcare treatment across Asia.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
