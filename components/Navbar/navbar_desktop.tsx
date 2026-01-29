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

  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const toggleMenu = () => setIsOpen(!isOpen);
  const handleLinkClick = () => setIsOpen(false);

  const toggleComponent = (component: string) => {
    switch (component) {
      case "keyServices": setIsKeyServicesOpen(!isKeyServicesOpen); break;
      case "aboutUs": setIsAboutUsOpen(!isAboutUsOpen); break;
      case "contactUs": setIsContactUsOpen(!isContactUsOpen); break;
      case "membership": setIsMembershipOpen(!isMembershipOpen); break;
      default: break;
    }
    setIsOpen(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("Sending...");
    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
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
      className={`relative bg-transparent text-white p-4 ${className}`} // fully transparent
      aria-label="Main Navigation"
    >
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo / Text */}
        <div className={`text-xs sm:text-sm md:text-base font-semibold tracking-wide text-white leading-tight ${styles.navlogo}`}>
          Strategic M&A Advisory for Asia’s Middle Market
        </div>       

        {/* Desktop links */}
        <div className={`hidden lg:flex space-x-4 items-center ${isOpen ? "flex" : "hidden"}`}>
          <Link href="/" className="text-white font-extrabold hover:font-extrabold whitespace-nowrap px-1" onClick={handleLinkClick}>HOME</Link>
          <button onClick={() => toggleComponent("keyServices")} className="hover:font-extrabold whitespace-nowrap px-1">SERVICES</button>
          <button onClick={() => toggleComponent("aboutUs")} className="hover:font-extrabold whitespace-nowrap px-1">ABOUT</button>
          <button onClick={() => toggleComponent("contactUs")} className="hover:font-extrabold whitespace-nowrap px-1">CONTACT</button>
        </div>
      </div>      

      {/* Components */}
      {isKeyServicesOpen && <KeyServices isOpen={isKeyServicesOpen} toggleSidebar={() => toggleComponent("keyServices")} />}
      {isAboutUsOpen && <AboutUs isOpen={isAboutUsOpen} toggleSidebar={() => toggleComponent("aboutUs")} />}
      {isContactUsOpen && <ContactUs isOpen={isContactUsOpen} toggleSidebar={() => toggleComponent("contactUs")} />}
      {isMembershipOpen && <Membership isOpen={isMembershipOpen} toggleSidebar={() => toggleComponent("membership")} />}
    </nav>
  );
}
