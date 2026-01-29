"use client";
import Link from "next/link";
import { useState } from "react";
import KeyServices from "../services/keyServices";
import AboutUs from "../services/aboutUs";
import ContactUs from "../services/contactUs";
import Membership from "../services/memberhsip";
import styles from "./navbar.module.css";

interface NavbarProps {
  className?: string;
}

export default function Navbar({ className }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isKeyServicesOpen, setIsKeyServicesOpen] = useState(false);
  const [isAboutUsOpen, setIsAboutUsOpen] = useState(false);
  const [isContactUsOpen, setIsContactUsOpen] = useState(false);
  const [isMembershipOpen, setIsMembershipOpen] = useState(false);

  // State for the contact form
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  const toggleComponent = (component: string) => {
    switch (component) {
      case "keyServices":
        setIsKeyServicesOpen(!isKeyServicesOpen);
        break;
      case "aboutUs":
        setIsAboutUsOpen(!isAboutUsOpen);
        break;
      case "contactUs":
        setIsContactUsOpen(!isContactUsOpen);
        break;
      case "membership":
        setIsMembershipOpen(!isMembershipOpen);
        break;
      default:
        break;
    }
    setIsOpen(false);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus("Email sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus(`Error sending email: ${data.message}`);
      }
    } catch (error) {
      console.error(error);
      setStatus("An unexpected error occurred.");
    }
  };

  return (
    <nav
      className={`relative bg-gray-800 bg-opacity-50 text-white p-4 ${className}`}
      aria-label="Main Navigation"
    >
      <div className="container mx-auto flex justify-between items-center">
        <div
          className={`text-xs sm:text-sm md:text-base font-semibold tracking-wide text-white leading-tight ${styles.navlogo}`}
        >
          Strategic M&A Advisory for Asia’s Middle Market
        </div>

        <div className="block lg:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
            aria-expanded={isOpen}
            aria-label="Toggle menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>

        <div
          className={`hidden lg:flex space-x-4 items-center ${
            isOpen ? "flex" : "hidden"
          }`}
        >
          <Link
            href="/"
            className="text-blue-200 font-extrabold hover:font-extrabold whitespace-nowrap px-1"
            onClick={handleLinkClick}
            aria-label="Home"
          >
            HOME
          </Link>

          <button
            onClick={() => toggleComponent("keyServices")}
            className="hover:font-extrabold whitespace-nowrap px-1"
            aria-label="Services"
          >
            SERVICES
          </button>

          <button
            onClick={() => toggleComponent("aboutUs")}
            className="hover:font-extrabold whitespace-nowrap px-1"
            aria-label="About Us"
          >
            ABOUT
          </button>

          <button
            onClick={() => toggleComponent("contactUs")}
            className="hover:font-extrabold whitespace-nowrap px-1"
            aria-label="Contact Us"
          >
            CONTACT
          </button>         
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden bg-gray-700 mt-2 rounded-md">
          <div className="flex flex-col space-y-2 p-4">
            <Link
              href="/"
              className="text-blue-200 font-extrabold hover:font-extrabold whitespace-nowrap"
              onClick={handleLinkClick}
              aria-label="Home"
            >
              HOME
            </Link>           

            <button
              className="hover:font-extrabold whitespace-nowrap text-left"
              onClick={() => toggleComponent("keyServices")}
              aria-label="Services"
            >
              SERVICES
            </button>

            <button
              className="hover:font-extrabold whitespace-nowrap text-left"
              onClick={() => toggleComponent("aboutUs")}
              aria-label="About Us"
            >
              ABOUT
            </button>

            <button
              className="hover:font-extrabold whitespace-nowrap text-left"
              onClick={() => toggleComponent("contactUs")}
              aria-label="Contact Us"
            >
              CONTACT
            </button>            
          </div>
        </div>
      )}

      {/* KeyServices Component */}
      {isKeyServicesOpen && (
        <KeyServices
          isOpen={isKeyServicesOpen}
          toggleSidebar={() => toggleComponent("keyServices")}
        />
      )}

      {/* AboutUs Component */}
      {isAboutUsOpen && (
        <AboutUs
          isOpen={isAboutUsOpen}
          toggleSidebar={() => toggleComponent("aboutUs")}
        />
      )}

      {/* ContactUs Component */}
      {isContactUsOpen && (
        <ContactUs
          isOpen={isContactUsOpen}
          toggleSidebar={() => toggleComponent("contactUs")}
        />
      )}

      {/* Membership Component */}
      {isMembershipOpen && (
        <Membership
          isOpen={isMembershipOpen}
          toggleSidebar={() => toggleComponent("membership")}
        />
      )}
    </nav>
  );
}
