import { useEffect, useState, type ReactNode } from 'react'
import { useTranslation } from 'react-i18next'

type ThemeMode = 'light' | 'system' | 'dark'
const STORAGE_KEY = 'theme'

function getInitialMode(): ThemeMode {
  if (typeof window === 'undefined') return 'system'
  const stored = window.localStorage.getItem(STORAGE_KEY)
  return stored === 'light' || stored === 'dark' ? stored : 'system'
}

function resolveDark(mode: ThemeMode): boolean {
  if (mode === 'dark') return true
  if (mode === 'light') return false
  return window.matchMedia('(prefers-color-scheme: dark)').matches
}

function applyMode(mode: ThemeMode) {
  const root = document.documentElement
  const isDark = resolveDark(mode)
  root.classList.toggle('dark', isDark)
  root.style.colorScheme = isDark ? 'dark' : 'light'
}

function SunIcon() {
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
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
    </svg>
  )
}

function MonitorIcon() {
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
      <rect x="2" y="3" width="20" height="14" rx="2" />
      <path d="M8 21h8M12 17v4" />
    </svg>
  )
}

function MoonIcon() {
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
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  )
}

const OPTIONS: { mode: ThemeMode; icon: ReactNode; labelKey: string }[] = [
  { mode: 'light', icon: <SunIcon />, labelKey: 'common.theme.light' },
  { mode: 'system', icon: <MonitorIcon />, labelKey: 'common.theme.system' },
  { mode: 'dark', icon: <MoonIcon />, labelKey: 'common.theme.dark' },
]

type ThemeToggleProps = {
  className?: string
  compact?: boolean
  onChange?: (mode: ThemeMode) => void
}

export function ThemeToggle({
  className = '',
  compact = false,
  onChange,
}: ThemeToggleProps) {
  const { t } = useTranslation()
  const [mode, setMode] = useState<ThemeMode>(getInitialMode)

  const rootStyles = compact
    ? 'inline-flex items-center gap-0.5 p-0.5'
    : 'inline-flex items-center gap-0.5 rounded-xl border border-zinc-300/75 dark:border-zinc-700/75 bg-white/55 dark:bg-zinc-900/45 backdrop-blur-sm dark:backdrop-blur-none p-0.5'

  const buttonSize = compact ? 'w-6 h-6 rounded-md' : 'w-7 h-7 rounded-lg'
  const activeStyles =
    'bg-zinc-200 text-zinc-900 dark:bg-zinc-700 dark:text-zinc-100'
  const inactiveStyles =
    'text-zinc-500 dark:text-zinc-400 hover:text-zinc-800 dark:hover:text-zinc-200'

  useEffect(() => {
    applyMode(mode)
    if (mode === 'system') {
      window.localStorage.removeItem(STORAGE_KEY)
    } else {
      window.localStorage.setItem(STORAGE_KEY, mode)
    }
  }, [mode])

  useEffect(() => {
    if (mode !== 'system') return
    const mq = window.matchMedia('(prefers-color-scheme: dark)')
    const handler = () => applyMode('system')
    if (typeof mq.addEventListener === 'function') {
      mq.addEventListener('change', handler)
      return () => mq.removeEventListener('change', handler)
    }
    mq.addListener(handler)
    return () => mq.removeListener(handler)
  }, [mode])

  return (
    <div
      role="group"
      aria-label={t('common.theme.label')}
      className={`${rootStyles} ${className}`}
    >
      {OPTIONS.map((option) => {
        const active = mode === option.mode
        const label = t(option.labelKey)
        return (
          <button
            key={option.mode}
            type="button"
            onClick={() => {
              setMode(option.mode)
              onChange?.(option.mode)
            }}
            aria-pressed={active}
            aria-label={label}
            title={label}
            className={`inline-flex items-center justify-center ${buttonSize} transition-colors ${
              active ? activeStyles : inactiveStyles
            }`}
          >
            {option.icon}
          </button>
        )
      })}
    </div>
  )
}
