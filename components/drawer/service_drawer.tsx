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
} from "@radix-ui/react-icons";
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
                  <strong>Specialist Connect™:</strong> We facilitate
                  introductions to top local and overseas healthcare specialists
                  to assist with priority appointment requests, without
                  providing medical recommendations.
                </li>
                <li className="py-2">
                  <strong>Expert Support:</strong> Your local liaison helps
                  coordinate pre-arrival logistics and post-treatment
                  arrangements to ensure a smooth patient experience.
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
                  <strong>Tele-Consultation Facilitation:</strong> We assist in
                  connecting you with local and overseas healthcare specialists
                  who provide remote consultations directly, supporting you in
                  making informed healthcare decisions.
                </li>
                <li className="py-2">
                  <strong>Pre-Trip Planning:</strong> Your local liaison assists
                  you with all trip details, from appointments to travel
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
                  <strong>Minimising Stress:</strong> We assist with
                  administrative paperwork, hospital admissions, and liaise with
                  licensed insurance providers to support insurance claim
                  processes.
                </li>
                <li className="py-2">
                  <strong>Language Support:</strong> Multi-lingual liaison
                  professionals available for clear communication ensuring
                  smooth consultations and treatments.
                </li>
                <li className="py-2">
                  <strong>Recovery Assistance:</strong> We help coordinate
                  aftercare arrangements and support continuity of care through
                  liaison with your healthcare providers.
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
                  including accommodation arrangements, recreational activities
                  and support.
                </li>
                <li className="py-2">
                  <strong>Clear Communication:</strong> We provide regular
                  updates to ensure families are well-informed to alleviate any
                  concerns and anxiety.
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
