'use client'

import { useState } from 'react'
import Link from 'next/link'


interface Step1 {
  fullName: string
  email: string
  password: string
}

interface Step2 {
  age: string
  gender: string
  course: string
  cgpa: string
  residence: string
}

export default function RegisterPage() {
  const [step, setStep] = useState(1)
  const [step1, setStep1] = useState<Step1>({ fullName: '', email: '', password: '' })
  const [step2, setStep2] = useState<Step2>({ age: '', gender: 'Male', course: '', cgpa: '', residence: 'On-campus' })
  const [errors, setErrors] = useState<Partial<Step1>>({})

  const validateStep1 = () => {
    const newErrors: Partial<Step1> = {}
    if (!step1.fullName) newErrors.fullName = 'Full name is required.'
    if (!step1.email) newErrors.email = 'Email is required.'
    if (!step1.password) newErrors.password = 'Password is required.'
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleContinue = () => {
    if (validateStep1()) setStep(2)
  }

  const handleSubmit = () => {
    // TODO: connect to your API here
    console.log({ ...step1, ...step2 })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-teal-50 flex flex-col">

      {/* Navbar */}
      <nav className="flex items-center justify-between px-8 py-4">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-teal-600 rounded-full flex items-center justify-center text-white text-sm font-semibold">S</div>
          <span className="font-semibold text-slate-800">Serenica</span>
        </div>
        <div className="flex items-center gap-4">

<Link href="/rewards" className="text-slate-600 text-sm hover:text-slate-800">Sign in</Link>
          <button className="bg-teal-600 text-white text-sm px-4 py-2 rounded-full hover:bg-teal-700 transition-colors">Get started</button>
        </div>
      </nav>

      {/* Content */}
      <div className="flex-1 flex flex-col items-center justify-center px-4 py-8">

        {step === 1 && (
          <div className="flex items-center gap-2 mb-6">
            <div className="w-10 h-10 bg-teal-600 rounded-full flex items-center justify-center text-white text-sm font-semibold">S</div>
            <span className="text-2xl font-semibold text-slate-800">Serenica</span>
          </div>
        )}

        <h1 className="text-2xl font-semibold text-slate-800 mb-1">Create your account</h1>
        <p className="text-sm text-teal-600 mb-4">
          {step === 1 ? 'Step 1 of 2 — Basic info' : 'Step 2 of 2 — Academic details'}
        </p>

        {/* Progress bar */}
        <div className="flex gap-2 w-full max-w-md mb-8">
          <div className="h-1 flex-1 rounded-full bg-teal-600" />
          <div className={`h-1 flex-1 rounded-full transition-colors ${step === 2 ? 'bg-teal-600' : 'bg-slate-200'}`} />
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8 w-full max-w-md">

          {step === 1 ? (
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Full name <span className="text-red-400">*</span></label>
                <div className="relative">
                  <span className="absolute left-3 top-2.5 text-slate-400">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
                  </span>
                  <input
                    type="text"
                    value={step1.fullName}
                    onChange={e => setStep1({ ...step1, fullName: e.target.value })}
                    className={`w-full border rounded-xl pl-9 pr-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-teal-400 ${errors.fullName ? 'border-red-300' : 'border-slate-200'}`}
                    placeholder="Priya Sharma"
                  />
                </div>
                {errors.fullName && <p className="text-red-500 text-xs mt-1">{errors.fullName}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Email address <span className="text-red-400">*</span></label>
                <div className="relative">
                  <span className="absolute left-3 top-2.5 text-slate-400">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                  </span>
                  <input
                    type="email"
                    value={step1.email}
                    onChange={e => setStep1({ ...step1, email: e.target.value })}
                    className={`w-full border rounded-xl pl-9 pr-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-teal-400 ${errors.email ? 'border-red-300' : 'border-slate-200'}`}
                    placeholder="demo@rms.app"
                  />
                </div>
                {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Password <span className="text-red-400">*</span></label>
                <div className="relative">
                  <span className="absolute left-3 top-2.5 text-slate-400">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
                  </span>
                  <input
                    type="password"
                    value={step1.password}
                    onChange={e => setStep1({ ...step1, password: e.target.value })}
                    className={`w-full border rounded-xl pl-9 pr-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-teal-400 ${errors.password ? 'border-red-300' : 'border-slate-200'}`}
                    placeholder="••••••••"
                  />
                </div>
                {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
              </div>

              <button
                onClick={handleContinue}
                className="w-full bg-teal-600 hover:bg-teal-700 text-white py-2.5 rounded-xl text-sm font-medium transition-colors mt-2"
              >
                Continue →
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Age</label>
                  <input
                    type="number"
                    value={step2.age}
                    onChange={e => setStep2({ ...step2, age: e.target.value })}
                    className="w-full border border-slate-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-teal-400"
                    placeholder="21"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Gender</label>
                  <select
                    value={step2.gender}
                    onChange={e => setStep2({ ...step2, gender: e.target.value })}
                    className="w-full border border-slate-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-teal-400"
                  >
                    <option>Male</option>
                    <option>Female</option>
                    <option>Other</option>
                    <option>Prefer not to say</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Course / Programme</label>
                <div className="relative">
                  <span className="absolute left-3 top-2.5 text-slate-400">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
                  </span>
                  <input
                    type="text"
                    value={step2.course}
                    onChange={e => setStep2({ ...step2, course: e.target.value })}
                    className="w-full border border-slate-200 rounded-xl pl-9 pr-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-teal-400"
                    placeholder="e.g. Computer Science"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">CGPA</label>
                  <input
                    type="number"
                    step="0.1"
                    value={step2.cgpa}
                    onChange={e => setStep2({ ...step2, cgpa: e.target.value })}
                    className="w-full border border-slate-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-teal-400"
                    placeholder="3.3"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Residence</label>
                  <select
                    value={step2.residence}
                    onChange={e => setStep2({ ...step2, residence: e.target.value })}
                    className="w-full border border-slate-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-teal-400"
                  >
                    <option>On-campus</option>
                    <option>Off-campus</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 mt-2">
                <button
                  onClick={() => setStep(1)}
                  className="border border-slate-200 text-slate-600 py-2.5 rounded-xl text-sm font-medium hover:bg-slate-50 transition-colors"
                >
                  ← Back
                </button>
                <button
                  onClick={handleSubmit}
                  className="bg-teal-600 hover:bg-teal-700 text-white py-2.5 rounded-xl text-sm font-medium transition-colors"
                >
                  Create account
                </button>
              </div>

              <p className="text-center text-sm text-slate-500 mt-2">
                Already have an account? <a href="/login" className="text-teal-600 hover:underline">Sign in</a>
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}