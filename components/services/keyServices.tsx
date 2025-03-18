import React, { useRef, useEffect, useState } from "react";
import {
  FaUserNurse,
  FaPlaneDeparture,
  FaListOl,
  FaUserMd,
  FaUserAlt,
  FaHandHoldingHeart,
} from "react-icons/fa";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

type SidebarProps = {
  isOpen: boolean;
  toggleSidebar: () => void;
};

const KeyServices: React.FC<SidebarProps> = ({ isOpen, toggleSidebar }) => {
  const sidebarRef = useRef<HTMLDivElement>(null);
  const [dragging, setDragging] = useState(false);
  const [offsetY, setOffsetY] = useState(0);
  const [sidebarPosition, setSidebarPosition] = useState(240); // initial top position

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target as Node)) {
        toggleSidebar();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isOpen, toggleSidebar]);

  const handleMouseDown = (event: React.MouseEvent) => {
    setDragging(true);
    setOffsetY(event.clientY - sidebarPosition);
  };

  const handleMouseMove = (event: MouseEvent) => {
    if (dragging) {
      const newPosition = event.clientY - offsetY;
      setSidebarPosition(newPosition);
    }
  };

  const handleMouseUp = () => {
    setDragging(false);
  };

  if (!isOpen) return null;

  return (
    <div
      ref={sidebarRef}
      className="absolute right-0 w-full md:w-[60rem] h-auto z-50 transition-transform duration-300"
      style={{
        top: `${sidebarPosition}px`,
        height: "auto",
        backgroundImage: "url('/img/specialist_background.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backdropFilter: "blur(30px)",
        cursor: dragging ? "grabbing" : "grab",
      }}
      onMouseDown={handleMouseDown}
    >
      {/* Overlay to create a mask effect */}
      <div className="absolute inset-0" style={{ backgroundColor: 'rgba(129, 216, 208, 0.8)' }} />

      {/* Close button */}
      <button
        onClick={toggleSidebar}
        className="bg-blue-500 text-black z-20 absolute left-[-3.5rem] top-4"
        style={{
          fontSize: "2rem",
          padding: "0.5rem 0.75rem",
        }}
      >
        <FaUserNurse />
      </button>
      <div className="relative max-w-4xl text-black mx-auto p-6">
        <Accordion type="single" collapsible className="w-full">
          <h2 className="text-2xl font-bold mb-3">Key Member Services</h2>
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-lg font-bold mb-1">
              <div style={{ display: "flex", alignItems: "center" }}>
                <FaUserMd style={{ marginRight: "8px" }} />
                <span>Specialist Connect&#8482;</span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="text-lg mb-1">
              Specialist Connect&#8482; is your gateway to personalised healthcare. Our
              service facilitates seamless connections to premier healthcare
              specialists, allowing you to engage in tele-consultations or
              schedule in-person appointments with ease. Whether you need expert
              advice from the comfort of your home or prefer a face-to-face
              consultation, Specialist Connect ensures that you receive the
              highest level of care tailored to your unique needs. Experience
              the convenience of accessing top specialists and take the next
              step toward better health with confidence.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="text-lg font-bold mb-1">
              <div style={{ display: "flex", alignItems: "center" }}>
                <FaListOl style={{ marginRight: "8px" }} />
                <span style={{ flex: "1 1 auto", textAlign: "left" }}>Pre-Arrival Planning & Coordination</span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="text-lg mb-1">
              As part of your membership, we take care of all the
              pre-arrival arrangements, including booking medical appointments,
              handling paperwork, and managing visa facilitation. Our service
              ensures a seamless entry process, allowing you to focus solely on
              your health.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className="text-lg font-bold mb-1">
              <div style={{ display: "flex", alignItems: "center" }}>
                <FaUserAlt style={{ marginRight: "8px" }} />
                <span>On-Ground Liaison Services</span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="text-lg mb-1">
              Upon arrival, our local liaison will handle every detail, from
              airport pickups to smooth hospital admissions, so you and your
              family can enjoy a stress-free experience.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger className="text-lg font-bold mb-1">
              <div style={{ display: "flex", alignItems: "center" }}>
                <FaHandHoldingHeart style={{ marginRight: "8px" }} />
                <span>Family Care & Support</span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="text-lg mb-1">
              Your membership includes tailored support for your family,
              offering emotional support, entertainment, and logistical
              management while your loved ones receive care.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger className="text-lg font-bold mb-1">
              <div style={{ display: "flex", alignItems: "center" }}>
                <FaPlaneDeparture style={{ marginRight: "8px" }} />
                <span>Post-Treatment Support</span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="text-lg mb-1">
              We ensure seamless aftercare, including assisting with follow-up appointments,
              and recovery arrangements, all included in your membership.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export default KeyServices;
