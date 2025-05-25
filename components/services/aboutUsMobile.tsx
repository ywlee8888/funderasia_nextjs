"use client";

import React, { useRef, useEffect, useState } from "react";
import { FaInfo } from "react-icons/fa";

const AboutUsMobile: React.FC = () => {
  const sidebarRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState(190);

  return (
    <div
      ref={sidebarRef}
      style={{
        top: `${position}px`,
        backgroundImage: "url('/img/about_background.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        borderRadius: "0.5rem",
      }}
    >
      {/* Semi-transparent overlay to create a mask effect */}
      <div
        className="absolute inset-0"
        style={{
          backdropFilter: "blur(4px)",
          borderRadius: "8px",
        }}
      ></div>

      {/* Content Area */}
      <div className="relative flex flex-col justify-center text-black items-center p-6 z-10">
        <img
          src="/img/specialistasia_logo_banner_black.png"
          alt="About Specialist Asia"
          className="mb-8 w-[80%] sm:w-[60%] md:w-[50%] lg:w-[30%] h-auto"
        />
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-bold mb-3">
          About Specialist Asia
        </h1>
        <div className="text-left w-full">
          <p className="text-md sm:text-lg md:text-xl lg:text-xl mt-3 mb-5">
            <strong>Specialist Asia</strong> is an exclusive, membership-based
            healthcare concierge service that offers seamless access to
            world-class medical care, providing personalised support throughout
            the patient journey. We focus on empowering expatriates and
            international patients by delivering trusted guidance, education,
            and concierge services—without offering medical advice or insurance
            policy recommendations, which are regulated activities.
          </p>
          <p className="text-md sm:text-lg md:text-xl lg:text-xl mb-3">
            Our <strong>dedicated medical concierge team</strong> facilitates
            priority access to leading specialists and healthcare providers,
            coordinating everything from referrals to fast-tracked appointments
            and hospital admissions. Members benefit from a VIP healthcare
            experience, including private suites, expedited check-ins, and
            personalised care coordination designed to ensure comfort,
            discretion, and peace of mind.
          </p>
          <p className="text-md sm:text-lg md:text-xl lg:text-xl mb-3">
            For those seeking treatment overseas, Specialist Asia provides
            comprehensive global healthcare coordination, covering pre-trip
            consultations, travel arrangements, and post-treatment follow-up, to
            create a smooth and stress-free medical travel experience.
          </p>
          <p className="text-md sm:text-lg md:text-xl lg:text-xl mb-3">
            In addition to concierge services, Specialist Asia is committed to
            educating expatriates and international patients, helping them
            navigate complex healthcare systems locally and abroad with
            confidence. Our educational programmes cover essential non-clinical
            topics such as insurance navigation, healthcare provider
            environments, patient support, and service logistics—always without
            providing medical or insurance advice.
          </p>
          <p className="text-md sm:text-lg md:text-xl lg:text-xl mb-5">
            Through careful partnership and alignment with healthcare providers
            and <strong>licensed insurance providers</strong>, Specialist Asia
            offers enriched, transparent, and trusted healthcare access,
            maintaining full compliance with medical and insurance regulations,
            and always placing patient needs and interests at the centre of
            everything we do.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUsMobile;
