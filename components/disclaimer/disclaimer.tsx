"use client";

import React from "react";

interface DisclaimerModalProps {
  onAgree: () => void;
}

const DisclaimerModal: React.FC<DisclaimerModalProps> = ({ onAgree }) => {
  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-70 flex items-center justify-center">
      <div className="bg-white p-6 max-h-[90vh] overflow-y-auto rounded-xl max-w-2xl shadow-lg text-left space-y-4">
        <h2 className="text-2xl font-bold text-center">Disclaimer</h2>
        <p>
          <strong>Specialist Asia</strong> provides concierge and educational
          services exclusively and does not offer medical advice, diagnosis, or
          treatment recommendations. Information shared through our educational
          programmes, events, or communications is for general awareness only and
          should not be construed as medical advice. Always consult a qualified
          healthcare professional for personalised medical guidance.
        </p>
        <p>
          We are not an insurance broker, agent, or advisor and do not sell,
          recommend, or provide advice on insurance policies. Specialist Asia
          collaborates with licensed insurance providers and brokers solely to
          facilitate introductions and education. For specific insurance products
          or policy advice, please contact a licensed insurance professional.
        </p>
        <p>
          Our role is to assist expatriates and international patients with
          healthcare navigation and access. Our services do not replace
          professional medical or insurance advice, nor do they guarantee the
          availability or outcome of any healthcare treatment or insurance
          product.
        </p>
        <p>
          Specialist Asia respects your privacy and complies with applicable data
          protection laws. By engaging with our services or events, you consent
          to the collection, storage, and sharing of your personal information
          with trusted healthcare and insurance partners for the purpose of
          providing concierge services and relevant communications. You may
          withdraw your consent at any time by contacting us.
        </p> 
        <div className="text-center">
          <button
            onClick={onAgree}
            className="mt-4 bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
          >
            I Agree
          </button>
        </div>
      </div>
    </div>
  );
};

export default DisclaimerModal;
