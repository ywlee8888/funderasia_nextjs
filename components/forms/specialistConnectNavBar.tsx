"use client";

import { useState } from "react";
import { FaTimes, FaCross } from "react-icons/fa";
import Styles from "./specialistConnectNavBar.module.css";
import SpecialistConnectAlert from "../alerts/specialistconnectAlert";

const medicalSpecialties = [
  "Cardiology (Heart)",
  "Dermatology (Skin)",
  "Endocrinology (Hormones)",
  "Gastroenterology (Digestive System)",
  "General Surgery",
  "Nephrology (Kidneys)",
  "Obstetrics & Gynecology (Reproductive System)",
  "Otolaryngology (Ear, Nose & Throat)",
  "Oncology (Cancer)",
  "Orthopedics (Musculoskeletal System)",
  "Pediatrics (Children’s Health)",
  "Pulmonology (Lungs)",
  "Rheumatology (Joints and Connective Tissue)",
  "Urology (Urinary Tract)",
  "Others",
];

const aestheticsTreatments = [
  "Botox",
  "Skin Rejuvenation",
  "Laser Treatment",
  "Chemical Peel",
  "Others",
  // Add more treatments
];

const stemCellTreatments = [
  "Apligraf (Dermal Replacement Tissue)",
  "Carticel (Autologous Cultured Chondrocytes)",
  "Hematopoietic Stem Cell Transplantation (HSCT)",
  "Ossron (Osteogenic Protein-1)",
  "Prochymal (Remestemcel-L)",
  "Temcell (Regenerative Cell Therapy)",
  "Others",
  // Add more treatments
];

const healthScreenings = [
  "Executive Health Screening",
  "Blood Pressure Screening",
  "Cholesterol Screening",
  "Diabetes Screening",
  "Cancer Screening",
  "Others",
  // Add more screenings
];

const countries = [
  "Malaysia",
  "Singapore",
  "South Korea",
  "Taiwan",
  "Thailand",
  "Others",
  // Add more countries
];

type SidebarProps = {
  isOpen: boolean;
  toggleSidebar: () => void;
};

