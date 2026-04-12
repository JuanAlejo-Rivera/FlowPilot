import { useEffect, useRef, useState, type ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import { DisplayControlsMenu } from '@/components/DisplayControlsMenu'

export const btnPrimary =
  'inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-linear-to-br from-emerald-600 to-teal-400 dark:from-emerald-500 dark:to-teal-400 text-white text-[15px] font-semibold border-0 cursor-pointer no-underline shadow-[0_12px_30px_-14px_rgba(16,185,129,0.55)] hover:-translate-y-0.5 hover:shadow-[0_18px_46px_-16px_rgba(16,185,129,0.68)] dark:shadow-[0_10px_30px_-12px_rgba(16,185,129,0.5)] dark:hover:shadow-[0_16px_40px_-12px_rgba(16,185,129,0.65)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-500 transition-all duration-200'

export const btnGhost =
  'inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white/70 dark:bg-zinc-800/40 text-slate-700 dark:text-zinc-100 text-[15px] font-semibold border border-slate-300/75 dark:border-zinc-800 cursor-pointer backdrop-blur-sm dark:backdrop-blur-none no-underline hover:bg-white/90 dark:hover:bg-zinc-800/50 hover:border-emerald-500/50 transition-all duration-200'

export const eyebrow =
  'inline-block text-xs font-semibold tracking-[0.12em] uppercase text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-3 py-1.5 rounded-full border border-emerald-500/30'

export const sectionHead = 'text-center max-w-3xl mx-auto mb-14'
export const sectionH2 =
  'text-3xl md:text-[40px] leading-tight tracking-tight font-medium text-zinc-900 dark:text-zinc-100 mt-4 mb-3'
export const sectionLead =
  'text-base md:text-[17px] text-zinc-600 dark:text-zinc-400 leading-relaxed'

export function Reveal({
  children,
  delay = 0,
  className = '',
}: {
  children: ReactNode
  delay?: number
  className?: string
}) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true)
            observer.unobserve(element)
          }
        }),
      { threshold: 0.12 },
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ease-out motion-reduce:transition-none motion-reduce:opacity-100 motion-reduce:translate-y-0 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
      } ${className}`}
    >
      {children}
    </div>
  )
}

export function Logo() {
  const { t } = useTranslation()

  return (
    <Link
      to="/"
      aria-label={t('nav.homeAria')}
      className="inline-flex items-center gap-2.5 text-zinc-900 dark:text-zinc-100 font-bold text-lg tracking-tight no-underline"
    >
      <span aria-hidden="true" className="inline-flex">
        <svg viewBox="0 0 24 24" width="24" height="24">
          <path d="M12 3 21 12 12 21 3 12 12 3Z" fill="#059669" />
          <path d="M12 7.5 16.5 12 12 16.5 7.5 12 12 7.5Z" fill="#d1fae5" />
          <path
            d="M12 9.1v5.8"
            stroke="#064e3b"
            strokeWidth="1.3"
            strokeLinecap="round"
          />
        </svg>
      </span>
      <span>{t('common.brand')}</span>
    </Link>
  )
}

export function Nav() {
  const { t } = useTranslation()
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 flex items-center justify-between px-5 sm:px-8 py-4 backdrop-blur-md backdrop-saturate-150 bg-white/70 dark:bg-[#0b0b12]/75 border-b border-slate-300/60 dark:border-zinc-800 shadow-[0_10px_30px_-24px_rgba(15,23,42,0.55)] dark:shadow-none">
      <Logo />

      <nav
        className={`absolute md:static top-full left-0 right-0 flex flex-col md:flex-row md:items-center gap-0 md:gap-7 bg-white/95 dark:bg-[#0b0b12] md:bg-transparent border-b md:border-b-0 border-slate-300/60 dark:border-zinc-800 px-5 md:px-0 pb-4 md:pb-0 pt-2 md:pt-0 transition-all duration-300 md:opacity-100 md:translate-y-0 md:pointer-events-auto ${
          open
            ? 'opacity-100 translate-y-0 pointer-events-auto'
            : 'opacity-0 -translate-y-2 pointer-events-none'
        }`}
      >
        <a
          href="#features"
          onClick={() => setOpen(false)}
          className="py-3 md:py-0 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 text-sm font-medium border-b md:border-0 border-zinc-200 dark:border-zinc-800 transition-colors no-underline"
        >
          {t('nav.features')}
        </a>
        <a
          href="#benefits"
          onClick={() => setOpen(false)}
          className="py-3 md:py-0 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 text-sm font-medium border-b md:border-0 border-zinc-200 dark:border-zinc-800 transition-colors no-underline"
        >
          {t('nav.benefits')}
        </a>
        <a
          href="#proof"
          onClick={() => setOpen(false)}
          className="py-3 md:py-0 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 text-sm font-medium border-b md:border-0 border-zinc-200 dark:border-zinc-800 transition-colors no-underline"
        >
          {t('nav.customers')}
        </a>
        <Link
          to="/pricing"
          onClick={() => setOpen(false)}
          className="py-3 md:py-0 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 text-sm font-medium border-b md:border-0 border-zinc-200 dark:border-zinc-800 transition-colors no-underline"
        >
          {t('nav.pricing')}
        </Link>

        <a
          href="#cta"
          onClick={() => setOpen(false)}
          className={`mt-3 md:mt-0 ${btnPrimary} px-4 py-2.5 text-sm w-full md:w-auto`}
        >
          {t('nav.startFree')}
        </a>

        <DisplayControlsMenu className="mt-3 md:mt-0 md:ml-1 self-end md:self-auto" />
      </nav>

      <button
        type="button"
        onClick={() => setOpen((isOpen) => !isOpen)}
        aria-label={t('nav.toggleMenu')}
        aria-expanded={open}
        className="md:hidden inline-flex flex-col items-center justify-center gap-1.5 w-10 h-10 bg-transparent border-0 cursor-pointer"
      >
        <span className="block w-5 h-0.5 bg-zinc-900 dark:bg-zinc-100 rounded-sm" />
        <span className="block w-5 h-0.5 bg-zinc-900 dark:bg-zinc-100 rounded-sm" />
        <span className="block w-5 h-0.5 bg-zinc-900 dark:bg-zinc-100 rounded-sm" />
      </button>
    </header>
  )
}

export function MockUI() {
  const { t } = useTranslation()
  const [windowStyle, setWindowStyle] = useState<'windows' | 'mac'>('windows')

  const captures = [
    {
      source: t('landing.mock.slackSource'),
      text: t('landing.mock.captureSlack'),
      age: '2m',
    },
    {
      source: t('landing.mock.meetingSource'),
      text: t('landing.mock.captureMeeting'),
      age: '9m',
    },
    {
      source: t('landing.mock.emailSource'),
      text: t('landing.mock.captureEmail'),
      age: '16m',
    },
  ]

  const extracted = [
    {
      label: t('landing.mock.taskLabel'),
      value: t('landing.mock.taskValue'),
    },
    {
      label: t('landing.mock.ownerLabel'),
      value: t('landing.mock.ownerValue'),
    },
    {
      label: t('landing.mock.decisionLabel'),
      value: t('landing.mock.decisionValue'),
    },
    {
      label: t('landing.mock.dueLabel'),
      value: t('landing.mock.dueValue'),
    },
  ]

  return (
    <div
      role="group"
      aria-label={t('landing.mock.previewAria')}
      className="rounded-2xl border border-slate-200 dark:border-zinc-800 bg-white/88 dark:bg-[#0b0b12] backdrop-blur-sm dark:backdrop-blur-none overflow-hidden shadow-[0_32px_90px_-34px_rgba(15,23,42,0.38),0_12px_34px_-16px_rgba(15,23,42,0.24)] dark:shadow-[0_30px_80px_-30px_rgba(0,0,0,0.35),0_8px_30px_-10px_rgba(0,0,0,0.15)] md:transform-[perspective(1600px)_rotateX(2deg)_rotateY(-4deg)] md:hover:transform-[perspective(1600px)_rotateX(0deg)_rotateY(0deg)] transition-transform duration-500 ease-out"
    >
      <div className="flex flex-wrap items-center gap-2 px-3 py-2.5 border-b border-slate-200 dark:border-zinc-800 bg-slate-100/80 dark:bg-zinc-900/50">
        {windowStyle === 'mac' ? (
          <div aria-hidden className="inline-flex items-center gap-1.5 shrink-0">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
          </div>
        ) : (
          <div className="inline-flex items-center gap-2 min-w-0 shrink-0">
            <span
              aria-hidden
              className="w-4 h-4 rounded-sm bg-linear-to-br from-emerald-500 to-teal-400"
            />
            <span className="text-[11px] font-medium text-zinc-600 dark:text-zinc-300 truncate">
              FlowPilot
            </span>
          </div>
        )}

        <div className="order-3 basis-full sm:order-0 sm:basis-auto sm:flex-1 min-w-0 px-3 py-1.5 rounded-md border border-slate-200 dark:border-zinc-700 bg-white/85 dark:bg-zinc-800/60 text-[11px] text-zinc-500 dark:text-zinc-400 font-mono text-left truncate">
          https://flowpilot.ai/workspace/atlas
        </div>

        <div
          role="group"
          aria-label={t('landing.mock.chromeToggleAria')}
          className="order-2 ml-auto sm:ml-0 inline-flex items-center gap-0.5 p-0.5 rounded-md border border-slate-200 dark:border-zinc-700 bg-white/85 dark:bg-zinc-800/60 shrink-0"
        >
          <button
            type="button"
            onClick={() => setWindowStyle('windows')}
            aria-pressed={windowStyle === 'windows'}
            className={`px-2 py-1 rounded-[5px] text-[10px] font-semibold transition-colors ${
              windowStyle === 'windows'
                ? 'bg-zinc-200 text-zinc-900 dark:bg-zinc-700 dark:text-zinc-100'
                : 'text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100'
            }`}
          >
            {t('landing.mock.chromeWindows')}
          </button>
          <button
            type="button"
            onClick={() => setWindowStyle('mac')}
            aria-pressed={windowStyle === 'mac'}
            className={`px-2 py-1 rounded-[5px] text-[10px] font-semibold transition-colors ${
              windowStyle === 'mac'
                ? 'bg-zinc-200 text-zinc-900 dark:bg-zinc-700 dark:text-zinc-100'
                : 'text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100'
            }`}
          >
            {t('landing.mock.chromeMac')}
          </button>
        </div>

        {windowStyle === 'windows' ? (
          <div aria-hidden className="ml-1 hidden sm:inline-flex items-center shrink-0">
            <span className="w-8 h-6 inline-flex items-center justify-center rounded-sm text-zinc-500 dark:text-zinc-400 hover:bg-zinc-200/70 dark:hover:bg-zinc-800/80 transition-colors">
              <svg
                viewBox="0 0 10 10"
                width="10"
                height="10"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.2"
              >
                <path d="M1 5h8" />
              </svg>
            </span>
            <span className="w-8 h-6 inline-flex items-center justify-center rounded-sm text-zinc-500 dark:text-zinc-400 hover:bg-zinc-200/70 dark:hover:bg-zinc-800/80 transition-colors">
              <svg
                viewBox="0 0 10 10"
                width="10"
                height="10"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.2"
              >
                <rect x="1.5" y="1.5" width="7" height="7" />
              </svg>
            </span>
            <span className="w-8 h-6 inline-flex items-center justify-center rounded-sm text-zinc-500 dark:text-zinc-400 hover:bg-red-500/20 hover:text-red-600 dark:hover:text-red-400 transition-colors">
              <svg
                viewBox="0 0 10 10"
                width="10"
                height="10"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.2"
              >
                <path d="M2 2l6 6M8 2l-6 6" />
              </svg>
            </span>
          </div>
        ) : null}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-[0.95fr_1.05fr] min-h-80">
        <aside className="border-b sm:border-b-0 sm:border-r border-slate-200 dark:border-zinc-800 p-3.5 sm:p-4 bg-slate-100/70 dark:bg-zinc-900/40">
          <div className="text-[11px] uppercase tracking-wider text-zinc-500 dark:text-zinc-400 mb-2.5">
            {t('landing.mock.captureInbox')}
          </div>
          <div className="space-y-2">
            {captures.map((capture) => (
              <article
                key={capture.text}
                className="rounded-lg border border-slate-200 dark:border-zinc-800 bg-white/92 dark:bg-[#0b0b12] p-2.5"
              >
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-[10px] uppercase tracking-wide text-emerald-600 dark:text-emerald-400 font-semibold">
                    {capture.source}
                  </span>
                  <span className="text-[10px] text-zinc-500 dark:text-zinc-400">{capture.age}</span>
                </div>
                <p className="m-0 text-xs leading-relaxed text-zinc-700 dark:text-zinc-300">
                  {capture.text}
                </p>
              </article>
            ))}
          </div>
          <div className="mt-3 text-[11px] text-zinc-500 dark:text-zinc-400 font-semibold">
            {t('landing.mock.newCapture')}
          </div>
        </aside>

        <main className="p-3.5 sm:p-4 text-left">
          <div className="flex items-center justify-between mb-3">
            <div>
              <h4 className="m-0 text-zinc-900 dark:text-zinc-100 text-[15px] font-semibold">
                {t('landing.mock.extractTitle')}
              </h4>
              <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-0.5 m-0">
                {t('landing.mock.extractMeta')}
              </p>
            </div>
            <div className="text-[11px] px-2.5 py-1 bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 rounded-full font-semibold">
              {t('landing.mock.onTrack')}
            </div>
          </div>

          <div className="rounded-lg border border-slate-200 dark:border-zinc-800 bg-slate-100/85 dark:bg-zinc-900/60 p-2.5 mb-2.5">
            <div className="text-[10px] uppercase tracking-wide text-zinc-500 dark:text-zinc-400 mb-1.5">
              {t('landing.mock.rawInputLabel')}
            </div>
            <p className="m-0 text-xs leading-relaxed text-zinc-700 dark:text-zinc-300">
              {t('landing.mock.rawInputValue')}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {extracted.map((field) => (
              <div
                key={field.label}
                className="rounded-lg border border-slate-200 dark:border-zinc-800 bg-white/92 dark:bg-[#0b0b12] p-2.5"
              >
                <div className="text-[10px] uppercase tracking-wide text-zinc-500 dark:text-zinc-400 mb-1">
                  {field.label}
                </div>
                <div className="text-xs font-semibold text-zinc-900 dark:text-zinc-100 leading-relaxed">
                  {field.value}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-2.5 rounded-lg border border-emerald-500/25 bg-emerald-500/8 dark:bg-emerald-500/10 px-2.5 py-2 flex items-center justify-between gap-2">
            <span className="text-[11px] font-semibold text-zinc-700 dark:text-zinc-200">
              {t('landing.mock.syncReady')}
            </span>
            <span className="text-[10px] text-emerald-600 dark:text-emerald-400 font-semibold">
              {t('landing.mock.pushToBoards')}
            </span>
          </div>
        </main>
      </div>
    </div>
  )
}

export function FeatureCard({
  title,
  description,
  icon,
}: {
  title: string
  description: string
  icon: ReactNode
}) {
  return (
    <div className="h-full p-8 rounded-2xl border border-slate-200 dark:border-zinc-800 bg-white/85 dark:bg-[#0b0b12] backdrop-blur-sm dark:backdrop-blur-none text-left shadow-[0_16px_42px_-30px_rgba(15,23,42,0.45)] dark:shadow-none transition-all duration-300 hover:-translate-y-1 hover:border-emerald-500/40 hover:shadow-[0_24px_52px_-26px_rgba(16,185,129,0.35)] dark:hover:shadow-none">
      <div className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 m-0 mb-2">
        {title}
      </h3>
      <p className="text-[15px] leading-relaxed text-zinc-600 dark:text-zinc-400 m-0">
        {description}
      </p>
    </div>
  )
}

export function BenefitCard({
  metric,
  label,
  description,
}: {
  metric: string
  label: string
  description: string
}) {
  return (
    <div className="h-full text-center p-8 rounded-2xl border border-slate-200 dark:border-zinc-800 bg-white/85 dark:bg-[#0b0b12] backdrop-blur-sm dark:backdrop-blur-none shadow-[0_16px_42px_-30px_rgba(15,23,42,0.45)] dark:shadow-none transition-all duration-300 hover:-translate-y-1 hover:border-emerald-500/40">
      <div className="text-6xl font-bold tracking-tight leading-none bg-linear-to-br from-emerald-500 to-teal-400 bg-clip-text text-transparent">
        {metric}
      </div>
      <div className="text-base font-semibold text-zinc-900 dark:text-zinc-100 mt-3 mb-2">
        {label}
      </div>
      <p className="text-sm text-zinc-600 dark:text-zinc-400 m-0">{description}</p>
    </div>
  )
}
