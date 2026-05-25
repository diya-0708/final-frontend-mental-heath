import React from 'react';
import Image from 'next/image';

const Services = () => {
  return (
    <div className='overflow-x-hidden w-full bg-white py-24 md:py-40 2xl:py-90'>

      {/* heading + breadcrumb */}
      <div className='px-4 sm:px-8 md:px-16 lg:px-24 2xl:px-32'>
        <div className='max-w-xs sm:max-w-2xl md:max-w-3xl lg:max-w-4xl xl:max-w-5xl 2xl:max-w-6xl mx-auto'>
          <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif 2xl:text-6xl font-bold text-black leading-tight text-center mb-3 md:mb-4'>
            Early Detection, <br /> Lasting Well-being.
          </h1>
          <p className='text-xs sm:text-sm md:text-base text-center text-gray-400 mb-8 md:mb-12'>
            Home / About / <span className='text-gray-700 font-medium font-tempus'>Our Services</span>
          </p>
        </div>
      </div>

      {/* hero image — full width */}
      <div className='relative w-full h-48 sm:h-64 md:h-80 lg:h-140 2xl:h-[900px] overflow-hidden mb-10 md:mb-16'>
        <Image
          src='/images/image11.jpg'
          alt='Serenica mental health support'
          fill
          className='object-cover'
        />
      </div>

      {/* rest of content */}
      <div className='px-4 sm:px-8 md:px-16 lg:px-24 2xl:px-32'>
        <div className='max-w-xs sm:max-w-2xl md:max-w-3xl lg:max-w-4xl xl:max-w-5xl 2xl:max-w-6xl mx-auto'>

          {/* 2 column layout — sidebar + content */}
          <div className='flex flex-col lg:flex-row gap-8 md:gap-12 2xl:gap-16'>

            {/* LEFT — sidebar */}
            <div className='w-full lg:w-[25%] flex flex-row lg:flex-col gap-6 md:gap-8'>

              {/* developed by */}
              <div>
                <p className='text-xs text-gray-400 uppercase tracking-widest mb-2'>
                  Developed By
                </p>
                <div className='flex items-center gap-2'>
                  <div className='w-7 h-7 md:w-8 md:h-8 rounded-full overflow-hidden'>
                    <Image
                      src='/images/logo.jpg'
                      alt='Developer'
                      width={40}
                      height={40}
                      className='w-full h-full object-cover'
                    />
                  </div>
                  <p className='text-sm md:text-base font-serif font-medium text-black'>
                    Serenica Team
                  </p>
                </div>
              </div>

              {/* launched */}
              <div>
                <p className='text-xs text-gray-400 font-georgia uppercase tracking-widest mb-2'>
                  Launched
                </p>
                <p className='text-sm md:text-base font-medium text-black'>
                  January 2025
                </p>
              </div>

              {/* share */}
              <div>
                <p className='text-xs text-gray-400 uppercase font-georgia tracking-widest mb-2'>
                  Share
                </p>
                <div className='flex lg:flex-col gap-2 font-tempus'>
                  <a href='#' className='text-sm md:text-base text-gray-600 hover:text-[#24706c]'>Instagram</a>
                  <a href='#' className='text-sm md:text-base text-gray-600 hover:text-[#24706c]'>LinkedIn</a>
                  <a href='#' className='text-sm md:text-base text-gray-600 hover:text-[#24706c]'>Twitter</a>
                </div>
              </div>

            </div>

            {/* RIGHT — main content */}
            <div className='w-full lg:w-[75%]'>

              {/* section 1 */}
              <h2 className='text-lg sm:text-xl md:text-2xl 2xl:text-3xl font-serif font-bold text-black mb-3 md:mb-4'>
                AI-Powered Mental Health Risk Assessment
              </h2>
              <p className='text-sm font-tempus sm:text-base md:text-base 2xl:text-lg text-gray-600 leading-relaxed mb-8 md:mb-10'>
                Serenica uses a machine learning model trained on mental health
                indicators to assess each student's psychological well-being.
                Students complete a structured questionnaire covering stress,
                anxiety, sleep, and emotional state. The AI then analyzes
                responses and classifies the risk level as Low, Medium, or High —
                providing an instant and accurate picture of the student's
                current mental health status without any human bias.
              </p>

              {/* middle image */}
              <div className='w-full h-48 sm:h-64 md:h-72 2xl:h-96 overflow-hidden mb-8 md:mb-10'>
                <Image
                  src='/images/image10.jpg'
                  alt='Mental health assessment process'
                  width={900}
                  height={500}
                  className='w-full h-full object-cover'
                />
              </div>

              {/* section 2 */}
              <h2 className='text-lg sm:text-xl md:text-2xl 2xl:text-3xl font-serif font-bold text-black mb-3 md:mb-4'>
                Personalized Support Through RAG Technology
              </h2>
              <p className='text-sm sm:text-base md:text-base 2xl:text-lg text-gray-600 font-tempus leading-relaxed mb-8 md:mb-10'>
                Once a risk level is determined, Serenica's Retrieval-Augmented
                Generation system generates personalized mental health
                recommendations for each student. These suggestions are
                drawn from verified psychological resources and tailored
                specifically to the student's assessment results. Whether
                it is breathing exercises for anxiety, sleep hygiene tips,
                or guidance to seek professional counseling, every student
                receives support that is relevant to their unique situation.
              </p>

              {/* section 3 */}
              <h2 className='text-lg sm:text-xl md:text-2xl 2xl:text-3xl font-bold font-serif text-black mb-3 md:mb-4'>
                Our Commitment to Student Well-being
              </h2>
              <p className='text-sm sm:text-base md:text-base 2xl:text-lg text-gray-600 font-tempus leading-relaxed'>
                Serenica was built with one goal in mind — to ensure no
                student silently struggles with mental health challenges.
                By combining AI-driven detection with compassionate support,
                the platform bridges the gap between students in need and
                the resources available to them. We are committed to
                continuous improvement, student privacy, and making mental
                health support accessible to every student, at any time,
                from anywhere.
              </p>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;