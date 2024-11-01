import React, { useRef, useEffect } from "react";
import { FaUserFriends } from "react-icons/fa"; // Import icons
import MembershipCardContainer from "../cards/membershipTiers";
import styles from "../cards/membership.module.css";

type SidebarProps = {
  isOpen: boolean;
  toggleSidebar: () => void;
};

const Membership: React.FC<SidebarProps> = ({ isOpen, toggleSidebar }) => {
  const sidebarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    return () => {
      document.removeEventListener("mousedown", () => {});
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      ref={sidebarRef}
      className="fixed right-0 w-[60rem] z-30 transition-transform duration-300"
      style={{
        top: "280px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        // Background image
        backgroundImage: `url('/img/specialist_background.png')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        borderRadius: "0.5rem",
      }}
    >
      {/* Overlay mask for background image */}
      <div
        className="h-full w-full absolute top-0 left-0"
        style={{
          backgroundColor: "rgba(129, 216, 208, 0.8)", // Semi-transparent mask
          borderRadius: "0.5rem",
          zIndex: 1, // Set the z-index to ensure it sits below the content
        }}
      />
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
      <div className="max-w-4xl text-black mx-auto p-6 pb-10 h-full flex flex-col justify-center items-center">
        <h2 className={`text-4xl pb-0 font-bold ${styles.heading}`}>Membership Plans</h2>
        <div className={`text-lg ${styles.explain}`}>
          <p>
            <strong>Healthcare Concierge Across Asia </strong> Our annual membership plans provide individuals, families,
            and corporate executives with comprehensive, personalized support, offering unlimited access to essential healthcare
            concierge services in every Asian city where we operate, all at no additional cost.
          </p>
        </div>
        <MembershipCardContainer />
      </div>
    </div>
  );
};

export default Membership;
