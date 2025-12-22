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
  title: "Power Up Your Performance: A Guide to Essential Supplements for Sports Nutrition",
  content: "",
  publishedDate: "2025-04-09",
  imageUrl: "/health_journeys/sports-nutrition-guide.png",
  keywords: [
    "sports nutrition supplements",
    "performance enhancers",
    "creatine for athletes",
    "recovery supplements",
    "omega 3 fitness",
    "sports endurance supplements",
    "adaptogens for training"
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
          In the world of sports and fitness, training hard and eating clean are only part of the equation.
          To truly push boundaries—whether you’re aiming to lift heavier, run faster, or recover quicker—your body
          needs optimal support. That’s where sports nutrition supplements come in.
        </p>

        <p className="text-gray-700 mb-4">
          Backed by science and used by athletes worldwide, these supplements can help fuel your performance, 
          enhance recovery, and support overall well-being. Let’s explore the most effective options across strength, 
          endurance, recovery, and focus.
        </p>

        <h2 className="text-xl font-semibold text-teal-600 mt-4">
          💪 Performance and Strength
        </h2>
        <p className="text-gray-700 mb-4">
          <strong>Creatine Monohydrate</strong> is a go-to for explosive sports. It enhances energy production in muscles 
          during high-intensity workouts and supports strength and lean muscle growth.
        </p>
        <p className="text-gray-700 mb-4">
          <strong>Beta-Alanine</strong> buffers lactic acid buildup, reducing fatigue so you can push harder for longer—especially 
          in sports with repeated bursts of activity.
        </p>
        <p className="text-gray-700 mb-4">
          <strong>Caffeine</strong> boosts alertness, reduces perceived effort, and increases endurance, making it a staple 
          for pre-workout energy.
        </p>

        <h2 className="text-xl font-semibold text-teal-600 mt-4">
          🏃‍♂️ Energy and Endurance
        </h2>
        <p className="text-gray-700 mb-4">
          <strong>Electrolytes</strong> like sodium, potassium, and magnesium are essential for hydration and muscle function, 
          especially during long training sessions.
        </p>
        <p className="text-gray-700 mb-4">
          <strong>Carbohydrate powders and gels</strong> offer fast-digesting energy and are vital for endurance events like 
          marathons or cycling.
        </p>
        <p className="text-gray-700 mb-4">
          <strong>Beetroot juice</strong> improves oxygen efficiency and blood flow, helping muscles perform better with 
          less fatigue.
        </p>

        <h2 className="text-xl font-semibold text-teal-600 mt-4">
          🛠️ Recovery and Muscle Growth
        </h2>
        <p className="text-gray-700 mb-4">
          <strong>Protein powders</strong> (whey or plant-based) provide building blocks for muscle repair and growth. 
          Whey is fast-absorbing and ideal post-workout.
        </p>
        <p className="text-gray-700 mb-4">
          <strong>BCAAs</strong> (branched-chain amino acids) help reduce soreness and preserve lean muscle during 
          intense or calorie-restricted training.
        </p>
        <p className="text-gray-700 mb-4">
          <strong>L-glutamine</strong> supports immune health and muscle recovery, especially useful during high-intensity phases.
        </p>
        <p className="text-gray-700 mb-4">
          <strong>Omega-3 fatty acids</strong> reduce inflammation and support joint and heart health, great for athletes dealing 
          with frequent soreness.
        </p>

        <h2 className="text-xl font-semibold text-teal-600 mt-4">
          💤 Rest and Recovery
        </h2>
        <p className="text-gray-700 mb-4">
          <strong>Magnesium</strong> promotes muscle relaxation, better sleep, and energy production—particularly important 
          for athletes with high sweat loss.
        </p>
        <p className="text-gray-700 mb-4">
          <strong>ZMA</strong> (zinc, magnesium, B6) supports hormone balance and enhances sleep quality, making it a favorite 
          among heavy-training athletes.
        </p>

        <h2 className="text-xl font-semibold text-teal-600 mt-4">
          🧠 Focus and Mental Edge
        </h2>
        <p className="text-gray-700 mb-4">
          <strong>L-theanine + caffeine</strong> delivers calm, focused energy—perfect for athletes seeking mental clarity 
          without the crash.
        </p>
        <p className="text-gray-700 mb-4">
          <strong>Adaptogens</strong> like ashwagandha and rhodiola help manage stress, support stamina, and boost focus during 
          tough training cycles.
        </p>

        <h2 className="text-xl font-semibold text-teal-600 mt-4">
          Final Thoughts
        </h2>
        <p className="text-gray-700 mb-4">
          Supplements can give you a competitive edge, but only when combined with solid training, good nutrition, and recovery. 
          Not every athlete needs every supplement—consult a healthcare provider or sports nutritionist to tailor your stack.
        </p>

        <p className="text-gray-700 font-semibold mt-6">
          Which supplements have helped you level up your performance? Share your favorites in the comments!
        </p>

        <p className="text-sm text-gray-400 mt-8">
          <strong>Disclaimer:</strong> This article is for informational purposes only and does not constitute medical advice. 
          Always consult a qualified professional before beginning any supplement routine.
        </p>
      </article>
    </main>
  );
}
