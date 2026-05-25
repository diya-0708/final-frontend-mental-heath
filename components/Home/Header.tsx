// "use client"
// import React from 'react';
// import { BsArrowRight } from 'react-icons/bs';
// import Typewriter from 'typewriter-effect';


// const Hero = () => {
//   return (
//     <div className='relative h-screen flex items-center justify-center text-brand-white overflow-hidden flex-col'>

      
//  {/* Background Image */}
// <iframe
//   src="https://www.youtube.com/embed/8oog-4t9n2A?autoplay=1&mute=1&loop=1&playlist=8oog-4t9n2A&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1"
//   title="School Background Video"
//   allow="autoplay; encrypted-media"
//   allowFullScreen
//   className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[177.78vh] min-w-full h-[56.25vw] min-h-full"
//   style={{ border: "none", pointerEvents: "none" }}
// />
  
//       {/* Dark overlay so text is readable */}
//       <div className='absolute inset-0 bg-black/18'></div>


//         <div className='relative z-10 flex flex-col items-center'>

                 


                  
                  

//          {/* <h2 className='mt-5 text-sm px-2 text-center  font-tempus sm:text-2xl lg:text-lg font-medium flex items-center'>
//   Welcome to Nexus Academy —
//             <span className='text-blue-300 font-bold'>
//                 <Typewriter
//                 options={{
//                     strings: [
//                        "Where Leaders Are Born",
//           "Excellence in Education",
//           "Shaping Bright Futures",
//           "Learning Beyond Limits",
//                     ],
//                     autoStart:true,
//                     loop:true,
//                     delay:75,
//                     deleteSpeed:50,
//                     wrapperClassName:"pl-2",
//                 }}
//                 />
//             </span>
//              </h2> */}


//              <div className='display-flex flex-row gap-8 mt-4'>
//                <button className=' mt-6 px-3 py-2.5 text-brand-white  rounded-full border border-brand-white bg-brand-navy hover:bg-brand-gold font-brand-sans transition-all  duration-300  cursor-pointer text-sm font-medium '>
//                  <span>Start your assessment</span>
//                  <BsArrowRight className='w-5 h-5 ml-2 inline-block'/>
//                </button>

//                <button className=' mt-6 px-3 py-2.5 text-brand-white  rounded-full border border-brand-white bg-brand-navy hover:bg-brand-gold font-brand-sans transition-all  duration-300  cursor-pointer text-sm font-medium '>
//                  <span>Sign in to your account</span>
//                  <BsArrowRight className='w-5 h-5 ml-2 inline-block'/>
//                </button>
//              </div>
              
//         </div>         
//     </div>
//   );
// }

// export default Hero;



"use client"
import React from 'react';
import { BsArrowRight } from 'react-icons/bs';
import Typewriter from 'typewriter-effect';
import Image from 'next/image';
import Link from 'next/link';


const Hero = () => {
  return (
    <div className='relative h-screen flex items-center justify-center  text-brand-white overflow-hidden flex-col'>

      
 {/* Background Image */}
  <iframe
  src="https://www.youtube.com/embed/8oog-4t9n2A?autoplay=1&mute=1&loop=1&playlist=8oog-4t9n2A&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1"
   title="School Background Video"
   allow="autoplay; encrypted-media"
  allowFullScreen
  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[177.78vh] min-w-full h-[56.25vw] min-h-full"
   style={{ border: "none", pointerEvents: "none" }}
/>
 
      {/* Dark overlay so text is readable */}
      <div className='absolute inset-0 bg-black/55'></div>


       <div className='relative z-10 flex flex-col items-center'>

  <h1 className='text-2xl sm:text-4xl md:text-5xl lg:text-4xl mt-6 text-center font-bold font-georgia tracking-wide'>
    Detect early, support always, and<br/>
    protect,
    <span className='text-[#9fc8c6]'>student well-being.</span>
  </h1>


  <h2 className='mt-5 text-sm px-2 text-center font-tempus sm:text-2xl lg:text-lg font-medium flex items-center'>
    Welcome To  Serenica  MindGuard —
    <span className='text-[#9fc8c6] font-bold'>
      <Typewriter
        options={{
          strings: [
            "Your Mental Health Companion",
            "Early Warning, Timely Support",
            "AI-Powered Student Wellness",
            "Recognize Risk Before It Grows",
          ],
          autoStart: true,
          loop: true,
          delay: 75,
          deleteSpeed: 50,
          wrapperClassName: "pl-2",
        }}
      />
    </span>
  </h2>
               <Link
              href="/register"
              className={`
                flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border
                font-['Arno_Pro'] text-[13px] font-medium tracking-[0.06em] uppercase
                transition-all duration-300
              
                  ? 'bg-amber-500 border-amber-500 text-white'
                  : 'border-amber-400 bg-amber-700 hover:bg-amber-500 hover:border-amber-500 hover:text-white'}
              `}
            >
              Begin your assessment
            </Link>
          </div>

        </div>         
  );
}

export default Hero;



