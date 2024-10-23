"use client"; // Ensure this component is a client component

import { useState } from "react";
import Link from "next/link";
import { HiMenu, HiX } from "react-icons/hi"; // Import icons for hamburger and close
import { badgeVariants } from "@/components/ui/badge"; // Import badge variants

const categories = [
  { 
    id: 1, 
    name: "Medical Concierge", 
    path: "/category/medical_concierge",
    subcategories: [
      { id: 1, name: "Cross-Border Specialist Teleconsult", path: "/category/medical_concierge" },     
      { id: 2, name: "Pre-Treatment Coordination", path: "/category/medical_concierge" },
      { id: 3, name: "On-Ground Liaison Support", path: "/category/medical_concierge" },
      { id: 4, name: "Post-Treatment Care Management", path: "/category/medical_concierge" },
      { id: 5, name: "Other Concierge Services", path: "/category/medical_concierge" },
    ],
  },
  { 
    id: 2, 
    name: "Specialist Consultation", 
    path: "/category/specialist",
    subcategories: [
      { id: 1, name: "Cardiology (Heart)", path: "/category/specialist/cardiology" },
      { id: 2, name: "Dermatology (Skin)", path: "/category/specialist/dermatology" },
      { id: 3, name: "Endocrinology (Hormones)", path: "/category/specialist/endocrinology" },
      { id: 4, name: "Otolaryngology (Ear, Nose & Throat)", path: "/category/specialist/ent" },
      { id: 5, name: "Gastroenterology (Digestive System)", path: "/category/specialist/gastroenterology" },
      { id: 6, name: "Nephrology (Kidneys)", path: "/category/specialist/nephrology" },
      { id: 7, name: "Obstetrics & Gynecology (Reproductive System)", path: "/category/specialist/OG" },
      { id: 8, name: "Oncology (Cancer)", path: "/category/specialist/oncology" },   
      { id: 9, name: "Orthopedics (Musculoskeletal System)", path: "/category/specialist/orthopedics" },   
      { id: 10, name: "Pediatrics (Children’s Health)", path: "/category/specialist/pediatrics" },   
      { id: 11, name: "Pulmonology (Lungs)", path: "/category/specialist/pulmonology" },   
      { id: 12, name: "Rheumatology (Joints and Connective Tissue)", path: "/category/specialist/rheumatology" },   
      { id: 13, name: "General Surgery", path: "/category/specialist/surgery" },  
      { id: 14, name: "Urology (Urinary Tract)", path: "/category/specialist/urology" },     
    ],
  },
  { 
    id: 3, 
    name: "Aesthetic Treatment", 
    path: "/category/aesthetics",
    subcategories: [
      { id: 1, name: "Injectable Treatments", path: "/category/aesthetics/injectable" },
      { id: 2, name: "Laser Treatments", path: "/category/aesthetics/laser" },
      { id: 3, name: "Chemical Peels", path: "/category/aesthetics/chemical_peels" },
      { id: 4, name: "Microdermabrasion and Microneedling", path: "/category/aesthetics/microdermabrasion" },
      { id: 5, name: "Body Contouring", path: "/category/aesthetics/body_contouring" },
      { id: 6, name: "Skin Rejuvenation", path: "/category/aesthetics/skin_rejuvenation" },
      { id: 7, name: "Hair Restoration", path: "/category/aesthetics/hair_restoration" },
      { id: 8, name: "Cosmetic Surgery", path: "/category/aesthetics/cosmetic_surgery" }, 
    ],
  },
  { 
    id: 4,   
    name: "Health Screening", 
    path: "/category/healthscreen",
    subcategories: [
      { id: 1, name: "Executive Health Screening", path: "/category/healthscreen/executive_healthscreen" },
      { id: 2, name: "Men's Health Screening", path: "/category/healthscreen/men" },
      { id: 3, name: "Women's Health Screening", path: "/category/healthscreen/women" },   
    ],
  },
  { 
    id: 5, 
    name: "Vaccinations", 
    path: "/category/vaccinations",
    subcategories: [
      { id: 1, name: "Vaccinations", path: "/category/vaccination" },
    ],
  },  
];

export default function SidebarDetails() {
  const [expandedCategory, setExpandedCategory] = useState<number | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  const toggleCategory = (id: number) => {
    setExpandedCategory(expandedCategory === id ? null : id);
  };

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <button onClick={toggleSidebar} className="p-2 text-gray-700 md:hidden">
        <HiMenu size={24} />
      </button>

      <aside className={`fixed top-0 left-0 h-full bg-gray-100 p-4 shadow-md transition-transform transform ${isOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0 md:relative md:block`}>
        <button onClick={toggleSidebar} className="p-2 text-gray-700 md:hidden absolute top-2 right-2">
          <HiX size={24} />
        </button>
        <ul>
          {categories.map((category) => (
            <li key={category.id} className="mb-2">
              <div>
                <button
                  onClick={() => toggleCategory(category.id)}
                  className="bg-blue-500 text-white w-full text-left px-4 py-2 rounded-lg"
                >
                  {category.name}
                </button>

                {expandedCategory === category.id && (
                  <ul className="ml-4 mt-2 space-y-1">
                    {category.subcategories.map((subcategory) => (
                      <li key={subcategory.id}>
                        <Link
                          href={subcategory.path}
                          className="block px-2 py-1 text-sm text-blue-500 transition-colors duration-200 hover:bg-blue-100 hover:text-blue-700 rounded"
                        >
                          {subcategory.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </li>
          ))}
        </ul>
      </aside>
    </div>
  );
}