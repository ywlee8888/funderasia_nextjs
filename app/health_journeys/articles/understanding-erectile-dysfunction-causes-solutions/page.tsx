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
  title:
    "Understanding Erectile Dysfunction: Causes and Solutions | ED Treatment",
  content: `
    "Learn about erectile dysfunction (ED), its causes, and the available solutions. Explore lifestyle changes, medical treatments, and online consultations for ED."
  `,
  publishedDate: "2025-03-12",
  imageUrl: "/health_journeys/understanding-erectile-dysfunction.jpg",
  keywords: [
    "erectile dysfunction",
    "causes of ED",
    "men's health",
    "medical causes of ED",
    "erectile dysfunction",
    "ED causes",
    "ED solutions",
    "treat erectile dysfunction",
    "online ED consultation",
    "testosterone replacement therapy",
    "ED medications",
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
          src="/health_journeys/understanding-erectile-dysfunction.jpg"
          alt="Understanding Erectile Dysfunction"
          className="w-full h-auto object-cover rounded-lg mb-8"
        />
        <h1 className="text-4xl font-extrabold text-teal-600 mb-6">
          Understanding Erectile Dysfunction: Causes and Solutions
        </h1>
        <p className="mb-4">
          Erectile dysfunction (ED) is a common yet often misunderstood
          condition that affects millions of men around the world. It is defined
          as the persistent difficulty in achieving or maintaining an erection
          sufficient for satisfactory sexual performance. While it is more
          prevalent in older men, erectile dysfunction is not an inevitable part
          of ageing, and it can affect men of all ages.
        </p>
        <p className="mb-4">
          In this article, we will explore the causes of erectile dysfunction,
          its impact on physical and mental health, and the available solutions
          to help men regain confidence and improve their sexual wellness.
        </p>

        <h2 className="text-2xl font-bold text-teal-600 mb-4">
          What Causes Erectile Dysfunction?
        </h2>
        <p className="mb-4">
          Understanding the root causes of erectile dysfunction is crucial in
          finding the right treatment. There are several physical and
          psychological factors that can contribute to ED, including:
        </p>

        <h3 className="text-2xl font-bold text-teal-600 mb-4">
          Physical Causes of Erectile Dysfunction
        </h3>
        <ul className="list-disc ml-8 mb-4">
          <li>
            <strong>Cardiovascular disease:</strong> Poor blood flow to the
            penis due to clogged arteries (atherosclerosis) is a leading cause
            of erectile dysfunction.
          </li>
          <li>
            <strong>Diabetes:</strong> Men with diabetes are at a higher risk of
            developing ED due to nerve damage (neuropathy) and impaired blood
            flow.
          </li>
          <li>
            <strong>High blood pressure:</strong> Hypertension can damage blood
            vessels, reducing blood flow to the penis.
          </li>
          <li>
            <strong>Hormonal imbalances:</strong> Low testosterone levels can
            affect libido and make it difficult to achieve an erection.
          </li>
          <li>
            <strong>Obesity:</strong> Being overweight can cause hormonal
            imbalances and negatively impact cardiovascular health.
          </li>
          <li>
            <strong>Certain medications:</strong> Prescription medications for
            high blood pressure, depression, and other health conditions may
            list erectile dysfunction as a side effect.
          </li>
        </ul>

        <h3 className="text-2xl font-bold text-teal-600 mb-4">
          Psychological Causes of Erectile Dysfunction
        </h3>
        <ul className="list-disc ml-8 mb-4">
          <li>
            <strong>Stress and anxiety:</strong> Performance anxiety or stress
            from work, relationships, or other life pressures can interfere with
            sexual arousal.
          </li>
          <li>
            <strong>Depression:</strong> Depression not only reduces sexual
            desire but can also affect the ability to maintain an erection.
          </li>
          <li>
            <strong>Relationship issues:</strong> Problems with communication,
            unresolved conflicts, or lack of emotional connection with a partner
            can contribute to erectile dysfunction.
          </li>
        </ul>

        <h2 className="text-2xl font-bold text-teal-600 mb-4">
          Solutions for Erectile Dysfunction
        </h2>
        <p className="mb-4">
          The good news is that erectile dysfunction is a treatable condition.
          The most effective approach depends on the underlying cause, and
          treatment options can be tailored to suit individual needs.
        </p>

        <h3 className="text-2xl font-bold text-teal-600 mb-4">Lifestyle Changes</h3>
        <ul className="list-disc ml-8 mb-4">
          <li>
            <strong>Healthy diet and exercise:</strong> Maintaining a balanced
            diet and engaging in regular physical activity can improve
            cardiovascular health and boost testosterone levels.
          </li>
          <li>
            <strong>Weight management:</strong> Losing excess weight can enhance
            blood flow and reduce the risk of diabetes and heart disease.
          </li>
          <li>
            <strong>Reducing alcohol consumption and quitting smoking:</strong>{" "}
            Smoking damages blood vessels and reduces blood flow to the penis,
            while excessive alcohol intake can dampen sexual response.
          </li>
        </ul>

        <h3 className="text-2xl font-bold text-teal-600 mb-4">Medical Treatments</h3>
        <ul className="list-disc ml-8 mb-4">
          <li>
            <strong>Oral medications:</strong> Phosphodiesterase type 5 (PDE5)
            inhibitors are commonly prescribed to improve blood flow to the
            penis. Consult a healthcare professional before using these
            medications.
          </li>
          <li>
            <strong>Testosterone replacement therapy:</strong> For men with low
            testosterone levels, hormone therapy may help restore sexual
            function.
          </li>
          <li>
            <strong>Vacuum erection devices:</strong> These devices create a
            vacuum around the penis, drawing blood into the area to produce an
            erection.
          </li>
        </ul>

        <h3 className="text-2xl font-bold text-teal-600 mb-4">
          Counselling and Therapy
        </h3>
        <p className="mb-4">
          If psychological factors such as anxiety or depression are
          contributing to erectile dysfunction, speaking with a therapist or
          counsellor can be highly beneficial.
        </p>

        <h2 className="text-2xl font-bold text-teal-600 mb-4">
          Online Consultations for Erectile Dysfunction
        </h2>
        <p className="mb-4">
          For men seeking privacy and convenience, online consultations offer a
          discreet way to discuss erectile dysfunction with a licensed
          healthcare professional. Virtual consultations allow men to receive
          medical advice, discuss treatment options, and obtain prescriptions
          without the need for in-person visits.
        </p>

        <h2 className="text-2xl font-bold text-teal-600 mb-4">
          When to Seek Professional Help
        </h2>
        <p className="mb-4">
          While occasional difficulty with erections is normal, persistent
          erectile dysfunction should not be ignored. It can be a sign of an
          underlying health condition that requires medical attention. Seeking
          help early can prevent the issue from worsening and improve both
          sexual and overall health.
        </p>

        <h2 className="text-2xl font-bold text-teal-600 mb-4">
          Final Thoughts
        </h2>
        <p className="mb-4">
          Erectile dysfunction is a common and treatable condition. By
          understanding the physical and psychological causes, men can take
          proactive steps to address the issue. Whether through lifestyle
          changes, medical treatments, or online consultations, solutions are
          available to help men regain confidence and enhance their sexual
          wellness.
        </p>

        <p className="mt-8">
          If you are experiencing persistent erectile dysfunction, speak to a
          healthcare professional today and explore the most suitable treatment
          options for you.
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
