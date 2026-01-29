import * as React from "react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";
import { IoPeople } from "react-icons/io5";
import { FaClipboardList, FaMapMarkerAlt } from "react-icons/fa";
import { GlobeIcon, CheckCircledIcon } from "@radix-ui/react-icons";

interface DrawerDemoProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}

export function DrawerDemo({ isOpen, onOpenChange }: DrawerDemoProps) {
  return (
    <Drawer open={isOpen} onOpenChange={onOpenChange}>
      <DrawerContent>
        <div className="mx-auto w-full max-w-full px-4">
          <DrawerHeader>
            <DrawerTitle className="text-center text-2xl">
              Our Advisory Services
            </DrawerTitle>
          </DrawerHeader>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-4">
            {/* Strategic M&A Advisory */}
            <div className="p-6 border rounded-lg shadow-md bg-white">
              <div className="flex items-center mb-4">
                <FaMapMarkerAlt className="w-6 h-6 mr-2 text-blue-600" />
                <h3 className="text-lg font-bold">Strategic M&A Advisory</h3>
              </div>
              <ul className="text-lg list-disc ml-5 mb-6">
                <li className="py-2">
                  <strong>Deal Structuring:</strong> Tailored advisory on buy-side and sell-side transactions to maximise value.
                </li>
                <li className="py-2">
                  <strong>Cross-Border Transactions:</strong> Expert guidance on legal, regulatory, and operational complexities across Asia.
                </li>
                <li className="py-2">
                  <strong>Confidential Execution:</strong> Ensuring discretion and professionalism throughout the deal lifecycle.
                </li>
              </ul>
            </div>

            {/* Market & Investor Insights */}
            <div className="p-6 border rounded-lg shadow-md bg-white">
              <div className="flex items-center mb-4">
                <FaClipboardList className="w-6 h-6 mr-2 text-yellow-600" />
                <h3 className="text-lg font-bold">Market & Investor Insights</h3>
              </div>
              <ul className="text-lg list-disc ml-5 mb-6">
                <li className="py-2">
                  <strong>Investor Mapping:</strong> Identify strategic partners and potential investors across industries and regions.
                </li>
                <li className="py-2">
                  <strong>Market Intelligence:</strong> Detailed sector and competitor analysis to support decision-making.
                </li>
                <li className="py-2">
                  <strong>Deal Readiness:</strong> Guidance on positioning your company for maximum investor interest.
                </li>
              </ul>
            </div>

            {/* Transaction Management */}
            <div className="p-6 border rounded-lg shadow-md bg-white">
              <div className="flex items-center mb-4">
                <CheckCircledIcon className="w-6 h-6 mr-2 text-green-600" />
                <h3 className="text-lg font-bold">Transaction Management</h3>
              </div>
              <ul className="text-lg list-disc ml-5 mb-6">
                <li className="py-2">
                  <strong>End-to-End Coordination:</strong> From due diligence to deal closure, we manage the entire process efficiently.
                </li>
                <li className="py-2">
                  <strong>Negotiation Support:</strong> Assist in deal structuring, term negotiation, and stakeholder alignment.
                </li>
                <li className="py-2">
                  <strong>Documentation & Compliance:</strong> Ensuring all legal, financial, and regulatory requirements are met.
                </li>
              </ul>
            </div>

            {/* Founder & Business Support */}
            <div className="p-6 border rounded-lg shadow-md bg-white">
              <div className="flex items-center mb-4">
                <IoPeople className="w-6 h-6 mr-2 text-purple-600" />
                <h3 className="text-lg font-bold">Founder & Business Support</h3>
              </div>
              <ul className="text-lg list-disc ml-5 mb-6">
                <li className="py-2">
                  <strong>Strategic Planning:</strong> Helping founders prepare for exits, expansions, or restructuring.
                </li>
                <li className="py-2">
                  <strong>Value Optimisation:</strong> Advisory on improving operational efficiency and growth prospects pre-transaction.
                </li>
                <li className="py-2">
                  <strong>Succession & Transition:</strong> Support for smooth shareholder, management, and business transitions.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
