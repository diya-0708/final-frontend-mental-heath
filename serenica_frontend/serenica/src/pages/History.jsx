// pages/History.jsx — view all past assessments
import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Clock, TrendingUp, TrendingDown, Minus,
  ChevronDown, ChevronUp, Brain, Activity,
  Moon, Users, BookOpen, Utensils, Heart,
} from 'lucide-react'
import { studentAPI } from '../services/api'
import Card from '../components/ui/Card'
import Spinner from '../components/ui/Spinner'
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend } from 'recharts'

const RISK_ORDER  = { 'Low Risk': 1, 'Medium Risk': 2, 'High Risk': 3 }

function RiskPill({ level }) {
  const colors = {
    'Low Risk':    'bg-teal-100 text-teal-700 border-teal-200',
    'Medium Risk': 'bg-yellow-100 text-yellow-700 border-yellow-200',
    'High Risk':   'bg-red-100 text-red-700 border-red-200',
  }
  return (
    <span className={`text-xs font-body font-semibold px-3 py-1.5 rounded-full border ${colors[level] || 'bg-sage-100 text-sage-600'}`}>
      {level}
    </span>
  )
}

// ── Score bar ─────────────────────────────────────────────────
function ScoreBar({ label, value, max = 10, color = 'bg-teal-400' }) {
  if (value == null) return null
  const pct = Math.round((value / max) * 100)
  return (
    <div>
      <div className="flex justify-between mb-1">
        <span className="text-xs font-body text-slate-500">{label}</span>
        <span className="text-xs font-body font-semibold text-slate-700">{value}/{max}</span>
      </div>
      <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
        <div className={`h-full ${color} rounded-full transition-all`} style={{ width: `${pct}%` }} />
      </div>
    </div>
  )
}

// ── Boolean badge ─────────────────────────────────────────────
function BoolBadge({ label, value }) {
  return (
    <span className={`text-xs font-body px-2.5 py-1 rounded-full border ${
      value
        ? 'bg-red-50 text-red-600 border-red-200'
        : 'bg-slate-50 text-slate-400 border-slate-200'
    }`}>
      {value ? '✓' : '✗'} {label}
    </span>
  )
}

