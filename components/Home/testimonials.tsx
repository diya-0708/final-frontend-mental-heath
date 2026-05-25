"use client";

import { useState, useEffect, useRef } from "react";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  quote: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Aarav Sharma",
    role: "Student, BBA 2nd Year",
    quote:
      "Serenica helped me recognize my stress patterns early. The risk assessment was simple and the suggestions I received were genuinely helpful for my daily routine.",
    image: "images/image5.jpg",
  },
  {
    id: 2,
    name: "Priya Thapa",
    role: "Student, BSc 3rd Year",
    quote:
      "I was going through a tough time and had no idea where to turn. Serenica identified my risk level and guided me toward the right resources at the right time.",
    image: "images/image6.webp",
  },
  {
    id: 3,
    name: "Rohan Karki",
    role: "Student, BCA 1st Year",
    quote:
      "The platform is very easy to use. I filled out the form in minutes and received personalized mental health tips that actually matched what I was going through.",
    image: "images/image7.jpg",
  },
  {
    id: 4,
    name: "Sita Gurung",
    role: "Student, BBS Final Year",
    quote:
      "What I love most about Serenica is that it feels safe and non-judgmental. It gave me the courage to acknowledge my mental health and seek support early.",
    image: "images/image8.jpg",
  },
  {
    id: 5,
    name: "Bikash Poudel",
    role: "Student, BE Computer",
    quote:
      "As an engineering student under constant pressure, Serenica became my go-to tool. The AI suggestions were surprisingly accurate and the interface is very calming.",
    image: "images/image5.webp",
  },
];


export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const visibleCount = 3;
  const totalDots = testimonials.length;
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const getVisibleTestimonials = () => {
    const items = [];
    for (let i = 0; i < visibleCount; i++) {
      items.push(testimonials[(currentIndex + i) % testimonials.length]);
    }
    return items;
  };

  const goTo = (index: number) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex(index % testimonials.length);
    setTimeout(() => setIsAnimating(false), 400);
  };

  const handlePrev = () => {
    goTo((currentIndex - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    goTo((currentIndex + 1) % testimonials.length);
  };

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  const resetInterval = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
  };

  return (
    <section
      className="relative w-full overflow-hidden py-16 px-6 "
    >
      {/* Background overlay texture */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
        }}
      />

      {/* Quote icon top-left */}
      <div className="absolute top-6 left-8">
        <div
          className="w-16 h-16 rounded-full flex items-center justify-center  text-[#e8927c]"
          
        >
          <svg
            className="w-8 h-8 text-brand-white"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
          </svg>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          {/* Left side */}
          <div className="lg:w-72 flex-shrink-0 pt-16 lg:pt-8">
            <h2 className=" text-3xl font-bold text-[#378480] font-serif  leading-tight mb-4">
              Connect with <br /> other members
            </h2>
            <p className="text-[#378480]  font-tempus text-sm leading-relaxed mb-6">
              Hear from our students, alumni, and parents about their
              transformative experiences at our school and the community we've
              built together.
            </p>
            <button
              className="flex items-center gap-2 text-brand-white text-sm font-semibold group"
              style={{ letterSpacing: "0.02em" }}
            >
              <span className="font-tempus text-[#378480]">Connect now</span>
              <span
                className="w-7 h-7 rounded-full flex items-center justify-center transition-transform group-hover:translate-x-1  bg-[#378480]"
                
              >
                <svg
                  className="w-3.5 h-3.5 text-brand-white"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2.5}
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </span>
            </button>
          </div>

          {/* Cards */}
          <div className="flex-1 overflow-hidden">
            <div
              className={`grid grid-cols-1 md:grid-cols-3 gap-4 transition-opacity duration-300 ${
                isAnimating ? "opacity-0" : "opacity-100"
              }`}
            >
              {getVisibleTestimonials().map((t, idx) => (
                <div
                  key={`${t.id}-${idx}`}
                  className="bg-brand-white rounded-xl overflow-hidden shadow-xl flex flex-col"
                >
                  {/* Image */}
                  <div className="h-48 overflow-hidden">
                    <img
                      src={t.image}
                      alt={t.name}
                      className="w-full h-full object-cover object-top"
                    />
                  </div>

                  {/* Card body */}
                  <div className="p-5 flex-1 flex flex-col">
                    {/* Quote icon */}
                    <div
                      className="w-8 h-8 rounded-full flex items-center justify-center mb-3 flex-shrink-0"
                      style={{ background: "#e8927c" }}
                    >
                      <svg
                        className="w-4 h-4 text-brand-white"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                      </svg>
                    </div>

                    <p className="text-gray-600 text-sm leading-relaxed  font-tempus flex-1 mb-4">
                      {t.quote}
                    </p>

                    <div>
                      <p className="text-gray-900 font-bold font-serif text-base">
                        {t.name}
                      </p>
                      <p className="text-[#e8927c] text-sm  font-serif">{t.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Controls */}
            <div className="mt-6 flex items-center justify-between">
              {/* Arrow buttons */}
              <div className="flex gap-2">
                <button
                  onClick={() => {
                    handlePrev();
                    resetInterval();
                  }}
                  className="w-9 h-9 rounded flex items-center justify-center transition-colors bg-[#378480]"
                  aria-label="Previous"
                >
                  <svg
                    className="w-4 h-4 text-brand-white"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2.5}
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </button>
                <button
                  onClick={() => {
                    handleNext();
                    resetInterval();
                  }}
                  className="w-9 h-9 rounded flex items-center justify-center transition-colors bg-brand-white-pro"
                  aria-label="Next"
                >
                  <svg
                    className="w-4 h-4 text-brand-white"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2.5}
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>

              {/* Dot indicators */}
              <div className="flex gap-2 items-center">
                {Array.from({ length: totalDots }).map((_, i) => (
                  <button
                    key={i}
                    onClick={() => {
                      goTo(i);
                      resetInterval();
                    }}
                    className="rounded-full transition-all duration-300"
                    style={{
                      width: i === currentIndex ? "20px" : "8px",
                      height: "8px",
                      background:
                        i === currentIndex
                          ? "#ffffff"
                          : "rgba(255,255,255,0.35)",
                    }}
                    aria-label={`Go to slide ${i + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
