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
  title: "The Power of Nature: Natural Herbal Remedies for Men’s Health",
  content: "",
  publishedDate: "2025-04-10",
  imageUrl: "/health_journeys/tongkat-ali-men-health.png",
  keywords: [
    "natural remedies for men",
    "Tongkat Ali for men",
    "herbal remedies for vitality",
    "boost testosterone naturally",
    "herbs for energy",
    "men's health herbs",
    "testosterone boosting herbs",
    "natural libido support",
    "reduce stress naturally",
    "improve sexual health naturally",
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
          When it comes to maintaining optimal men’s health, many turn to
          pharmaceutical solutions. While medications like those containing{" "}
          <strong>sildenafil</strong> can offer short-term results, natural
          herbal remedies such as <strong>Tongkat Ali</strong> provide a
          holistic and sustainable approach to enhancing men’s health and
          vitality.
        </p>

        <h2 className="text-xl font-semibold text-teal-600 mt-4">
          1. Holistic Health Benefits of Tongkat Ali
        </h2>
        <p className="text-gray-700 mb-4">
          <strong>Tongkat Ali</strong> offers a broader range of benefits beyond
          just sexual health. This traditional Malaysian herb boosts energy,
          enhances muscle mass, and promotes overall vitality by supporting
          natural testosterone production. Whether you need more energy for
          daily tasks or want to improve your physical performance, Tongkat Ali
          is an excellent choice.
        </p>

        <h2 className="text-xl font-semibold text-teal-600 mt-4">
          2. Long-term Health Support
        </h2>
        <p className="text-gray-700 mb-4">
          Unlike medications containing sildenafil, which are used on a
          short-term basis, Tongkat Ali supports your health over time. By
          gradually boosting testosterone and reducing stress, it helps maintain
          a healthy hormone balance, improving mood, energy, and performance in
          the long run.
        </p>

        <h2 className="text-xl font-semibold text-teal-600 mt-4">
          3. Fewer Side Effects
        </h2>
        <p className="text-gray-700 mb-4">
          While medications like sildenafil can come with side effects such as
          headaches and dizziness, <strong>Tongkat Ali</strong> is known for its
          gentler approach. With fewer risks and a natural boost to your body’s
          processes, it offers a safer, more sustainable option for improving
          men’s health.
        </p>

        <h2 className="text-xl font-semibold text-teal-600 mt-4">
          4. Natural Support for Sexual Health
        </h2>
        <p className="text-gray-700 mb-4">
          <strong>Tongkat Ali</strong> naturally supports libido by improving
          hormonal balance and reducing stress. Unlike sildenafil, which focuses
          on immediate physical results, Tongkat Ali nurtures overall health,
          contributing to lasting sexual wellness and vitality.
        </p>

        <h2 className="text-xl font-semibold text-teal-600 mt-4">
          5. Mental Health Benefits
        </h2>
        <p className="text-gray-700 mb-4">
          Stress and anxiety can affect both physical and mental health.{" "}
          <strong>Tongkat Ali</strong> has been shown to help reduce stress and
          promote mental clarity, making it a powerful tool not just for
          physical vitality, but for mental well-being as well. A balanced mind
          contributes to a more vibrant and healthy life.
        </p>

        <h2 className="text-xl font-semibold text-teal-600 mt-4">
          Final Thoughts
        </h2>
        <p className="text-gray-700 mb-4">
          While pharmaceutical solutions like sildenafil provide quick fixes for
          specific issues, <strong>Tongkat Ali</strong> offers a more
          comprehensive, natural alternative. If you’re looking for a way to
          boost your energy, vitality, and overall health, incorporating this
          herbal remedy into your routine may be the right choice for you.
        </p>

        <p className="text-gray-700 font-semibold mt-6">
          Ready to embrace the natural power of <strong>Tongkat Ali</strong>?
          Share your experiences or questions in the comments below!
        </p>

        <p className="text-sm text-gray-400 mt-8">
          <strong>Disclaimer:</strong> This article is for informational
          purposes only and is not a substitute for professional medical advice.
          Please consult with your healthcare provider before trying any new
          supplements.
        </p>
      </article>
    </main>
  );
}
