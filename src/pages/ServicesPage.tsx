import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { LogOut } from 'lucide-react'
import { logout } from '../lib/auth'
import { SERVICES } from '../lib/services'
import { SITE } from '../lib/constants'
import ServiceCard from '../components/services/ServiceCard'
import ServiceDetailPanel from '../components/services/ServiceDetailPanel'

export default function ServicesPage() {
  const navigate = useNavigate()
  const [selectedId, setSelectedId] = useState<string | null>(null)
  const selected = SERVICES.find((s) => s.id === selectedId)

  const handleLogout = () => {
    logout()
    navigate('/')
  }

  return (
    <div className="min-h-screen bg-surface">
      <header className="border-b border-border bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-8">
          <div className="flex items-center gap-3">
            <img src="/assets/logo.png" alt="" className="h-10 w-10 rounded-full" />
            <div>
              <p className="text-sm font-bold text-maroon">{SITE.name}</p>
              <p className="text-xs text-muted">Gudivada Services Portal</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Link to="/" className="text-sm text-muted hover:text-maroon">
              Public site
            </Link>
            <button
              type="button"
              onClick={handleLogout}
              className="inline-flex items-center gap-1.5 rounded border border-maroon px-3 py-1.5 text-sm font-medium text-maroon hover:bg-maroon hover:text-white"
            >
              <LogOut size={14} />
              Logout
            </button>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-8">
        {!selected ? (
          <>
            <div className="mb-8">
              <h1 className="text-2xl font-bold text-maroon sm:text-3xl">
                TDP Welfare &amp; Public Services
              </h1>
              <p className="mt-2 max-w-2xl text-sm text-muted">
                Track and monitor key welfare schemes and public services delivered across
                Gudivada constituency. Select a service to view a brief overview.
              </p>
            </div>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {SERVICES.map((service) => (
                <ServiceCard
                  key={service.id}
                  service={service}
                  onClick={() => setSelectedId(service.id)}
                />
              ))}
            </div>
          </>
        ) : (
          <ServiceDetailPanel service={selected} onBack={() => setSelectedId(null)} />
        )}
      </main>
    </div>
  )
}
