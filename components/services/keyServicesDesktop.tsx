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

const KeyServicesDesktop: React.FC = () => {
  const sidebarRef = useRef<HTMLDivElement>(null);
  const [dragging, setDragging] = useState(false);
  const [offsetY, setOffsetY] = useState(0);
  const [sidebarPosition, setSidebarPosition] = useState(240); // initial top position

  return (
    <div
      ref={sidebarRef}
      className="right-0 w-full h-auto z-50 transition-transform duration-300"
      style={{
        height: "auto",
        backgroundImage: "url('/img/specialist_background.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backdropFilter: "blur(30px)",
      }}
    >
      {/* Overlay to create a mask effect */}
      <div
        className="absolute inset-0"
        style={{ backgroundColor: "rgba(129, 216, 208, 0.6)" }}
      />

      <div className="relative text-black mx-auto p-6">
        <Accordion type="single" collapsible className="w-full">
          <h2 className="text-4xl font-bold mb-3">Key Member Services</h2>
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-xl font-bold mb-1 p-4">
              <div style={{ display: "flex", alignItems: "center" }}>
                <FaUserMd style={{ marginRight: "8px" }} />
                <span>Specialist Connect&#8482;</span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="text-xl mb-1 p-4">
              <p className="mb-4">
                Specialist Connect&#8482; offers a{" "}
                <strong>
                  personalised and streamlined pathway to medical specialists
                </strong>
                , helping you navigate care options with greater ease. Whether
                you're seeking a{" "}
                <strong>
                  second opinion, a tele-consultation for convenience, or
                  assistance in securing an in-person appointment
                </strong>
                , our team facilitates the process to support timely access to
                appropriate medical expertise.
              </p>
              <p className="mb-4">
                Our medical concierge team works closely with you to{" "}
                <strong>identify suitable specialists</strong> based on your
                condition and preferences. While we do not make clinical
                decisions, we help coordinate scheduling and documentation to
                enhance your healthcare experience.
              </p>
              <p className="mb-4">
                Specialist Connect&#8482; is designed to{" "}
                <strong>complement your existing care</strong>, whether at home
                or at a leading institution. We aim to provide logistical
                support and information so that you can access care confidently
                and efficiently.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2">
            <AccordionTrigger className="text-xl font-bold mb-1 p-4">
              <div style={{ display: "flex", alignItems: "center" }}>
                <FaListOl style={{ marginRight: "8px" }} />
                <span style={{ flex: "1 1 auto", textAlign: "left" }}>
                  Dedicated Medical Concierge & Case Coordination
                </span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="text-xl mb-1 p-4">
              We offer non-clinical assistance to{" "}
              <strong>support your healthcare journey</strong>. Our concierge
              team helps with{" "}
              <strong>
                appointment scheduling, document preparation, coordination of
                second opinions, and hospital administrative processes
              </strong>
              . While we do not provide medical advice or treatment, we ensure
              you have logistical support and access to helpful information
              every step of the way. For those with complex care needs, our case
              coordination aims to enhance continuity and reduce administrative
              burden.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3">
            <AccordionTrigger className="text-xl font-bold mb-1 p-4">
              <div style={{ display: "flex", alignItems: "center" }}>
                <FaUserAlt style={{ marginRight: "8px" }} />
                <span>Personalised Care Experience</span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="text-xl mb-1 p-4">
              Specialist Connect&#8482; enhances your care experience by{" "}
              <strong>
                assisting with facility preferences, appointment logistics, and
                personalised coordination
              </strong>{" "}
              based on your individual needs. While medical care is always under
              the purview of licensed healthcare providers, our goal is to
              support your experience with discretion, comfort, and efficiency
              in mind.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4">
            <AccordionTrigger className="text-xl font-bold mb-1 p-4">
              <div style={{ display: "flex", alignItems: "center" }}>
                <FaHandHoldingHeart style={{ marginRight: "8px" }} />
                <span>Family Care & Support</span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="text-xl mb-1 p-4">
              Our service includes <strong>family-oriented support</strong> to
              ease the stress that can accompany medical care. From{" "}
              <strong>logistical coordination</strong> such as accommodation and
              transport to{" "}
              <strong>non-medical emotional support resources</strong>, our team
              is here to assist caregivers and family members. We help ensure
              smoother communication, planning, and access to resources—so
              families can focus on what matters most.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-5">
            <AccordionTrigger className="text-xl font-bold mb-1 p-4">
              <div style={{ display: "flex", alignItems: "center" }}>
                <FaPlaneDeparture style={{ marginRight: "8px" }} />
                <span>International Healthcare Coordination</span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="text-xl mb-1 p-4">
              Specialist Connect&#8482; assists with{" "}
              <strong>
                international healthcare navigation and travel support
              </strong>
              . We help coordinate non-clinical aspects such as{" "}
              <strong>
                appointment requests, travel logistics, documentation, language
                support, and hospital communication
              </strong>
              . Our team also offers guidance on available services, allowing
              you to pursue global care options with reduced stress. All medical
              services are ultimately provided by licensed professionals and
              institutions abroad.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export default KeyServicesDesktop;
