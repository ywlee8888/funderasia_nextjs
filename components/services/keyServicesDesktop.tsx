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
              {" "}
              {/* Added padding here */}
              <div style={{ display: "flex", alignItems: "center" }}>
                <FaUserMd style={{ marginRight: "8px" }} />
                <span>Specialist Connect&#8482;</span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="text-xl mb-1 p-4">
              {" "}
              {/* Added padding here */}
              <p className="mb-4">
                Specialist Connect&#8482; offers a{" "}
                <strong>
                  personalised and priority pathway to top-tier medical
                  specialists
                </strong>
                , ensuring that you receive expert care without unnecessary
                delays. Whether you require an immediate{" "}
                <strong>
                  second opinion, a tele-consultation for convenience, or an
                  in-person appointment with a renowned specialist
                </strong>
                , our service streamlines the process, giving you direct access
                to the best medical expertise.
              </p>
              <p className="mb-4">
                Our dedicated concierge team{" "}
                <strong>matches you with the most suitable specialist</strong>{" "}
                based on your unique medical history, condition, and
                preferences. We handle all scheduling logistics, ensuring
                priority appointments and expedited access, so you receive
                timely and precise medical guidance.
              </p>
              <p className="mb-4">
                With{" "}
                <strong>
                  Specialist Connect&#8482;, high-quality healthcare is always
                  within reach
                </strong>
                —whether you need a consultation from the comfort of your home
                or prefer a private, face-to-face experience at a leading
                medical institution. Take control of your health with
                confidence, knowing that world-class specialists are just a call
                away.
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="text-xl font-bold mb-1 p-4">
              {" "}
              {/* Added padding here */}
              <div style={{ display: "flex", alignItems: "center" }}>
                <FaListOl style={{ marginRight: "8px" }} />
                <span style={{ flex: "1 1 auto", textAlign: "left" }}>
                  Dedicated Medical Concierge & Case Management
                </span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="text-xl mb-1 p-4">
              {" "}
              {/* Added padding here */}
              We provide end-to-end support for your healthcare journey,
              ensuring a seamless and stress-free experience. From the moment
              you need medical assistance, our expert concierge team takes care
              of every detail—
              <strong>
                coordinating appointments, managing medical records,
                facilitating second opinions, and handling hospital admissions
              </strong>{" "}
              with efficiency and discretion. Whether you require assistance
              with complex treatment plans, insurance navigation, or
              post-treatment follow-ups, we act as your trusted healthcare
              liaison, ensuring continuity of care and personalised support at
              every step. With our dedicated case management, you can focus on
              your well-being while we handle the rest.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className="text-xl font-bold mb-1 p-4">
              {" "}
              {/* Added padding here */}
              <div style={{ display: "flex", alignItems: "center" }}>
                <FaUserAlt style={{ marginRight: "8px" }} />
                <span>Exclusive VIP Hospital & Clinic Experience</span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="text-xl mb-1 p-4">
              {" "}
              {/* Added padding here */}
              Specialist Connect&#8482; offers a VIP hospital and clinic
              experience, providing seamless access to top-tier specialists,
              expedited admissions, private consultation suites, and
              personalised care coordination. Whether for in-person
              consultations, advanced diagnostics, or specialised treatments, we
              ensure a discreet, stress-free medical journey with priority
              access and tailored support at every step.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger className="text-xl font-bold mb-1 p-4">
              {" "}
              {/* Added padding here */}
              <div style={{ display: "flex", alignItems: "center" }}>
                <FaHandHoldingHeart style={{ marginRight: "8px" }} />
                <span>Family Care & Support</span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="text-xl mb-1 p-4">
              {" "}
              {/* Added padding here */}
              Your membership includes tailored support for your family,
              offering emotional support, entertainment, and logistical
              management while your loved ones receive care.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger className="text-xl font-bold mb-1 p-4">
              {" "}
              {/* Added padding here */}
              <div style={{ display: "flex", alignItems: "center" }}>
                <FaPlaneDeparture style={{ marginRight: "8px" }} />
                <span>Global Healthcare Coordination & Medical Travel</span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="text-xl mb-1 p-4">
              {" "}
              {/* Added padding here */}
              Specialist Connect&#8482; provides seamless{" "}
              <strong>global healthcare coordination</strong>, ensuring you
              receive world-class medical care wherever you are. From arranging{" "}
              <strong>international specialist consultations</strong> to
              coordinating{" "}
              <strong>
                medical travel, hospital admissions, and post-treatment
                follow-ups
              </strong>
              , we handle every detail. Our team assists with{" "}
              <strong>
                visa support, travel logistics, medical translations, and direct
                hospital liaising
              </strong>
              , allowing you to focus entirely on your health. Whether you
              require advanced treatment abroad or a second opinion from a
              global expert, we ensure a smooth and stress-free experience
              tailored to your needs.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export default KeyServicesDesktop;
