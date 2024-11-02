"use client";

import React, { useRef } from "react";
import { FaWhatsapp, FaPhone, FaEnvelope } from "react-icons/fa"; 
import Image from "next/image";

type SidebarProps = {
  isOpen: boolean;
  toggleSidebar: () => void;
};

const ContactUs: React.FC<SidebarProps> = ({ isOpen, toggleSidebar }) => {
  const sidebarRef = useRef<HTMLDivElement>(null);

  if (!isOpen) return null;

  return (
    <div
      ref={sidebarRef}
      className="fixed right-0 md:w-[60rem] w-[80%] sm:w-[80%] h-auto md:h-auto h-screen z-50 transition-transform duration-300"
      style={{
        top: "140px",
        height: "auto",
        width: "60rem",
      }}
    >
      {/* Background image covering the entire sidebar */}
      <div
        className="h-full w-full"
        style={{
          height: "auto",
          minHeight: "65vh",
          backgroundImage: "url('/img/specialist_background.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backdropFilter: "blur(30px)",
          borderRadius: "0.5rem",
        }}
      >
        {/* Overlay to create a mask effect */}
        <div
          className="absolute inset-0"
          style={{ backgroundColor: 'rgba(129, 216, 208, 0.8)' }}
        />

        {/* Close button */}
        <button
          onClick={toggleSidebar}
          className="bg-green-500 text-white z-20 absolute left-[-3.5rem] top-4"
          style={{
            fontSize: "2rem",
            padding: "0.5rem 0.75rem",
          }}
        >
          <FaWhatsapp />
        </button>

        <div className="max-w-4xl text-black mx-auto p-6 pt-8 md:w-[60rem] w-[80%] sm:w-[80%] h-auto md:h-auto h-screen relative">
          {/* Image with text overlay */}
          <div className="relative mb-4">
            <Image
              src="/img/asian_woman_hotline_second.jpg"
              alt="Contact Image"
              layout="responsive" 
              width={600} 
              height={300} 
              className="rounded-md w-full h-auto"
            />
            {/* Overlay with mask */}
            <div className="absolute inset-0 bg-black bg-opacity-40 rounded-md"></div>

            {/* "Get in touch" text over image */}
            <h1 className="absolute inset-0 flex items-center text-white text-5xl font-bold left-[5%]">
              Get in touch
            </h1>
            <p className="absolute inset-0 flex items-center text-white text-lg font-bold left-[5%] top-[110px]">
              Want to get in touch? We'd love to hear from you. <br /> Here's how
              you can reach us.
            </p>
          </div>

          {/* Contact Cards positioned above the image */}
          <div className="absolute top-5/8 transform -translate-y-1/2 w-full flex justify-between gap-4 mb-8 px-4">
            {/* Card 1 */}
            <div className="bg-gray-100 p-6 rounded-lg shadow-md w-1/2">
              <h2 className="text-xl font-bold mb-4">Membership Services</h2>
              <div style={{ display: "flex", alignItems: "center" }}>
                <FaWhatsapp style={{ marginRight: "8px", fontSize: "24px" }} />
                <span style={{ fontSize: "20px" }}>WhatsApp</span>
              </div>
              <div style={{ display: "flex", alignItems: "center" }}>
                <FaPhone style={{ marginRight: "8px", fontSize: "24px" }} />
                <span style={{ fontSize: "20px" }}>Telephone</span>
              </div>
              <div style={{ display: "flex", alignItems: "center" }}>
                <FaEnvelope style={{ marginRight: "8px", fontSize: "24px" }} />
                <span style={{ fontSize: "20px" }}>member@specialist.asia</span>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-gray-100 p-6 rounded-lg shadow-md w-1/2">
              <h2 className="text-xl font-bold mb-4">Healthcare Provider</h2>
              <div style={{ display: "flex", alignItems: "center" }}>
                <FaWhatsapp style={{ marginRight: "8px", fontSize: "24px" }} />
                <span style={{ fontSize: "20px" }}>WhatsApp Support</span>
              </div>
              <div style={{ display: "flex", alignItems: "center" }}>
                <FaPhone style={{ marginRight: "8px", fontSize: "24px" }} />
                <span style={{ fontSize: "20px" }}>Phone Support</span>
              </div>
              <div style={{ display: "flex", alignItems: "center" }}>
                <FaEnvelope style={{ marginRight: "8px", fontSize: "24px" }} />
                <span style={{ fontSize: "20px" }}>healthcare@specialist.asia</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
