"use client";

import React from "react";
import { FaWhatsapp, FaEnvelope } from "react-icons/fa";
import Image from "next/image";
import Copyright from "@/components/copyright/copyright_mobile";

const ContactUsMobile: React.FC = () => {
  return (
    <div
      className="relative flex flex-col justify-center text-black items-center p-6 z-10"
      style={{
        height: "calc(100vh - 140px)",
      }}
    >
      <div
        className="absolute right-0 p-8 w-full sm:w-full md:w-[60rem] h-full z-50 flex flex-col justify-between"
        style={{
          backgroundImage: "url('/img/blue-map.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backdropFilter: "blur(30px)",
          borderRadius: "0.5rem",
        }}
      >
        {/* WhatsApp Button */}
        <button className="bg-green-500 text-white absolute left-[-3.5rem] top-4 text-[2.5rem] p-2 z-20">
          <FaWhatsapp />
        </button>

        {/* Hero Image + Text + Card */}
        <div className="max-w-4xl text-black mx-auto p-6 pt-6 relative w-[100%]">
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
            <h1 className="absolute left-5 top-6 text-white text-2xl sm:text-lg md:text-5xl font-bold">
              Get in touch
            </h1>
            <p className="absolute left-5 top-16 sm:top-20 md:top-24 lg:top-28 text-white text-sm sm:text-base md:text-lg font-bold">
              Want to get in touch? We'd love to hear from you. <br />
              Here's how you can reach us.
            </p>
          </div>

          <div className="flex flex-col md:flex-row justify-between gap-4 mb-8 mt-4">
            {/* Card */}
            <div className="bg-gray-100 p-6 rounded-lg shadow-md w-full md:w-[48%]">
              <h2 className="text-xl md:text-2xl font-bold mb-4">
                Funder Asia Advisory
              </h2>
              <div className="flex items-center">
                <a
                  href="https://wa.me/6584118213"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center"
                >
                  <img
                    src="/img/whatsapp-chat.png"
                    alt="WhatsApp Icon"
                    className="mr-2 w-[150px] h-auto"
                  />
                </a>
              </div>
              <div className="flex items-center mt-4">
                <FaEnvelope className="mr-2 text-md md:text-2xl" />
                <span className="text-md md:text-xl text-black">advisory@funder.asia</span>
              </div>
            </div>
          </div>

        </div>

        {/* Copyright at bottom (mobile only, white text) */}
        <div className="w-full mt-auto block md:hidden text-white">
          <Copyright />
        </div>

      </div>
    </div>
  );
};

export default ContactUsMobile;
