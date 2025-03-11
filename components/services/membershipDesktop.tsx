import React, { useRef, useEffect, useState } from "react";
import { FaUserFriends } from "react-icons/fa";
import MembershipCardContainer from "../cards/membershipTiers";
import styles from "../cards/membership.module.css";

const MembershipDesktop: React.FC = () => {
  const sidebarRef = useRef<HTMLDivElement>(null);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [topPosition] = useState(280); // Fixed top position in pixels

  return (
    <div>
      <div
        className="h-full w-full absolute top-0 left-0"
        style={{
          backgroundImage: "url('/img/memberbackground.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backdropFilter: "blur(30px)",
        }}
      />
      <div className="max-w-4xl text-black mx-auto p-6 pb-2 h-full flex flex-col justify-center items-center">
        <div className={`text-4xl pb-2 font-bold ${styles.headingDesktop}`}>
          Membership Plans
        </div>
        <div className={`text-lg ${styles.explainDesktop}`}>
          <div className="max-w-4xl text-black mx-auto p-6 pb-2 h-full flex flex-col justify-center items-center">
            <strong>Healthcare Concierge Across Asia </strong>
          </div>
          <div className="mt-2 p-4 border border-gray-300 rounded-lg shadow-md bg-white bg-opacity-50 max-w-3xl mx-auto">
            <h4 className="text-xl">
              <strong>Healthcare Concierge Across Asia </strong> <br />
              Our annual and pay-per-use membership plans provide individuals,
              families, and corporate executives with comprehensive,
              personalised support, offering unlimited access to essential
              healthcare concierge services in every Asian city where we
              operate, all at no additional cost.
            </h4>
          </div>
        </div>
        {/* Render MembershipCardContainer */}
        <div style={{ paddingTop: "4rem", paddingBottom: "3rem" }}>
          <MembershipCardContainer />
        </div>
      </div>
    </div>
  );
};

export default MembershipDesktop;
