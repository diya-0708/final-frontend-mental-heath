// "use client";
// import Link from "next/link";
// import Image from "next/image";
// import { useState } from "react";

// const footerLinks: { [key: string]: string } = {
//   "Home": "/",
//   "About Us": "/about",
//   "Academics": "/academics",
//   "Admissions": "/admissions",
//   "News & Events": "/news-events",
//   "Gallery": "/pastevents",
//   "Contact": "/contact",
// };

// export default function Footer() {
// const [email, setEmail] = useState("");
//   const [phone, setPhone] = useState("");
//   const [submitted, setSubmitted] = useState(false);

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     if (email.trim()) {
//       setSubmitted(true);
//       setEmail("");
//       setPhone("");
//     }
//   };

//   return (
//     <footer className="bg-[#24706c] text-brand-white font-sans">
//       <div className="px-6 sm:px-10 md:px-14 lg:px-16 py-14 sm:py-16">
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">

//           {/* ── Column 1: Logo + School Name ── */}
//           <div className="flex flex-col gap-5 sm:col-span-2 lg:col-span-1">

//             {/* Logo Circle */}
//             <div className="w-16 h-16 rounded-full border-4 border-white/80 flex-shrink-0 overflow-hidden">
//               <Image
//                 src="/images/logo.jpg"
//                 alt="NEESS Logo"
//                 width={64}
//                 height={64}
//                 className="w-full h-full object-contain"
//               />
//             </div>

//             <div>
//               <h3 className="text-xl font-black tracking-tight leading-tight font-georgia">
//                 New Environment <br />Secondary School
//               </h3>
//               <p className="text-brand-white/60 text-xs mt-2 leading-relaxed font-tempus">
//                 Nurturing minds,<br />building futures since 1978.
//               </p>
//             </div>

//             {/* Office Hours */}
//             <div className="text-xs text-brand-white/60 leading-relaxed border-t border-white/10 pt-4 font-tempus">
//               <p className="font-semibold text-brand-white/80 mb-1 uppercase tracking-widest text-[10px]">Office Hours</p>
//               <p>Sun – Fri: 9:00 AM – 4:00 PM</p>
//               <p>Saturday: Closed</p>
//             </div>
//           </div>

//           {/* ── Column 2: Quick Links ── */}
//           <div>
//             <p className="text-sm font-bold tracking-widest uppercase mb-5 text-brand-white/90" style={{ fontFamily: 'Paciencia, serif' }}>
//               Quick Links
//             </p>
//             <ul className="space-y-3">
//               {Object.keys(footerLinks).map((link) => (
//                 <li key={link}>
//                   <Link
//                     href={footerLinks[link]}
//                     className="text-sm text-brand-white/70 hover:text-brand-white transition-colors duration-200 hover:underline underline-offset-4"
//                   >
//                     {link}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* ── Column 3: Support / More ── */}
//           <div>
//             <p className="text-sm font-bold tracking-widest uppercase mb-5 text-brand-white/90 font-tempus" style={{ fontFamily: 'Paciencia, serif' }}>
//               Support
//             </p>
//             <ul className="space-y-3">
//               {[
//                 "Admissions FAQ",
//                 "Fee Structure",
//                 "Scholarships",
//                 "School Calendar",
//                 "Download Forms",
//                 "E-Library",
//               ].map((link) => (
//                 <li key={link}>
//                   <a
//                     href="#"
//                     className="text-sm text-brand-white/70 hover:text-brand-white transition-colors duration-200 hover:underline underline-offset-4"
//                   >
//                     {link}
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* ── Column 4: Contact + Newsletter ── */}
//           <div className="sm:col-span-2 lg:col-span-1">
//             <p className="text-lg font-black tracking-tight mb-1 font-georgia">
//               Stay Connected
//             </p>
//             <p className="text-brand-white/60 text-xs leading-relaxed mb-5 font-tempus">
//               Be the first to know about school events,<br className="hidden sm:block" />
//               exam schedules, and important notices.
//             </p>

