import React, { useState } from "react";
import Image from "next/image";
import styles from "./bannerfull.module.css";
import { DrawerDemo } from "../drawer/service_drawer";
import ContactUs from "../services/contactUs";
import SpecialistConnectNavBar from "../forms/specialistConnectNavBar";

interface FullWidthImageProps {
  src: string;
  alt: string;
}

const FullWidthImage: React.FC<FullWidthImageProps> = ({ src, alt }) => {
  const [openComponents, setOpenComponents] = useState({
    drawer: false,
    contactUs: false,
    specialistConnect: false,
  });

  const handleOpen = (component: keyof typeof openComponents) => {
    setOpenComponents((prevState) => ({ ...prevState, [component]: true }));
  };

  const handleClose = (component: keyof typeof openComponents) => {
    setOpenComponents((prevState) => ({ ...prevState, [component]: false }));
  };

  return (
    <div className={styles.bannerContainer}>
      <div className={`${styles.logo_container}`}>
        <img
          src="/img/specialistasia_logo_banner_black.png"
          alt="About Specialist Asia"
          className={styles.logo}
        />
      </div>
      <img
        src={src}
        alt={alt}
        width={1920}
        height={1800}
        className={styles.bannerImage}
      />
      <div className={styles.specialistConnectContainer}>
        <h3 className={styles.specialistConnectTitle}></h3>
        <button
          onClick={() => handleOpen("specialistConnect")}
          className={`${styles.specialistConnectButton} bg-blue-500 hover:bg-blue-600 font-bold text-white px-4 py-4 rounded whitespace-nowrap`}
          aria-label="Specialist Connect"
        >
          SPECIALIST CONNECT &#8482;
        </button>
      </div>
      <div className="relative flex flex-col justify-center text-black items-center p-6 z-10">
        <img
          src="/img/specialistasia_logo_banner_black.png"
          alt="About Specialist Asia"
          className="mb-8 w-[90%] sm:w-[70%] h-auto"
        />
      </div>
      <div className={styles.overlayCard}>
        <div className={styles.cardTitle}>
          Your Most Trusted <br />
          Healthcare Concierge
        </div>
        <p className={styles.cardText}>
          Need professional assistance for your overseas healthcare treatment?{" "}
          <br />
          Contact us to find out how we help make your health journeys across
          Asia seamless.
        </p>

        <div className={styles.buttonContainer}>
          <button
            onClick={() => handleOpen("contactUs")}
            className="bg-blue-600 hover:bg-blue-800 text-white px-5 py-2 rounded me-5"
            aria-label="Contact Us"
          >
            Contact Us
          </button>
          <button
            onClick={() => handleOpen("drawer")}
            className="bg-white hover:bg-gray-300 text-black px-5 py-2 rounded border border-black"
            aria-label="Discover Our Services"
          >
            Discover
          </button>
        </div>
      </div>

      <DrawerDemo
        isOpen={openComponents.drawer}
        onOpenChange={() => handleClose("drawer")}
      />
      <ContactUs
        isOpen={openComponents.contactUs}
        toggleSidebar={() => handleClose("contactUs")}
      />

      {openComponents.specialistConnect && (
        <>
          <div
            className={`${styles.fullScreenOverlay} fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-50`}
          ></div>
          <SpecialistConnectNavBar
            isOpen={openComponents.specialistConnect}
            toggleSidebar={() => handleClose("specialistConnect")}
          />
        </>
      )}
    </div>
  );
};

export default FullWidthImage;
