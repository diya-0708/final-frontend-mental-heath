// components/ui/ChangePasswordModal.jsx
import { useState } from 'react'
import { changePassword } from '../../services/api'
import { Eye, EyeOff } from 'lucide-react'

// ✅ Defined OUTSIDE the main component — fixes the focus/cursor bug
function PasswordInput({ name, placeholder, label, value, onChange, show, onToggle }) {
  return (
    <div>
      <label className="block text-sm font-medium text-slate-700 mb-1 font-body">{label}</label>
      <div className="relative">
        <input
          type={show ? 'text' : 'password'}
          name={name}
          value={value}
          onChange={onChange}
          className="w-full border border-slate-200 rounded-xl px-3 py-2 pr-10 text-sm font-body focus:outline-none focus:ring-2 focus:ring-teal-400"
          placeholder={placeholder}
        />
        <button
          type="button"
          onClick={onToggle}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors"
        >
          {show ? <EyeOff size={15} /> : <Eye size={15} />}
        </button>
      </div>
    </div>
  )
}

export default function ChangePasswordModal({ onClose, role = 'student' }) {
  const [form, setForm] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  })
  const [show, setShow] = useState({
    currentPassword: false,
    newPassword: false,
    confirmPassword: false,
  })
  const [error, setError]     = useState('')
  const [success, setSuccess] = useState('')
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
    setError('')
  }

  const toggleShow = (field) => {
    setShow(prev => ({ ...prev, [field]: !prev[field] }))
  }

  const handleSubmit = async () => {
    setError('')
    setSuccess('')

    if (!form.currentPassword || !form.newPassword || !form.confirmPassword) {
      setError('All fields are required.')
      return
    }
    if (form.newPassword !== form.confirmPassword) {
      setError('New passwords do not match.')
      return
    }
    if (form.newPassword.length < 8) {
      setError('Password must be at least 8 characters.')
      return
    }

    setLoading(true)
    try {
      await changePassword(role, form.currentPassword, form.newPassword, form.confirmPassword)
      setSuccess('Password changed successfully!')
      setForm({ currentPassword: '', newPassword: '', confirmPassword: '' })
      setTimeout(() => onClose(), 1500)
    } catch (err) {
      setError(err.response?.data?.detail || 'Failed to change password.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md mx-4">
        <h2 className="text-xl font-semibold text-slate-800 mb-6 font-display">Change Password</h2>

        {error && (
          <div className="mb-4 p-3 bg-red-50 border border-red-200 text-red-600 rounded-lg text-sm font-body">
            {error}
          </div>
        )}
        {success && (
          <div className="mb-4 p-3 bg-green-50 border border-green-200 text-green-600 rounded-lg text-sm font-body">
            {success}
          </div>
        )}

        <div className="space-y-4">
          <PasswordInput
            name="currentPassword"
            label="Current Password"
            placeholder="Enter current password"
            value={form.currentPassword}
            onChange={handleChange}
            show={show.currentPassword}
            onToggle={() => toggleShow('currentPassword')}
          />
          <PasswordInput
            name="newPassword"
            label="New Password"
            placeholder="Min. 8 characters"
            value={form.newPassword}
            onChange={handleChange}
            show={show.newPassword}
            onToggle={() => toggleShow('newPassword')}
          />
          <PasswordInput
            name="confirmPassword"
            label="Confirm New Password"
            placeholder="Repeat new password"
            value={form.confirmPassword}
            onChange={handleChange}
            show={show.confirmPassword}
            onToggle={() => toggleShow('confirmPassword')}
          />
        </div>

        <div className="flex gap-3 mt-6">
          <button
            onClick={handleSubmit}
            disabled={loading}
            className="flex-1 bg-teal-600 hover:bg-teal-700 text-white py-2 rounded-xl text-sm font-body font-medium transition-colors disabled:opacity-50"
          >
            {loading ? 'Updating...' : 'Update Password'}
          </button>
          <button
            onClick={onClose}
            className="flex-1 border border-slate-200 text-slate-600 py-2 rounded-xl text-sm font-body font-medium hover:bg-slate-50 transition-colors"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  )
}