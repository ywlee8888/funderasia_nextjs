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
  title: "Why Can’t I Lose Weight? 5 Medical Reasons You Might Be Overlooking",
  content: `
    Struggling to lose weight despite diet and exercise? You’re not alone.
    There are several medical reasons why weight loss might feel impossible.
    
    1. **Hormonal Imbalance**  
       Conditions like PCOS, thyroid disorders, and insulin resistance can slow metabolism.  

    2. **Chronic Stress**  
       Stress elevates cortisol levels, promoting fat storage, especially around the belly.  

    3. **Sleep Deprivation**  
       Poor sleep disrupts hormones regulating appetite, leading to overeating.  

    4. **Medications**  
       Certain drugs (antidepressants, beta-blockers) may cause weight gain.  

    5. **Undiagnosed Conditions**  
       Diabetes or liver dysfunction can affect how your body processes fat.  

    Consult a specialist to identify underlying causes and create a personalized plan.  
  `,
  publishedDate: "2025-03-11",
  imageUrl: "/health_journeys/why-cant-i-lose-weight.jpg",
  keywords: [
    "weight loss",
    "hormonal imbalance",
    "medical reasons for weight gain",
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
          src="/health_journeys/why-cant-i-lose-weight.jpg"
          alt="Why Can't I Lose Weight?"
          className="w-full h-auto object-cover rounded-lg mb-8"
        />
        <h1 className="text-4xl font-extrabold text-teal-600 mb-6">
          Why Can’t I Lose Weight? 5 Medical Reasons You Might Be Overlooking
        </h1>
        <p className="text-lg text-gray-500 mb-8">
          Struggling to lose weight despite maintaining a balanced diet and
          regular exercise routine can be incredibly frustrating. While many
          focus on calorie intake and physical activity, there are often
          underlying medical factors that may be sabotaging your weight loss
          efforts. Understanding these hidden causes is the first step towards
          overcoming weight loss resistance. Let us explore five medical reasons
          why you might not be losing weight.
        </p>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-teal-600 mb-4">
            1. Hormonal Imbalance
          </h2>
          <p className="text-gray-600 mb-4">
            Hormones play a crucial role in regulating your metabolism,
            appetite, and fat storage. An imbalance in hormones such as insulin,
            cortisol, thyroid hormones, or sex hormones can significantly impact
            your ability to shed weight. For example:
          </p>
          <ul className="list-disc pl-6 text-gray-600 mb-4">
            <li>
              <strong>Hypothyroidism</strong> slows down metabolism, leading to
              weight gain or difficulty losing weight.
            </li>
            <li>
              <strong>Insulin resistance</strong> can cause the body to store
              excess fat, particularly around the abdomen.
            </li>
            <li>
              <strong>Elevated cortisol levels</strong> due to chronic stress
              can trigger cravings for high-calorie foods.
            </li>
          </ul>
          <p className="text-gray-600">
            If you suspect a hormonal imbalance, consulting a healthcare
            professional for a blood test can provide clarity and guide
            appropriate treatment.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-teal-600 mb-4">
            2. Sleep Deprivation
          </h2>
          <p className="text-gray-600 mb-4">
            Quality sleep is essential for overall health, including weight
            management. Inadequate sleep affects the hormones that regulate
            hunger — ghrelin and leptin. When you do not get enough sleep:
          </p>
          <ul className="list-disc pl-6 text-gray-600 mb-4">
            <li>
              <strong>Ghrelin levels increase</strong>, making you feel
              hungrier.
            </li>
            <li>
              <strong>Leptin levels decrease</strong>, reducing feelings of
              fullness.
            </li>
          </ul>
          <p className="text-gray-600">
            This imbalance can lead to overeating and make it harder for your
            body to burn calories effectively. Establishing a consistent sleep
            schedule and creating a relaxing bedtime routine can support both
            your sleep quality and weight loss journey.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-teal-600 mb-4">
            3. Chronic Stress
          </h2>
          <p className="text-gray-600 mb-4">
            Living under constant stress prompts your body to produce more
            cortisol. This stress hormone not only increases appetite but also
            encourages fat storage, particularly in the abdominal area.
            Additionally, many people turn to 'comfort foods' high in sugar and
            fat as a coping mechanism.
          </p>
          <p className="text-gray-600">
            Managing stress through mindfulness practices, physical activity, or
            speaking to a therapist can help restore balance and support your
            weight management goals.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-teal-600 mb-4">
            4. Medications
          </h2>
          <p className="text-gray-600 mb-4">
            Certain prescription medications may cause weight gain or make it
            harder to lose weight. These can include:
          </p>
          <ul className="list-disc pl-6 text-gray-600 mb-4">
            <li>
              <strong>Antidepressants</strong> and{" "}
              <strong>antipsychotic drugs</strong>
            </li>
            <li>
              <strong>Steroids</strong> for inflammatory conditions
            </li>
            <li>
              <strong>Beta-blockers</strong> for heart disease or high blood
              pressure
            </li>
          </ul>
          <p className="text-gray-600">
            If you believe your medication is affecting your weight, do not stop
            taking it without consulting your doctor. A healthcare professional
            can assess your treatment plan and discuss possible alternatives or
            strategies to mitigate the side effects.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-teal-600 mb-4">
            5. Underlying Medical Conditions
          </h2>
          <p className="text-gray-600 mb-4">
            Several medical conditions can hinder weight loss, even when you are
            following a healthy lifestyle. These may include:
          </p>
          <ul className="list-disc pl-6 text-gray-600 mb-4">
            <li>
              <strong>Polycystic Ovary Syndrome (PCOS)</strong>, a hormonal
              disorder affecting women
            </li>
            <li>
              <strong>Cushing’s syndrome</strong>, which results in high
              cortisol levels
            </li>
            <li>
              <strong>Insulin resistance or prediabetes</strong>
            </li>
          </ul>
          <p className="text-gray-600">
            If you have unexplained weight gain or struggle to lose weight
            despite making positive lifestyle changes, it may be worth
            discussing these potential conditions with your doctor. Early
            diagnosis and treatment can improve both your health and your
            ability to manage your weight.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-teal-600 mb-4">
            What Can You Do Next?
          </h2>
          <p className="text-gray-600 mb-4">
            If you feel stuck in your weight loss journey, it is important not
            to lose hope. Medical factors may be playing a larger role than you
            realise. Consider the following steps:
          </p>
          <ul className="list-disc pl-6 text-gray-600">
            <li>
              <strong>Speak to a healthcare professional</strong> about your
              concerns and request relevant tests.
            </li>
            <li>
              <strong>Track your symptoms</strong> — beyond just your weight —
              including sleep patterns, stress levels, and appetite changes.
            </li>
            <li>
              <strong>Personalised weight management plans</strong> that address
              underlying medical issues can be more effective than generic diet
              plans.
            </li>
          </ul>
        </section>

        <p className="text-sm text-gray-400 mt-8">
          <strong>Disclaimer:</strong> This article is for informational
          purposes only and does not constitute medical advice. Always consult
          with a qualified healthcare professional for diagnosis and treatment.
        </p>
      </article>
    </main>
  );
}
