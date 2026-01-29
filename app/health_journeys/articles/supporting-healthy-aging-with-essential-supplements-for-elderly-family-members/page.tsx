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
  title: "Supporting Healthy Aging: Key Supplements for Elderly Care",
  content: `
        As we age, maintaining optimal health becomes crucial. Certain supplements and natural ingredients can help support the elderly in staying healthy, active, and mentally sharp. Here are some key nutrients to consider:

        1. **CoQ10 – A Vital Antioxidant for Energy and Heart Health**  
           Coenzyme Q10 (CoQ10) is essential for energy production in cells and helps boost heart health. Supplementing with CoQ10 can improve energy levels and support cardiovascular health, which is important as we age.

        2. **Lutein & Lycopene – Protecting Eye Health**  
           Lutein and Lycopene are important antioxidants that protect the eyes from age-related issues like macular degeneration. These nutrients help maintain clear vision and protect the retina from damage.

        3. **Calcium + Vitamin D3 + Vitamin K2 – Essential for Bone Health**  
           This powerful combination supports bone density, strengthens bones, and reduces fracture risks. Calcium, Vitamin D3, and Vitamin K2 work together to enhance bone health and overall mobility.

        4. **Citicoline – Supporting Cognitive Function**  
           Citicoline supports brain health and cognitive function by enhancing memory, focus, and mental clarity. It is particularly useful for maintaining cognitive abilities and preventing mental decline in older adults.

        For more details on how these nutrients can support healthy aging, visit [Vitalis Asia](https://www.vitalis.asia) today and explore our range of supplements designed for elderly care!
      `,
  publishedDate: "2025-03-13",
  imageUrl: "/health_journeys/supporting-healthy-aging-elderly.jpg",
  keywords: [
    "healthy aging supplements",
    "CoQ10 benefits",
    "Lutein Lycopene eye health",
    "bone health supplements",
    "Calcium Vitamin D3 Vitamin K2",
    "citicoline cognitive function",
    "elderly health supplements",
    "nutrients for aging",
  ],
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
          As we age, maintaining optimal health becomes crucial. Certain
          supplements and natural ingredients can help support the elderly in
          staying healthy, active, and mentally sharp. Here's a look at some key
          nutrients to consider for healthy aging.
        </p>

        <h2 className="text-xl font-semibold text-teal-600 mt-4">
          CoQ10 – A Vital Antioxidant for Energy and Heart Health
        </h2>
        <p className="text-gray-700 mb-4">
          Coenzyme Q10 (CoQ10) is essential for energy production in cells and
          helps support cardiovascular health. As we age, our natural CoQ10 levels
          decline, and supplementing with it can boost energy and help maintain
          heart health.
        </p>

        <h2 className="text-xl font-semibold text-teal-600 mt-4">
          Lutein & Lycopene – Protecting Eye Health
        </h2>
        <p className="text-gray-700 mb-4">
          Lutein and Lycopene are two key antioxidants that protect the eyes from
          age-related vision issues, such as macular degeneration and cataracts.
          These nutrients help maintain healthy vision and protect the retina from
          harmful light exposure.
        </p>

        <h2 className="text-xl font-semibold text-teal-600 mt-4">
          Calcium + Vitamin D3 + Vitamin K2 – Essential for Bone Health
        </h2>
        <p className="text-gray-700 mb-4">
          This combination of nutrients is essential for maintaining bone strength.
          Calcium supports bone density, Vitamin D3 enhances calcium absorption,
          and Vitamin K2 ensures calcium is properly deposited in bones. Together,
          they reduce fracture risks and support overall bone health.
        </p>

        <h2 className="text-xl font-semibold text-teal-600 mt-4">
          Citicoline – Supporting Cognitive Function
        </h2>
        <p className="text-gray-700 mb-4">
          Citicoline helps support cognitive function by enhancing memory, focus,
          and mental clarity. This ingredient is especially useful for preventing
          cognitive decline in older adults and maintaining mental sharpness.
        </p>

        <h2 className="text-xl font-semibold text-teal-600 mt-4">
          Conclusion: Supporting Elderly Health with Essential Nutrients
        </h2>
        <p className="text-gray-700 mb-4">
          Incorporating these supplements into your daily routine can significantly
          benefit the elderly by supporting heart health, cognitive function,
          bone strength, and eye health. Always consult with a healthcare
          professional before adding new supplements to ensure they’re right for
          individual needs.
        </p>

        <p className="text-gray-700 font-semibold mt-6">
          Explore more about elderly care supplements and their benefits at{" "}
          <a
            href="https://www.vitalis.asia"
            className="text-teal-600 hover:underline"
          >
            Vitalis
          </a>.
        </p>

        <p className="text-sm text-gray-400 mt-8">
          <strong>Disclaimer:</strong> This article is for informational purposes
          only and does not constitute medical advice. Always consult with a
          qualified healthcare professional for diagnosis and treatment.
        </p>
      </article>
    </main>
  );
}
