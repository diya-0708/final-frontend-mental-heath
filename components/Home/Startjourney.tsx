"use client";
import Image from "next/image";
import Link from "next/link";

export default function StartJourney() {
  return (
    <section className="bg-[#e8927c] px-6 sm:px-10 md:px-16 lg:px-24 py-10 md:py-14">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">

        {/* LEFT CONTENT */}
        <div className="flex-1 flex flex-col gap-4 md:gap-5">

          {/* Top badge */}
          <div className="flex items-center gap-2 w-fit bg-white/30 rounded-full px-3 py-1">
            <span className="w-1.5 h-1.5 rounded-full bg-white inline-block"></span>
            <span className="text-white text-xs font-medium">Start Your Assessment</span>
          </div>

          {/* Heading */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
            Ready to take control of <br className="hidden sm:block" />
            your mental well-being?
          </h2>

          {/* Description */}
          <p className="text-xs sm:text-sm text-gray-800 leading-relaxed max-w-sm">
            Begin your mental health screening with Serenica today.
            Get personalized risk insights and AI-powered support
            tailored specifically to your well-being needs.
          </p>

          {/* Button */}
          <Link
            href="/register"
            className="mt-2 w-fit bg-white text-gray-900 text-sm font-semibold px-6 py-2.5 rounded-full hover:bg-gray-100 transition-all duration-200"
          >
            Get Started
          </Link>

        </div>

        {/* RIGHT IMAGE */}
        <div className="w-full md:w-[45%] flex justify-center md:justify-end">
          <div className="w-full max-w-sm md:max-w-md aspect-[4/3] rounded-[2rem] overflow-hidden">
            <img
              src="/images/images9.avif"
              alt="Students supporting each other"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

      </div>
    </section>
  );
}