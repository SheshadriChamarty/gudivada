import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { NAV_LINKS, SITE } from '../../lib/constants'

interface NavbarProps {
  onLoginClick: () => void
}

export default function Navbar({ onLoginClick }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const closeMobile = () => setMobileOpen(false)

  return (
    <header
      className={`sticky top-0 z-40 border-b border-border bg-white transition-shadow ${
        scrolled ? 'shadow-sm' : ''
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-8">
        <a href="#home" className="flex shrink-0 items-center gap-3">
          <div className="flex size-14 items-center justify-center overflow-hidden rounded-full border-2 border-gold bg-gold">
            <img
              src="/assets/logo.png"
              alt="Gudivada constituency logo"
              className="h-10 w-auto object-contain"
            />
          </div>
          <div>
            <p className="text-lg font-bold leading-tight text-maroon sm:text-xl">
              {SITE.name}
            </p>
            <p className="text-[11px] text-muted">{SITE.title}</p>
          </div>
        </a>

        <nav className="hidden items-center gap-6 xl:flex">
          {NAV_LINKS.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-[13px] font-medium transition-colors hover:text-maroon ${
                i === 0
                  ? 'border-b-2 border-maroon pb-1 text-maroon'
                  : 'text-body'
              }`}
            >
              {link.label}
            </a>
          ))}
          <button
            type="button"
            onClick={onLoginClick}
            className="rounded border-2 border-maroon px-4 py-1.5 text-[13px] font-semibold text-maroon transition-colors hover:bg-maroon hover:text-white"
          >
            Staff Login
          </button>
        </nav>

        <div className="flex items-center gap-2 xl:hidden">
          <button
            type="button"
            onClick={onLoginClick}
            className="rounded border border-maroon px-3 py-1 text-xs font-semibold text-maroon"
          >
            Login
          </button>
          <button
            type="button"
            onClick={() => setMobileOpen((o) => !o)}
            className="rounded p-2 text-maroon hover:bg-surface"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <nav className="border-t border-border bg-white px-4 py-4 xl:hidden">
          <ul className="space-y-3">
            {NAV_LINKS.map((link, i) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={closeMobile}
                  className={`block text-sm font-medium ${
                    i === 0 ? 'text-maroon' : 'text-body'
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  )
}
