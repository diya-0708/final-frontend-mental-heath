"use client";
import Link from 'next/link'


import { useState } from "react";

interface BlogPost {
  id: number;
  tag: string;
  title: string;
  body: string;
  image: string;
  author: string;
  date: string;
}


const blogPosts: BlogPost[] = [
  {
    id: 1,
    tag: "Mental Health",
    title: "Understanding Early Warning Signs of Student Mental Health Issues",
    body: "Early detection of mental health problems among students can significantly change their academic and personal outcomes. Research consistently shows that students who receive timely support during early stages of stress or anxiety recover faster and perform better academically. Recognizing warning signs before they escalate is the first step toward meaningful intervention and lasting well-being.",
    image: "images/blog1.png",
    author: "Dr. Sunita Sharma",
    date: "18.04.2026",
  },
  {
    id: 2,
    tag: "AI & Technology",
    title: "How AI Is Transforming Mental Health Support for Students",
    body: "Artificial intelligence is revolutionizing how mental health support is delivered to students. AI-powered systems can analyze student responses, detect risk patterns, and provide personalized suggestions in real time. Tools like Serenica combine machine learning with retrieval-augmented generation to ensure students receive accurate, timely, and evidence-based mental health guidance without requiring physical presence.",
    image: "images/blog2.webp",
    author: "Mr. Rajesh Thapa",
    date: "12.04.2026",
  },
  {
    id: 3,
    tag: "Stress & Anxiety",
    title: "Academic Pressure and Its Effects on Student Mental Well-being",
    body: "Academic pressure is one of the leading causes of stress, anxiety, and depression among college and university students. Deadlines, examinations, family expectations, and financial concerns collectively contribute to declining mental health. Understanding the relationship between academic demands and psychological well-being is essential for designing support systems that address the root causes of student distress effectively.",
    image: "images/blog3.jpg",
    author: "Ms. Priya Adhikari",
    date: "05.04.2026",
  },
  {
    id: 4,
    tag: "Risk Assessment",
    title: "What Does Low, Medium, and High Mental Health Risk Really Mean?",
    body: "Risk classification in mental health systems helps prioritize support for students based on the severity of their condition. A low-risk classification suggests mild stress with manageable coping strategies. Medium risk indicates developing symptoms that require attention and guided support. High risk signals urgent need for professional intervention. Understanding these levels empowers students to take the right action at the right time.",
    image: "images/blog4.webp",
    author: "Mrs. Kamala Poudel",
    date: "28.03.2026",
  },
  {
    id: 5,
    tag: "Support & Recovery",
    title: "Building Healthy Coping Habits as a Student in Nepal",
    body: "Developing healthy coping strategies is crucial for students navigating academic and personal challenges. Simple daily habits such as mindfulness, regular sleep schedules, physical activity, and social connection can significantly reduce mental health risk. In Nepal, where mental health awareness is still growing, tools like Serenica play a vital role in guiding students toward positive and sustainable well-being practices.",
    image: "images/blog5.jpg",
    author: "Mr. Bikash Karki",
    date: "20.03.2026",
  },
];

const TAG_COLORS: Record<string, string> = {
  "Mental Health": "bg-rose-100 text-rose-700",
  "AI & Technology": "bg-purple-100 text-purple-700",
  "Stress & Anxiety": "bg-yellow-100 text-yellow-700",
  "Risk Assessment": "bg-blue-100 text-blue-700",
  "Support & Recovery": "bg-green-100 text-green-700",
};

