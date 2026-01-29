"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar/navbar";
import Head from "next/head";

interface BlogPost {
  title: string;
  content: string;
  publishedDate: string;
  imageUrl: string;
  keywords: string[];
}

const pickleballPost: BlogPost = {
  title: "Pickleball Injury Prevention & Recovery: Play Smart, Recover Strong",
  content: `
<p>Pickleball is fast, fun, and social — but it comes with physical demands. To keep playing your best, here's how to prevent injuries and boost your recovery. 🛡️💪</p>

<h2 class="text-2xl font-semibold text-teal-700 mt-6">Common Pickleball Injuries</h2>
<ul class="list-disc ml-6 space-y-2 mt-2">
  <li>Ankle sprains from quick lateral movements</li>
  <li>Shoulder and elbow strains due to repetitive swings</li>
  <li>Knee pain from abrupt stops and pivots</li>
  <li>Lower back strain from weak core engagement</li>
</ul>

<h2 class="text-2xl font-semibold text-teal-700 mt-6">Injury Prevention Tips</h2>
<ol class="list-decimal ml-6 space-y-2 mt-2">
  <li><strong>Warm Up & Cool Down</strong> — Light cardio and dynamic stretches before playing, and static stretches after, help prevent tightness.</li>
  <li><strong>Strength & Mobility Workouts</strong> — Train your core, stabilizers, and mobility to prevent strain and improve endurance.</li>
  <li><strong>Court-Appropriate Footwear 👟</strong> — Use proper court shoes — avoid running shoes.</li>
  <li><strong>Learn the Right Technique</strong> — Proper footwork and stroke mechanics reduce overuse injuries. A few lessons with a coach can help.</li>
  <li><strong>Hydrate & Rest 💧</strong> — Muscle fatigue increases when dehydrated. Drink plenty of water and allow enough rest between games.</li>
</ol>

<h2 class="text-2xl font-semibold text-teal-700 mt-6">Post-Game Supplements</h2>
<ul class="list-disc ml-6 space-y-2 mt-2">
  <li><strong>Protein Powder</strong> – Rebuilds muscle after games</li>
  <li><strong>Electrolytes</strong> – Replace sodium, magnesium, and potassium lost in sweat</li>
  <li><strong>Collagen + Vitamin C</strong> – Strengthens joints and soft tissue</li>
  <li><strong>Turmeric (Curcumin)</strong> 🌿 – Reduces inflammation naturally</li>
  <li><strong>Omega-3s</strong> – Eases joint pain and boosts recovery</li>
  <li><strong>Magnesium</strong> – Helps muscles relax and improves sleep</li>
</ul>

<h2 class="text-2xl font-semibold text-teal-700 mt-6">Final Thoughts 🎯</h2>
<p>Pickleball is a great way to stay active — just play smart and recover wisely. Injury prevention, proper hydration, and the right supplements can keep you on court longer and stronger.</p>
`,
  publishedDate: "2025-04-22",
  imageUrl: "/health_journeys/pickleball-injury-prevention.jpg",
  keywords: [
    "pickleball injury prevention",
    "pickleball recovery supplements",
    "joint health pickleball",
    "pickleball warm up tips",
    "post-game recovery tips",
    "pickleball supplements",
    "prevent pickleball injuries",
  ],
};

export default function ArticlePage() {
  const [isSpecialistConnectOpen, setIsSpecialistConnectOpen] = useState(false);

  const toggleSpecialistConnect = () => {
    setIsSpecialistConnectOpen(!isSpecialistConnectOpen);
  };

  return (
    <>
      <Head>
        <title>{pickleballPost.title}</title>
        <meta
          name="description"
          content="Learn how to prevent common pickleball injuries and recover faster with supplement tips for muscle and joint health."
        />
        <meta name="keywords" content={pickleballPost.keywords.join(", ")} />
        <meta name="author" content="Your Health & Wellness Team" />
      </Head>

      <main className="flex flex-col min-h-screen">
        <Navbar
          className="absolute top-0 left-0 w-full z-10"
         
        />

        <article className="max-w-4xl mx-auto p-6 pt-24">
          <img
            src={pickleballPost.imageUrl}
            alt={pickleballPost.title}
            className="w-full h-auto object-cover rounded-lg mb-6"
          />

          <h1 className="text-3xl font-bold text-teal-700 mb-4">
            {pickleballPost.title}
          </h1>

          <div
            className="prose prose-teal max-w-none"
            dangerouslySetInnerHTML={{
              __html: pickleballPost.content,
            }}
          />

          <p className="text-sm text-gray-400 mt-8">
            <strong>Published:</strong> {pickleballPost.publishedDate}
          </p>

          <p className="text-sm text-gray-500 mt-2">
            <strong>Disclaimer:</strong> This content is for informational
            purposes only and should not replace professional medical advice.
          </p>
        </article>
      </main>
    </>
  );
}
