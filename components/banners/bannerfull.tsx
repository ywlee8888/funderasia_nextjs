import React, { useState } from "react";
import styles from "./bannerfull.module.css";
import { DrawerDemo } from "../drawer/service_drawer";
import ContactUs from "../services/contactUs";
import Navbar from "@/components/Navbar/navbar_desktop";
import Copyright from "@/components/copyright/copyright_desktop";

interface FullWidthImageProps {
  src: string;
  alt: string;
}

const FullWidthImage: React.FC<FullWidthImageProps> = ({ src, alt }) => {
  const [openComponents, setOpenComponents] = useState({
    drawer: false,
    contactUs: false,
  });

  const handleOpen = (component: keyof typeof openComponents) => {
    setOpenComponents((prev) => ({ ...prev, [component]: true }));
  };

  const handleClose = (component: keyof typeof openComponents) => {
    setOpenComponents((prev) => ({ ...prev, [component]: false }));
  };

  const isVideo = /\.(mp4|webm|ogg)$/i.test(src);

  return (
    <div className={styles.bannerContainer}>
      {/* Navbar on top of banner */}
      <div className="absolute top-0 left-0 w-full z-20 hidden sm:block">
        <Navbar />
      </div>

      {/* 🔥 Banner media (image or video) */}
      {isVideo ? (
        <video
          src={src}
          autoPlay
          loop
          muted
          playsInline
          className={styles.bannerImage}
        />
      ) : (
        <img
          src={src}
          alt={alt}
          width={1920}
          height={1080}
          className={styles.bannerImage}
        />
      )}

      {/* Mobile floating logo */}
      <div className={styles.mobileLogoContainer}>
        <img
          src="/img/logo.png"
          alt="About Funder Asia"
          className={styles.mobileLogo}
        />
      </div>

      {/* Overlay card */}
      <div
        className={`overlayCard hidden md:flex flex-col items-center ${styles.overlayCard}`}
        style={{
          maxWidth: "400px", // smaller width
          padding: "1.5rem", // reduce padding
          transform: "translateY(-20%)", // optional: move slightly up
        }}
      >
        {/* Logo */}
        <div className="flex justify-center mb-3">
          <img
            src="/img/logo.png"
            alt="About Funder Asia"
            className="w-20 h-auto" // smaller logo
          />
        </div>

        {/* Title */}
        <div className={`${styles.cardTitle} text-center text-xl md:text-2xl`}>
          Guiding Founders Through <br />
          Strategic Exits
        </div>

        {/* Text */}
        <p
          className={`${styles.cardText} text-center text-sm md:text-base mt-2`}
        >
          Considering a strategic sale, acquisition or business transition in
          Asia?
          <br />
          Speak with us to understand how we guide founders through
          confidential, well-executed M&A transactions across the region.
        </p>

        {/* Buttons */}
        <div className="flex justify-center gap-3 mt-4">
          <button
            onClick={() => handleOpen("contactUs")}
            className="bg-blue-600 hover:bg-blue-800 text-white px-4 py-2 rounded"
          >
            Contact Us
          </button>
          <button
            onClick={() => handleOpen("drawer")}
            className="bg-white hover:bg-gray-300 text-black px-4 py-2 rounded border border-black"
          >
            Discover
          </button>
        </div>
      </div>

      {/* Drawers */}
      <DrawerDemo
        isOpen={openComponents.drawer}
        onOpenChange={() => handleClose("drawer")}
      />
      <ContactUs
        isOpen={openComponents.contactUs}
        toggleSidebar={() => handleClose("contactUs")}
      />

      {/* Copyright at the bottom of banner, desktop only */}
      <div className="absolute bottom-0 left-0 w-full z-20 hidden md:block">
        <Copyright />
      </div>
    </div>
  );
};

export default FullWidthImage;