//             {/* Contact Details */}
//             <div className="space-y-2 mb-6 text-sm text-brand-white/70">
//               <div className="flex items-center gap-2 font-georgia">
//                 <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="flex-shrink-0 text-brand-white/50">
//                   <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8a19.79 19.79 0 01-3.07-8.67A2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z"/>
//                 </svg>
//                 <span>071-560511</span>
//               </div>
//               <div className="flex items-center gap-2 font-georgia">
//                 <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="flex-shrink-0 text-white/50">
//                   <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
//                 </svg>
//                 <span>info@neess.edu.np</span>
//               </div>
//               <div className="flex items-start gap-2 font-georgia">
//                 <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="flex-shrink-0 mt-0.5 text-brand-white/50">
//                   <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/>
//                 </svg>
//                 <span>Manigram, Lumbini Province, Nepal</span>
//               </div>
//             </div>

//             {/* Newsletter Form */}
//             {submitted ? (
//               <div className="bg-brand-white/10 border border-brand-white/20 rounded px-4 py-3 text-sm text-brand-white/90">
//                 ✓ Thank you! We'll keep you updated.
//               </div>
//             ) : (
//               <form onSubmit={handleSubmit} className="space-y-2">
//                 <div className="flex gap-2">
//                   <input
//                     type="email"
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                     placeholder="Enter your email address"
//                     required
//                     className="flex-1 min-w-0 bg-brand-white/10 border border-brand-white/20 text-brand-white placeholder-brand-white/40 text-xs px-3 py-2.5 focus:outline-none focus:border-brand-white/60 transition-colors"
//                   />
//                   <button
//                     type="submit"
//                     className="bg-brand-white text-[#1a3a5c] font-sans text-xs font-bold px-3 py-2.5 hover:bg-brand-white/90 transition-colors whitespace-nowrap flex-shrink-0"
//                   >
//                     SIGN UP
//                   </button>
//                 </div>
//                 <input
//                   type="tel"
//                   value={phone}
//                   onChange={(e) => setPhone(e.target.value)}
//                   placeholder="Phone Number (optional)"
//                   className="w-full bg-brand-white/10 border border-brand-white/20 text-brand-white placeholder-brand-white/40 text-xs px-3 py-2.5 focus:outline-none focus:border-brand-white/60 transition-colors"
//                 />
//                 <p className="text-[10px] text-brand-white/40 leading-relaxed">
//                   By submitting this form, you consent to receive updates from
//                   New Environment School. View our{" "}
//                   <Link href="/privacy-policy" className="text-brand-white/60 underline underline-offset-2 hover:text-brand-white">
//                     Privacy Policy
//                   </Link>
//                   .
//                 </p>
//               </form>
//             )}
//           </div>

//         </div>
//       </div>

//       {/* ══ BOTTOM BAR ══ */}
//       <div className="border-t border-white/15 px-6 sm:px-10 md:px-14 lg:px-16 py-4">
//         <div className="flex flex-col sm:flex-row items-center justify-between gap-3">

//           {/* Social Icons */}
//           <div className="flex items-center gap-4">
//             {/* Facebook */}
//             <a href="#" aria-label="Facebook" className="text-brand-white/50 hover:text-brand-white transition-colors duration-200">
//               <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
//                 <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
//               </svg>
//             </a>
//             {/* Instagram */}
//             <a href="#" aria-label="Instagram" className="text-brand-white/50 hover:text-brand-white transition-colors duration-200">
//               <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//                 <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
//               </svg>
//             </a>
//             {/* YouTube */}
//             <a href="#" aria-label="YouTube" className="text-brand-white/50 hover:text-brand-white transition-colors duration-200">
//               <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
//                 <path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 001.46 6.42 29 29 0 001 12a29 29 0 00.46 5.58 2.78 2.78 0 001.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 001.95-1.96A29 29 0 0023 12a29 29 0 00-.46-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="white"/>
//               </svg>
//             </a>
//             {/* WhatsApp */}
//             <a href="#" aria-label="WhatsApp" className="text-white/50 hover:text-white transition-colors duration-200">
//               <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
//                 <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
//                 <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.126 1.533 5.858L.054 23.947a.5.5 0 00.607.607l6.089-1.479A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.808 9.808 0 01-5.04-1.393l-.361-.214-3.735.907.923-3.735-.235-.374A9.818 9.818 0 012.182 12C2.182 6.57 6.57 2.182 12 2.182S21.818 6.57 21.818 12 17.43 21.818 12 21.818z"/>
//               </svg>
//             </a>
//           </div>

