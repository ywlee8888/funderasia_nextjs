"use client";

import React, { useRef } from "react";
import { FaWhatsapp, FaPhone, FaEnvelope } from "react-icons/fa"; // Import icons
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
      className="fixed right-0 z-50 transition-transform duration-300"
      style={{
        top: "140px",
        height: "auto",
        width: "60rem",
      }}
    >
      <div
        className="h-full w-full relative"
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
          style={{ backgroundColor: 'rgba(129, 216, 208, 0.8)' }}
        />

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

        <div className="max-w-4xl text-black mx-auto p-6 pt-8 relative">
          <div className="relative mb-4">
            <Image
              src="/img/asian_woman_hotline_second.jpg"
              alt="Contact Image"
              layout="responsive"
              width={600}
              height={300}
              className="rounded-md w-full h-auto"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 rounded-md"></div>

            <h1 className="absolute inset-0 flex items-center text-white text-5xl font-bold left-[5%]">
              Get in touch
            </h1>
            <p className="absolute inset-0 flex items-center text-white text-lg font-bold left-[5%] top-[110px]">
              Want to get in touch? We'd love to hear from you. <br /> Here's how
              you can reach us.
            </p>
          </div>

          <div className="relative w-full mt-4">
            <div className="absolute inset-0 w-full flex justify-between gap-4 px-4">
              <div className="bg-gray-100 p-6 rounded-lg shadow-md w-1/2 h-full flex flex-col justify-between">
                <h2 className="text-xl font-bold mb-4">Membership Services</h2>
                <div className="flex items-center">
                  <FaWhatsapp className="mr-2 text-2xl" />
                  <span className="text-lg">WhatsApp</span>
                </div>
                <div className="flex items-center">
                  <FaPhone className="mr-2 text-2xl" />
                  <span className="text-lg">Telephone</span>
                </div>
                <div className="flex items-center">
                  <FaEnvelope className="mr-2 text-2xl" />
                  <span className="text-lg">member@specialist.asia</span>
                </div>
              </div>

              <div className="bg-gray-100 p-6 rounded-lg shadow-md w-1/2 h-full flex flex-col justify-between">
                <h2 className="text-xl font-bold mb-4">Healthcare Provider</h2>
                <div className="flex items-center">
                  <FaWhatsapp className="mr-2 text-2xl" />
                  <span className="text-lg">WhatsApp Support</span>
                </div>
                <div className="flex items-center">
                  <FaPhone className="mr-2 text-2xl" />
                  <span className="text-lg">Phone Support</span>
                </div>
                <div className="flex items-center">
                  <FaEnvelope className="mr-2 text-2xl" />
                  <span className="text-lg">healthcare@specialist.asia</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
