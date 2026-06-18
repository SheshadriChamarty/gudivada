import type { FormEvent } from 'react'
import { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { useNavigate } from 'react-router-dom'
import { X } from 'lucide-react'
import { DEMO_CREDENTIALS, login } from '../../lib/auth'

interface LoginModalProps {
  open: boolean
  onClose: () => void
}

export default function LoginModal({ open, onClose }: LoginModalProps) {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errors, setErrors] = useState<{ email?: string; password?: string }>({})
  const [loading, setLoading] = useState(false)
  const [authError, setAuthError] = useState('')
  const emailRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (!open) return

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }

    document.addEventListener('keydown', onKeyDown)
    document.body.style.overflow = 'hidden'
    emailRef.current?.focus()

    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = ''
    }
  }, [open, onClose])

  if (!open) return null

  const validate = () => {
    const next: { email?: string; password?: string } = {}
    if (!email.trim()) next.email = 'Email or username is required'
    if (!password) next.password = 'Password is required'
    setErrors(next)
    return Object.keys(next).length === 0
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setAuthError('')
    if (!validate()) return

    setLoading(true)
    await new Promise((r) => setTimeout(r, 500))

    const success = login(email.trim(), password)
    setLoading(false)

    if (success) {
      onClose()
      navigate('/services')
      return
    }

    setAuthError('Invalid credentials. Use the demo login shown below.')
  }

  return createPortal(
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="login-title"
    >
      <button
        type="button"
        className="absolute inset-0 bg-black/50"
        onClick={onClose}
        aria-label="Close login dialog"
      />
      <div className="relative w-full max-w-md rounded-lg bg-white p-6 shadow-xl">
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 rounded p-1 text-muted hover:bg-surface hover:text-body"
          aria-label="Close"
        >
          <X size={20} />
        </button>

        <h2 id="login-title" className="text-xl font-bold text-maroon">
          Staff Login
        </h2>
        <p className="mt-1 text-sm text-muted">
          Sign in to access the Gudivada services tracking portal.
        </p>

        <div className="mt-4 rounded border border-gold/50 bg-gold/10 px-3 py-2 text-xs text-body">
          <p className="font-semibold text-maroon">Demo credentials</p>
          <p className="mt-1">
            Email: <span className="font-mono">{DEMO_CREDENTIALS.username}</span>
          </p>
          <p>
            Password: <span className="font-mono">{DEMO_CREDENTIALS.password}</span>
          </p>
        </div>

        <form onSubmit={handleSubmit} className="mt-6 space-y-4" noValidate>
          <div>
            <label htmlFor="login-email" className="mb-1 block text-sm font-medium text-body">
              Email / Username
            </label>
            <input
              ref={emailRef}
              id="login-email"
              type="text"
              autoComplete="username"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={DEMO_CREDENTIALS.username}
              className={`w-full rounded border px-3 py-2 text-sm outline-none focus:border-maroon focus:ring-1 focus:ring-maroon ${
                errors.email ? 'border-red-500' : 'border-border'
              }`}
            />
            {errors.email && (
              <p className="mt-1 text-xs text-red-600">{errors.email}</p>
            )}
          </div>

          <div>
            <label htmlFor="login-password" className="mb-1 block text-sm font-medium text-body">
              Password
            </label>
            <input
              id="login-password"
              type="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={`w-full rounded border px-3 py-2 text-sm outline-none focus:border-maroon focus:ring-1 focus:ring-maroon ${
                errors.password ? 'border-red-500' : 'border-border'
              }`}
            />
            {errors.password && (
              <p className="mt-1 text-xs text-red-600">{errors.password}</p>
            )}
          </div>

          {authError && (
            <p className="rounded bg-red-50 px-3 py-2 text-xs text-red-700">{authError}</p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded bg-maroon py-2.5 text-sm font-semibold text-white transition-colors hover:bg-maroon/90 disabled:opacity-60"
          >
            {loading ? 'Signing in…' : 'Sign In'}
          </button>
        </form>
      </div>
    </div>,
    document.body,
  )
}
