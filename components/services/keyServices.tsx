import React, { useRef, useEffect, useState } from "react";
import {
  FaHandshake,
  FaGlobeAsia,
  FaListOl,
  FaChartLine,
  FaUserTie,
  FaBalanceScale,
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
  const [sidebarPosition, setSidebarPosition] = useState(240);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target as Node)
      ) {
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
      setSidebarPosition(event.clientY - offsetY);
    }
  };

  const handleMouseUp = () => setDragging(false);

  if (!isOpen) return null;

  return (
    <div
      ref={sidebarRef}
      className="absolute right-0 w-full md:w-[60rem] h-auto z-50 transition-transform duration-300"
      style={{
        top: `${sidebarPosition}px`,
        backgroundImage: "url('/img/specialist_background.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backdropFilter: "blur(30px)",
        cursor: dragging ? "grabbing" : "grab",
      }}
      onMouseDown={handleMouseDown}
    >
      <div
        className="absolute inset-0"
        style={{ backgroundColor: "rgba(30, 41, 59, 0.85)" }}
      />

      <button
        onClick={toggleSidebar}
        className="bg-slate-700 text-white z-20 absolute left-[-3.5rem] top-4"
        style={{ fontSize: "2rem", padding: "0.5rem 0.75rem" }}
      >
        <FaHandshake />
      </button>

      <div className="relative max-w-4xl text-white mx-auto p-6">
        <Accordion type="single" collapsible className="w-full">
          <h2 className="text-2xl font-bold mb-3">
            Key Advisory Services
          </h2>

          {/* 1 */}
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-lg font-bold mb-1">
              <div className="flex items-center">
                <FaUserTie className="mr-2" />
                <span>Sell-Side M&A Advisory</span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="text-lg">
              <p className="mb-4">
                We advise founders and business owners through{" "}
                <strong>confidential, end-to-end sell-side M&A processes</strong>,
                from strategic positioning and valuation to buyer outreach,
                negotiation, and transaction completion.
              </p>
              <p className="mb-4">
                Our mandate-driven approach ensures{" "}
                <strong>discretion, alignment, and execution certainty</strong>,
                helping clients maximise value while navigating complex
                shareholder and stakeholder dynamics.
              </p>
            </AccordionContent>
          </AccordionItem>

          {/* 2 */}
          <AccordionItem value="item-2">
            <AccordionTrigger className="text-lg font-bold mb-1">
              <div className="flex items-center">
                <FaListOl className="mr-2" />
                <span>Buy-Side & Strategic Acquisition Advisory</span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="text-lg">
              We support acquirers with{" "}
              <strong>target identification, strategic fit analysis</strong>,
              transaction structuring, and deal execution - ensuring disciplined,
              well-aligned acquisitions across Asia’s middle market.
            </AccordionContent>
          </AccordionItem>

          {/* 3 */}
          <AccordionItem value="item-3">
            <AccordionTrigger className="text-lg font-bold mb-1">
              <div className="flex items-center">
                <FaChartLine className="mr-2" />
                <span>Strategic Exit & Value Preparation</span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="text-lg">
              We work with founders ahead of a transaction to{" "}
              <strong>prepare the business for exit</strong> - optimising structure,
              governance, positioning, and equity narratives to support a
              successful outcome.
            </AccordionContent>
          </AccordionItem>

          {/* 4 */}
          <AccordionItem value="item-4">
            <AccordionTrigger className="text-lg font-bold mb-1">
              <div className="flex items-center">
                <FaBalanceScale className="mr-2" />
                <span>Shareholder & Founder Transition Advisory</span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="text-lg">
              We advise on{" "}
              <strong>ownership transitions, partial exits, and succession</strong>,
              balancing founder objectives, family considerations, and long-term
              business continuity.
            </AccordionContent>
          </AccordionItem>

          {/* 5 */}
          <AccordionItem value="item-5">
            <AccordionTrigger className="text-lg font-bold mb-1">
              <div className="flex items-center">
                <FaGlobeAsia className="mr-2" />
                <span>Cross-Border M&A Advisory</span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="text-lg">
              We execute{" "}
              <strong>cross-border transactions across Asia</strong>, managing
              jurisdictional complexity, cultural alignment, and transaction
              structuring while maintaining confidentiality and execution focus.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export default KeyServices;
