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
            <strong>Specialist Asia</strong> provides an exclusive,
            membership-based healthcare concierge service, ensuring seamless
            access to world-class medical care with personalized support at
            every step.
          </p>
          <p className="text-md md:text-lg mb-3">
            Our <strong>dedicated medical concierge team</strong> offers{" "}
            <strong>priority access to top specialists</strong>, handling
            everything from specialist referrals to fast-tracked appointments
            and hospital admissions.
          </p>
          <p className="text-md md:text-lg mb-3">
            Enjoy a <strong>VIP hospital and clinic experience</strong>, with
            private suites, expedited check-ins, and personalized care
            coordination for maximum comfort and discretion.
          </p>
          <p className="text-md md:text-lg mb-3">
            For those seeking medical care abroad, we provide{" "}
            <strong>
              global healthcare coordination and medical travel services
            </strong>
            , including pre-trip consultations, travel arrangements, and
            post-treatment follow-ups, ensuring a stress-free experience.
          </p>
          <p className="text-md md:text-lg mb-5">
            Whether for consultation or treatment, our local experts manage all
            logistics, so you can focus on your health and recovery with
            complete peace of mind.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
