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
      <div className="relative flex flex-col justify-center text-black items-center p-6 z-10">
        <img
          src="/img/specialistasia_logo_banner_black.png"
          alt="About Specialist Asia"
          className="mb-8 w-[80%] sm:w-[60%] md:w-[50%] lg:w-[30%] h-auto"
        />
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-bold mb-3">
          {" "}
          {/* Increased text size for larger screens */}
          About Specialist Asia
        </h1>
        <div className="text-left w-full">
          <p className="text-md sm:text-lg md:text-xl lg:text-xl mt-3 mb-5">
            {" "}
            {/* Increased text size for larger screens */}
            <strong>Specialist Asia</strong> provides an exclusive,
            membership-based healthcare concierge service, ensuring seamless
            access to world-class medical care with personalized support at
            every step.
          </p>
          <p className="text-md sm:text-lg md:text-xl lg:text-xl mb-3">
            Our <strong>dedicated medical concierge team</strong> offers{" "}
            <strong>priority access to top specialists</strong>, handling
            everything from specialist referrals to fast-tracked appointments
            and hospital admissions.
          </p>
          <p className="text-md sm:text-lg md:text-xl lg:text-xl mb-3">
            Enjoy a <strong>VIP hospital and clinic experience</strong>, with
            private suites, expedited check-ins, and personalized care
            coordination for maximum comfort and discretion.
          </p>
          <p className="text-md sm:text-lg md:text-xl lg:text-xl mb-3">
            For those seeking medical care abroad, we provide{" "}
            <strong>
              global healthcare coordination and medical travel services
            </strong>
            , including pre-trip consultations, travel arrangements, and
            post-treatment follow-ups, ensuring a stress-free experience.
          </p>
          <p className="text-md sm:text-lg md:text-xl lg:text-xl mb-5">
            Whether for consultation or treatment, our local experts manage all
            logistics, so you can focus on your health and recovery with
            complete peace of mind.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUsMobile;
