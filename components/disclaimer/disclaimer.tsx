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
          <strong>Funder Asia</strong> is a strategic M&A advisory boutique
          providing corporate finance, transaction advisory, and strategic
          consulting services. All information shared through this website, our
          materials, events, or communications is provided for general
          informational purposes only.
        </p>

        <p>
          Nothing contained herein constitutes or should be construed as
          investment, legal, tax, accounting, or financial advice, nor as an
          offer, solicitation, or recommendation to buy or sell any securities,
          interests, or financial instruments. Any transaction discussed is
          subject to further due diligence, definitive documentation, and
          applicable regulatory approvals.
        </p>

        <p>
          Funder Asia does not act as a broker-dealer and does not provide
          investment advice to the public. Our services are provided on a
          mandate basis to corporate clients, business owners, and stakeholders,
          and any engagement is subject to a separate written agreement.
        </p>

        <p>
          While we strive to provide accurate and up-to-date information, Funder
          Asia makes no representations or warranties, express or implied,
          regarding the accuracy, completeness, or reliability of any
          information provided. Past transactions or outcomes are not indicative
          of future results, and no assurance can be given that any proposed
          transaction will be completed or achieve a particular outcome.
        </p>

        <p>
          By engaging with Funder Asia or accessing our materials, you
          acknowledge and agree that Funder Asia shall not be liable for any
          loss, damage, or expense arising from reliance on the information
          provided.
        </p>

        <p>
          Funder Asia respects your privacy and complies with applicable data
          protection laws. By engaging with our services or submitting your
          information, you consent to the collection, use, and storage of your
          personal data for legitimate business, advisory, and communication
          purposes. You may withdraw your consent at any time by contacting us.
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