export default function BlogPosts() {
  const [activeId, setActiveId] = useState<number>(1);
  const activePost = blogPosts.find((p) => p.id === activeId) ?? blogPosts[0];

  return (
    <section  id="services" className="bg-brand-light  py-14 sm:py-20 px-4 sm:px-8 md:px-12 lg:px-16 font-serif">

      {/* ── Section Label ── */}
      <p className="text-xs font-bold tracking-[0.25em] uppercase text-[#e8927c] mb-6 font-sans">
        Services Blog
      </p>

      {/* ── Main Layout ── */}
      <div className="flex flex-col lg:flex-row gap-10 lg:gap-14">

        {/* ── LEFT: Big headline + body text in two columns ── */}
        <div className="lg:w-[55%] flex flex-col justify-between">

          {/* Big Pull Quote Headline */}
          <h2
            className="text-2xl sm:text-3xl md:text-4xl xl:text-[2.6rem] font-black leading-tight text-gray-900 mb-6 lg:mb-8"
            style={{ letterSpacing: "-0.02em" }}
          >
            {activePost.title}
          </h2>


          {/* Two-column body text — like the magazine layout */}
          <div className="flex flex-col sm:flex-row gap-5 sm:gap-8 text-sm sm:text-[0.875rem]  font-tempus leading-relaxed text-gray-600 font-sans">

            {/* Column 1: Tag + first half */}
            <div className="flex-1 font-serif">
              <span
                className={`inline-block text-xs font-tempus font-bold tracking-widest font-georgia uppercase px-2 py-0.5 rounded mb-3 ${
                  TAG_COLORS[activePost.tag] ??"bg-gray-100 text-gray-600"
                }`}
              >
                {activePost.tag}
              </span>
              <p>{activePost.body.slice(0, Math.ceil(activePost.body.length / 2))}</p>
            </div>

            {/* Column 2: second half + author */}
            <div className="flex-1 flex flex-col  justify-between gap-4 font-serif">
              <p>{activePost.body.slice(Math.ceil(activePost.body.length / 2))}</p>

              {/* Author & Date */}
              <div className="mt-4 pt-4 border-t border-gray-300">
                <p className="text-xs font-bold uppercase tracking-widest text-gray-400 font-georgia">Written by</p>
                <p className="text-sm font-semibold text-gray-800 mt-0.5 font-tempus">{activePost.author}</p>
                <p className="text-xs text-gray-400 font-sans">{activePost.date}</p>
              </div>
            </div>

          </div>


          {/* Read Full Article CTA */}
          <div className="mt-8">
                        <Link href='/blog'>
            <button className="inline-flex items-center gap-2 bg-[#378480] hover:bg-text-brand-gold text-brand-white text-sm font-semibold px-5 py-2.5 transition-colors duration-200 font-sans">
              Read Full Article
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
              </Link>
          </div>
        </div>



        {/* ── RIGHT: Stacked image thumbnails ── */}
        <div className="lg:w-[45%] flex flex-col gap-3">
          {blogPosts.map((post) => (
            <button
              key={post.id}
              onClick={() => setActiveId(post.id)}
              className={`flex gap-3 items-start text-left transition-all duration-200 p-2 rounded-sm group
                ${activeId === post.id
                  ? "bg-white shadow-md"
                  : "hover:bg-white/60"
                }`}
            >
              {/* Thumbnail */}
              <div
                className={`flex-shrink-0 overflow-hidden transition-all duration-300
                  ${activeId === post.id
                    ? "w-24 h-20 sm:w-28 sm:h-24"
                    : "w-20 h-16 sm:w-24 sm:h-20"
                  }`}
              >
                <img
                  src={post.image}
                  alt={post.title}
                  className={`w-full h-full object-cover transition-all duration-500
                    ${activeId === post.id ? "grayscale-0" : "grayscale group-hover:grayscale-0"}`}
                  loading="lazy"
                />
              </div>

              {/* Meta */}
              <div className="flex-1 pt-1">
                <span
                  className={`text-[10px] font-bold uppercase tracking-widest font-tempus
                    ${activeId === post.id ? "text-[#e8927c]" : "text-gray-400"}`}
                >
                  {post.tag}
                </span>
                <p
                  className={`text-xs sm:text-sm font-semibold font-tempus leading-snug mt-0.5 font-sans transition-colors duration-200
                    ${activeId === post.id ? "text-gray-900" : "text-gray-500 group-hover:text-gray-800"}`}
                >
                  {post.title}
                </p>
                <p className="text-[10px] text-gray-400 mt-1 font-sans">{post.date}</p>
              </div>

              {/* Active indicator bar */}
              <div
                className={`w-0.5 self-stretch rounded-full transition-all duration-300 flex-shrink-0
                  ${activeId === post.id ? "bg-[#e8927c]" : "bg-transparent"}`}
              />
            </button>
          ))}
        </div>


      </div>
    </section>
  );
}
