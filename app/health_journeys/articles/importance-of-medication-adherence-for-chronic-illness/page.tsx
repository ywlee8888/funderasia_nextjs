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
  title: "The Importance of Medication Adherence for Chronic Illness",
  content: `
        Medication adherence is a key factor in managing chronic illnesses such as diabetes, hypertension, and heart disease. Failure to take medications as prescribed can lead to worsening health conditions, hospitalizations, and increased medical costs. Here are some essential strategies to improve medication adherence:
    
        1. **Simplify Medication Regimens**  
           Healthcare providers should prescribe medications with simpler dosing schedules to make adherence easier.  
    
        2. **Use Reminders and Technology**  
           Smartphone apps, pill organizers, and silent alarms can help patients take medications consistently.  
    
        3. **Enhance Patient Education**  
           Clear communication about the benefits of medications and potential side effects can improve adherence rates.  
    
        4. **Address Cost Concerns**  
           Exploring generic medication options and assistance programs can make treatments more affordable.  
    
        5. **Engage Family and Caregivers**  
           Support from loved ones can provide encouragement and accountability.  
    
        6. **Schedule Regular Follow-ups**  
           Ongoing check-ins with healthcare providers ensure treatment plans remain effective and manageable.  
    
        By implementing these strategies, patients can improve their health outcomes and maintain a better quality of life while managing chronic illnesses effectively.  
      `,
  publishedDate: "2025-03-13",
  imageUrl: "/health_journeys/medication-adherence.jpg",
  keywords: [
    "medication adherence",
    "chronic illness management",
    "importance of taking medications",
    "strategies for medication adherence",
    "improving health outcomes",
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
        toggleSpecialistConnect={toggleSpecialistConnect}
      />
      <article className="max-w-4xl mx-auto p-8 pt-20">
        <img
          src="/health_journeys/medication-adherence.jpg"
          alt="The Importance of Medication Adherence for Chronic Illness"
          className="w-full h-auto object-cover rounded-lg mb-8"
        />
        <h1 className="text-2xl font-bold text-teal-600 mb-4">
          The Importance of Medication Adherence for Chronic Illness
        </h1>
        <p className="text-gray-700 mb-4">
          Medication adherence is crucial for managing chronic illnesses
          effectively. Failure to take prescribed medications as directed can
          lead to worsened health outcomes, increased hospitalizations, and
          higher healthcare costs. Understanding the importance of sticking to a
          prescribed regimen can empower patients to take control of their
          health.
        </p>

        <h2 className="text-xl font-semibold text-teal-600 mt-4">
          Why Medication Adherence Matters
        </h2>
        <p className="text-gray-700 mb-4">
          Chronic illnesses such as diabetes, hypertension, and heart disease
          require consistent medication use to prevent complications. Missing
          doses or stopping medication early can cause the condition to
          deteriorate, leading to severe health consequences.
        </p>

        <h2 className="text-xl font-semibold text-teal-600 mt-4">
          Barriers to Medication Adherence
        </h2>
        <p className="text-gray-700 mb-4">
          Several factors contribute to non-adherence, including forgetfulness,
          side effects, cost, and lack of understanding about the importance of
          the medication. Addressing these challenges can significantly improve
          adherence rates.
        </p>

        <h2 className="text-xl font-semibold text-teal-600 mt-4">
          Strategies to Improve Medication Adherence
        </h2>
        <ul className="list-disc pl-5 text-gray-700 mb-4">
          <li>Using pill organizers and setting reminders.</li>
          <li>Educating patients about their medications and their effects.</li>
          <li>Addressing financial barriers through assistance programs.</li>
          <li>
            Enhancing doctor-patient communication to ensure understanding.
          </li>
        </ul>

        <h2 className="text-xl font-semibold text-teal-600 mt-4">
          The Role of Caregivers and Healthcare Providers
        </h2>
        <p className="text-gray-700 mb-4">
          Caregivers and healthcare providers play a vital role in ensuring
          medication adherence. Regular follow-ups, clear instructions, and
          supportive communication can make it easier for patients to stay on
          track with their treatment plans.
        </p>

        <h2 className="text-xl font-semibold text-teal-600 mt-4">
          Final Thoughts
        </h2>
        <p className="text-gray-700 mb-4">
          Staying committed to a medication regimen is essential for managing
          chronic illnesses and maintaining overall well-being. By understanding
          the challenges and implementing effective strategies, patients can
          take proactive steps toward better health.
        </p>

        <p className="text-gray-700 font-semibold mt-6">
          Have you faced challenges with medication adherence? Share your
          experiences and tips in the comments!
        </p>
        
        <p className="text-sm text-gray-400 mt-8">
          <strong>Disclaimer:</strong> This article is for informational
          purposes only and does not constitute medical advice. Always consult
          with a qualified healthcare professional for diagnosis and treatment.
        </p>
      </article>
    </main>
  );
}
