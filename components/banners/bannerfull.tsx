import React, { useState } from "react";
import Image from "next/image";
import styles from "./banner.module.css";
import { DrawerDemo } from "../drawer/service_drawer";
import ContactUs from "../services/contactUs";

interface FullWidthImageProps {
  src: string;
  alt: string;
}

const FullWidthImage: React.FC<FullWidthImageProps> = ({ src, alt }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isContactUsOpen, setContactUsOpen] = useState(false);

  const handleOurServicesClick = () => {
    setIsDrawerOpen(true);
  };

  const handleContactUsClick = () => {
    setContactUsOpen(true);
  };

  const handleDrawerClose = (open: boolean) => {
    setIsDrawerOpen(open);
  };

  const handleContactUsClose = () => {
    setContactUsOpen(false);
  };

  return (
    <div className={styles.bannerContainer}>
      <img
        src={src}
        alt={alt}
        width={1920}
        height={1080}
        className={styles.bannerImage}
      />

      <div className={styles.mobileoverlayCard}>
        <div className={styles.cardTitle}>
          Your Most Trusted <br />
          Healthcare Concierge
        </div>
      </div>

      <div className={styles.overlayCard}>
        <div className={styles.cardTitle}>
          Your Most Trusted <br />
          Healthcare Concierge
        </div>
        <p>
          Need professional assistance for your overseas healthcare treatment?{" "}
          <br />
          Contact us to find out how we help make your health journeys across
          Asia seamless.
        </p>

        <div className={styles.buttonContainer}>
          <button 
            onClick={handleContactUsClick}
            className="bg-blue-600 hover:bg-blue-800 text-white px-5 py-2 rounded me-5"
          >
            Contact Us
          </button>
          <button
            onClick={handleOurServicesClick}
            className="bg-white hover:bg-gray-300 text-black px-5 py-2 rounded border border-black"
          >
            Discover
          </button>
        </div>
      </div>

      <DrawerDemo isOpen={isDrawerOpen} onOpenChange={handleDrawerClose} />
      <ContactUs isOpen={isContactUsOpen} toggleSidebar={handleContactUsClose} />
    </div>
  );
};

export default FullWidthImage;
