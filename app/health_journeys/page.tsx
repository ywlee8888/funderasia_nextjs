"use client";

import React, { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar/navbar";

interface BlogPost {
  id: string;
  title: string;
  summary: string;
  publishedDate: string;
  slug: string;
  imageUrl: string;
  keywords: string[];
  metaDescription: string;
}

const samplePosts: BlogPost[] = [
  {
    id: "988",
    title: "Staying Cool and Protected: Managing Heat Internally and Externally for Families",
    summary:
      "Explore effective ways to manage heat both inside and out — from hydration and supplements to sunscreen and skincare — for adults and children across the region.",
    publishedDate: "2025-06-13",
    slug: "managing-heat-internally-and-externally-for-families",
    imageUrl: "/health_journeys/summer-heat-management-guide.png",
    keywords: [
      "heat management tips",
      "staying cool in hot weather",
      "hydration and skincare",
      "heat protection for kids",
      "infant heat safety",
      "sunscreen for families",
      "internal cooling tips",
      "brightening skincare summer",
    ],
    metaDescription:
      "Discover how to stay cool and healthy during hot weather across the region with practical tips on hydration, sun protection, skincare, and heat safety for infants and families.",
  },
  {
    id: "989",
    title:
      "Supplements for Strength Sports: Enhancing Recovery for Spartan Racers and Bodybuilders",
    summary:
      "Learn how essential supplements such as protein, creatine, and BCAAs boost recovery for athletes in strength sports like Spartan races and bodybuilding.",
    publishedDate: "2025-05-03",
    slug: "supplements-for-strength-sports-recovery",
    imageUrl: "/health_journeys/fuel-recover-dominate.jpg",
    keywords: [
      "supplements for strength sports",
      "Spartan race recovery",
      "weightlifting supplements",
      "bodybuilding recovery tips",
      "muscle recovery nutrition",
      "creatine for lifters",
      "BCAAs for athletes",
      "best post workout supplements",
    ],
    metaDescription:
      "Learn how supplements like protein, BCAAs, creatine, and omega-3s help athletes in strength sports — from Spartan racers to bodybuilders — recover faster and train harder.",
  },

  {
    id: "990",
    title:
      "Pickleball Injury Prevention and Recovery: Smart Tips for Every Player",
    summary:
      "Stay injury-free and bounce back faster with essential tips for preventing common pickleball injuries and effective post-game recovery strategies.",
    publishedDate: "2025-04-22",
    slug: "pickleball-injury-prevention-and-recovery-tips",
    imageUrl: "/health_journeys/pickleball-injury-prevention.jpg",
    keywords: [
      "pickleball injury prevention",
      "pickleball recovery tips",
      "supplements for muscle recovery",
      "avoiding pickleball injuries",
      "pickleball warm up exercises",
      "pickleball joint health",
      "best supplements for recovery",
    ],
    metaDescription:
      "Discover how to prevent common pickleball injuries and speed up recovery with expert-approved strategies, from proper warm-ups to key supplements for muscle and joint health.",
  },

  {
    id: "991",
    title:
      "Power Up Your Performance: Essential Supplements for Sports Nutrition",
    summary:
      "From creatine and caffeine to omega-3s and adaptogens, discover the top sports nutrition supplements that support strength, endurance, recovery, and mental focus for anyone aiming to perform at their peak.",
    publishedDate: "2025-04-10",
    slug: "sports-nutrition-supplements",
    imageUrl: "/health_journeys/sports-nutrition-guide.png",
    keywords: [
      "sports nutrition",
      "supplements for endurance",
      "creatine for strength",
      "omega-3 for recovery",
      "natural performance boosters",
      "fitness supplements",
      "BCAAs for recovery",
      "caffeine for focus",
      "adaptogens for stress",
    ],
    metaDescription:
      "Enhance your workouts with the right sports nutrition supplements. Learn how creatine, BCAAs, omega-3s, adaptogens, and other essentials help improve strength, recovery, endurance, and focus—naturally and effectively.",
  },

  {
    id: "992",
    title: "The Power of Nature: Natural Herbal Remedies for Men’s Health",
    summary:
      "Explore the benefits of natural herbal remedies like Tongkat Ali for boosting energy, enhancing testosterone and improving vitality in men, compared to synthetic options.",
    publishedDate: "2025-04-10",
    slug: "the-power-of-nature-herbal-remedies-for-mens-health",
    imageUrl: "/health_journeys/tongkat-ali-men-health.png",
    keywords: [
      "natural remedies for men’s health",
      "Tongkat Ali benefits",
      "boost testosterone naturally",
      "herbal remedies for vitality",
      "natural energy boosters",
      "men’s health supplements",
      "herbs for sexual health",
      "stress reduction herbs for men",
    ],
    metaDescription:
      "Discover the benefits of natural herbal remedies like Tongkat Ali for men’s health. From boosting testosterone to reducing stress and improving vitality, explore how these remedies offer holistic, long-term health support compared to synthetic options.",
  },

  {
    id: "993",
    title:
      "Boosting Brain Power: Essential Supplements for Kids’ Cognitive Development",
    summary:
      "Discover key supplements that support children’s brain development, focus, memory, and learning abilities from Omega-3s to probiotics and beyond.",
    publishedDate: "2025-04-09",
    slug: "boosting-brain-power-supplements-for-kids-cognitive-development",
    imageUrl: "/health_journeys/foundation-of-future-intelligence.png",
    keywords: [
      "supplements for kids brain development",
      "Omega-3 for kids",
      "children's cognitive health",
      "best supplements for kids learning",
      "vitamins for kids focus",
      "natural brain boosters for children",
      "probiotics and cognitive function",
      "brain development supplements for children",
    ],
    metaDescription:
      "Support your child’s brain health with essential supplements like Omega-3s, Vitamin D, B-Vitamins, Iron, Zinc, and Probiotics. Learn how these ingredients help boost memory, focus, learning, and emotional well-being in children.",
  },

  {
    id: "994",
    title:
      "Supporting Healthy Aging with Essential Supplements for Elderly Family Members",
    summary:
      "Discover key supplements and ingredients that support healthy aging in elderly family members, benefiting heart, bone, eye, and cognitive health.",
    publishedDate: "2025-04-08",
    slug: "supporting-healthy-aging-with-essential-supplements-for-elderly-family-members",
    imageUrl: "/health_journeys/supporting-healthy-aging-elderly.jpg",
    keywords: [
      "healthy aging supplements",
      "elderly health support",
      "CoQ10 for elderly",
      "Lutein Lycopene eye health",
      "Calcium Vitamin D3 bone health",
      "Citicoline cognitive function",
      "supplements for elderly vitality",
      "natural supplements for aging adults",
    ],
    metaDescription:
      "Explore essential supplements that can help elderly family members maintain their vitality, including CoQ10, Lutein, Lycopene, Calcium, Vitamin D3, and Citicoline. Learn how these ingredients support heart, bone, eye, and cognitive health for aging adults.",
  },
  {
    id: "995",
    title: "Managing Diabetes Medications Privately for Elderly Family Members",
    summary:
      "Discover strategies to help elderly family members manage diabetes medications discreetly, ensuring their health while respecting privacy.",
    publishedDate: "2025-03-12",
    slug: "managing-diabetes-medications-privately-for-elderly-family-members",
    imageUrl: "/health_journeys/managing-diabetes-elderly.jpg",
    keywords: [
      "managing diabetes medications",
      "diabetes care for elderly",
      "private diabetes management",
      "discreet diabetes medication tips",
      "supporting elderly diabetes patients",
      "diabetes medication reminders",
      "organizing diabetes supplies",
    ],
    metaDescription:
      "Learn how to support elderly family members in managing their diabetes medications privately with practical tips on organization, reminders, and discreet administration.",
  },
  {
    id: "996",
    title: "The Importance of Medication Adherence for Chronic Illness",
    summary:
      "Understand why medication adherence is crucial for managing chronic illnesses and explore effective strategies to improve consistency in treatment.",
    publishedDate: "2025-03-12",
    slug: "importance-of-medication-adherence-for-chronic-illness",
    imageUrl: "/health_journeys/medication-adherence.jpg",
    keywords: [
      "medication adherence",
      "chronic illness management",
      "importance of taking medications",
      "strategies for medication adherence",
      "improving health outcomes",
      "medication reminders",
      "barriers to adherence",
    ],
    metaDescription:
      "Discover the significance of medication adherence for chronic illnesses, the barriers that affect it, and practical strategies to ensure better health outcomes.",
  },
  {
    id: "997",
    title: "How to Organize Your Medication Refills with Ease",
    summary:
      "Stay on top of medication refills effortlessly with practical strategies. Learn to set reminders, use pill organizers, and manage prescriptions efficiently.",
    publishedDate: "2025-03-12",
    slug: "how-to-organize-your-medication-refills-with-ease",
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
    metaDescription:
      "Learn how to organize your medication refills with ease. Discover simple strategies like setting reminders, using pill organizers, and automating prescriptions to stay on track.",
  },
  {
    id: "998",
    title:
      "Why Can’t I Lose Weight? 5 Medical Reasons You Might Be Overlooking",
    summary:
      "Struggling to lose weight despite diet and exercise? Discover 5 hidden medical reasons for weight loss resistance and how to address them effectively.",
    publishedDate: "2025-03-11",
    slug: "why-cant-i-lose-weight-medical-reasons",
    imageUrl: "/health_journeys/why-cant-i-lose-weight.jpg",
    keywords: [
      "why can't I lose weight",
      "medical reasons for weight loss resistance",
      "why am I not losing weight despite diet and exercise",
      "hidden causes of weight gain",
      "hormonal imbalance and weight loss",
    ],
    metaDescription:
      "Learn about 5 surprising medical reasons why you might be struggling to lose weight, including hormonal imbalances, thyroid issues, and more. Expert insights to help you overcome weight loss resistance.",
  },
  {
    id: "999",
    title: "Understanding Erectile Dysfunction: Causes and Solutions",
    summary:
      "Explore the physical and psychological causes of erectile dysfunction and discover effective solutions, from lifestyle changes to medical treatments.",
    publishedDate: "2025-03-12",
    slug: "understanding-erectile-dysfunction-causes-solutions",
    imageUrl: "/health_journeys/understanding-erectile-dysfunction.jpg",
    keywords: [
      "understanding erectile dysfunction",
      "causes of erectile dysfunction",
      "solutions for erectile dysfunction",
      "how to treat erectile dysfunction",
      "psychological causes of erectile dysfunction",
      "lifestyle changes for ED",
      "online consultations for erectile dysfunction",
    ],
    metaDescription:
      "Learn about the common causes of erectile dysfunction and the available treatment options. Discover how lifestyle changes and medical treatments can help overcome ED.",
  },
  {
    id: "1000",
    title: "How to Talk to a Doctor About Sexual Health Discreetly",
    summary:
      "Learn to discuss sexual health concerns with a doctor discreetly and confidently while maintaining privacy and ensuring effective communication.",
    publishedDate: "2025-03-12",
    slug: "how-to-talk-to-a-doctor-about-sexual-health-discreetly",
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
    metaDescription:
      "Learn how to talk to a doctor about sexual health discreetly with confidence. Discover privacy tips, telemedicine options, and strategies for effective communication.",
  },
];

export default function BlogPage() {
  const [isSpecialistConnectOpen, setIsSpecialistConnectOpen] = useState(false);

  const toggleSpecialistConnect = () => {
    setIsSpecialistConnectOpen(!isSpecialistConnectOpen);
  };

  return (
    <main className="flex flex-col h-screen">
      {/* Navbar */}
      <Navbar
        className="absolute top-0 left-0 w-full z-10"
        toggleSpecialistConnect={toggleSpecialistConnect}
      />
      <header className="text-center mb-12 mt-16">
        <h1 className="text-5xl font-extrabold text-teal-600">
          Health Journeys
        </h1>
        <p className="text-lg text-gray-500 mt-2">
          Explore insightful articles on health, wellness and personal growth.
        </p>
      </header>
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4 w-full">
        {samplePosts.map((post) => (
          <Link key={post.id} href={`/health_journeys/articles/${post.slug}`}>
            <article className="cursor-pointer p-6 border rounded-2xl hover:shadow-2xl transition-shadow duration-300">
              <div
                className="h-56 bg-gray-200 rounded-lg mb-4"
                style={{
                  backgroundImage: `url(${post.imageUrl})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></div>
              <h2 className="text-2xl font-semibold mb-3">{post.title}</h2>
              <p className="text-gray-600 mb-3">{post.summary}</p>
              <p className="text-sm text-gray-400">
                Published on {post.publishedDate}
              </p>
            </article>
          </Link>
        ))}
      </section>
    </main>
  );
}