// ── Single assessment card ────────────────────────────────────
function AssessmentCard({ assessment, idx, trend }) {
  const [expanded, setExpanded] = useState(false)
  const a = assessment

  return (
    <motion.div
      initial={{ opacity: 0, x: -16 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: idx * 0.05 }}
    >
      <Card animate={false} className="hover:shadow-lg transition-shadow">

        {/* ── Header row ── */}
        <div className="flex items-start justify-between flex-wrap gap-4">
          <div className="flex items-center gap-4">
            <div className="w-11 h-11 bg-teal-50 rounded-2xl flex items-center justify-center flex-shrink-0">
              <Clock size={18} className="text-teal-400" />
            </div>
            <div>
              <p className="font-body font-semibold text-teal-900 text-sm">
                {new Date(a.created_at).toLocaleDateString('en-US', {
                  weekday: 'long', year: 'numeric', month: 'long', day: 'numeric',
                })}
              </p>
              <p className="text-xs text-slate-400 font-body mt-0.5">
                {new Date(a.created_at).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 flex-wrap">
            {trend === 'improved' && (
              <span className="flex items-center gap-1 text-xs text-teal-600 font-body">
                <TrendingDown size={14} /> Improving
              </span>
            )}
            {trend === 'worsened' && (
              <span className="flex items-center gap-1 text-xs text-red-500 font-body">
                <TrendingUp size={14} /> Needs attention
              </span>
            )}
            {trend === 'same' && (
              <span className="flex items-center gap-1 text-xs text-slate-400 font-body">
                <Minus size={14} /> Stable
              </span>
            )}
            <RiskPill level={a.final_risk} />
            <button
              onClick={() => setExpanded(e => !e)}
              className="flex items-center gap-1 text-xs font-body text-teal-600 hover:text-teal-800 border border-teal-200 hover:bg-teal-50 px-3 py-1.5 rounded-xl transition-all"
            >
              {expanded ? <><ChevronUp size={13} /> Hide</> : <><ChevronDown size={13} /> Details</>}
            </button>
          </div>
        </div>

        {/* ── Quick scores always visible ── */}
        <div className="flex flex-wrap gap-3 mt-3 text-xs font-body text-slate-400">
          <span>Stress: <b className="text-slate-600">{a.stress_level ?? '—'}/10</b></span>
          <span>Anxiety: <b className="text-slate-600">{a.anxiety_score ?? '—'}/10</b></span>
          <span>Depression: <b className="text-slate-600">{a.depression_score ?? '—'}/10</b></span>
          <span>Sleep: <b className="text-slate-600">{a.sleep_quality ?? '—'}/10</b></span>
        </div>

        {/* ── Expanded detail ── */}
        <AnimatePresence initial={false}>
          {expanded && (
            <motion.div
              key="detail"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25 }}
              className="overflow-hidden"
            >
              <div className="mt-5 pt-5 border-t border-slate-100 space-y-6">

                {/* Score bars */}
                <div>
                  <p className="text-xs font-body font-semibold text-slate-500 uppercase tracking-wide mb-3 flex items-center gap-1.5">
                    <Activity size={13} /> Mental Health Scores
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <ScoreBar label="Stress Level"        value={a.stress_level}              color="bg-red-400"    />
                    <ScoreBar label="Anxiety"             value={a.anxiety_score}             color="bg-amber-400"  />
                    <ScoreBar label="Depression"          value={a.depression_score}          color="bg-purple-400" />
                    <ScoreBar label="Sleep Quality"       value={a.sleep_quality}             color="bg-teal-400"   />
                    <ScoreBar label="Physical Activity"   value={a.physical_activity}         color="bg-green-400"  />
                    <ScoreBar label="Diet Quality"        value={a.diet_quality}              color="bg-lime-400"   />
                    <ScoreBar label="Social Support"      value={a.social_support}            color="bg-blue-400"   />
                    <ScoreBar label="Financial Stress"    value={a.financial_stress}          color="bg-orange-400" />
                    <ScoreBar label="Extracurriculars"    value={a.extracurricular_involvement} color="bg-cyan-400" />
                    <ScoreBar label="Credit Load"         value={a.semester_credit_load} max={30} color="bg-indigo-400" />
                  </div>
                </div>

                {/* Personal info */}
                <div>
                  <p className="text-xs font-body font-semibold text-slate-500 uppercase tracking-wide mb-3 flex items-center gap-1.5">
                    <Users size={13} /> Personal Context
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {a.relationship_status && (
                      <span className="text-xs font-body px-2.5 py-1 rounded-full bg-slate-50 border border-slate-200 text-slate-600">
                        <Heart size={10} className="inline mr-1" />{a.relationship_status}
                      </span>
                    )}
                    <BoolBadge label="Substance Use"       value={a.substance_use}           />
                    <BoolBadge label="Counseling Used"     value={a.counseling_service_use}  />
                    <BoolBadge label="Family History"      value={a.family_history}          />
                    <BoolBadge label="Chronic Illness"     value={a.chronic_illness}         />
                  </div>
                </div>

                {/* ML confidence */}
                <div>
                  <p className="text-xs font-body font-semibold text-slate-500 uppercase tracking-wide mb-3 flex items-center gap-1.5">
                    <Brain size={13} /> AI Risk Analysis
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <div className="bg-slate-50 rounded-xl p-3 text-center">
                      <p className="text-xs text-slate-400 font-body mb-1">Structured Data Risk</p>
                      <RiskPill level={a.tabular_risk || '—'} />
                      {a.tabular_confidence != null && (
                        <p className="text-xs text-slate-400 font-body mt-1">
                          {Math.round(a.tabular_confidence * 100)}% confidence
                        </p>
                      )}
                    </div>
                    <div className="bg-slate-50 rounded-xl p-3 text-center">
                      <p className="text-xs text-slate-400 font-body mb-1">Text Analysis Risk</p>
                      <RiskPill level={a.text_risk || '—'} />
                      {a.text_confidence != null && (
                        <p className="text-xs text-slate-400 font-body mt-1">
                          {Math.round(a.text_confidence * 100)}% confidence
                        </p>
                      )}
                    </div>
                    <div className="bg-teal-50 rounded-xl p-3 text-center border border-teal-100">
                      <p className="text-xs text-teal-600 font-body mb-1 font-medium">Final Risk</p>
                      <RiskPill level={a.final_risk || '—'} />
                    </div>
                  </div>
                </div>

                {/* Free text */}
                {a.free_text && (
                  <div>
                    <p className="text-xs font-body font-semibold text-slate-500 uppercase tracking-wide mb-2 flex items-center gap-1.5">
                      <BookOpen size={13} /> Your Response
                    </p>
                    <div className="bg-slate-50 rounded-xl p-4 border border-slate-100">
                      <p className="text-sm font-body text-slate-600 leading-relaxed italic">"{a.free_text}"</p>
                    </div>
                  </div>
                )}

                {/* AI summary */}
                {a.summary && (
                  <div>
                    <p className="text-xs font-body font-semibold text-slate-500 uppercase tracking-wide mb-2 flex items-center gap-1.5">
                      <Brain size={13} /> AI Summary
                    </p>
                    <div className="bg-teal-50 rounded-xl p-4 border border-teal-100">
                      <p className="text-sm font-body text-teal-800 leading-relaxed">{a.summary}</p>
                    </div>
                  </div>
                )}

                {/* RAG response */}
                {a.rag_response && (
                  <div>
                    <p className="text-xs font-body font-semibold text-slate-500 uppercase tracking-wide mb-2 flex items-center gap-1.5">
                      <Heart size={13} /> Personalised Guidance
                    </p>
                    <div className="bg-purple-50 rounded-xl p-4 border border-purple-100">
                      <p className="text-sm font-body text-purple-800 leading-relaxed whitespace-pre-line">{a.rag_response}</p>
                    </div>
                  </div>
                )}

              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </Card>
    </motion.div>
  )
}

// ── Main page ─────────────────────────────────────────────────
export default function History() {
  const [history, setHistory] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    studentAPI.getHistory()
      .then(res => setHistory(res.data || []))
      .catch(console.error)
      .finally(() => setLoading(false))
  }, [])

  const chartData = [...history].reverse().map((a, i) => ({
    index: i + 1,
    date:  new Date(a.created_at).toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
    Stress:     a.stress_level,
    Anxiety:    a.anxiety_score,
    Depression: a.depression_score,
    Sleep:      a.sleep_quality,
  }))

  if (loading) return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <Spinner size="lg" text="Loading your history..." />
    </div>
  )

  return (
    <div className="blob-bg min-h-screen pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10">

        <motion.h1
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-display text-3xl font-bold text-teal-900 mb-2"
        >
          Your Assessment History
        </motion.h1>
        <p className="font-body text-sage-500 text-sm mb-8">
          Track your mental wellness journey over time. Click <b>Details</b> on any entry to see the full breakdown.
        </p>

        {history.length === 0 ? (
          <Card className="text-center py-16">
            <div className="text-4xl mb-3">📋</div>
            <p className="font-body text-sage-500">No assessments completed yet.</p>
          </Card>
        ) : (
          <>
            {/* Progress chart */}
            {chartData.length > 1 && (
              <Card className="mb-8">
                <h2 className="font-display text-lg font-semibold text-teal-900 mb-4">Score Trends Over Time</h2>
                <ResponsiveContainer width="100%" height={220}>
                  <LineChart data={chartData}>
                    <XAxis dataKey="date" tick={{ fontSize: 10, fontFamily: 'DM Sans', fill: '#94a3b8' }} />
                    <YAxis domain={[1, 10]} tick={{ fontSize: 10, fontFamily: 'DM Sans', fill: '#94a3b8' }} />
                    <Tooltip contentStyle={{ fontFamily: 'DM Sans', fontSize: 12, borderRadius: 12, border: '1px solid #e2e8f0' }} />
                    <Legend wrapperStyle={{ fontFamily: 'DM Sans', fontSize: 12 }} />
                    <Line type="monotone" dataKey="Stress"     stroke="#ef4444" strokeWidth={2} dot={{ r: 3 }} />
                    <Line type="monotone" dataKey="Anxiety"    stroke="#f59e0b" strokeWidth={2} dot={{ r: 3 }} />
                    <Line type="monotone" dataKey="Depression" stroke="#8b5cf6" strokeWidth={2} dot={{ r: 3 }} />
                    <Line type="monotone" dataKey="Sleep"      stroke="#14b8a6" strokeWidth={2} dot={{ r: 3 }} />
                  </LineChart>
                </ResponsiveContainer>
              </Card>
            )}

            {/* Assessment cards */}
            <div className="space-y-4">
              {history.map((assessment, idx) => {
                const prev = history[idx + 1]
                const trend = prev
                  ? RISK_ORDER[assessment.final_risk] < RISK_ORDER[prev.final_risk] ? 'improved'
                  : RISK_ORDER[assessment.final_risk] > RISK_ORDER[prev.final_risk] ? 'worsened'
                  : 'same'
                  : null
                return (
                  <AssessmentCard
                    key={assessment.id}
                    assessment={assessment}
                    idx={idx}
                    trend={trend}
                  />
                )
              })}
            </div>
          </>
        )}
      </div>
    </div>
  )
}