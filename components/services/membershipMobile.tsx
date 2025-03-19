import React, { useRef, useEffect, useState } from "react";
import { FaUserFriends } from "react-icons/fa";
import MembershipCardContainer from "../cards/membershipTiers";
import styles from "../cards/membership.module.css";

const MembershipMobile: React.FC = () => {
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
      <div className="max-w-4xl text-black mx-auto p-6 pb-10 h-full flex flex-col justify-center items-center">
        <h2 className={`text-4xl pb-0 font-bold ${styles.heading}`}>
          Membership Plans
        </h2>
        <h4 className={`text-2xl pb-0 font-bold ${styles.heading}`}>
          Healthcare Concierge Across Asia
        </h4>
        <div className={`text-lg ${styles.explainMobile}`}>
          <p>
            Our <strong>annual and pay-per-use membership plans</strong> provide
            individuals, families, and corporate executives with comprehensive,
            personalised support, offering unlimited access to essential
            healthcare concierge services in every Asian city where we operate,
            all at no additional cost.
          </p>
        </div>

        {/* Render MembershipCardContainer */}
        <div style={{ paddingTop: "8rem" }}>
          <MembershipCardContainer />
        </div>
      </div>
    </div>
  );
};

export default MembershipMobile;