export default function SpecialistConnectNavBar({
  isOpen,
  toggleSidebar,
}: SidebarProps) {
  const [treatmentType, setTreatmentType] = useState<string>("");
  const [hasSpecialistArea, setHasSpecialistArea] = useState<boolean | null>(
    null
  );
  const [selectedSpecialist, setSelectedSpecialist] = useState<string>("");
  const [preferredCountry, setPreferredCountry] = useState<string>("");
  const [contactDetails, setContactDetails] = useState({
    name: "",
    email: "",
    telephone: "",
    remarks: "",
  });
  const [aestheticsType, setAestheticsType] = useState<string>("");
  const [stemCellType, setstemCellType] = useState<string>("");
  const [healthScreeningType, setHealthScreeningType] = useState<string>("");
  const [virtualConsultation, setVirtualConsultation] = useState<string | null>(
    null
  );
  const [showContactDetails, setShowContactDetails] = useState<boolean>(false);
  const [alertVisible, setAlertVisible] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Prevent the default form submission

    let selectedTreatmentType;

    if (treatmentType === "medicalSpecialist") {
      selectedTreatmentType = selectedSpecialist; // Use selectedSpecialist for medical specialties
    } else if (treatmentType === "aesthetics") {
      selectedTreatmentType = aestheticsType; // Use aestheticsType for aesthetics
    } else if (treatmentType === "healthScreening") {
      selectedTreatmentType = healthScreeningType; // Use healthScreeningType for health screening
    } else if (treatmentType === "stemCell") {
      selectedTreatmentType = stemCellType; //
    } else {
      selectedTreatmentType = ""; // Default case if none match
    }

    const formData = {
      name: contactDetails.name,
      email: contactDetails.email,
      telephone: contactDetails.telephone,
      remarks: contactDetails.remarks,
      treatmentType,
      selectedTreatmentType, // This should now have a valid value
      preferredCountry,
    };

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Handle success (e.g., show a success message)
        setAlertMessage(
          "Message sent successfully! Our liaison officers will be in touch within the next 48 hours."
        );
        setAlertVisible(true);
        // Delay the sidebar closure
        setTimeout(() => {
          toggleSidebar(); // Close sidebar after a brief delay
        }, 8000); // Adjust delay time (in milliseconds) as needed
      } else {
        // Handle error (e.g., show an error message)
        const errorText = await response.text(); // Get response as text for debugging
        alert(`Error: ${errorText}`); // Alerting the error message
        const errorData = await response.json();
        // Use errorData.message if available or a fallback message
        alert(
          `Error: ${
            errorData.message ||
            "An unexpected error occurred. Please try again."
          }`
        );
      }
    } catch (error) {
      // Handle fetch error
      console.error("Fetch error:", error);
      alert("An unexpected fetch error occurred. Please try again later.");
    }
  };

  const closeAlert = () => {
    setAlertVisible(false);
    toggleSidebar(); // Close the sidebar when the alert is closed
  };

  const handleVirtualConsultation = (answer: string) => {
    setVirtualConsultation(answer);
    setShowContactDetails(answer === "yes");
  };

  return isOpen ? (
    <div className={Styles.container}>
      <div className="flex justify-center items-center">
        <div
          className={`p-6 bg-white rounded shadow-md w-full ${Styles.formContainer}`}
        >
          {/* Use the correct component name */}
          {alertVisible && (
            <SpecialistConnectAlert
              message={alertMessage}
              onClose={closeAlert}
            />
          )}
          {/* Close button */}
          <button
            className="bg-red-500 mt-3 mb-3 text-white z-20 text-2xl float-right"
            onClick={toggleSidebar}
          >
            <FaTimes />
          </button>

          <h1 className="text-3xl font-bold mb-6" style={{ color: "#2c3e50" }}>
            Specialist Connect&#8482;
          </h1>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Main Question */}
            <div>
              <label
                className="block font-medium mb-2"
                style={{ color: "#34495e" }}
              >
                <strong>Choose the healthcare treatment you are seeking</strong>
              </label>
              <select
                className="block w-full border border-gray-300 rounded-md px-4 py-2"
                value={treatmentType}
                onChange={(e) => {
                  setTreatmentType(e.target.value);
                  setHasSpecialistArea(null); // Reset the specialist area when changing treatment type
                  setSelectedSpecialist("");
                  setPreferredCountry("");
                  setShowContactDetails(false); // Reset contact details visibility
                  setVirtualConsultation(null); // Reset virtual consultation selection
                }}
                style={{ backgroundColor: "#ecf0f1", color: "#2c3e50" }}
              >
                <option value="">-- Please Select --</option>
                <option value="medicalSpecialist">
                  Specialist Medical Treatment
                </option>
                <option value="aesthetics">Aesthetics Treatment</option>
                <option value="stemCell">Regenerative Treatment</option>
                <option value="healthScreening">Health Screening</option>
              </select>
            </div>

            {/* Medical Specialist Path */}
            {treatmentType === "medicalSpecialist" && (
              <>
                <div>
                  <label
                    className="block font-medium mb-2"
                    style={{ color: "#34495e" }}
                  >
                    <strong>
                      Do you know which field of medical specialisation?
                    </strong>
                  </label>
                  <select
                    className="block w-full border border-gray-300 rounded-md px-4 py-2"
                    value={
                      hasSpecialistArea
                        ? "yes"
                        : hasSpecialistArea === false
                        ? "no"
                        : ""
                    }
                    onChange={(e) => {
                      const isSpecialistArea = e.target.value === "yes";
                      setHasSpecialistArea(isSpecialistArea);
                      if (!isSpecialistArea) {
                        setSelectedSpecialist(
                          "Request GP Consultation and Referral"
                        ); // Set value when "No" is selected
                      } else {
                        setSelectedSpecialist(""); // Reset if "Yes" is selected
                      }
                    }}
                    style={{ backgroundColor: "#ecf0f1", color: "#2c3e50" }}
                    required
                  >
                    <option value="">-- Please Select --</option>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                  </select>
                </div>

                {hasSpecialistArea && (
                  <>
                    <div>
                      <label
                        className="block font-medium mb-2"
                        style={{ color: "#34495e" }}
                      >
                        <strong>Choose a medical specialty</strong>
                      </label>
                      <select
                        className="block w-full border border-gray-300 rounded-md px-4 py-2"
                        value={selectedSpecialist}
                        onChange={(e) => {
                          setSelectedSpecialist(e.target.value);
                          if (e.target.value) {
                            setShowContactDetails(
                              virtualConsultation === "yes"
                            ); // Show contact details if virtual consultation is yes
                          }
                        }}
                        style={{
                          backgroundColor: "#ecf0f1",
                          color: "#2c3e50",
                        }}
                        required
                      >
                        <option value="">-- Please Select --</option>
                        {medicalSpecialties.map((specialty) => (
                          <option key={specialty} value={specialty}>
                            {specialty}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label
                        className="block font-medium mb-2"
                        style={{ color: "#34495e" }}
                      >
                        <strong>
                          Preferred destination for medical treatment
                        </strong>
                      </label>
                      <select
                        className="block w-full border border-gray-300 rounded-md px-4 py-2"
                        value={preferredCountry}
                        onChange={(e) => setPreferredCountry(e.target.value)}
                        style={{
                          backgroundColor: "#ecf0f1",
                          color: "#2c3e50",
                        }}
                        required
                      >
                        <option value="">-- Please Select --</option>
                        {countries.map((country) => (
                          <option key={country} value={country}>
                            {country}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label
                        className="block font-medium mb-2"
                        style={{ color: "#34495e" }}
                      >
                        <strong>
                          Would you like to receive profiles of some healthcare
                          providers?
                        </strong>
                      </label>
                      <select
                        className="block w-full border border-gray-300 rounded-md px-4 py-2"
                        value={virtualConsultation || ""}
                        onChange={(e) => {
                          handleVirtualConsultation(e.target.value);
                        }}
                        style={{
                          backgroundColor: "#ecf0f1",
                          color: "#2c3e50",
                        }}
                      >
                        <option value="">-- Please Select --</option>
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                      </select>
                    </div>
                  </>
                )}

                {/* Virtual Consultation Question */}
                {!hasSpecialistArea && (
                  <div>
                    {/* Preferred Country Dropdown */}
                    <label
                      className="block font-medium mb-2"
                      style={{ color: "#34495e" }}
                    >
                      <strong>
                        Please select your preferred country for the medical
                        treatment
                      </strong>
                    </label>
                    <select
                      className="block w-full border border-gray-300 rounded-md px-4 py-2 mb-4"
                      value={preferredCountry || ""}
                      onChange={(e) => {
                        setPreferredCountry(e.target.value); // Update state with the selected country
                      }}
                      style={{ backgroundColor: "#ecf0f1", color: "#2c3e50" }}
                      required
                    >
                      <option value="">-- Please Select --</option>
                      {countries.map((country) => (
                        <option key={country} value={country}>
                          {country}
                        </option>
                      ))}
                    </select>
                    <label
                      className="block font-medium mb-2"
                      style={{ color: "#34495e" }}
                    >
                      <strong>
                        Would you like to schedule a virtual consultation with a
                        general practitioner in your preferred country who can
                        facilitate a referral to the appropriate specialist?
                      </strong>
                    </label>
                    <select
                      className="block w-full border border-gray-300 rounded-md px-4 py-2" // Added margin bottom for spacing
                      value={virtualConsultation || ""}
                      onChange={(e) => {
                        handleVirtualConsultation(e.target.value);
                      }}
                      style={{ backgroundColor: "#ecf0f1", color: "#2c3e50" }}
                      required
                    >
                      <option value="">-- Please Select --</option>
                      <option value="yes">Yes</option>
                      <option value="no">No</option>
                    </select>
                  </div>
                )}
              </>
            )}

            {/* Aesthetics Treatment Path */}
            {treatmentType === "aesthetics" && (
              <>
                <div>
                  <label
                    className="block font-medium mb-2"
                    style={{ color: "#34495e" }}
                  >
                    <strong>
                      Please select the type of aesthetic treatment you are
                      seeking
                    </strong>
                  </label>
                  <select
                    className="block w-full border border-gray-300 rounded-md mb-4 px-4 py-2"
                    value={aestheticsType}
                    onChange={(e) => setAestheticsType(e.target.value)}
                    style={{ backgroundColor: "#ecf0f1", color: "#2c3e50" }}
                    required
                  >
                    <option value="">-- Please Select --</option>
                    {aestheticsTreatments.map((treatment) => (
                      <option key={treatment} value={treatment}>
                        {treatment}
                      </option>
                    ))}
                  </select>
                  <label
                    className="block font-medium mb-2"
                    style={{ color: "#34495e" }}
                  >
                    <strong>
                      Please select your preferred country for aesthetic
                      treatment
                    </strong>
                  </label>
                  <select
                    className="block w-full border border-gray-300 rounded-md px-4 py-2 mb-2"
                    value={preferredCountry || ""}
                    onChange={(e) => {
                      setPreferredCountry(e.target.value); // Update state with the selected country
                    }}
                    style={{ backgroundColor: "#ecf0f1", color: "#2c3e50" }}
                    required
                  >
                    <option value="">-- Please Select --</option>
                    {countries.map((country) => (
                      <option key={country} value={country}>
                        {country}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label
                    className="block font-medium mb-2"
                    style={{ color: "#34495e" }}
                  >
                    <strong>
                      Would you like to receive profiles of some aesthetic
                      providers?
                    </strong>
                  </label>
                  <select
                    className="block w-full border border-gray-300 rounded-md px-4 py-2"
                    value={virtualConsultation || ""}
                    onChange={(e) => {
                      handleVirtualConsultation(e.target.value);
                    }}
                    style={{ backgroundColor: "#ecf0f1", color: "#2c3e50" }}
                  >
                    <option value="">-- Please Select --</option>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                  </select>
                </div>
              </>
            )}
            {/* Stem Cell Treatment Path */}
            {treatmentType === "stemCell" && (
              <>
                <div>
                  <label
                    className="block font-medium mb-2"
                    style={{ color: "#34495e" }}
                  >
                    <strong>
                      Please select the type of regenerative treatment you are
                      seeking
                    </strong>
                  </label>
                  <select
                    className="block w-full border border-gray-300 rounded-md mb-4 px-4 py-2"
                    value={stemCellType}
                    onChange={(e) => setstemCellType(e.target.value)}
                    style={{ backgroundColor: "#ecf0f1", color: "#2c3e50" }}
                    required
                  >
                    <option value="">-- Please Select --</option>
                    {stemCellTreatments.map((treatment) => (
                      <option key={treatment} value={treatment}>
                        {treatment}
                      </option>
                    ))}
                  </select>
                  <label
                    className="block font-medium mb-2"
                    style={{ color: "#34495e" }}
                  >
                    <strong>
                      Please select your preferred country for regenerative
                      treatment
                    </strong>
                  </label>
                  <select
                    className="block w-full border border-gray-300 rounded-md px-4 py-2 mb-4"
                    value={preferredCountry || ""}
                    onChange={(e) => {
                      setPreferredCountry(e.target.value); // Update state with the selected country
                    }}
                    required
                    style={{ backgroundColor: "#ecf0f1", color: "#2c3e50" }}
                  >
                    <option value="">-- Please Select --</option>
                    {countries.map((country) => (
                      <option key={country} value={country}>
                        {country}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label
                    className="block font-medium mb-2"
                    style={{ color: "#34495e" }}
                  >
                    <strong>
                      Would you like to receive profiles of some regenerative
                      treatment providers?
                    </strong>
                  </label>
                  <select
                    className="block w-full border border-gray-300 rounded-md px-4 py-2"
                    value={virtualConsultation || ""}
                    onChange={(e) => {
                      handleVirtualConsultation(e.target.value);
                    }}
                    style={{ backgroundColor: "#ecf0f1", color: "#2c3e50" }}
                  >
                    <option value="">-- Please Select --</option>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                  </select>
                </div>
              </>
            )}

            {/* Health Screening Path */}
            {treatmentType === "healthScreening" && (
              <>
                <div>
                  <label
                    className="block font-medium mb-2"
                    style={{ color: "#34495e" }}
                  >
                    <strong>
                      Please select the type of health screening you are seeking
                    </strong>
                  </label>
                  <select
                    className="block w-full border border-gray-300 rounded-md px-4 py-2"
                    value={healthScreeningType}
                    onChange={(e) => setHealthScreeningType(e.target.value)}
                    style={{ backgroundColor: "#ecf0f1", color: "#2c3e50" }}
                    required
                  >
                    <option value="">-- Please Select --</option>
                    {healthScreenings.map((screening) => (
                      <option key={screening} value={screening}>
                        {screening}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label
                    className="block font-medium mb-2"
                    style={{ color: "#34495e" }}
                  >
                    <strong>
                      Please select your preferred country for health screening
                    </strong>
                  </label>
                  <select
                    className="block w-full border border-gray-300 rounded-md px-4 py-2 mb-4"
                    value={preferredCountry || ""}
                    onChange={(e) => {
                      setPreferredCountry(e.target.value); // Update state with the selected country
                    }}
                    style={{ backgroundColor: "#ecf0f1", color: "#2c3e50" }}
                    required
                  >
                    <option value="">-- Please Select --</option>
                    {countries.map((country) => (
                      <option key={country} value={country}>
                        {country}
                      </option>
                    ))}
                  </select>
                  <label
                    className="block font-medium mb-2"
                    style={{ color: "#34495e" }}
                  >
                    <strong>
                      Would you like to receive profiles of some health
                      screening providers?
                    </strong>
                  </label>
                  <select
                    className="block w-full border border-gray-300 rounded-md px-4 py-2"
                    value={virtualConsultation || ""}
                    onChange={(e) => {
                      handleVirtualConsultation(e.target.value);
                    }}
                    style={{ backgroundColor: "#ecf0f1", color: "#2c3e50" }}
                  >
                    <option value="">-- Please Select --</option>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                  </select>
                </div>
              </>
            )}

            {/* Show contact details if virtual consultation is "yes" */}
            {showContactDetails && (
              <div>
                <h2 className="text-xl text-black font-semibold mb-4">
                  Contact Details
                </h2>
                <div>
                  <label
                    className="block font-medium mb-2"
                    style={{ color: "#34495e" }}
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    className="block w-full border border-gray-300 rounded-md mb-2 px-4 py-2"
                    value={contactDetails.name}
                    onChange={(e) =>
                      setContactDetails({
                        ...contactDetails,
                        name: e.target.value,
                      })
                    }
                    style={{ backgroundColor: "#ecf0f1", color: "#2c3e50" }}
                    placeholder="Enter your name" // Added placeholder
                    required
                  />
                </div>
                <div>
                  <label
                    className="block font-medium mb-2"
                    style={{ color: "#34495e" }}
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    className="block w-full border border-gray-300 rounded-md mb-2 px-4 py-2"
                    value={contactDetails.email}
                    onChange={(e) =>
                      setContactDetails({
                        ...contactDetails,
                        email: e.target.value,
                      })
                    }
                    style={{ backgroundColor: "#ecf0f1", color: "#2c3e50" }}
                    placeholder="Enter your email" // Added placeholder
                    required
                  />
                </div>
                <div>
                  <label
                    className="block font-medium mb-2"
                    style={{ color: "#34495e" }}
                  >
                    Telephone
                  </label>
                  <input
                    type="tel"
                    className="block w-full border border-gray-300 rounded-md mb-2 px-4 py-2"
                    value={contactDetails.telephone}
                    onChange={(e) =>
                      setContactDetails({
                        ...contactDetails,
                        telephone: e.target.value,
                      })
                    }
                    style={{ backgroundColor: "#ecf0f1", color: "#2c3e50" }}
                    placeholder="Enter your telephone" // Added placeholder
                    required
                  />
                </div>
                <div>
                  <label
                    className="block font-medium mb-2"
                    style={{ color: "#34495e" }}
                  >
                    Remarks
                  </label>
                  <textarea
                    className="block w-full border border-gray-300 rounded-md mb-2 px-4 py-2"
                    value={contactDetails.remarks}
                    onChange={(e) =>
                      setContactDetails({
                        ...contactDetails,
                        remarks: e.target.value,
                      })
                    }
                    style={{ backgroundColor: "#ecf0f1", color: "#2c3e50" }}
                    placeholder="Enter your remarks" // Added placeholder
                    rows={4}
                  />
                </div>
              </div>
            )}

            {/* Submit Button */}
            {virtualConsultation === "yes" && (
              <button
                type="submit"
                className="w-full py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-200"
              >
                Submit
              </button>
            )}
          </form>
        </div>
      </div>
    </div>
  ) : null;
}
