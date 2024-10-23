"use client";

import React, { useRef, useEffect } from "react";
import {
  FaTimes,
  FaHospitalSymbol,
  FaInfo,
  FaWhatsapp,
  FaUserFriends,
} from "react-icons/fa"; // Import icons
import MembershipCardContainer from "../cards/membershipTiers";
import styles from "./bannerclear.module.css";

type SidebarProps = {
  isOpen: boolean;
  toggleSidebar: () => void;
};

const Membership: React.FC<SidebarProps> = ({ isOpen, toggleSidebar }) => {
  const sidebarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // No need to listen for outside clicks anymore
    return () => {
      document.removeEventListener("mousedown", () => {}); // Cleanup effect
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      ref={sidebarRef}
      className="fixed right-0 bg-white shadow-lg w-[60rem] z-30 transition-transform duration-300"
      style={{ top: "360px", height: "55vh" }}
    >
      {/* Close button */}
      <button
        onClick={toggleSidebar}
        className="bg-yellow-600 text-white z-20 absolute left-[-3.5rem] top-4"
        style={{
          fontSize: "2rem",
          padding: "0.5rem 0.75rem",
        }}
      >
        <FaUserFriends />
      </button>
      <div className="max-w-4xl text-black mx-auto p-6">
        <h1 className="text-2xl font-bold mb-3 mt-3">Membership Benefits</h1>
        <p className="text-md mb-5 mt-3">
          <strong>Personalised Service Across Asia:</strong> Our annual
          healthcare concierge membership program offers individuals and
          families comprehensive, personalised support, providing unlimited
          access to essential healthcare concierge services across every Asian
          city where we operate, at no extra charge.
        </p>
        <p className="text-md mb-3 mt-3">
          <strong>Dedicated Healthcare Concierge:</strong> As a member, you will
          benefit from a dedicated healthcare concierge who will handle all
          liaison, planning, and coordination of your healthcare needs. From
          booking specialist appointments to arranging health screenings, we
          ensure a seamless experience.
        </p>
        <p className="text-md mb-3 mt-3">
          <strong>Unlimited Priority Access & Care:</strong> Prioritize your
          well-being with unparalleled access and care, no matter where you are.
          Membership covers unlimited access to all core services. Third-party
          expenses such as transportation, accommodation, or entertainment are
          not included, and any associated fees will be communicated in advance
          and billed separately.
          <hr className="border-t border-gray-300 my-4" />
        </p>
        <div>
          <MembershipCardContainer />
        </div>

        <p className="text-md mb-3 mt-3">
          <strong>INDIVIDUAL MEMBERSHIP:</strong> The Individual Membership
          costs <strong>USD 800/- per annum</strong> and offers{" "}
          <strong>the named member</strong> unlimited access to all concierge
          services.
        </p>
        <p className="text-md mb-3 mt-3">
          <strong>FAMILY MEMBERSHIP:</strong> For those seeking coverage for
          their loved ones, the Family Membership is available at <br />{" "}
          <strong>USD 1,600/-</strong> per annum, covering{" "}
          <strong>one main member and up to three named family members</strong>.
          <p className="text-md mb-3 mt-3"></p>
          Both tiers offer the same comprehensive benefits, ensuring that all
          main and family members receive personalised healthcare coordination,
          access to essential services, and priority support across every Asian
          city where we operate.
        </p>
      </div>
    </div>
  );
};

export default Membership;
