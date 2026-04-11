import { useEffect, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'

import { LanguageSwitcher } from './LanguageSwitcher'
import { ThemeToggle } from './ThemeToggle'

function ControlsIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="14"
      height="14"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <line x1="4" y1="6" x2="20" y2="6" />
      <line x1="4" y1="12" x2="20" y2="12" />
      <line x1="4" y1="18" x2="20" y2="18" />
      <circle cx="9" cy="6" r="2" />
      <circle cx="15" cy="12" r="2" />
      <circle cx="11" cy="18" r="2" />
    </svg>
  )
}

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg
      viewBox="0 0 20 20"
      width="12"
      height="12"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
      aria-hidden
    >
      <polyline points="5 8 10 13 15 8" />
    </svg>
  )
}

export function DisplayControlsMenu({ className = '' }: { className?: string }) {
  const { t } = useTranslation()
  const [open, setOpen] = useState(false)
  const rootRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!open) return

    const onPointerDown = (event: MouseEvent | TouchEvent) => {
      const target = event.target as Node | null
      if (!target) return
      if (rootRef.current?.contains(target)) return
      setOpen(false)
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false)
    }

    document.addEventListener('mousedown', onPointerDown)
    document.addEventListener('touchstart', onPointerDown)
    document.addEventListener('keydown', onKeyDown)

    return () => {
      document.removeEventListener('mousedown', onPointerDown)
      document.removeEventListener('touchstart', onPointerDown)
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [open])

  return (
    <div ref={rootRef} className={`relative ${className}`}>
      <button
        type="button"
        onClick={() => setOpen((isOpen) => !isOpen)}
        aria-expanded={open}
        aria-controls="display-controls-panel"
        aria-label={`${t('common.language.label')} / ${t('common.theme.label')}`}
        className="inline-flex items-center gap-1 px-2.5 py-2 rounded-xl border border-zinc-300/70 dark:border-zinc-700/75 bg-white/45 dark:bg-zinc-900/35 backdrop-blur-sm dark:backdrop-blur-none text-zinc-600 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
      >
        <ControlsIcon />
        <ChevronIcon open={open} />
      </button>

      <div
        id="display-controls-panel"
        className={`absolute right-0 mt-2 w-48 max-w-[calc(100vw-1.5rem)] rounded-xl border border-zinc-300/75 dark:border-zinc-700/75 bg-white/90 dark:bg-zinc-900/92 backdrop-blur-md shadow-[0_16px_36px_-20px_rgba(15,23,42,0.45)] z-50 transition-all duration-200 ${
          open
            ? 'opacity-100 translate-y-0 pointer-events-auto'
            : 'opacity-0 -translate-y-1 pointer-events-none'
        }`}
      >
        <div className="p-2.5 space-y-2">
          <div className="flex items-center justify-between gap-2">
            <p className="m-0 text-[11px] uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
              {t('common.language.label')}
            </p>
            <LanguageSwitcher compact onChange={() => setOpen(false)} />
          </div>

          <div className="h-px bg-zinc-200 dark:bg-zinc-800" />

          <div className="flex items-center justify-between gap-2">
            <p className="m-0 text-[11px] uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
              {t('common.theme.label')}
            </p>
            <ThemeToggle compact onChange={() => setOpen(false)} />
          </div>
        </div>
      </div>
    </div>
  )
}
