"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar/navbar";

interface BlogPost {
  title: string;
  content: string;
  publishedDate: string;
  imageUrl: string;
  keywords: string[];
}

const samplePost: BlogPost = {
  title: "Beating the Heat: How to Keep You and Your Kids Cool, Healthy & Glowing Inside Out",
  content: "",
  publishedDate: "2025-06-13",
  imageUrl: "/health_journeys/summer-heat-management-guide.png",
  keywords: [
    "heat management",
    "summer skincare",
    "hydration tips",
    "infant sun protection",
    "internal cooling",
    "sun safety",
    "Vitalis skincare",
    "how to beat the heat in Malaysia and Singapore"
  ]
};

export default function ArticlePage() {
  const [isSpecialistConnectOpen, setIsSpecialistConnectOpen] = useState(false);

  const toggleSpecialistConnect = () => {
    setIsSpecialistConnectOpen(!isSpecialistConnectOpen);
  };

  return (
    <main className="flex flex-col h-screen">
      <Navbar
        className="absolute top-0 left-0 w-full z-10"
       
      />
      <article className="max-w-4xl mx-auto p-8 pt-20">
        <img
          src={samplePost.imageUrl}
          alt={samplePost.title}
          className="w-full h-auto object-cover rounded-lg mb-8"
        />
        <h1 className="text-2xl font-bold text-teal-600 mb-4">
          {samplePost.title}
        </h1>

        <p className="text-gray-700 mb-4">
          As temperatures soar across the region, heat management becomes more than a matter of comfort — it's a health necessity. Here’s how to manage the heat from the inside out, whether you’re caring for yourself, your kids, or your infant.
        </p>

        <h2 className="text-xl font-semibold text-teal-600 mt-4">1. Start with Internal Cooling: Hydration & Nutrition</h2>
        <p className="text-gray-700 mb-4">
          Staying hydrated supports your skin, mood, and energy.
        </p>
        <ul className="list-disc pl-5 text-gray-700 mb-4">
          <li>Adults: Drink 2–3L of water daily. Add cucumber, lemon, or mint for refreshment.</li>
          <li>Kids: Offer water-rich snacks like watermelon and yogurt. Keep drinks cool and frequent.</li>
          <li>Infants: Offer breastmilk or formula more often in heat.</li>
        </ul>

        <h2 className="text-xl font-semibold text-teal-600 mt-4">2. Supplements for Skin & Systemic Cooling</h2>
        <p className="text-gray-700 mb-4">
          Consider Vitamin C, zinc, and hydration tablets to support skin clarity and regulate your body’s response to heat. Always check with a medical professional before starting supplements, especially for children or while breastfeeding.
        </p>

        <h2 className="text-xl font-semibold text-teal-600 mt-4">3. External Defence: Sun Protection is Essential</h2>
        <ul className="list-disc pl-5 text-gray-700 mb-4">
          <li>Use broad-spectrum SPF 30+ sunscreen and reapply every 2 hours.</li>
          <li>Babies over 6 months: Use mineral-based sunscreen and protective clothing.</li>
          <li>For kids: Wide-brimmed hats and shaded play areas are essential.</li>
        </ul>

        <h2 className="text-xl font-semibold text-teal-600 mt-4">4. Stay Cool at Home</h2>
        <p className="text-gray-700 mb-4">
          Cool environments reduce heat stress.
        </p>
        <ul className="list-disc pl-5 text-gray-700 mb-4">
          <li>Infants: Dress in light cotton, use fans or air-con, and wipe down with damp cloths.</li>
          <li>Adults: Shower regularly and try cooling products like body mists.</li>
        </ul>

        <h2 className="text-xl font-semibold text-teal-600 mt-4">5. Keep Skin Calm and Bright</h2>
        <ul className="list-disc pl-5 text-gray-700 mb-4">
          <li>Use gentle exfoliants and hydrating masks to prevent irritation.</li>
          <li>Niacinamide and aloe vera help soothe sun-exposed skin.</li>
        </ul>

        <h2 className="text-xl font-semibold text-teal-600 mt-4">Final Thoughts</h2>
        <p className="text-gray-700 mb-4">
          From hydration to sun protection, keeping your family cool is a summer essential. Turn self-care into a daily ritual — because glowing confidence starts with feeling good inside and out.
        </p>

        <p className="text-sm text-gray-400 mt-8">
          <strong>Disclaimer:</strong> This article is for informational purposes only and does not constitute medical advice. Always consult with a qualified healthcare professional for diagnosis and treatment.
        </p>
      </article>
    </main>
  );
}
