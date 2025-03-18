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
              <p>
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
              <p>
                Our dedicated concierge team{" "}
                <strong>matches you with the most suitable specialist</strong>{" "}
                based on your unique medical history, condition, and
                preferences. We handle all scheduling logistics, ensuring
                priority appointments and expedited access, so you receive
                timely and precise medical guidance.
              </p>
              <p>
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
                  Pre-Arrival Planning & Coordination
                </span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="text-xl mb-1 p-4">
              {" "}
              {/* Added padding here */}
              As part of your membership, we take care of all the pre-arrival
              arrangements, including booking medical appointments, handling
              paperwork, and managing visa facilitation. Our service ensures a
              seamless entry process, allowing you to focus solely on your
              health.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className="text-xl font-bold mb-1 p-4">
              {" "}
              {/* Added padding here */}
              <div style={{ display: "flex", alignItems: "center" }}>
                <FaUserAlt style={{ marginRight: "8px" }} />
                <span>On-Ground Liaison Services</span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="text-xl mb-1 p-4">
              {" "}
              {/* Added padding here */}
              Upon arrival, our local liaison will handle every detail, from
              airport pickups to smooth hospital admissions, so you and your
              family can enjoy a stress-free experience.
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
                <span>Post-Treatment Support</span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="text-xl mb-1 p-4">
              {" "}
              {/* Added padding here */}
              We ensure seamless aftercare, including assisting with follow-up
              appointments, and recovery arrangements, all included in your
              membership.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export default KeyServicesDesktop;
