// components/ui/AddAdminModal.jsx
import { useState } from 'react'
import { addAdmin } from '../../services/api'

export default function AddAdminModal({ onClose }) {
  const [form, setForm] = useState({ email: '', password: '' })
  const [error, setError]     = useState('')
  const [success, setSuccess] = useState('')
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
    setError('')
  }

  const handleSubmit = async () => {
    setError('')
    setSuccess('')

    if (!form.email || !form.password) {
      setError('All fields are required.')
      return
    }
    if (form.password.length < 8) {
      setError('Password must be at least 8 characters.')
      return
    }

    setLoading(true)
    try {
      await addAdmin(form.email, form.password)
      setSuccess(`Admin account created for ${form.email}`)
      setForm({ email: '', password: '' })
      setTimeout(() => onClose(), 1500)
    } catch (err) {
      setError(err.response?.data?.detail || 'Failed to create admin.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md mx-4">
        <h2 className="text-xl font-semibold text-slate-800 mb-6 font-display">Add New Admin</h2>

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
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1 font-body">Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="w-full border border-slate-200 rounded-xl px-3 py-2 text-sm font-body focus:outline-none focus:ring-2 focus:ring-teal-400"
              placeholder="admin@example.com"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1 font-body">Password</label>
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              className="w-full border border-slate-200 rounded-xl px-3 py-2 text-sm font-body focus:outline-none focus:ring-2 focus:ring-teal-400"
              placeholder="Min. 8 characters"
            />
          </div>
        </div>

        <div className="flex gap-3 mt-6">
          <button
            onClick={handleSubmit}
            disabled={loading}
            className="flex-1 bg-teal-600 hover:bg-teal-700 text-white py-2 rounded-xl text-sm font-body font-medium transition-colors disabled:opacity-50"
          >
            {loading ? 'Creating...' : 'Create Admin'}
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