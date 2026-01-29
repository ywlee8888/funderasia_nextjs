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
    "Boosting Brain Power: The Role of Supplements in Children's Cognitive Development",
  content: "",
  publishedDate: "2025-04-09",
  imageUrl: "/health_journeys/foundation-of-future-intelligence.png",
  keywords: [
    "supplements for kids",
    "cognitive development in children",
    "kids brain health",
    "omega 3 for children",
    "vitamins for child brain development",
    "brain supplements for kids",
    "children mental development",
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
          Every parent wants their child to grow up healthy, happy, and smart.
          While a balanced diet and active lifestyle are essential, certain
          supplements can support the brain and enhance cognitive development in
          children.
        </p>

        <h2 className="text-xl font-semibold text-teal-600 mt-4">
          1. Omega-3 Fatty Acids
        </h2>
        <p className="text-gray-700 mb-4">
          Omega-3s, especially DHA, play a crucial role in brain development.
          They support memory, focus, and learning. Found in fish oil, these
          essential fatty acids are among the top supplements recommended for
          growing minds.
        </p>

        <h2 className="text-xl font-semibold text-teal-600 mt-4">
          2. Vitamin D
        </h2>
        <p className="text-gray-700 mb-4">
          Known for bone health, Vitamin D also supports brain function.
          Deficiency in children has been linked to cognitive challenges and
          mood issues. A daily dose can help support learning and emotional
          balance.
        </p>

        <h2 className="text-xl font-semibold text-teal-600 mt-4">
          3. B-Vitamins
        </h2>
        <p className="text-gray-700 mb-4">
          B6, B12, and folic acid are vital for producing brain chemicals called
          neurotransmitters. These vitamins improve focus, memory, and mental
          energy, especially during school-age years.
        </p>

        <h2 className="text-xl font-semibold text-teal-600 mt-4">4. Zinc</h2>
        <p className="text-gray-700 mb-4">
          Zinc is essential for brain cell growth and communication. It supports
          memory, problem-solving, and a healthy immune system—making it a
          must-have for kids' overall development.
        </p>

        <h2 className="text-xl font-semibold text-teal-600 mt-4">5. Iron</h2>
        <p className="text-gray-700 mb-4">
          Iron helps deliver oxygen to the brain. Without enough of it, kids may
          feel tired and have trouble concentrating. Supplementing iron can
          enhance attention and cognitive speed.
        </p>

        <h2 className="text-xl font-semibold text-teal-600 mt-4">
          6. Probiotics
        </h2>
        <p className="text-gray-700 mb-4">
          A healthy gut equals a healthy brain. Probiotics support digestion and
          the gut-brain connection. Kids taking probiotics often show improved
          mood, focus, and emotional regulation.
        </p>

        <h2 className="text-xl font-semibold text-teal-600 mt-4">
          7. Ginkgo Biloba
        </h2>
        <p className="text-gray-700 mb-4">
          This ancient herbal remedy may improve blood flow to the brain and
          enhance mental clarity, memory, and focus. While more research is
          needed for kids, it’s a promising supplement for overall cognitive
          wellness.
        </p>

        <h2 className="text-xl font-semibold text-teal-600 mt-4">
          Final Thoughts
        </h2>
        <p className="text-gray-700 mb-4">
          Supplements can be a great way to support your child's learning and
          brain development, especially when paired with good nutrition and
          active play. Always talk to your pediatrician before starting any new
          supplement.
        </p>

        <p className="text-gray-700 font-semibold mt-6">
          Ready to support your child’s brain power? Let us know your favorite
          supplements or brain food ideas in the comments!
        </p>

        <p className="text-sm text-gray-400 mt-8">
          <strong>Disclaimer:</strong> This article is for informational
          purposes only and is not a substitute for professional medical advice.
          Please consult with your child’s healthcare provider before making
          changes to their supplement routine.
        </p>
      </article>
    </main>
  );
}
