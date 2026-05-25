import React from 'react';
import Link from 'next/link';

const Overview = () => {
  return (
    <>
      <div className='w-full bg-[#f8f9fb] px-4 sm:px-8 md:px-16 lg:px-24 2xl:px-32 py-10 md:py-16 2xl:py-24'>
        <div className='max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-4xl xl:max-w-5xl 2xl:max-w-7xl mx-auto text-center'>

          {/* subheading */}
          <p className='text-xs sm:text-sm font-sans md:text-base lg:text-lg 2xl:text-xl tracking-widest uppercase text-[#378480] mb-2 md:mb-3'>
            Welcome to Serenica
          </p>

          {/* mainheading */}
          <h1 className='text-2xl sm:text-3xl font-serif md:text-4xl lg:text-5xl 2xl:text-7xl font-medium text-black leading-tight mb-4 md:mb-6'>
            Supporting Student Wellness Since 2025
          </h1>

          {/* paragraph */}
          <p className='text-sm sm:text-base md:text-lg lg:text-lg font-georgia 2xl:text-2xl text-gray-900 leading-relaxed md:leading-loose max-w-prose mx-auto mb-6 md:mb-10'>
            Serenica is committed to delivering intelligent mental health support
            in a safe and understanding environment. We believe every student deserves
            timely care — our mission is to detect risk early and guide them to wellness.
          </p>

        </div>
      </div>

      <div className='w-full bg-[#f8f9fb] px-4 sm:px-8 md:px-16 lg:pl-10 2xl:px-32 py-10 md:py-16 2xl:py-24'>
        <div className='max-w-xs sm:max-w-2xl md:max-w-3xl lg:max-w-5xl xl:max-w-6xl 2xl:max-w-7xl mx-auto'>

          {/* top label */}
          <p className='text-xs sm:text-sm md:text-base font-sans 2xl:text-lg tracking-widest uppercase text-[#378480] mb-2 md:mb-3 flex items-center gap-2'>
            A Quick System Walkthrough
            <span className='inline-block w-8 md:w-12 h-[2px] bg-brand-navy-light'></span>
          </p>

          {/* heading */}
          <h2 className='text-2xl sm:text-3xl md:text-4xl font-souvenir lg:text-5xl 2xl:text-6xl font-medium text-black leading-tight mb-6 md:mb-10'>
            Dedicated to Early Detection,<br /> Committed to Your Well-being —
          </h2>

          {/* 2 column layout */}
          <div className='flex flex-col lg:flex-row gap-6 md:gap-8 2xl:gap-12'>

            {/* LEFT — video */}
            <div className='w-full lg:w-[60%]'>
              <div className='w-full aspect-video overflow-hidden'>
                <iframe
                  src='https://www.youtube.com/embed/S2hIoTw8i9w?autoplay=1&mute=1'
                  title='Serenica System Walkthrough'
                  allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                  allowFullScreen
                  className='w-full h-full'
                ></iframe>
              </div>
            </div>

            {/* RIGHT — notice board */}
            <div className='w-full lg:w-[40%] bg-white rounded-2xl p-5 md:p-6 2xl:p-8 border border-gray-200'>

              <p className='text-sm sm:text-base md:text-lg 2xl:text-xl font-georgia text-gray-700 leading-relaxed mb-4 md:mb-6'>
                Mental health assessments are now open for{' '}
                <span className='font-bold text-black'>all registered students.</span>{' '}
                Please visit the Assessment page to take your evaluation.
              </p>

              <div className='w-full h-[1px] bg-gray-200 mb-4 md:mb-6'></div>

              <h3 className='text-base sm:text-lg md:text-xl 2xl:text-2xl font-georgia font-bold text-black mb-3 md:mb-4'>
                Latest Updates
              </h3>

              <p className='text-sm sm:text-base md:text-lg 2xl:text-xl font-georgia text-gray-600 mb-4 md:mb-6'>
                May 2025: AI risk prediction model updated for improved accuracy
              </p>

              <Link href='/updates' className='text-sm sm:text-base md:text-lg font-georgia 2xl:text-xl text-[#378480] font-semibold hover:underline'>
                View All Updates →
              </Link>

            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Overview;