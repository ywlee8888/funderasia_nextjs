"use client";
import Link from "next/link";
import { useState } from "react";
import KeyServices from "../services/keyServices";
import AboutUs from "../services/aboutUs";
import ContactUs from "../services/contactUs";
import Membership from "../services/memberhsip";
import SpecialistConnectNavBar from "../forms/specialistConnectNavBar";
import styles from "./navbar.module.css"; // Import your CSS module

interface NavbarProps {
  className?: string;
  toggleSpecialistConnect: () => void; 
}

export default function Navbar({ className, toggleSpecialistConnect }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isKeyServicesOpen, setIsKeyServicesOpen] = useState(false);
  const [isAboutUsOpen, setIsAboutUsOpen] = useState(false);
  const [isContactUsOpen, setIsContactUsOpen] = useState(false);
  const [isMembershipOpen, setIsMembershipOpen] = useState(false);
  const [isSpecialistConnectOpen, setIsSpecialistConnectOpen] = useState(false);
  
  // State for the contact form
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

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
      case "specialistConnect":
        setIsSpecialistConnectOpen(!isSpecialistConnectOpen);
        break;
      default:
        break;
    }
    setIsOpen(false); // Close the menu after clicking
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('Sending...');
  
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      const data = await response.json();
      console.log("Response from server:", data);
  
      if (response.ok) {
        setStatus('Email sent successfully!');
        setFormData({ name: '', email: '', message: '' }); // Clear form
      } else {
        setStatus(`Error sending email: ${data.message}`);
      }
    } catch (error) {
      console.error(error);
      setStatus('An unexpected error occurred.');
    }
  };

  return (
    <nav className={`${styles.navbar} relative bg-gray-800 bg-opacity-50 text-white p-4 ${className}`} aria-label="Main Navigation">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-lg font-bold">
          <img
            src="/img/logo_banner_white.png"
            alt="Specialist Asia Logo"
            className="mr-2 w-4/12"
          />
        </div>

        <div className="block lg:hidden">
          <button
            onClick={toggleMenu}
            className={styles.toggleButton} // Apply the toggle button styles
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

        <div className={`hidden lg:flex space-x-4 items-center ${isOpen ? "flex" : "hidden"}`}>
          <Link
            href="/"
            className={`${styles.menuItem} text-blue-200 font-extrabold hover:font-extrabold whitespace-nowrap px-1`}
            onClick={handleLinkClick}
            aria-label="Home"
          >
            HOME
          </Link>

          <button
            className={styles.menuItem} // Use menu item styles
            onClick={() => toggleComponent("membership")}
            aria-label="Membership"
          >
            MEMBERSHIP
          </button>

          <button
            className={styles.menuItem}
            onClick={() => toggleComponent("keyServices")}
            aria-label="Services"
          >
            SERVICES
          </button>

          <button
            onClick={() => toggleComponent("aboutUs")}
            className={styles.menuItem}
            aria-label="About Us"
          >
            ABOUT
          </button>

          <button
            onClick={() => toggleComponent("contactUs")}
            className={styles.menuItem}
            aria-label="Contact Us"
          >
            CONTACT
          </button>

          <button
            onClick={() => toggleComponent("specialistConnect")}
            className="bg-blue-500 hover:bg-blue-600 font-bold text-white px-4 py-4 rounded whitespace-nowrap"
            aria-label="Specialist Connect"
          >
            SPECIALIST CONNECT &#8482;
          </button>
        </div>
      </div>

      {isOpen && (
        <div className={`${styles.menu} lg:hidden bg-gray-700 mt-2 rounded-md ${isOpen ? 'open' : ''}`}>
          <div className="flex flex-col space-y-2 p-4">
            <Link
              href="/"
              className={`${styles.menuItem} text-blue-200 font-extrabold hover:font-extrabold whitespace-nowrap`}
              onClick={handleLinkClick}
              aria-label="Home"
            >
              HOME
            </Link>

            <button
              className={styles.menuItem}
              onClick={() => toggleComponent("membership")}
              aria-label="Membership"
            >
              MEMBERSHIP
            </button>

            <button
              className={styles.menuItem}
              onClick={() => toggleComponent("keyServices")}
              aria-label="Services"
            >
              SERVICES
            </button>

            <Link
              href="/about"
              className={styles.menuItem}
              onClick={handleLinkClick}
              aria-label="About Us"
            >
              ABOUT
            </Link>

            <Link
              href="/contact"
              className={styles.menuItem}
              onClick={handleLinkClick}
              aria-label="Contact Us"
            >
              CONTACT
            </Link>

            <button
              onClick={() => toggleComponent("specialistConnect")}
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
              aria-label="Specialist Connect"
            >
              SPECIALIST CONNECT
            </button>
          </div>
        </div>
      )}

      {/* KeyServices Component */}
      {isKeyServicesOpen && (
        <KeyServices isOpen={isKeyServicesOpen} toggleSidebar={() => toggleComponent("keyServices")} />
      )}

      {/* AboutUs Component */}
      {isAboutUsOpen && (
        <AboutUs isOpen={isAboutUsOpen} toggleSidebar={() => toggleComponent("aboutUs")} />
      )}

      {/* ContactUs Component */}
      {isContactUsOpen && (
        <ContactUs isOpen={isContactUsOpen} toggleSidebar={() => toggleComponent("contactUs")} />
      )}

      {/* Membership Component */}
      {isMembershipOpen && (
        <Membership isOpen={isMembershipOpen} toggleSidebar={() => toggleComponent("membership")} />
      )}

      {/* SpecialistConnect Component */}
      {isSpecialistConnectOpen && (
        <>
          {/* Background Mask */}
          <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-2000"></div>

          <SpecialistConnectNavBar isOpen={isSpecialistConnectOpen} toggleSidebar={() => toggleComponent("specialistConnect")} />
        </>
      )}      
    </nav>
  );
}
