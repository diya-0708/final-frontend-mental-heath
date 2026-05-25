"use client";
import { useState } from "react";

export default function ResourcesAndContact() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    studentId: "",
    phone: "",
    concern: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const steps = [
    {
      number: "01",
      title: "Register & Log In",
      description: "Create your student account securely. Your personal information is kept confidential and protected at all times.",
    },
    {
      number: "02",
      title: "Fill the Assessment Form",
      description: "Answer a series of mental health-related questions honestly. The form is simple, private, and takes only a few minutes to complete.",
    },
    {
      number: "03",
      title: "Get Your Risk Level",
      description: "Our AI model analyzes your responses and classifies your mental health into Low, Medium, or High risk categories instantly.",
    },
    {
      number: "04",
      title: "Receive Personalized Support",
      description: "Based on your risk level, Serenica provides tailored suggestions, resources, and guidance to support your well-being.",
    },
  ];

  return (
    <>
      {/* ── RESOURCES / HOW IT WORKS ── */}
      <section id="resources" className="bg-[#f8f9fb] px-4 sm:px-8 md:px-16 lg:px-24 py-14 md:py-20">
        <div className="max-w-5xl mx-auto">

          {/* Left sidebar + content layout */}
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-16">

            {/* Left sticky label */}
            <div className="lg:w-64 flex-shrink-0">
              <p className="text-xs font-bold tracking-widest uppercase text-[#24706c] mb-3">On This Page</p>
              <div className="w-[2px] h-12 bg-[#e8927c] hidden lg:block" />
            </div>

            {/* Right content */}
            <div className="flex-1">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#378480] leading-tight mb-4"
                style={{ fontFamily: "Georgia, serif" }}>
                Your Well-being <br />is Our Priority
              </h2>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-10 max-w-xl">
                Begin your mental health journey with Serenica. Our assessment process is designed to be simple,
                private, and supportive — because every student deserves timely care.
              </p>

              {/* Steps */}
              <div className="space-y-8">
                {steps.map((step) => (
                  <div key={step.number} className="flex items-start gap-5">
                    <div className="w-12 h-12 rounded-full bg-[#e8927c] flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-sm font-bold">{step.number}</span>
                    </div>
                    <div>
                      <h3 className="text-base sm:text-lg font-bold text-[#378480] mb-1"
                        style={{ fontFamily: "Georgia, serif" }}>
                        {step.title}
                      </h3>
                      <p className="text-sm text-gray-600 leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CONTACT / REQUEST FORM ── */}
      <section  id='contact' className="bg-white px-4 sm:px-8 md:px-16 lg:px-24 py-14 md:py-20">
        <div className="max-w-4xl mx-auto">

          <h2 className="text-3xl sm:text-4xl font-bold text-[#378480] mb-2"
            style={{ fontFamily: "Georgia, serif" }}>
            Reach Out to Us
          </h2>
          <p className="text-gray-500 text-sm sm:text-base mb-10">
            Fill in the form below and our support team will get back to you shortly.
          </p>

          {submitted ? (
            <div className="bg-[#e1f5ee] border border-[#24706c]/30 rounded-xl px-6 py-8 text-center">
              <p className="text-[#0f6e56] font-bold text-lg mb-1">Message Received!</p>
              <p className="text-[#0f6e56] text-sm">Our team will contact you within 2 working days.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">

              {/* Row 1 */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold tracking-widest uppercase text-gray-600 mb-2">
                    Student Full Name
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    className="w-full border border-gray-300 px-4 py-3 text-sm text-gray-900 focus:outline-none focus:border-[#24706c] transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold tracking-widest uppercase text-gray-600 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full border border-gray-300 px-4 py-3 text-sm text-gray-900 focus:outline-none focus:border-[#24706c] transition-colors"
                  />
                </div>
              </div>

              {/* Row 2 */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold tracking-widest uppercase text-gray-600 mb-2">
                    Student ID
                  </label>
                  <input
                    type="text"
                    name="studentId"
                    value={formData.studentId}
                    onChange={handleChange}
                    placeholder="e.g. STU-2024-001"
                    className="w-full border border-gray-300 px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#24706c] transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold tracking-widest uppercase text-gray-600 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full border border-gray-300 px-4 py-3 text-sm text-gray-900 focus:outline-none focus:border-[#24706c] transition-colors"
                  />
                </div>
              </div>

              {/* Row 3 - concern dropdown */}
              <div>
                <label className="block text-xs font-bold tracking-widest uppercase text-gray-600 mb-2">
                  Area of Concern
                </label>
                <select
                  name="concern"
                  value={formData.concern}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 px-4 py-3 text-sm text-gray-900 focus:outline-none focus:border-[#24706c] transition-colors bg-white"
                >
                  <option value="">Select a concern</option>
                  <option value="stress">Academic Stress</option>
                  <option value="anxiety">Anxiety</option>
                  <option value="depression">Depression</option>
                  <option value="sleep">Sleep Issues</option>
                  <option value="social">Social Challenges</option>
                  <option value="other">Other</option>
                </select>
              </div>

              {/* Row 4 - message */}
              <div>
                <label className="block text-xs font-bold tracking-widest uppercase text-gray-600 mb-2">
                  Additional Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Any additional information you would like to share..."
                  className="w-full border border-gray-300 px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#24706c] transition-colors resize-none"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="bg-[#378480] text-white text-sm font-bold tracking-widest uppercase px-8 py-4 hover:bg-[#24706c] transition-colors duration-300"
              >
                Send Message →
              </button>

            </form>
          )}
        </div>
      </section>
    </>
  );
}