import React, { useState } from "react";
import Image from "next/image";
import styles from "./bannerservices.module.css";
import { FaTimes } from "react-icons/fa"; 
import SpecialistConnectBanner from "../forms/specialistConnectBanner";

interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

interface FullWidthImageProps {
  src: string;
  alt: string; 
}

const ServicesImage: React.FC<FullWidthImageProps> = ({ src, alt }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.bannerContainer}>
      {/* Image */}
      <img
        src={src}
        alt={alt}
        width={1920}
        height={1080}
        className={styles.bannerImage}
      />

      {/* Mobile Overlay Card with Logo Only */}
      <div className={styles.mobileoverlayCard}>
        <div className={styles.cardTitle}>
          Specialist Connect <br />
          Healthcare Concierge
        </div>       
      </div>

      {/* Desktop Overlay Card */}
      <div className={styles.overlayCard}>
        <div className={styles.cardTitle}>
          SPECIALIST CONNECT&#8482;
        </div>
        <p>
          <strong>Looking for specialist healthcare treatment <br/>or seeking a second opinion? </strong>       
        </p>
        <br/>
        <p>
          Specialist Connect&#8482; links you with top 
          healthcare specialists across Asia who can provide professional guidance for your treatment options. 
          Whether you are seeking expert advice or confirmation on your current diagnosis, 
          we are here to help you navigate your healthcare journey with confidence.
        </p>
        
        {/* Button Container */}
        <div className={styles.buttonContainer}>
          <button 
            onClick={toggleSidebar} 
            className="bg-blue-600 hover:bg-blue-800 text-white px-5 py-4 rounded me-5"
          >
            SPECIALIST CONNECT&#8482;
          </button>          
        </div>
      </div>

      {/* Modal Background */}
      {isOpen && (
        <div className={styles.modalBackground} onClick={toggleSidebar}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <SpecialistConnectBanner isOpen={isOpen} toggleSidebar={toggleSidebar} />            
          </div>
        </div>
      )}
    </div>
  );
};

export default ServicesImage;
