"use client";
import { FaHeartbeat } from "react-icons/fa";
import { FaShieldAlt } from "react-icons/fa";
import { FaBrain } from "react-icons/fa";

import React, { useEffect, useRef, useState } from 'react';
import { FaStar, FaUserGraduate, FaChalkboardTeacher, FaCertificate } from 'react-icons/fa';

const facts = [
  {
    id: 1,
    icon: <FaBrain className='w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-9 lg:h-9 2xl:w-16 2xl:h-16 text-brand-white' />,
    number: 95,
    suffix: '%',
    label: 'Risk Detection Accuracy',
  },
  {
    id: 2,
    icon: <FaUserGraduate className='w-8 h-8 sm:w-10 sm:h-10 md:w-12 lg:w-9 lg:h-9 md:h-12 2xl:w-16 2xl:h-16 text-brand-white' />,
    number: 1100,
    suffix: '+',
    label: 'Students Assessed',
  },
  {
    id: 3,
    icon: <FaHeartbeat className='w-8 h-8 sm:w-10 sm:h-10 md:w-12 lg:w-9 lg:h-9 md:h-12 2xl:w-16 2xl:h-16 text-brand-white' />,
    number: 3,
    suffix: '',
    label: 'Risk Level Categories',
  },
  {
    id: 4,
    icon: <FaShieldAlt className='w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-9 lg:h-9 2xl:w-16 2xl:h-16 text-brand-white' />,
    number: 24,
    suffix: '/7',
    label: 'System Availability',
  },
];
// ── Animated counter hook ──────────────────────────────────────────────────
function useCountUp(target: number, duration = 2000, startCounting: boolean) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!startCounting) return;

    let startTime: number | null = null;
    let raf: number;

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // ease-out quad
      const eased = 1 - (1 - progress) * (1 - progress);
      setCount(Math.floor(eased * target));

      if (progress < 1) {
        raf = requestAnimationFrame(step);
      } else {
        setCount(target);
      }
    };

    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [target, duration, startCounting]);

  return count;
}

// ── Single stat card ───────────────────────────────────────────────────────
function StatCard({
  icon,
  number,
  suffix,
  label,
  startCounting,
}: {
  icon: React.ReactNode;
  number: number;
  suffix: string;
  label: string;
  startCounting: boolean;
}) {
  const count = useCountUp(number, 2000, startCounting);

  return (
    <div className='flex flex-col items-center text-center'>
      <div className='mb-4 md:mb-6 2xl:mb-8'>{icon}</div>
      <h3 className='text-1xl font-souvenir sm:text-2xl md:text-3xl lg:text-4xl 2xl:text-6xl font-bold text-brand-white mb-2 md:mb-3'>
        {count}{suffix}
      </h3>
      <p className='text-xs sm:text-sm md:text-base lg:text-1xl 2xl:text-2xl font-semibold text-brand-white'>
        {label}
      </p>
    </div>
  );
}

// ── Main section ───────────────────────────────────────────────────────────
const QuickFacts = () => {
  const [hasStarted, setHasStarted] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  // Start counting only when the section scrolls into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasStarted(true);
          observer.disconnect(); // run once
        }
      },
      { threshold: 0.5}
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

   

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      className='bg-[#f8f9fb] w-full px-4 sm:px-8 md:px-16 lg:px-10 2xl:px-32 py-10 md:py-16 2xl:py-24'
    >
      <div className='bg-[#378480] rounded-2xl md:rounded-3xl px-6 sm:px-10 md:px-16 lg:px-15 2xl:px-24 py-10 md:py-14 2xl:py-20 w-full'>
        <div className='grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 2xl:gap-16'>
          {facts.map((fact) => (
            <StatCard
              key={fact.id}
              icon={fact.icon}
              number={fact.number}
              suffix={fact.suffix}
              label={fact.label}
              startCounting={hasStarted}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuickFacts;