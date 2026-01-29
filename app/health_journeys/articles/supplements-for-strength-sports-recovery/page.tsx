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
  title: "Supplements for Strength Sports: Enhancing Recovery for Spartan Racers, Lifters, and Bodybuilders",
  content: "",
  publishedDate: "2025-05-03",
  imageUrl: "/health_journeys/fuel-recover-dominate.jpg",
  keywords: [
    "supplements for strength sports",
    "Spartan race recovery",
    "weightlifting supplements",
    "bodybuilding recovery tips",
    "muscle recovery nutrition",
    "creatine for lifters",
    "BCAAs for athletes",
    "best post workout supplements"
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
          Strength-based sports such as Spartan racing, weightlifting, and bodybuilding place immense stress on the muscles. Effective recovery is just as crucial as the workout itself, and supplements can play a vital role in accelerating muscle repair, reducing soreness, and supporting long-term performance.
        </p>

        <h2 className="text-xl font-semibold text-teal-600 mt-4">
          The Role of Supplements in Strength Sports
        </h2>
        <p className="text-gray-700 mb-4">
          Athletes involved in high-intensity strength sports often require more than just a balanced diet to recover fully. Supplements help bridge nutritional gaps and support muscle regeneration, hormonal balance, and immune health.
        </p>

        <h2 className="text-xl font-semibold text-teal-600 mt-4">
          Protein Powders: The Foundation of Muscle Recovery
        </h2>
        <p className="text-gray-700 mb-4">
          Protein is essential for repairing torn muscle fibers after intense workouts. Whey protein is quickly absorbed, making it ideal post-workout, while casein is slower-digesting and supports overnight recovery. Plant-based options like pea or soy protein are great alternatives for vegans.
        </p>

        <h2 className="text-xl font-semibold text-teal-600 mt-4">
          Creatine Monohydrate: Power and Recovery Combined
        </h2>
        <p className="text-gray-700 mb-4">
          Creatine boosts energy during short bursts of activity, enhances strength, and improves muscular endurance. It also aids post-workout recovery by replenishing ATP stores and supporting muscle volume.
        </p>

        <h2 className="text-xl font-semibold text-teal-600 mt-4">
          BCAAs: Guarding Against Muscle Breakdown
        </h2>
        <p className="text-gray-700 mb-4">
          Branched-chain amino acids (leucine, isoleucine, and valine) help reduce muscle soreness and promote protein synthesis. They’re especially useful for athletes training multiple times a day or under calorie deficits.
        </p>

        <h2 className="text-xl font-semibold text-teal-600 mt-4">
          Omega-3 Fatty Acids: Reducing Inflammation
        </h2>
        <p className="text-gray-700 mb-4">
          Found in fish oil, omega-3s reduce exercise-induced inflammation and improve joint health. They also support heart function, which is essential for endurance and overall athletic health.
        </p>

        <h2 className="text-xl font-semibold text-teal-600 mt-4">
          Magnesium and Zinc: Hormonal Balance and Recovery
        </h2>
        <p className="text-gray-700 mb-4">
          Magnesium helps prevent cramps and improves sleep quality, both crucial for recovery. Zinc supports immune function and testosterone production, aiding recovery and muscle growth.
        </p>

        <h2 className="text-xl font-semibold text-teal-600 mt-4">
          Timing and Dosage Matter
        </h2>
        <p className="text-gray-700 mb-4">
          Post-workout is a critical window for consuming fast-absorbing supplements like whey and BCAAs. Creatine can be taken pre- or post-workout, while omega-3s and minerals are best taken with meals. Follow dosage instructions to avoid side effects.
        </p>

        <h2 className="text-xl font-semibold text-teal-600 mt-4">
          Final Thoughts
        </h2>
        <p className="text-gray-700 mb-4">
          Strength athletes put their bodies through intense physical demands. Supplements, when used correctly, can significantly enhance recovery, reduce fatigue, and support performance gains. Always choose high-quality, third-party tested products and consult a healthcare provider or sports nutritionist for personalized advice.
        </p>

        <p className="text-gray-700 font-semibold mt-6">
          Are you currently using supplements for recovery? Share your experiences and questions in the comments below!
        </p>

        <p className="text-sm text-gray-400 mt-8">
          <strong>Disclaimer:</strong> This article is for informational purposes only and does not constitute medical or nutritional advice. Always consult with a qualified healthcare professional or registered dietitian before starting any supplement regimen.
        </p>
      </article>
    </main>
  );
}
