import * as React from "react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";
import {
  HeartFilledIcon,
  GlobeIcon,
  CheckCircledIcon,
  PersonIcon,
} from "@radix-ui/react-icons"; // Importing PersonIcon
import { IoPeople } from "react-icons/io5";
import { FaClipboardList, FaMapMarkerAlt } from "react-icons/fa";

interface DrawerDemoProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}

export function DrawerDemo({ isOpen, onOpenChange }: DrawerDemoProps) {
  return (
    <Drawer open={isOpen} onOpenChange={onOpenChange}>
      <DrawerContent>
        <div className="mx-auto w-full max-w-full px-4">
          {" "}
          {/* Added px-4 for side padding */}
          <DrawerHeader>
            <DrawerTitle className="text-center text-2xl">
              Seamless Health Journeys Across Asia
            </DrawerTitle>
          </DrawerHeader>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-4">
            {" "}
            {/* Increased gap between cards */}
            {/* Card for Navigating Healthcare Systems */}
            <div className="p-6 border rounded-lg shadow-md bg-white">
              <div className="flex items-center mb-4">
                <FaMapMarkerAlt className="w-6 h-6 mr-2 text-blue-600" />
                <h3 className="text-lg font-bold">
                  Navigating Overseas Healthcare Ecosystems
                </h3>
              </div>
              <ul className="text-lg list-disc ml-5 mb-6">
                <li className="py-2">
                  <strong>Specialist Connect&#8482;:</strong> We connect members with top
                  overseas healthcare specialists for priority access.
                </li>
                <li className="py-2">
                  <strong>Expert Guidance:</strong> Your local liaison assists you with
                  pre-arrival planning and post-treatment follow-ups.
                </li>
                <li className="py-2">
                  <strong>Cultural Expertise:</strong> Our knowledge of local
                  protocols helps reduce misunderstandings and anxiety.
                </li>
              </ul>
            </div>
            {/* Card for Seamless and Hassle-Free Journey */}
            <div className="p-6 border rounded-lg shadow-md bg-white">
              <div className="flex items-center mb-4">
                <FaClipboardList className="w-6 h-6 mr-2 text-yellow-600" />
                <h3 className="text-lg font-bold">
                  Seamless and Hassle-Free Journey
                </h3>
              </div>
              <ul className="text-lg list-disc ml-5 mb-6">
                <li className="py-2">
                  <strong>Tele-Consultation Support:</strong> Connect with
                  overseas healthcare specialists for expert remote consultations ensuring 
                  informed decisions before treatment.                  
                </li>
                <li className="py-2">
                  <strong>Pre-Trip Planning:</strong> Your local liaison
                  assists you with all trip details, from appointments to travel
                  logistics.                 
                </li>
                <li className="py-2">
                  <strong>Real-Time Problem Solving:</strong> Your local expert
                  provides immediate solutions to any unexpected issues.                  
                </li>
              </ul>
            </div>
            {/* Card for Comprehensive Management */}
            <div className="p-6 border rounded-lg shadow-md bg-white">
              <div className="flex items-center mb-4">
                <HeartFilledIcon className="w-6 h-6 mr-2 text-red-600" />
                <h3 className="text-lg font-bold">Comprehensive Management</h3>
              </div>
              <ul className="text-lg list-disc ml-5 mb-6">
                <li className="py-2">
                  <strong>Minimising Stress:</strong> We handle all paperwork,
                  hospital admissions, and insurance claims.
                </li>
                <li className="py-2">
                  <strong>Language Support:</strong> Multi-lingual liaison professionals
                  available for clear communication ensureing smooth consultations and treatments.                  
                </li>
                <li className="py-2">
                  <strong>Recovery Assistance:</strong> We provide aftercare
                  arrangements and follow-up instructions.
                </li>
              </ul>
            </div>
            {/* Card for Family Stress Relief */}
            <div className="p-6 border rounded-lg shadow-md bg-white">
              <div className="flex items-center mb-4">
                <IoPeople className="w-6 h-6 mr-2 text-green-600" />
                <h3 className="text-lg font-bold">
                  Stress Relief for Families
                </h3>
              </div>
              <ul className="text-lg list-disc ml-5 mb-6">
                <li className="py-2">
                  <strong>Comprehensive Support:</strong> Personalised care,
                  including accommodation arrangements, recreational activities and support.                  
                </li>
                <li className="py-2">
                  <strong>Clear Communication:</strong> We provide regular updates to ensure families are well-informed 
                  to alleviate any concerns and anxiety.
                </li>
                <li className="py-2">
                  <strong>Emotional Comfort:</strong> Local liaisons provide
                  support and reassurance throughout the process.
                </li>                
              </ul>
            </div>
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
