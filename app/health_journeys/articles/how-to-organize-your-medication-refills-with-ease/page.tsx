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
  title: "How to Organize Your Medication Refills with Ease",
  content: `
        Managing your medication refills effectively can ensure you never miss a dose and stay on top of your health. Here are some essential tips to streamline the process:

        1. **Set Up a Medication Schedule**  
           Establishing a routine for taking and refilling your medication helps avoid last-minute rushes. Consider using a calendar or setting reminders on your phone.  

        2. **Use a Pill Organizer**  
           A pill organizer can help you keep track of daily doses, especially if you take multiple medications. Weekly and monthly organizers are available based on your needs.  

        3. **Sign Up for Automatic Refills**  
           Many pharmacies offer automatic refill services, ensuring you receive your medication on time without the hassle of remembering to order them manually.  

        4. **Keep a Medication List**  
           Maintain an up-to-date list of all your prescriptions, including dosages and refill dates. This is helpful for both you and your healthcare provider.  

        5. **Use Medication Reminder Apps**  
           Various apps can send you alerts when it’s time to take your medication and remind you about refills. This ensures you never run out unexpectedly.  

        6. **Order Refills in Advance**  
           Don’t wait until the last pill to refill your prescription. Ordering refills a few days before running out ensures a smooth transition.  

        7. **Coordinate with Your Doctor and Pharmacy**  
           Regularly check in with your doctor and pharmacy to ensure prescriptions are up to date and refills are processed without delays.  

        8. **Store Medications Properly**  
           Keeping your medication in a designated place, away from heat and moisture, ensures its effectiveness and prevents mix-ups.  

        Following these simple steps can make managing your medication refills stress-free and help you maintain your health with ease.
      `,
  publishedDate: "2025-03-13",
  imageUrl: "/health_journeys/medication-refill-tips.jpg",
  keywords: [
    "medication refill tips",
    "how to organize prescriptions",
    "medication management",
    "pill organizer benefits",
    "automatic prescription refills",
    "pharmacy reminders",
    "medication tracking apps",
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
          Managing your medication refills effectively can ensure you never miss
          a dose and stay on top of your health. Here are some essential tips to
          streamline the process.
        </p>

        <h2 className="text-xl font-semibold text-teal-600 mt-4">
          Set Up a Medication Schedule
        </h2>
        <p className="text-gray-700 mb-4">
          Establishing a routine for taking and refilling your medication helps
          avoid last-minute rushes. Consider using a calendar or setting
          reminders on your phone.
        </p>

        <h2 className="text-xl font-semibold text-teal-600 mt-4">
          Use a Pill Organizer
        </h2>
        <p className="text-gray-700 mb-4">
          A pill organizer can help you keep track of daily doses, especially if
          you take multiple medications. Weekly and monthly organizers are
          available based on your needs.
        </p>

        <h2 className="text-xl font-semibold text-teal-600 mt-4">
          Sign Up for Automatic Refills
        </h2>
        <p className="text-gray-700 mb-4">
          Many pharmacies offer automatic refill services, ensuring you receive
          your medication on time without the hassle of remembering to order
          them manually.
        </p>

        <h2 className="text-xl font-semibold text-teal-600 mt-4">
          Keep a Medication List
        </h2>
        <p className="text-gray-700 mb-4">
          Maintain an up-to-date list of all your prescriptions, including
          dosages and refill dates. This is helpful for both you and your
          healthcare provider.
        </p>

        <h2 className="text-xl font-semibold text-teal-600 mt-4">
          Use Medication Reminder Apps
        </h2>
        <p className="text-gray-700 mb-4">
          Various apps can send you alerts when it’s time to take your
          medication and remind you about refills. This ensures you never run
          out unexpectedly.
        </p>

        <h2 className="text-xl font-semibold text-teal-600 mt-4">
          Order Refills in Advance
        </h2>
        <p className="text-gray-700 mb-4">
          Don’t wait until the last pill to refill your prescription. Ordering
          refills a few days before running out ensures a smooth transition.
        </p>

        <h2 className="text-xl font-semibold text-teal-600 mt-4">
          Coordinate with Your Doctor and Pharmacy
        </h2>
        <p className="text-gray-700 mb-4">
          Regularly check in with your doctor and pharmacy to ensure
          prescriptions are up to date and refills are processed without delays.
        </p>

        <h2 className="text-xl font-semibold text-teal-600 mt-4">
          Store Medications Properly
        </h2>
        <p className="text-gray-700 mb-4">
          Keeping your medication in a designated place, away from heat and
          moisture, ensures its effectiveness and prevents mix-ups.
        </p>

        <h2 className="text-xl font-semibold text-teal-600 mt-4">
          Final Thoughts
        </h2>
        <p className="text-gray-700 mb-4">
          Following these simple steps can make managing your medication refills
          stress-free and help you maintain your health with ease.
        </p>

        <p className="text-gray-700 font-semibold mt-6">
          Do you have any personal tips for staying on top of medication
          refills? Share your thoughts in the comments below!
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
