import React, { useRef, useEffect, useState } from "react";
import { FaUserFriends } from "react-icons/fa";
import MembershipCardContainer from "../cards/membershipTiers";
import styles from "../cards/membership.module.css";

type SidebarProps = {
  isOpen: boolean;
  toggleSidebar: () => void;
};

const Membership: React.FC<SidebarProps> = ({ isOpen, toggleSidebar }) => {
  const sidebarRef = useRef<HTMLDivElement>(null);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [topPosition, setTopPosition] = useState(280); // Initial position in pixels
  const [isDragging, setIsDragging] = useState(false);
  const [startY, setStartY] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768); // Adjust the breakpoint as needed
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target as Node)) {
        toggleSidebar();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [toggleSidebar]);

  // Mouse down handler to start dragging
  const handleMouseDown = (event: React.MouseEvent) => {
    setIsDragging(true);
    setStartY(event.clientY);
  };

  // Mouse move handler to update position
  const handleMouseMove = (event: MouseEvent) => {
    if (isDragging) {
      const newTopPosition = topPosition + (event.clientY - startY);
      setTopPosition(newTopPosition);
      setStartY(event.clientY); // Update startY for the next move
    }
  };

  // Mouse up handler to stop dragging
  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // Attach mouse move and up listeners on dragging
  useEffect(() => {
    if (isDragging) {
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
    }

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging]);

  if (!isOpen) return null;

  return (
    <div
      ref={sidebarRef}
      className={`absolute right-0 z-30 transition-transform duration-300 ${
        isSmallScreen ? 'w-full' : 'md:w-[60rem] w-[80%]'
      } h-auto`}
      style={{
        top: `${topPosition}px`,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundImage: `url('/img/specialist_background.png')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        borderRadius: "0.5rem",
        cursor: isDragging ? "grabbing" : "grab", // Change cursor based on dragging state
      }}
      onMouseDown={isSmallScreen ? handleMouseDown : undefined} // Enable dragging on small screens
    >
      <div
        className="h-full w-full absolute top-0 left-0"
        style={{
          backgroundColor: "rgba(129, 216, 208, 0.8)",
          borderRadius: "0.5rem",
          zIndex: 1,
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
        <h2 className={`text-4xl pb-0 font-bold ${styles.heading}`}>
          Membership Plans
        </h2>
        <div className={`text-lg ${styles.explain}`}>
          <p>
            <strong>Healthcare Concierge Across Asia </strong> <br/>Our annual
            membership plans provide individuals, families, and corporate
            executives with comprehensive, personalised support, offering
            unlimited access to essential healthcare concierge services in every
            Asian city where we operate, all at no additional cost.
          </p>
        </div>

        {/* Conditional rendering of MembershipCardContainer based on screen size */}
        {isSmallScreen ? (
          <div style={{ paddingTop: "8rem" }}>
            <MembershipCardContainer />
          </div>
        ) : (
          <MembershipCardContainer />
        )}
      </div>
    </div>
  );
};

export default Membership;
