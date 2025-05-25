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

const KeyServicesMobile: React.FC = () => {
  const sidebarRef = useRef<HTMLDivElement>(null);
  const [dragging, setDragging] = useState(false);
  const [offsetY, setOffsetY] = useState(0);
  const [sidebarPosition, setSidebarPosition] = useState(240); // initial top position

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      if (dragging) {
        const newPosition = event.clientY - offsetY;
        setSidebarPosition(newPosition);
      }
    };

    const handleMouseUp = () => {
      setDragging(false);
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, [dragging, offsetY]);

  const handleMouseDown = (event: React.MouseEvent) => {
    setDragging(true);
    setOffsetY(event.clientY - sidebarPosition);
  };

  return (
    <div
      ref={sidebarRef}
      className="right-0 w-full md:w-[60rem] h-auto z-50 transition-transform duration-300"
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
      <div
        className="absolute inset-0"
        style={{ backgroundColor: "rgba(129, 216, 208, 0.6)" }}
      />

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
              <p className="mb-4">
                Specialist Connect&#8482; offers a{" "}
                <strong>
                  facilitated pathway to top-tier medical specialists
                </strong>
                , helping you avoid unnecessary delays in accessing
                consultations. Whether you seek a{" "}
                <strong>
                  second opinion, a tele-consultation for convenience, or help
                  scheduling an in-person consultation
                </strong>
                , our service simplifies the process of connecting with licensed
                healthcare providers.
              </p>
              <p className="mb-4">
                Our concierge team{" "}
                <strong>assists in identifying suitable specialists</strong>{" "}
                based on your preferences and relevant background. While we do
                not provide medical advice or make clinical decisions, we help
                coordinate appointments and manage scheduling to support a
                timely healthcare experience.
              </p>
              <p className="mb-4">
                With{" "}
                <strong>
                  Specialist Connect&#8482;, access to trusted specialists is
                  simplified
                </strong>
                —whether you're at home or seeking care at a top institution.
                Please note that all medical decisions remain solely between you
                and your chosen healthcare provider.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2">
            <AccordionTrigger className="text-lg font-bold mb-1">
              <div style={{ display: "flex", alignItems: "center" }}>
                <FaListOl style={{ marginRight: "8px" }} />
                <span style={{ flex: "1 1 auto", textAlign: "left" }}>
                  Dedicated Medical Concierge & Case Support
                </span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="text-lg mb-1">
              Our concierge service provides{" "}
              <strong>
                non-clinical support throughout your healthcare journey
              </strong>
              , ensuring a more convenient experience. From coordinating
              appointments and helping manage medical records to facilitating
              second opinions and hospital referrals, we assist with
              administrative processes. While we do not offer medical or
              insurance advice, our team helps you navigate care pathways and
              offers personalised support so you can focus on your well-being.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3">
            <AccordionTrigger className="text-lg font-bold mb-1">
              <div style={{ display: "flex", alignItems: "center" }}>
                <FaUserAlt style={{ marginRight: "8px" }} />
                <span style={{ flex: "1 1 auto", textAlign: "left" }}>
                  Exclusive VIP Hospital & Clinic Experience
                </span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="text-lg mb-1">
              Through our partnerships, we help coordinate{" "}
              <strong>
                VIP-style experiences at selected healthcare facilities
              </strong>
              , including private consultation suites, scheduling support, and
              care liaison services. All clinical services are provided directly
              by licensed medical professionals at their respective
              institutions.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4">
            <AccordionTrigger className="text-lg font-bold mb-1">
              <div style={{ display: "flex", alignItems: "center" }}>
                <FaHandHoldingHeart style={{ marginRight: "8px" }} />
                <span style={{ flex: "1 1 auto", textAlign: "left" }}>
                  Family Care & Support
                </span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="text-lg mb-1">
              Your membership also includes{" "}
              <strong>non-clinical support for your family members</strong>,
              helping to reduce the burden during medical care. We assist with{" "}
              <strong>
                logistics, caregiver coordination, and emotional support
                referrals
              </strong>
              . Our team also helps arrange travel, accommodations, and other
              services that can make your family’s journey smoother and more
              manageable.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-5">
            <AccordionTrigger className="text-lg font-bold mb-1">
              <div style={{ display: "flex", alignItems: "center" }}>
                <FaPlaneDeparture style={{ marginRight: "8px" }} />
                <span style={{ flex: "1 1 auto", textAlign: "left" }}>
                  Global Healthcare Coordination & Medical Travel
                </span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="text-lg mb-1">
              Specialist Connect&#8482; facilitates{" "}
              <strong>
                international healthcare coordination and medical travel
                planning
              </strong>{" "}
              for clients seeking treatment abroad. Our team supports you by
              arranging{" "}
              <strong>
                consultations with overseas providers, travel logistics,
                document preparation, and communication with hospitals
              </strong>
              . We do not provide medical advice, clinical care, or act as a
              travel agency or insurer, but we aim to make your international
              medical journey as smooth and supported as possible.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export default KeyServicesMobile;
