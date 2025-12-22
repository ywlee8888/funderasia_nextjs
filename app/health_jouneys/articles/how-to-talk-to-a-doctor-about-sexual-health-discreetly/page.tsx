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
  title: "How to Talk to a Doctor About Sexual Health Discreetly",
  content: `
        Discussing sexual health with a doctor can feel intimidating, but it is essential for your well-being. Here’s how you can have a discreet and comfortable conversation:

        1. **Choose the Right Doctor**  
           Finding a doctor you trust is crucial. Look for professionals who specialize in sexual health or who have a reputation for being understanding and non-judgmental.  

        2. **Use Telemedicine for Privacy**  
           Many healthcare providers offer virtual consultations, allowing you to discuss sensitive topics from the comfort of your home.  

        3. **Prepare Your Questions in Advance**  
           Writing down your concerns and questions ensures you don’t forget important details during your appointment.  

        4. **Use Medical Terminology When Necessary**  
           If you’re uncomfortable using explicit terms, medical language can help keep the conversation professional and clear.  

        5. **Ask About Confidentiality Policies**  
           Doctors are bound by confidentiality agreements, so understanding your privacy rights can help ease concerns.  

        6. **Consider Bringing a Trusted Companion**  
           If you’re anxious, having a close friend or partner accompany you can provide emotional support.  

        7. **Be Honest About Your Symptoms and Concerns**  
           Providing accurate information helps the doctor give the best possible advice and treatment.  

        Taking charge of your sexual health ensures better overall well-being. Don’t hesitate to seek professional advice when needed.
      `,
  publishedDate: "2025-03-13",
  imageUrl: "/health_journeys/talk-to-doctor-discreetly.jpg",
  keywords: [
    "talk to doctor about sexual health",
    "discreet sexual health consultation",
    "confidential medical advice",
    "sexual health discussion tips",
    "private healthcare consultation",
    "telemedicine for sexual health",
    "doctor-patient confidentiality",
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
          src={samplePost.imageUrl}
          alt={samplePost.title}
          className="w-full h-auto object-cover rounded-lg mb-8"
        />
        <h1 className="text-2xl font-bold text-teal-600 mb-4">
          {samplePost.title}
        </h1>
        <p className="text-gray-700 mb-4">
          Discussing sexual health with a doctor can feel intimidating, but it
          is essential for your well-being. Here’s how you can have a discreet
          and comfortable conversation.
        </p>

        <h2 className="text-xl font-semibold text-teal-600 mt-4">
          Choose the Right Doctor
        </h2>
        <p className="text-gray-700 mb-4">
          Finding a doctor you trust is crucial. Look for professionals who
          specialize in sexual health or who have a reputation for being
          understanding and non-judgmental.
        </p>

        <h2 className="text-xl font-semibold text-teal-600 mt-4">
          Use Telemedicine for Privacy
        </h2>
        <p className="text-gray-700 mb-4">
          Many healthcare providers offer virtual consultations, allowing you to
          discuss sensitive topics from the comfort of your home.
        </p>

        <h2 className="text-xl font-semibold text-teal-600 mt-4">
          Prepare Your Questions in Advance
        </h2>
        <p className="text-gray-700 mb-4">
          Writing down your concerns and questions ensures you don’t forget
          important details during your appointment.
        </p>

        <h2 className="text-xl font-semibold text-teal-600 mt-4">
          Use Medical Terminology When Necessary
        </h2>
        <p className="text-gray-700 mb-4">
          If you’re uncomfortable using explicit terms, medical language can
          help keep the conversation professional and clear.
        </p>

        <h2 className="text-xl font-semibold text-teal-600 mt-4">
          Ask About Confidentiality Policies
        </h2>
        <p className="text-gray-700 mb-4">
          Doctors are bound by confidentiality agreements, so understanding your
          privacy rights can help ease concerns.
        </p>

        <h2 className="text-xl font-semibold text-teal-600 mt-4">
          Consider Bringing a Trusted Companion
        </h2>
        <p className="text-gray-700 mb-4">
          If you’re anxious, having a close friend or partner accompany you can
          provide emotional support.
        </p>

        <h2 className="text-xl font-semibold text-teal-600 mt-4">
          Be Honest About Your Symptoms and Concerns
        </h2>
        <p className="text-gray-700 mb-4">
          Providing accurate information helps the doctor give the best possible
          advice and treatment.
        </p>

        <h2 className="text-xl font-semibold text-teal-600 mt-4">
          Final Thoughts
        </h2>
        <p className="text-gray-700 mb-4">
          Taking charge of your sexual health ensures better overall well-being.
          Don’t hesitate to seek professional advice when needed.
        </p>

        <p className="text-gray-700 font-semibold mt-6">
          Have you had experiences discussing sexual health with a doctor? Share
          your thoughts and questions in the comments below!
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
