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
      const newPosition = position + event.movementY;
      setPosition(newPosition);
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
      {/* Semi-transparent overlay to create a mask effect */}
      <div
        className="absolute inset-0"
        style={{
          backgroundColor: "rgba(129, 216, 208, 0.8)",
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
      <div className="relative flex flex-col justify-center text-black items-center p-6 z-10">
        <img
          src="/img/specialistasia_logo_banner_black.png"
          alt="About Specialist Asia"
          className="mb-8 w-[90%] sm:w-[70%] h-auto"
        />
        <h1 className="text-2xl md:text-3xl font-bold mb-3">
          About Specialist Asia
        </h1>
        <div className="text-left w-full">
          <p className="text-md md:text-lg mt-3 mb-5">
            <strong>Specialist Asia</strong> is an exclusive, membership-based
            healthcare concierge service that offers seamless access to
            world-class medical care, providing personalised support throughout
            the patient journey. We focus on empowering expatriates and
            international patients by delivering trusted guidance, education,
            and concierge services—without offering medical advice or insurance
            policy recommendations, which are regulated activities.
          </p>
          <p className="text-md md:text-lg mb-3">
            Our <strong>dedicated medical concierge team</strong> facilitates
            priority access to leading specialists and healthcare providers,
            coordinating everything from referrals to fast-tracked appointments
            and hospital admissions. Members benefit from a VIP healthcare
            experience, including private suites, expedited check-ins, and
            personalised care coordination designed to ensure comfort,
            discretion, and peace of mind.
          </p>
          <p className="text-md md:text-lg mb-3">
            For those seeking treatment overseas, Specialist Asia provides
            comprehensive <strong>global healthcare coordination</strong>,
            covering pre-trip consultations, travel arrangements, and
            post-treatment follow-up, to create a smooth and stress-free medical
            travel experience.
          </p>
          <p className="text-md md:text-lg mb-3">
            In addition to concierge services, Specialist Asia is committed to
            educating expatriates and international patients, helping them
            navigate complex healthcare systems locally and abroad with
            confidence. Our educational programmes cover essential non-clinical
            topics such as insurance navigation, healthcare provider
            environments, patient support, and service logistics—always without
            providing medical or insurance advice.
          </p>
          <p className="text-md md:text-lg mb-5">
            Through careful partnership and alignment with healthcare providers
            and licensed insurance providers, Specialist Asia offers enriched,
            transparent, and trusted healthcare access, maintaining full
            compliance with medical and insurance regulations, and always
            placing patient needs and interests at the centre of everything we
            do.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
