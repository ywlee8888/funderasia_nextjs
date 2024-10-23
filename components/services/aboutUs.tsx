"use client";

import React, { useRef, useEffect } from "react";
import { FaTimes, FaHospitalSymbol, FaInfo } from "react-icons/fa"; // Import icons

type SidebarProps = {
  isOpen: boolean;
  toggleSidebar: () => void;
};

const AboutUs: React.FC<SidebarProps> = ({ isOpen, toggleSidebar }) => {
  const sidebarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // No need to listen for outside clicks anymore
    return () => {
      document.removeEventListener("mousedown", () => {}); // Cleanup effect
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      ref={sidebarRef}
      className="fixed right-0 top-0 w-[60rem] z-50 transition-transform duration-300"
      style={{
        top: "190px", // Updated top position
        height: "55vh",
        backgroundImage: "url('/img/specialist_background.png')", // Set your background image
        backgroundSize: "cover", // Ensure the image covers the entire sidebar
        backgroundPosition: "center", // Center the background image
        backdropFilter: "blur(30px)", // Adjust the blur value here
        borderRadius: "8px", // Optional: round corners for aesthetics
      }}
    >
      {/* Overlay to create a mask effect */}
      <div className="absolute inset-0" style={{ backgroundColor: 'rgba(129, 216, 208, 0.8)' }} /> {/* Semi-transparent overlay */}
      
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
      <div className="absolute inset-0 flex flex-col justify-center text-black items-center p-6"> 
        {/* Removed bg-white bg-opacity-70 to allow overlay effect */}
        
        {/* Image Section */}
        <img 
          src="/img/specialistasia_logo_banner_black.png" // Replace with your image path
          alt="About Specialist Asia" 
          className="mb-8 max-w-md h-auto" // Image size
        />
        <h1 className="text-2xl font-bold mb-3">About Specialist Asia</h1>        
        <p className="text-lg mb-5">          
          Specialist Asia offers exclusive membership-based healthcare concierge service, which are designed to provide 
          personalised support and priority access to world-class healthcare. 
        </p>
        <p className="text-lg mb-3">
          Our team of dedicated experts ensures that all the details, 
          including healthcare coordination, translations, and local liaisons, are managed seamlessly, 
          leaving you free to focus on your health and recovery.
        </p>
        <p className="text-lg mb-3">
          As a member, you gain tailored assistance with everything from pre-trip healthcare consultations to travel arrangements, 
          appointment scheduling, and post-treatment follow-ups. 
        </p>
        <p className="text-lg mb-3">
          Whether you or your loved ones are planning to travel abroad for a healthcare specialist consultation or treatment, aesthetic procedures, 
          or even an annual health screening, our local experts ensure every step of your journey is smooth, allowing you to focus solely on recovery and well-being.
        </p>
        <p className="text-lg mb-5">
          Seamlessly navigate the complexities of travelling overseas for healthcare treatment across Asia.
        </p>        
      </div>
    </div>
  );
};

export default AboutUs;
