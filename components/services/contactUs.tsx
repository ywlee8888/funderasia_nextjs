"use client";

import React, { useRef, useEffect } from "react";
import { FaWhatsapp, FaEnvelope } from "react-icons/fa";
import Image from "next/image";

type SidebarProps = {
  isOpen: boolean;
  toggleSidebar: () => void;
};

const ContactUs: React.FC<SidebarProps> = ({ isOpen, toggleSidebar }) => {
  const sidebarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target as Node)
      ) {
        toggleSidebar();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [toggleSidebar]);

  if (!isOpen) return null;

  return (
    <div
      ref={sidebarRef}
      className="fixed right-0 w-full sm:w-full md:w-[60rem] h-screen md:h-auto z-50 transition-transform duration-300"
      style={{ top: "140px", height: "auto" }}
    >
      {/* Background container */}
      <div
        className="fixed right-0 z-50 transition-transform duration-300 w-full sm:w-full md:w-[60rem] h-auto md:h-[60vh] sm:h-[50vh] xs:h-[40vh] flex items-center justify-center p-8"
        style={{
          backgroundImage: "url('/img/apac-map.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backdropFilter: "blur(30px)",
          borderRadius: "0.5rem",
        }}
      >
        {/* Overlay */}
        <div
          className="absolute inset-0"
          style={{
            backgroundColor: "rgba(129, 216, 208, 0.5)",
            borderRadius: "0.5rem",
          }}
        />

        {/* Close button */}
        <button
          onClick={toggleSidebar}
          className="bg-green-500 text-white z-20 absolute left-[-3.5rem] top-4 text-[2.5rem] p-2"
        >
          <FaWhatsapp />
        </button>

        {/* Hero block (image + text + floating card) */}
        <div className="relative w-full max-w-4xl flex flex-col items-center">
          {/* Hero Image & Title */}
          <div className="relative w-full">
            <Image
              src="/img/asian_woman_hotline_second.jpg"
              alt="Contact Image"
              layout="responsive"
              width={800}
              height={400}
              className="rounded-md w-full h-auto"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 rounded-md" />

            {/* Text over image */}
            <h1 className="absolute left-5 top-6 text-white text-2xl sm:text-lg md:text-5xl font-bold">
              Get in touch
            </h1>
            <p className="absolute left-5 top-20 sm:top-24 md:top-28 text-white text-sm sm:text-base md:text-lg font-bold">
              We'd love to hear from you. Reach out to our team for advisory
              services.
            </p>

            {/* Floating Contact Card overlapping bottom border */}
            <div className="absolute left-1/2 bottom-0 transform -translate-x-1/2 translate-y-1/2 w-11/12 md:w-2/3 bg-white/90 backdrop-blur-sm p-10 rounded-lg shadow-lg z-30">
              <h2 className="text-black text-2xl md:text-3xl text-center font-bold mb-6">
                Funder Asia Advisory
              </h2>
              <div className="flex items-center mb-6 justify-center">
                <a
                  href="https://wa.me/6584118213"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center"
                >
                  <img
                    src="/img/whatsapp-chat.png"
                    alt="WhatsApp Icon"
                    className="mr-3 w-[180px] h-auto"
                  />
                </a>
              </div>
              <div className="flex items-center justify-center mt-4">
                <FaEnvelope className="mr-3 text-black text-2xl md:text-3xl" />
                <span className="text-black text-lg md:text-2xl font-semibold">
                  advisory@funder.asia
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
