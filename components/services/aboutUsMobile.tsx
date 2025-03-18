"use client";

import React, { useRef, useEffect, useState } from "react";
import { FaInfo } from "react-icons/fa";

const AboutUsMobile: React.FC = () => {
  const sidebarRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState(190);

  return (
    <div
      ref={sidebarRef}
      style={{
        top: `${position}px`,
        backgroundImage: "url('/img/about_background.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        borderRadius: "0.5rem",
      }}
    >
      {/* Semi-transparent overlay to create a mask effect */}
      <div
        className="absolute inset-0"
        style={{
          backdropFilter: "blur(4px)",
          borderRadius: "8px",
        }}
      ></div>

      {/* Content Area */}
      <div className="relative flex flex-col justify-center text-black p-6 z-10">
        <img
          src="/img/specialistasia_logo_banner_black.png"
          alt="About Specialist Asia"
          className="mb-8 w-[80%] sm:w-[60%] md:w-[50%] lg:w-[30%] h-auto" 
        />
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-bold mb-3"> 
          About Specialist Asia
        </h1>
        <p className="text-md sm:text-lg md:text-xl lg:text-xl mt-3 mb-5">
          <strong>Specialist Asia</strong> offers exclusive membership-based
          healthcare concierge services, designed to provide personalised support
          and priority access to world-class healthcare.
        </p>
        <p className="text-md sm:text-lg md:text-xl lg:text-xl mb-3">
          Our team of dedicated experts ensures that all the details, including
          healthcare coordination, translations, and local liaisons, are managed
          seamlessly.
        </p>
        <p className="text-md sm:text-lg md:text-xl lg:text-xl mb-3">
          As a member, you gain tailored assistance with everything from
          pre-trip healthcare consultations to travel arrangements, appointment
          scheduling, and post-treatment follow-ups.
        </p>
        <p className="text-md sm:text-lg md:text-xl lg:text-xl mb-3">
          Whether for consultation or treatment, our local experts ensure every
          step of your journey is smooth, allowing you to focus solely on
          recovery and well-being.
        </p>
        <p className="text-md sm:text-lg md:text-xl lg:text-xl mb-5">
          Seamlessly navigate the complexities of traveling overseas for
          healthcare treatment across Asia.
        </p>
      </div>
    </div>
  );
};

export default AboutUsMobile;
