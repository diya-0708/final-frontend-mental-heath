"use client";
import { useState, useEffect } from "react";
import Image from 'next/image';
import Link from "next/link"

interface Notice {
  id: number;
  date: string;
  title: string;
  category: string;
  image: string;
  slug: string;
}

const notices: Notice[] = [
  {
    id: 1,
    date: "20.04.2026",
    title: "New Mental Health Assessment Form Now Available for All Students",
    category: "Assessment",
    image: "images/image1.webp",
    slug: "new-mental-health-assessment-form",
  },
  {
    id: 2,
    date: "15.04.2026",
    title: "AI Risk Prediction Model Updated – Improved Accuracy and Speed",
    category: "System Update",
    image: "images/image2.jpg",
    slug: "ai-risk-prediction-model-updated",
  },
  {
    id: 3,
    date: "10.04.2026",
    title: "Mental Health Awareness Week – Activities and Support Sessions",
    category: "Event",
    image: "images/image3.webp",
    slug: "mental-health-awareness-week-2026",
  },
  {
    id: 4,
    date: "05.04.2026",
    title: "RAG-Based Support System Now Providing Personalized Suggestions",
    category: "Feature Update",
    image: "images/image4.webp",
    slug: "rag-support-system-update",
  },
  {
    id: 5,
    date: "01.04.2026",
    title: "Student Well-being Report for March 2026 – Summary Released",
    category: "Report",
    image: "images/image5.jpg",
    slug: "student-wellbeing-report-march-2026",
  },
  {
    id: 6,
    date: "28.03.2026",
    title: "High-Risk Alert Protocol Updated – Faster Response for Students",
    category: "Important",
    image: "images/image6.webp",
    slug: "high-risk-alert-protocol-updated",
  },
  {
    id: 7,
    date: "22.03.2026",
    title: "Counseling Resource Library Expanded with New Mental Health Guides",
    category: "Resources",
    image: "images/image7.jpg",
    slug: "counseling-resource-library-expanded",
  },
  {
    id: 8,
    date: "15.03.2026",
    title: "System Maintenance Notice: Serenica Offline on March 20, 12–2 AM",
    category: "Maintenance",
    image: "images/image8.jpg",
    slug: "system-maintenance-march-20",
  },
];
function useCardsPerView(): number {
  const [cardsPerView, setCardsPerView] = useState(1);

  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      if (w >= 1024) setCardsPerView(4);
      else if (w >= 640) setCardsPerView(2);
      else setCardsPerView(1);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return cardsPerView;
}

export default function Notice() {
  const [startIndex, setStartIndex] = useState(0);
  const cardsPerView = useCardsPerView();
  const maxIndex = Math.max(notices.length - cardsPerView, 0);

  useEffect(() => {
    setStartIndex((prev) => Math.min(prev, maxIndex));
  }, [maxIndex]);

  const handlePrev = () => setStartIndex((prev) => Math.max(prev - 1, 0));
  const handleNext = () => setStartIndex((prev) => Math.min(prev + 1, maxIndex));

  const visibleNotices = notices.slice(startIndex, startIndex + cardsPerView);

  const gridCols =
    cardsPerView === 1
      ? "grid-cols-1"
      : cardsPerView === 2
      ? "grid-cols-2"
      : "grid-cols-4";

  return (
    <section className="bg-brand-white py-12 sm:py-16 px-4 sm:px-8 md:px-12 lg:px-16">

      {/* ── Header ── */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between mb-8 sm:mb-10">

        <h2
          className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase text-gray-900"
          style={{ fontFamily: "Georgia, serif", letterSpacing: "-0.02em" }}
        >
          Latest Updates
        </h2>

        {/* Nav controls */}
        <div className="flex items-center gap-3">

          {/* Prev button */}
          <button
            onTouchEnd={(e) => { e.preventDefault(); handlePrev(); }}
            onClick={handlePrev}
            disabled={startIndex === 0}
            aria-label="Previous"
            className={`w-10 h-10 sm:w-11 sm:h-11 rounded-full flex-shrink-0 flex items-center justify-center border-2 transition-all duration-200
              ${startIndex === 0
                ? "border-gray-200 text-gray-300 cursor-not-allowed"
                : "border-gray-400 text-gray-600 hover:border-gray-900 hover:text-gray-900"
              }`}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>

          {/* Next button */}
          <button
            onTouchEnd={(e) => { e.preventDefault(); handleNext(); }}
            onClick={handleNext}
            disabled={startIndex >= maxIndex}
            aria-label="Next"
            className={`w-10 h-10 sm:w-11 sm:h-11 rounded-full flex-shrink-0 flex items-center justify-center transition-all duration-200
              ${startIndex >= maxIndex
                ? "bg-[#e8927c] cursor-not-allowed"
                : "bg-[#e8927c] hover:bg-black shadow-md"
              }`}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>

        

        </div>
      </div>

      {/* ── Cards ── */}
      <div className={`grid gap-5 sm:gap-6 ${gridCols}`}>
        {visibleNotices.map((notice) => (
          <NoticeCard key={notice.id} notice={notice} />
        ))}
      </div>

     

   {/* Meet All Staff CTA */}
        <div className="text-center mt-10 sm:mt-14">
          <Link
            href="/notices"
            className="inline-flex  font-poppins items-center gap-3 bg-[#378480] text-brand-white text-sm font-bold tracking-widest uppercase px-8 py-4 rounded-full hover:bg-brand-orange transition-all duration-300 group"
          >
            Explore All Updates
            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </Link>
        </div>

    </section>
  );
}


function NoticeCard({ notice }: { notice: Notice }) {
  return (
    <article className="group cursor-pointer flex flex-col">

      {/* Image */}
      <div className="overflow-hidden mb-3 sm:mb-4 w-full aspect-[4/3] bg-gray-100">
        <img
          src={notice.image}
          alt={notice.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
      </div>

      {/* Category */}
      <span className="text-xs font-bold tracking-widest uppercase text-[#e8927c] mb-1">
        {notice.category}
      </span>

      {/* Date */}
      <p
        className="text-xs sm:text-sm text-gray-400 mb-2"
        style={{ fontFamily: "Georgia, serif" }}
      >
        {notice.date}
      </p>

      {/* Title */}
      <h3
        className="text-sm sm:text-base font-semibold text-gray-900 leading-snug group-hover:text-[#378480] transition-colors duration-200 flex-1"
        style={{ fontFamily: "Georgia, serif" }}
      >
        {notice.title}
      </h3>

      {/* Read More */}
             <Link href={`/notices/${notice.slug}`}>
      <div className="mt-3 flex items-center gap-1 text-xs sm:text-sm text-gray-400 group-hover:text-[#378480] transition-colors duration-200">
        <span className="font-medium">Read more</span>
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <path d="M9 18l6-6-6-6" />
        </svg>
      </div>
      </Link>

    </article>



  );
}

  