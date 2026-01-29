"use client";

import React, { useEffect, useState } from "react";
import FullWidthImage from "@/components/banners/bannerfull";
import KeyServicesMobile from "@/components/services/keyServicesMobile";
import AboutUsMobile from "@/components/services/aboutUsMobile";
import ContactUsMobile from "@/components/services/contactUsMobile";
import DisclaimerModal from "@/components/disclaimer/disclaimer";

export default function Home() {
  const [hasAgreed, setHasAgreed] = useState<boolean>(false);

  useEffect(() => {
    const agreed = localStorage.getItem("hasAgreedToDisclaimer");
    if (agreed === "true") {
      setHasAgreed(true);
    }
  }, []);

  const handleAgree = () => {
    localStorage.setItem("hasAgreedToDisclaimer", "true");
    setHasAgreed(true);
  };

  if (!hasAgreed) {
    return <DisclaimerModal onAgree={handleAgree} />;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <div className="w-full">
        <main>
          <div className="w-full sm:w-auto lg:w-full">
            <div className="relative">
              <FullWidthImage
                src="https://res.cloudinary.com/dejimv2ge/video/upload/v1769649256/singapore_skyline_rj0zov.mp4"
                alt="Welcome Video"
              />
            </div>
          </div>

          <div className="relative w-full block sm:hidden">
            <AboutUsMobile />
          </div>

          <div className="relative w-full block sm:hidden">
            <KeyServicesMobile />
          </div>

          <div className="relative w-full block sm:hidden">
            <ContactUsMobile />
          </div>          
        </main>
      </div>      
    </div>
  );
}
