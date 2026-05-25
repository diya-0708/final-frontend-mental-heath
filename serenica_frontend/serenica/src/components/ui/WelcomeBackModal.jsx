// components/ui/WelcomeBackModal.jsx
import { motion, AnimatePresence } from 'framer-motion'
import { X, ArrowRight } from 'lucide-react'

const RISK_CONFIG = {
  'Low Risk': {
    emoji: '🌿',
    bg: 'bg-teal-50',
    border: 'border-teal-200',
    pill: 'bg-teal-100 text-teal-700 border-teal-200',
    bar: 'bg-teal-400',
    message: "You're doing well. Keep nurturing your wellbeing.",
    heading: 'text-teal-800',
  },
  'Medium Risk': {
    emoji: '🌤️',
    bg: 'bg-amber-50',
    border: 'border-amber-200',
    pill: 'bg-amber-100 text-amber-700 border-amber-200',
    bar: 'bg-amber-400',
    message: "Things have been a little challenging — you're here, and that matters.",
    heading: 'text-amber-800',
  },
  'High Risk': {
    emoji: '🌱',
    bg: 'bg-purple-50',
    border: 'border-purple-200',
    pill: 'bg-purple-100 text-purple-700 border-purple-200',
    bar: 'bg-purple-400',
    message: "We're glad you're back — you don't have to face this alone.",
    heading: 'text-purple-800',
  },
}

function MiniBar({ label, value, color }) {
  if (value == null) return null
  return (
    <div className="flex items-center gap-2">
      <span className="text-xs font-body text-slate-500 w-24 shrink-0">{label}</span>
      <div className="flex-1 h-1.5 bg-slate-100 rounded-full overflow-hidden">
        <motion.div
          className={`h-full ${color} rounded-full`}
          initial={{ width: 0 }}
          animate={{ width: `${(value / 10) * 100}%` }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        />
      </div>
      <span className="text-xs font-body font-semibold text-slate-600 w-6 text-right">{value}</span>
    </div>
  )
}

export default function WelcomeBackModal({ user, lastAssessment, onClose, onTakeAssessment }) {
  if (!lastAssessment) return null

  const a      = lastAssessment
  const config = RISK_CONFIG[a.final_risk] || RISK_CONFIG['Low Risk']
  const daysSince = Math.floor(
    (Date.now() - new Date(a.created_at)) / (1000 * 60 * 60 * 24)
  )
  const dateStr = new Date(a.created_at).toLocaleDateString('en-US', {
    month: 'short', day: 'numeric',
  })

  return (
    <AnimatePresence>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-[9999] px-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.93, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 10 }}
          transition={{ duration: 0.28, ease: 'easeOut' }}
          onClick={e => e.stopPropagation()}
          className="bg-white rounded-2xl shadow-2xl w-full max-w-sm overflow-hidden"
          style={{ maxHeight: '90vh' }}
        >
          {/* ── Header ── */}
          <div className={`${config.bg} ${config.border} border-b px-5 py-4`}>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="text-2xl">{config.emoji}</span>
                <div>
                  <h2 className={`font-display text-base font-bold ${config.heading} leading-tight`}>
                    Welcome back, {user?.name?.split(' ')[0] || 'there'} 👋
                  </h2>
                  <p className="font-body text-xs text-slate-500">
                    {daysSince === 0
                      ? 'You assessed earlier today.'
                      : daysSince === 1
                      ? 'Last check-in was yesterday.'
                      : `Last check-in was ${daysSince} days ago.`}
                  </p>
                </div>
              </div>
              <button
                onClick={onClose}
                className="text-slate-400 hover:text-slate-600 transition-colors shrink-0 ml-2"
              >
                <X size={16} />
              </button>
            </div>

            {/* Risk pill + message in one row */}
            <div className="mt-3 flex items-start gap-2">
              <span className={`text-xs font-body font-semibold px-2.5 py-1 rounded-full border shrink-0 ${config.pill}`}>
                {a.final_risk}
              </span>
              <p className="font-body text-xs text-slate-600 leading-relaxed">
                {config.message}
              </p>
            </div>
          </div>

          {/* ── Score snapshot ── */}
          <div className="px-5 py-4">
            <p className="text-xs font-body font-semibold text-slate-400 uppercase tracking-wide mb-3">
              Snapshot · {dateStr}
            </p>
            <div className="space-y-2">
              <MiniBar label="Stress"      value={a.stress_level}     color="bg-red-400"    />
              <MiniBar label="Anxiety"     value={a.anxiety_score}    color="bg-amber-400"  />
              <MiniBar label="Depression"  value={a.depression_score} color="bg-purple-400" />
              <MiniBar label="Sleep"       value={a.sleep_quality}    color="bg-teal-400"   />
            </div>
          </div>

          {/* ── Actions ── */}
          <div className="px-5 pb-5 flex flex-col gap-2">
            <button
              onClick={onTakeAssessment}
              className="w-full flex items-center justify-center gap-2 bg-teal-600 hover:bg-teal-700 text-white font-body font-medium text-sm py-2.5 rounded-xl transition-all shadow-md shadow-teal-100"
            >
              Take a new assessment <ArrowRight size={14} />
            </button>
            <button
              onClick={onClose}
              className="w-full font-body text-xs text-slate-400 hover:text-slate-600 py-1.5 transition-colors"
            >
              Maybe later — go to dashboard
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  )
}