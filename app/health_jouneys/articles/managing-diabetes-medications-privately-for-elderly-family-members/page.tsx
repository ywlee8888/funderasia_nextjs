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
  title: "Managing Diabetes Medications Privately for Elderly Family Members",
  content: `
      Helping an elderly family member manage diabetes medications can be challenging, especially when they prefer to keep their health matters private. Here are some strategies to support their medication routine while maintaining discretion.
  
      1. **Use a Simple and Organized Medication System**  
         A labeled pill organizer helps them take the right dose at the right time without hassle.  
  
      2. **Set Gentle and Private Medication Reminders**  
         Silent alarms or phone reminders can help without drawing public attention.  
  
      3. **Choose Convenient Medication Forms**  
         Long-acting medications or pre-filled insulin pens can simplify the process.  
  
      4. **Ensure Privacy in Social Situations**  
         Encourage taking medications before events or in a discreet location.  
  
      5. **Keep Diabetes Supplies Organized and Discreet**  
         A compact, stylish pouch can store essentials while blending in.  
  
      6. **Involve a Trusted Support System**  
         A close caregiver or family member should be aware of their routine for emergencies.  
  
      7. **Use Discreet Blood Sugar Monitoring Methods**  
         Continuous glucose monitors (CGMs) can reduce the need for visible testing.  
  
      8. **Encourage a Supportive Environment**  
         Online communities and family discussions can help them feel supported.  
  
      Balancing medical needs with privacy helps elderly family members manage diabetes with dignity and independence.  
    `,
  publishedDate: "2025-03-11",
  imageUrl: "/health_journeys/managing-diabetes-elderly.jpg",
  keywords: [
    "diabetes management",
    "elderly care",
    "private medication management",
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
          src="/health_journeys/managing-diabetes-elderly.jpg"
          alt="Managing Diabetes Medications Privately for Elderly Family Members"
          className="w-full h-auto object-cover rounded-lg mb-8"
        />
        <h1 className="text-2xl font-bold text-teal-600 mb-4">
          Managing Diabetes Medications Privately for Elderly Family Members
        </h1>
        <p className="text-gray-700 mb-4">
          Caring for an elderly family member with diabetes requires a
          thoughtful approach to ensure they receive the necessary medications
          while respecting their privacy. Many seniors may prefer to keep their
          health matters discreet, and with the right strategies, you can help
          them manage their diabetes effectively without drawing unwanted
          attention.
        </p>

        <h2 className="text-xl font-semibold text-teal-600 mt-4">
          1. Use a Simple and Organized Medication System
        </h2>
        <p className="text-gray-700 mb-4">
          Opt for an easy-to-use pill organizer that simplifies medication
          schedules. Weekly or daily organizers with labeled compartments help
          elderly individuals take their doses correctly while maintaining
          discretion.
        </p>

        <h2 className="text-xl font-semibold text-teal-600 mt-4">
          2. Set Gentle and Private Medication Reminders
        </h2>
        <p className="text-gray-700 mb-4">
          Use silent alarms, smartwatch notifications, or discreet phone
          reminders to help them take their medication on time without public
          interruptions. Caregivers can also set up reminder calls or messages
          if needed.
        </p>

        <h2 className="text-xl font-semibold text-teal-600 mt-4">
          3. Choose Convenient Medication Forms
        </h2>
        <p className="text-gray-700 mb-4">
          Speak with their doctor or pharmacist about long-acting medications,
          pre-filled insulin pens, or other convenient forms that reduce the
          need for frequent administration. This helps minimize disruptions and
          makes it easier for seniors to manage their condition privately.
        </p>

        <h2 className="text-xl font-semibold text-teal-600 mt-4">
          4. Ensure Privacy in Social Situations
        </h2>
        <p className="text-gray-700 mb-4">
          When attending family gatherings or public events, assist them in
          planning medication times to avoid the need for public administration.
          If necessary, find a quiet space where they can take their medication
          comfortably.
        </p>

        <h2 className="text-xl font-semibold text-teal-600 mt-4">
          5. Keep Diabetes Supplies Organized and Discreet
        </h2>
        <p className="text-gray-700 mb-4">
          Store insulin pens, glucose meters, and other supplies in a small,
          stylish pouch that blends in with personal belongings. This makes it
          easier for elderly family members to access their medication
          privately.
        </p>

        <h2 className="text-xl font-semibold text-teal-600 mt-4">
          6. Involve a Trusted Support System
        </h2>
        <p className="text-gray-700 mb-4">
          While privacy is important, it’s also crucial to ensure that a close
          family member or caregiver is aware of their medication routine. This
          can provide peace of mind in case of an emergency while still
          respecting their need for discretion.
        </p>

        <h2 className="text-xl font-semibold text-teal-600 mt-4">
          7. Use Discreet Blood Sugar Monitoring Methods
        </h2>
        <p className="text-gray-700 mb-4">
          Consider using continuous glucose monitors (CGMs) or compact blood
          sugar testing kits that are easy to use and less noticeable in public
          settings. Many modern CGMs connect to smartphones, reducing the need
          for visible testing.
        </p>

        <h2 className="text-xl font-semibold text-teal-600 mt-4">
          8. Encourage a Supportive Environment
        </h2>
        <p className="text-gray-700 mb-4">
          Providing elderly family members with access to online or in-person
          support groups can help them feel more in control of their condition
          while maintaining privacy. Encouraging open but respectful discussions
          within the family can also make diabetes management easier.
        </p>

        <h2 className="text-xl font-semibold text-teal-600 mt-4">
          Final Thoughts
        </h2>
        <p className="text-gray-700 mb-4">
          Helping elderly family members manage diabetes privately requires
          balancing their medical needs with their personal comfort. By
          implementing these thoughtful strategies, you can support their health
          while allowing them to maintain their dignity and independence.
        </p>

        <p className="text-gray-700 font-semibold mt-6">
          Do you have any experiences or tips for managing diabetes medications
          privately for elderly loved ones? Share your thoughts in the comments!
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
