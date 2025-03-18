import * as React from "react";
import { Drawer, DrawerClose, DrawerContent, DrawerHeader, DrawerTitle } from "@/components/ui/drawer";
import { HeartFilledIcon, GlobeIcon, CheckCircledIcon, PersonIcon } from '@radix-ui/react-icons'; // Importing PersonIcon
import { IoPeople  } from "react-icons/io5";
import { FaClipboardList, FaMapMarkerAlt } from "react-icons/fa";

interface DrawerDemoProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}

export function DrawerDemo({ isOpen, onOpenChange }: DrawerDemoProps) {
  return (
    <Drawer open={isOpen} onOpenChange={onOpenChange}>
      <DrawerContent>
        <div className="mx-auto w-full max-w-full px-4"> {/* Added px-4 for side padding */}
          <DrawerHeader>
            <DrawerTitle className="text-center text-4xl font-bold">Seamless Health Journeys Across Asia</DrawerTitle>
          </DrawerHeader>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-4"> {/* Increased gap between cards */}
            
            {/* Card for Navigating Complex Healthcare Systems */}
            <div className="p-6 border rounded-lg shadow-md bg-white">
              <div className="flex items-center mb-4">
                <FaMapMarkerAlt className="w-6 h-6 mr-2 text-blue-600" />
                <h3 className="text-xl font-bold">Navigating Complex Healthcare Systems</h3>
              </div>
              <ul className="text-xl list-disc ml-5 mb-6"> {/* Increased margin-bottom to UL */}
                <li className="py-2">
                  <strong>Specialist Connect:</strong> Our "Specialist Connect" service links clients with top local and overseas medical specialists, providing priority access to expert care across borders.
                </li>
                <li className="py-2">
                  <strong>Expert Guidance:</strong> From pre-arrival planning to post-treatment follow-ups, our local liaisons assist patients in navigating the often confusing and stressful healthcare systems of unfamiliar countries.
                </li>
                <li className="py-2">
                  <strong>Cultural and Healthcare System Expertise:</strong> With in-depth knowledge of local healthcare protocols and procedures, our liaisons help mitigate misunderstandings, allowing patients to focus on their health without the anxiety of administrative or cultural barriers.
                </li>
              </ul>
            </div>

            {/* Card for Seamless and Hassle-Free Journey */}
            <div className="p-6 border rounded-lg shadow-md bg-white">
              <div className="flex items-center mb-4">
                <FaClipboardList className="w-6 h-6 mr-2 text-yellow-600" />
                <h3 className="text-xl font-bold">Seamless and Hassle-Free Journey</h3>
              </div>
              <ul className="text-xl list-disc ml-5 mb-6"> {/* Increased margin-bottom to UL */}                
                <li className="py-2">
                  <strong>Tele-Consultation Support:</strong> We facilitate clients to connect with local and overseas medical specialists for convenient and expert remote consultations, ensuring informed decisions before traveling for treatment.
                </li>
                <li className="py-2">
                  <strong>Pre-Trip Planning:</strong> Your local liaison helps arrange every aspect of the trip in advance, from hospital appointments to visa processing and travel logistics.
                </li>
                <li className="py-2">
                  <strong>Real-Time Problem Solving:</strong> Should any unexpected issues arise during the journey, be it last-minute schedule changes, medical needs, or logistical challenges, your local expert is on hand to provide immediate solutions.
                </li>
              </ul>
            </div>

            {/* Card for Comprehensive End-to-End Management */}
            <div className="p-6 border rounded-lg shadow-md bg-white">
              <div className="flex items-center mb-4">
                <HeartFilledIcon className="w-6 h-6 mr-2 text-red-600" />
                <h3 className="text-xl font-bold">Comprehensive End-to-End Management</h3>
              </div>
              <ul className="text-xl list-disc ml-5 mb-6"> {/* Increased margin-bottom to UL */}
                <li className="py-2">
                  <strong>Minimising Administrative Stress:</strong> Our service helps you to take care of all paperwork, hospital admission processes, medical insurance claims, and follow-up appointments, minimising the administrative burden.
                </li>
                <li className="py-2">
                  <strong>Overcoming Language Barriers:</strong> We can arrange for liaison professionals who speak your native language, should the need arise, ensuring clear communication during consultations, treatments, and follow-up care.
                </li>                
                <li className="py-2">
                  <strong>Post-Treatment Recovery Assistance:</strong> After treatment, we ensure patients have all necessary aftercare arrangements, medications, and clear follow-up instructions to continue their recovery without stress.
                </li>
              </ul>
            </div>

            {/* Card for Relieving Stress for Family Members */}
            <div className="p-6 border rounded-lg shadow-md bg-white">
              <div className="flex items-center mb-4">
                <IoPeople className="w-6 h-6 mr-2 text-green-600" /> {/* Changed to PersonIcon */}
                <h3 className="text-xl font-bold">Relieving Stress for Family Members</h3>
              </div>
              <ul className="text-xl list-disc ml-5 mb-6"> {/* Increased margin-bottom to UL */}
                <li className="py-2">
                  <strong>Comprehensive Family Support:</strong> Families are often as stressed as the patient. Our service provides personalised care and support, including recreational activities, accommodation arrangements, and family counselling if needed.
                </li>
                <li className="py-2">
                  <strong>Emotional Support & Comfort:</strong> We offer local liaisons who understand the emotional weight of the situation, ensuring that families feel supported and reassured throughout the entire process.
                </li>
              </ul>
            </div>              
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
