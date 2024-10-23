"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Navbar from "@/components/Navbar/navbar";
import FullWidthImage from "@/components/banners/bannerfull";
import ConciergeImage from "@/components/banners/bannerConcierge";
import MedicalImage from "@/components/banners/bannerClear";
import ServicesImage from "@/components/banners/bannerServices";
import Copyright from "@/components/copyright/copyright";
import SpecialistConnect from "@/components/forms/specialistConnect";

export default function Home() {
  const [isSpecialistConnectOpen, setIsSpecialistConnectOpen] = useState(false);
  const router = useRouter();

  // Function to toggle SpecialistConnect visibility
  const toggleSpecialistConnect = () => {
    setIsSpecialistConnectOpen(!isSpecialistConnectOpen);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <div className="relative w-full">
        <Navbar
          className="absolute top-0 left-0 w-full z-10"
          toggleSpecialistConnect={toggleSpecialistConnect} // Pass down the toggle function
        />
      </div>

      <div>
        {/* Render SpecialistConnect component conditionally */}
        {isSpecialistConnectOpen && (
          <SpecialistConnect
            isOpen={isSpecialistConnectOpen}
            toggleSidebar={toggleSpecialistConnect}
          />
        )}
      </div>

      <div className="w-full">
        <main>
          <div className="relative w-full">
            {/* FullWidthImage section */}
            <div className="relative">
              <FullWidthImage src="/img/asian_nurse.jpg" alt="Welcome Banner" />
            </div>
          </div>

          {/* Other content remains intact*/} 
          <div className="relative w-full">
            <ConciergeImage
              src="/img/doctor_consult.jpg"
              alt="Healthcare Banner"
              title="Premier Healthcare Specialists"
            />
          </div>

          
          <div className="relative w-full">
            <ServicesImage src="/img/female_doctor.jpg" alt="Services Banner" />
          </div>

          <div className="relative w-full">
            <MedicalImage
              src="/img/medical_background_narrow.jpg"
              alt="Medical Banner"
            />
          </div>
        </main>
      </div>
      <Copyright />
    </div>
  );
}
