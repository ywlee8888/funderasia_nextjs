"use client";

import React, { useEffect, useState } from "react";
import Navbar from "@/components/Navbar/navbar";
import FullWidthImage from "@/components/banners/bannerfull";
import ConciergeImage from "@/components/banners/bannerConcierge";
import MedicalImage from "@/components/banners/bannerClear";
import ServicesImage from "@/components/banners/bannerServices";
import Copyright from "@/components/copyright/copyright";
import SpecialistConnect from "@/components/forms/specialistConnect";
import KeyServicesMobile from "@/components/services/keyServicesMobile";
import MembershipMobile from "@/components/services/membershipMobile";
import AboutUsMobile from "@/components/services/aboutUsMobile";
import ContactUsMobile from "@/components/services/contactUsMobile";
import KeyServicesDesktop from "@/components/services/keyServicesDesktop";
import MembershipDesktop from "@/components/services/membershipDesktop";
import BannerFlag from "@/components/banners/bannerFlag";
import WhatsApp from "@/components/chat/whatsapp";

export default function Home() {
  const [isSpecialistConnectOpen, setIsSpecialistConnectOpen] = useState(false);

  const toggleSpecialistConnect = () => {
    setIsSpecialistConnectOpen((prev) => !prev);
  };

  useEffect(() => {
    toggleSpecialistConnect();
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <div className="relative w-full">
        <Navbar
          className="absolute top-0 left-0 w-full z-10"
          toggleSpecialistConnect={toggleSpecialistConnect}
        />
      </div>

      <div className="w-full">
        <main>
          <div className="w-full sm:w-auto lg:w-full">
            {/* FullWidthImage section */}
            <div className="relative">
              <FullWidthImage src="/img/asian_nurse.jpg" alt="Welcome Banner" />
            </div>
          </div>

          <div className="relative w-full">
            <ConciergeImage
              src="/img/doctor_consult.jpg"
              alt="Healthcare Banner"
              title="Healthcare Specialists Coverage"
            />
          </div>

          <div className="relative w-full hidden md:block">
            <KeyServicesDesktop />
          </div>

          <div className="relative w-full block sm:hidden">
            <KeyServicesMobile />
          </div>

          <div className="relative w-full sm:block hidden">
            <MedicalImage
              src="/img/medical_background_narrow.jpg"
              alt="Medical Banner"
            />
          </div>

          <div className="relative w-full block sm:hidden">
            <BannerFlag src="/img/flags_background.png" alt="Medical Banner" />
          </div>

          <div className="relative w-full hidden md:block">
            <MembershipDesktop />
          </div>

          <div className="relative w-full block sm:hidden">
            <MembershipMobile />
          </div>

          <div className="relative w-full sm:block hidden">
            <ServicesImage src="/img/female_doctor.jpg" alt="Services Banner" />
          </div>

          <div className="relative w-full block">
            <AboutUsMobile />
          </div>

          <div className="relative w-full block sm:hidden">
            <ContactUsMobile />
          </div>
          <WhatsApp />
        </main>
      </div>

      {/* Copyright remains at the bottom */}
      <div className="relative w-full mt-auto">
        <Copyright />
      </div>

      {/* Render SpecialistConnect at the top-level */}
      {isSpecialistConnectOpen && (
        <SpecialistConnect
          isOpen={isSpecialistConnectOpen}
          toggleSidebar={toggleSpecialistConnect}
        />
      )}
    </div>
  );
}
