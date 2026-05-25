"use client";
import Link from "next/link";

const values = [
  {
    title: "Early Detection",
    description: "AI-powered risk analysis identifies mental health concerns before they become serious.",
  },
  {
    title: "Personalized Support",
    description: "RAG-based suggestions tailored to each student's unique risk level and needs.",
  },
  {
    title: "Student Privacy",
    description: "All responses are securely stored and kept strictly confidential at all times.",
  },
  {
    title: "Always Available",
    description: "Access Serenica anytime, anywhere — 24/7 support whenever students need it most.",
  },
];

export default function About() {
  return (
    <section id="about" className="bg-white px-4 sm:px-8 md:px-16 lg:px-24 py-14 md:py-20 overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

        {/* LEFT — Image */}
        <div className="w-full lg:w-[45%] flex-shrink-0 relative">
          <img
            src="/images/images10.jpg"
            alt="Serenica Mental Health System"
            className="w-full h-auto object-cover grayscale opacity-90"
          />
          {/* Decorative dot grid bottom right */}
          <div
            className="absolute -bottom-6 -right-6 w-32 h-32 hidden sm:block"
            style={{
              backgroundImage: "radial-gradient(circle, #e8927c 1.5px, transparent 1.5px)",
              backgroundSize: "12px 12px",
            }}
          />
        </div>

        {/* RIGHT — Content */}
        <div className="w-full lg:w-[55%]">

          <h2
            className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4"
            style={{ fontFamily: "Georgia, serif" }}
          >
            About Us
          </h2>

          <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-8">
            Serenica is an AI-based student mental health early warning and support system
            developed to help students recognize mental health risks at an early stage.
            By combining machine learning risk prediction with RAG-based personalized support,
            Serenica provides timely guidance to students who need it most — without replacing
            professional medical care.
          </p>

          {/* 2x2 Value Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            {values.map((value) => (
              <div
                key={value.title}
                className="flex items-start gap-3 border border-gray-100 rounded-lg p-4 bg-gray-50 hover:shadow-sm transition-shadow duration-200"
              >
                {/* Icon */}
                <div className="w-9 h-9 rounded-md bg-[#e1f5ee] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0f6e56" strokeWidth="2">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/>
                    <path d="M12 6v6l4 2"/>
                  </svg>
                </div>
                {/* Text */}
                <div>
                  <p className="text-sm font-bold text-gray-900 mb-1">{value.title}</p>
                  <p className="text-xs text-gray-500 leading-relaxed">{value.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <Link
            href="#services"
            className="inline-block bg-[#e8927c] hover:bg-[#d4785f] text-white text-sm font-bold tracking-wide px-8 py-3 rounded-full transition-colors duration-300"
          >
            Explore our Services
          </Link>

        </div>
      </div>
    </section>
  );
}