//           {/* Center links */}
//           <div className="flex items-center gap-4 sm:gap-6 text-xs text-brand-white/50">
//             <Link href="/privacy-policy" className="hover:text-white transition-colors">
//               Privacy Policy
//             </Link>
//             <span className="text-white/20">•</span>
//             <Link href="/terms&conditions" className="hover:text-white transition-colors">
//               Terms &amp; Conditions
//             </Link>
//             <span className="text-white/20">•</span>
//             <Link href="/sitemap" className="hover:text-brand-white transition-colors">
//               Sitemap
//             </Link>
//           </div>

//           {/* Copyright */}
//           <p className="text-xs text-brand-white/40 text-center sm:text-right">
//             © New Environment School {new Date().getFullYear()}
//           </p>
//         </div>
//       </div>

//     </footer>
//   );
// }


"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const footerLinks: { [key: string]: string } = {
  "Home": "/",
  "About": "/about",
  "Assessment": "/assessment",
  "Results": "/results",
  "Resources": "/resources",
  "Contact": "/contact",
};

export default function Footer() {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
      setEmail("");
      setPhone("");
    }
  };

  return (
    <footer className="bg-[#24706c] text-brand-white font-sans">
      <div className="px-6 sm:px-10 md:px-14 lg:px-16 py-14 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">

          {/* Column 1 */}
          <div className="flex flex-col gap-5 sm:col-span-2 lg:col-span-1">
            <div className="w-16 h-16 rounded-full border-4 border-white/80 flex-shrink-0 overflow-hidden">
              <Image src="/images/logo.jpg" alt="Serenica Logo" width={64} height={64} className="w-full h-full object-contain" />
            </div>
            <div>
              <h3 className="text-xl font-black tracking-tight leading-tight font-georgia">Serenica</h3>
              <p className="text-brand-white/60 text-xs mt-2 leading-relaxed font-tempus">
                Detecting risk early,<br />supporting student well-being.
              </p>
            </div>
            <div className="text-xs text-brand-white/60 leading-relaxed border-t border-white/10 pt-4 font-tempus">
              <p className="font-semibold text-brand-white/80 mb-1 uppercase tracking-widest text-[10px]">System Availability</p>
              <p>Mon – Fri: 24 Hours Active</p>
              <p>Weekends: Available</p>
            </div>
          </div>

          {/* Column 2 */}
          <div>
            <p className="text-sm font-bold tracking-widest uppercase mb-5 text-brand-white/90" style={{ fontFamily: 'Paciencia, serif' }}>
              Quick Links
            </p>
            <ul className="space-y-3">
              {Object.keys(footerLinks).map((link) => (
                <li key={link}>
                  <Link href={footerLinks[link]} className="text-sm text-brand-white/70 hover:text-brand-white transition-colors duration-200 hover:underline underline-offset-4">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <p className="text-sm font-bold tracking-widest uppercase mb-5 text-brand-white/90 font-tempus" style={{ fontFamily: 'Paciencia, serif' }}>
              Support
            </p>
            <ul className="space-y-3">
              {["How It Works", "Assessment Guide", "Risk Level Explained", "Mental Health Resources", "Crisis Helplines", "FAQs"].map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm text-brand-white/70 hover:text-brand-white transition-colors duration-200 hover:underline underline-offset-4">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 */}
          <div className="sm:col-span-2 lg:col-span-1">
            <p className="text-lg font-black tracking-tight mb-1 font-georgia">Stay Informed</p>
            <p className="text-brand-white/60 text-xs leading-relaxed mb-5 font-tempus">
              Get updates on new features, mental health<br className="hidden sm:block" />
              tips, and system announcements.
            </p>

            <div className="space-y-2 mb-6 text-sm text-brand-white/70">
              <div className="flex items-center gap-2 font-georgia">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="flex-shrink-0 text-brand-white/50">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8a19.79 19.79 0 01-3.07-8.67A2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z" />
                </svg>
                <span>071-560511</span>
              </div>
              <div className="flex items-center gap-2 font-georgia">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="flex-shrink-0 text-white/50">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                <span>support@serenica.com</span>
              </div>
              <div className="flex items-start gap-2 font-georgia">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="flex-shrink-0 mt-0.5 text-brand-white/50">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <span>Lumbini Province, Nepal</span>
              </div>
            </div>

            {submitted ? (
              <div className="bg-brand-white/10 border border-brand-white/20 rounded px-4 py-3 text-sm text-brand-white/90">
                Thank you! We will keep you updated.
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-2">
                <div className="flex gap-2">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    required
                    className="flex-1 min-w-0 bg-brand-white/10 border border-brand-white/20 text-brand-white placeholder-brand-white/40 text-xs px-3 py-2.5 focus:outline-none focus:border-brand-white/60 transition-colors"
                  />
                  <button type="submit" className="bg-brand-white text-[#1a3a5c] font-sans text-xs font-bold px-3 py-2.5 hover:bg-brand-white/90 transition-colors whitespace-nowrap flex-shrink-0">
                    SIGN UP
                  </button>
                </div>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Phone Number (optional)"
                  className="w-full bg-brand-white/10 border border-brand-white/20 text-brand-white placeholder-brand-white/40 text-xs px-3 py-2.5 focus:outline-none focus:border-brand-white/60 transition-colors"
                />
                <p className="text-[10px] text-brand-white/40 leading-relaxed">
                  By submitting this form, you consent to receive updates from Serenica. View our{" "}
                  <Link href="/privacy-policy" className="text-brand-white/60 underline underline-offset-2 hover:text-brand-white">
                    Privacy Policy
                  </Link>
                  .
                </p>
              </form>
            )}
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/15 px-6 sm:px-10 md:px-14 lg:px-16 py-4">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">

          <div className="flex items-center gap-4">
            <a href="#" aria-label="Facebook" className="text-brand-white/50 hover:text-brand-white transition-colors duration-200">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
              </svg>
            </a>
            <a href="#" aria-label="Instagram" className="text-brand-white/50 hover:text-brand-white transition-colors duration-200">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </a>
            <a href="#" aria-label="YouTube" className="text-brand-white/50 hover:text-brand-white transition-colors duration-200">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 001.46 6.42 29 29 0 001 12a29 29 0 00.46 5.58 2.78 2.78 0 001.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 001.95-1.96A29 29 0 0023 12a29 29 0 00-.46-5.58z" />
                <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="white" />
              </svg>
            </a>
            <a href="#" aria-label="WhatsApp" className="text-white/50 hover:text-white transition-colors duration-200">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.126 1.533 5.858L.054 23.947a.5.5 0 00.607.607l6.089-1.479A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.808 9.808 0 01-5.04-1.393l-.361-.214-3.735.907.923-3.735-.235-.374A9.818 9.818 0 012.182 12C2.182 6.57 6.57 2.182 12 2.182S21.818 6.57 21.818 12 17.43 21.818 12 21.818z" />
              </svg>
            </a>
          </div>

          <div className="flex items-center gap-4 sm:gap-6 text-xs text-brand-white/50">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <span className="text-white/20">•</span>
            <Link href="/terms" className="hover:text-white transition-colors">Terms &amp; Conditions</Link>
            <span className="text-white/20">•</span>
            <Link href="/sitemap" className="hover:text-brand-white transition-colors">Sitemap</Link>
          </div>

          <p className="text-xs text-brand-white/40 text-center sm:text-right">
            © Serenica {new Date().getFullYear()}
          </p>

        </div>
      </div>

    </footer>
  );
}