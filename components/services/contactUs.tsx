"use client";

import React, { useRef, useEffect } from "react";
import { FaWhatsapp, FaPhone, FaEnvelope } from "react-icons/fa";
import Image from "next/image";

type SidebarProps = {
  isOpen: boolean;
  toggleSidebar: () => void;
};

const ContactUs: React.FC<SidebarProps> = ({ isOpen, toggleSidebar }) => {
  const sidebarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target as Node)) {
        toggleSidebar();
      }
    };

    // Add event listener to the document
    document.addEventListener("mousedown", handleClickOutside);

    // Cleanup the event listener on component unmount
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [toggleSidebar]);

  if (!isOpen) return null;

  return (
    <div
      ref={sidebarRef}
      className="fixed right-0 w-full sm:w-[80%] md:w-[60rem] h-screen md:h-auto z-50 transition-transform duration-300"
      style={{
        top: "140px",
        height: "auto",
      }}
    >
      <div
        className="fixed right-0 z-50 transition-transform duration-300 p-8 md:w-[60rem] w-[80%] sm:w-[80%] h-auto md:h-[60vh] sm:h-[50vh] xs:h-[40vh]"
        style={{
          backgroundImage: "url('/img/specialist_background.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backdropFilter: "blur(30px)",
          borderRadius: "0.5rem",
        }}
      >
        <div
          className="absolute inset-0"
          style={{ backgroundColor: "rgba(129, 216, 208, 0.8)" }}
        />

        <button
          onClick={toggleSidebar}
          className="bg-green-500 text-white z-20 absolute left-[-3.5rem] top-4 text-[2.5rem] p-2"
        >
          <FaWhatsapp />
        </button>

        <div className="max-w-4xl text-black mx-auto p-6 pt-8 relative w-[95%]">
          <div className="relative mb-4">
            <Image
              src="/img/asian_woman_hotline_second.jpg"
              alt="Contact Image"
              layout="responsive"
              width={800}
              height={400}
              className="rounded-md w-full h-auto"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 rounded-md"></div>
            <h1 className="absolute inset-0 flex items-start justify-start text-white text-2xl sm:text-lg md:text-5xl font-bold left-5 top-6 sm:top-10">
              Get in touch
            </h1>
            <p className="absolute inset-0 flex items-start text-white text-sm sm:text-base md:text-lg font-bold left-5 top-16 sm:top-20 md:top-24 lg:top-28">
              Want to get in touch? We'd love to hear from you. <br />
              Here's how you can reach us.
            </p>
          </div>

          <div className="flex flex-col md:flex-row justify-between gap-4 mb-8 mt-4 lg:top-5/8 lg:transform lg:-translate-y-1/2">
            {/* Card 1 */}
            <div className="bg-gray-100 p-6 rounded-lg shadow-md w-full md:w-[48%]">
              <h2 className="text-xl md:text-2xl font-bold mb-4">
                Membership Services
              </h2>
              <div className="flex items-center">
                <FaWhatsapp className="mr-2 text-md md:text-2xl" />
                <span className="text-md md:text-xl">WhatsApp</span>
              </div>
              <div className="flex items-center">
                <FaPhone className="mr-2 text-md md:text-2xl" />
                <span className="text-md md:text-xl">Telephone</span>
              </div>
              <div className="flex items-center">
                <FaEnvelope className="mr-2 text-md md:text-2xl" />
                <span className="text-md md:text-xl">member@specialist.asia</span>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-gray-100 p-6 rounded-lg shadow-md w-full md:w-[48%]">
              <h2 className="text-xl md:text-2xl font-bold mb-4">
                Healthcare Provider
              </h2>
              <div className="flex items-center">
                <FaWhatsapp className="mr-2 text-md md:text-2xl" />
                <span className="text-md md:text-xl">WhatsApp</span>
              </div>
              <div className="flex items-center">
                <FaPhone className="mr-2 text-md md:text-2xl" />
                <span className="text-lg md:text-xl">Telephone</span>
              </div>
              <div className="flex items-center">
                <FaEnvelope className="mr-2 text-md md:text-2xl" />
                <span className="text-md md:text-xl">healthcare@specialist.asia</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
