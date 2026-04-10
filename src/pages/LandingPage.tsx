import { useEffect, useRef, useState, type ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import { LanguageSwitcher } from '../components/LanguageSwitcher'

const btnPrimary =
  'inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-500 text-white text-[15px] font-semibold border-0 cursor-pointer no-underline shadow-[0_10px_30px_-12px_rgba(99,102,241,0.6)] hover:-translate-y-0.5 hover:shadow-[0_16px_40px_-12px_rgba(99,102,241,0.75)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-500 transition-all duration-200'

const btnGhost =
  'inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-zinc-100/60 dark:bg-zinc-800/40 text-zinc-900 dark:text-zinc-100 text-[15px] font-semibold border border-zinc-200 dark:border-zinc-800 cursor-pointer no-underline hover:border-blue-500/50 transition-all duration-200'

const eyebrow =
  'inline-block text-xs font-semibold tracking-[0.12em] uppercase text-blue-600 dark:text-blue-400 bg-blue-500/10 px-3 py-1.5 rounded-full border border-blue-500/30'

const sectionHead = 'text-center max-w-3xl mx-auto mb-14'
const sectionH2 =
  'text-3xl md:text-[40px] leading-tight tracking-tight font-medium text-zinc-900 dark:text-zinc-100 mt-4 mb-3'
const sectionLead =
  'text-base md:text-[17px] text-zinc-600 dark:text-zinc-400 leading-relaxed'

function Reveal({
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

function Logo() {
  const { t } = useTranslation()

  return (
    <Link
      to="/"
      aria-label={t('nav.homeAria')}
      className="inline-flex items-center gap-2.5 text-zinc-900 dark:text-zinc-100 font-bold text-lg tracking-tight no-underline"
    >
      <span aria-hidden="true" className="inline-flex">
        <svg viewBox="0 0 24 24" width="24" height="24">
          <defs>
            <linearGradient id="logo-gradient" x1="0" x2="1" y1="0" y2="1">
              <stop offset="0" stopColor="#2563eb" />
              <stop offset="1" stopColor="#06b6d4" />
            </linearGradient>
          </defs>
          <path d="M4 12 L12 4 L20 12 L12 20 Z" fill="url(#logo-gradient)" />
          <circle cx="12" cy="12" r="3" fill="#0b0a0f" />
        </svg>
      </span>
      <span>{t('common.brand')}</span>
    </Link>
  )
}

function Nav() {
  const { t } = useTranslation()
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 flex items-center justify-between px-5 sm:px-8 py-4 backdrop-blur-md backdrop-saturate-150 bg-white/75 dark:bg-[#0b0b12]/75 border-b border-zinc-200 dark:border-zinc-800">
      <Logo />

      <nav
        className={`absolute md:static top-full left-0 right-0 flex flex-col md:flex-row md:items-center gap-0 md:gap-7 bg-white dark:bg-[#0b0b12] md:bg-transparent border-b md:border-b-0 border-zinc-200 dark:border-zinc-800 px-5 md:px-0 pb-4 md:pb-0 pt-2 md:pt-0 transition-all duration-300 md:opacity-100 md:translate-y-0 md:pointer-events-auto ${
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

        <LanguageSwitcher className="mt-3 md:mt-0 md:ml-1" />
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

function MockUI() {
  const { t } = useTranslation()
  const columns = [
    {
      title: t('landing.mock.inProgress'),
      items: [t('landing.mock.onboardingFlow'), t('landing.mock.pricingCopy')],
    },
    {
      title: t('landing.mock.review'),
      items: [t('landing.mock.heroMock'), t('landing.mock.authApi')],
    },
    {
      title: t('landing.mock.done'),
      items: [t('landing.mock.brandDeck'), t('landing.mock.domainSetup')],
    },
  ]

  return (
    <div
      role="img"
      aria-label="FlowPilot workspace preview"
      className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-[#0b0b12] overflow-hidden shadow-[0_30px_80px_-30px_rgba(0,0,0,0.35),0_8px_30px_-10px_rgba(0,0,0,0.15)] [transform:perspective(1600px)_rotateX(2deg)_rotateY(-4deg)] hover:[transform:perspective(1600px)_rotateX(0deg)_rotateY(0deg)] transition-transform duration-500 ease-out"
    >
      <div className="flex items-center gap-1.5 px-3.5 py-3 border-b border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/50">
        <span className="w-2.5 h-2.5 rounded-full bg-red-500" />
        <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
        <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
        <div className="ml-2.5 flex-1 px-3 py-1.5 rounded-lg bg-zinc-100 dark:bg-zinc-800/60 text-xs text-zinc-500 dark:text-zinc-400 font-mono text-left">
          flowpilot.ai/workspace/atlas
        </div>
      </div>
      <div className="grid grid-cols-[150px_1fr] min-h-[320px]">
        <aside className="border-r border-zinc-200 dark:border-zinc-800 p-4 bg-zinc-50/60 dark:bg-zinc-900/40">
          <div className="text-[11px] uppercase tracking-wider text-zinc-500 dark:text-zinc-400 mb-2.5">
            {t('landing.mock.workspace')}
          </div>
          <ul className="list-none p-0 m-0 space-y-0.5">
            <li className="px-2.5 py-1.5 rounded-md text-sm bg-blue-500/10 text-blue-600 dark:text-blue-400 font-semibold">
              {t('landing.mock.dashboard')}
            </li>
            <li className="px-2.5 py-1.5 rounded-md text-sm text-zinc-700 dark:text-zinc-300">
              {t('landing.mock.boards')}
            </li>
            <li className="px-2.5 py-1.5 rounded-md text-sm text-zinc-700 dark:text-zinc-300">
              {t('landing.mock.decisions')}
            </li>
            <li className="px-2.5 py-1.5 rounded-md text-sm text-zinc-700 dark:text-zinc-300">
              {t('landing.mock.inbox')}
            </li>
            <li className="px-2.5 py-1.5 rounded-md text-sm text-zinc-700 dark:text-zinc-300">
              {t('landing.mock.team')}
            </li>
          </ul>
        </aside>
        <main className="p-4 text-left">
          <div className="flex items-center justify-between mb-3.5">
            <div>
              <h4 className="m-0 text-zinc-900 dark:text-zinc-100 text-[15px] font-semibold">
                {t('landing.mock.launchTitle')}
              </h4>
              <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-0.5 m-0">
                {t('landing.mock.launchMeta')}
              </p>
            </div>
            <div className="text-[11px] px-2.5 py-1 bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 rounded-full font-semibold">
              {t('landing.mock.onTrack')}
            </div>
          </div>
          <div className="grid grid-cols-3 gap-2 max-[520px]:grid-cols-1">
            {columns.map((column) => (
              <div
                key={column.title}
                className="bg-zinc-100 dark:bg-zinc-900/60 rounded-lg p-2.5 min-h-[180px]"
              >
                <div className="text-[11px] uppercase tracking-wide text-zinc-500 dark:text-zinc-400 mb-2">
                  {column.title}
                </div>
                {column.items.map((item) => (
                  <div
                    key={item}
                    className="bg-white dark:bg-[#0b0b12] border border-zinc-200 dark:border-zinc-800 rounded-md p-2 mb-1.5 hover:-translate-y-0.5 transition-transform duration-200"
                  >
                    <div className="text-xs text-zinc-900 dark:text-zinc-100 mb-1.5">
                      {item}
                    </div>
                    <div className="flex items-center gap-1.5 text-[10px] text-zinc-500 dark:text-zinc-400">
                      <span className="w-3.5 h-3.5 rounded-full bg-gradient-to-br from-blue-600 to-cyan-500 inline-block" />
                      <span>2d</span>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  )
}

function FeatureCard({
  title,
  description,
  icon,
}: {
  title: string
  description: string
  icon: ReactNode
}) {
  return (
    <div className="h-full p-8 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-[#0b0b12] text-left transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/40 hover:shadow-[0_20px_40px_-20px_rgba(37,99,235,0.28)]">
      <div className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400 mb-4">
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

function BenefitCard({
  metric,
  label,
  description,
}: {
  metric: string
  label: string
  description: string
}) {
  return (
    <div className="h-full text-center p-8 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-[#0b0b12] transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/40">
      <div className="text-6xl font-bold tracking-tight leading-none bg-gradient-to-br from-blue-600 to-cyan-500 bg-clip-text text-transparent">
        {metric}
      </div>
      <div className="text-base font-semibold text-zinc-900 dark:text-zinc-100 mt-3 mb-2">
        {label}
      </div>
      <p className="text-sm text-zinc-600 dark:text-zinc-400 m-0">{description}</p>
    </div>
  )
}

export default function LandingPage() {
  const { t } = useTranslation()

  const features = [
    {
      title: t('landing.features.captureTitle'),
      description: t('landing.features.captureDesc'),
      icon: (
        <svg
          viewBox="0 0 24 24"
          width="24"
          height="24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M5.6 18.4l2.1-2.1M16.3 7.7l2.1-2.1" />
          <circle cx="12" cy="12" r="3" />
        </svg>
      ),
    },
    {
      title: t('landing.features.boardsTitle'),
      description: t('landing.features.boardsDesc'),
      icon: (
        <svg
          viewBox="0 0 24 24"
          width="24"
          height="24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="3" y="4" width="7" height="16" rx="1.5" />
          <rect x="14" y="4" width="7" height="9" rx="1.5" />
          <rect x="14" y="16" width="7" height="4" rx="1.5" />
        </svg>
      ),
    },
    {
      title: t('landing.features.memoryTitle'),
      description: t('landing.features.memoryDesc'),
      icon: (
        <svg
          viewBox="0 0 24 24"
          width="24"
          height="24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M21 12a9 9 0 1 1-3.2-6.9" />
          <path d="M21 4v5h-5" />
          <path d="M12 7v5l3 2" />
        </svg>
      ),
    },
  ]

  const benefits = [
    {
      metric: t('landing.benefits.meetingsMetric'),
      label: t('landing.benefits.meetingsLabel'),
      description: t('landing.benefits.meetingsDesc'),
    },
    {
      metric: t('landing.benefits.onboardingMetric'),
      label: t('landing.benefits.onboardingLabel'),
      description: t('landing.benefits.onboardingDesc'),
    },
    {
      metric: t('landing.benefits.truthMetric'),
      label: t('landing.benefits.truthLabel'),
      description: t('landing.benefits.truthDesc'),
    },
  ]

  const stats = [
    { value: t('landing.proof.teamsValue'), label: t('landing.proof.teamsLabel') },
    { value: t('landing.proof.ratingValue'), label: t('landing.proof.ratingLabel') },
    { value: t('landing.proof.savedValue'), label: t('landing.proof.savedLabel') },
    { value: t('landing.proof.uptimeValue'), label: t('landing.proof.uptimeLabel') },
  ]

  const logos = t('landing.proof.logos', { returnObjects: true }) as string[]

  return (
    <div
      id="top"
      className="min-h-screen w-full bg-white dark:bg-[#0b0b12] text-zinc-600 dark:text-zinc-400 font-sans antialiased"
    >
      <Nav />

      <section className="relative overflow-hidden max-w-[1280px] mx-auto px-6 md:px-8 py-16 md:py-24 grid gap-12 md:gap-14 md:grid-cols-[1.05fr_1.15fr] items-center">
        <div
          aria-hidden
          className="absolute inset-0 pointer-events-none bg-[radial-gradient(60%_55%_at_80%_10%,rgba(37,99,235,0.18),transparent_60%),radial-gradient(50%_50%_at_10%_90%,rgba(6,182,212,0.15),transparent_60%)]"
        />

        <Reveal className="relative">
          <span className={eyebrow}>{t('landing.badge')}</span>
          <h1 className="mt-5 mb-5 text-[44px] md:text-6xl leading-[1.05] tracking-[-0.02em] font-medium text-zinc-900 dark:text-zinc-100">
            {t('landing.hero.titleLead')}{' '}
            <span className="bg-gradient-to-br from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              {t('landing.hero.titleAccent')}
            </span>
            {t('landing.hero.titleTail')}
          </h1>
          <p className="text-[17px] md:text-[19px] leading-relaxed text-zinc-600 dark:text-zinc-400 max-w-[540px]">
            {t('landing.hero.subtitle')}
          </p>
          <div className="flex flex-wrap gap-3 mt-8 mb-3.5">
            <a href="#cta" className={btnPrimary}>
              {t('nav.startFree')} <span aria-hidden>â†’</span>
            </a>
            <Link to="/demo" className={btnGhost}>
              <svg
                aria-hidden
                viewBox="0 0 12 12"
                width="12"
                height="12"
                className="fill-current"
              >
                <polygon points="0,0 12,6 0,12" />
              </svg>
              {t('landing.hero.watchDemo')}
            </Link>
          </div>
          <div className="text-[13px] text-zinc-500 dark:text-zinc-500">
            {t('landing.hero.note')}
          </div>
        </Reveal>

        <Reveal delay={120} className="relative">
          <MockUI />
          <div
            aria-hidden
            className="absolute -inset-[10%] -z-10 blur-3xl bg-[radial-gradient(closest-side,rgba(37,99,235,0.35),transparent_70%)]"
          />
        </Reveal>
      </section>

      <section
        id="features"
        className="px-6 md:px-8 py-20 md:py-24 border-t border-zinc-200 dark:border-zinc-800"
      >
        <Reveal className={sectionHead}>
          <span className={eyebrow}>{t('landing.features.badge')}</span>
          <h2 className={sectionH2}>{t('landing.features.title')}</h2>
          <p className={sectionLead}>{t('landing.features.lead')}</p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-[1120px] mx-auto">
          {features.map((feature, index) => (
            <Reveal key={feature.title} delay={index * 90}>
              <FeatureCard {...feature} />
            </Reveal>
          ))}
        </div>
      </section>

      <section
        id="benefits"
        className="px-6 md:px-8 py-20 md:py-24 border-t border-zinc-200 dark:border-zinc-800 bg-[radial-gradient(80%_60%_at_50%_0%,rgba(37,99,235,0.10),transparent_70%)]"
      >
        <Reveal className={sectionHead}>
          <span className={eyebrow}>{t('landing.benefits.badge')}</span>
          <h2 className={sectionH2}>{t('landing.benefits.title')}</h2>
          <p className={sectionLead}>{t('landing.benefits.lead')}</p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-[1120px] mx-auto">
          {benefits.map((benefit, index) => (
            <Reveal key={benefit.label} delay={index * 80}>
              <BenefitCard {...benefit} />
            </Reveal>
          ))}
        </div>
      </section>

      <section
        id="proof"
        className="px-6 md:px-8 py-20 md:py-24 border-t border-zinc-200 dark:border-zinc-800"
      >
        <Reveal className={sectionHead}>
          <span className={eyebrow}>{t('landing.proof.badge')}</span>
          <h2 className={sectionH2}>{t('landing.proof.title')}</h2>
        </Reveal>

        <Reveal className="flex flex-wrap justify-center gap-3 max-w-[900px] mx-auto mb-14">
          {logos.map((name) => (
            <span
              key={name}
              className="px-4 py-2.5 border border-zinc-200 dark:border-zinc-800 rounded-full text-sm font-semibold text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 hover:border-blue-500/40 hover:-translate-y-0.5 transition-all duration-200"
            >
              {name}
            </span>
          ))}
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-[1.2fr_1fr] gap-6 max-w-[1120px] mx-auto items-stretch">
          <Reveal>
            <div className="h-full p-9 rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-[#0b0b12]">
              <p className="text-xl md:text-[22px] leading-snug tracking-tight text-zinc-900 dark:text-zinc-100 m-0 mb-6">
                {t('landing.proof.testimonial')}
              </p>
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-full bg-gradient-to-br from-blue-600 to-cyan-500 text-white inline-flex items-center justify-center font-bold text-sm">
                  MR
                </div>
                <div>
                  <strong className="block text-sm text-zinc-900 dark:text-zinc-100">
                    {t('landing.proof.person')}
                  </strong>
                  <span className="text-[13px] text-zinc-500 dark:text-zinc-400">
                    {t('landing.proof.role')}
                  </span>
                </div>
              </div>
            </div>
          </Reveal>

          <div className="grid grid-cols-2 max-[520px]:grid-cols-1 gap-4">
            {stats.map((stat, index) => (
              <Reveal key={stat.label} delay={index * 60}>
                <div className="h-full text-center p-7 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-[#0b0b12] hover:-translate-y-1 hover:border-blue-500/40 transition-all duration-200">
                  <div className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
                    {stat.value}
                  </div>
                  <div className="text-[13px] text-zinc-500 dark:text-zinc-400 mt-1">
                    {stat.label}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="cta" className="px-6 md:px-8 py-20 md:py-24">
        <Reveal>
          <div className="max-w-[880px] mx-auto rounded-[24px] border border-blue-500/40 px-8 md:px-12 py-14 md:py-16 text-center bg-white dark:bg-[#0b0b12] [background-image:radial-gradient(60%_80%_at_50%_0%,rgba(37,99,235,0.18),transparent_70%)]">
            <h2 className="text-3xl md:text-[40px] tracking-tight font-medium text-zinc-900 dark:text-zinc-100 m-0 mb-3">
              {t('landing.cta.title')}
            </h2>
            <p className="text-base md:text-[17px] text-zinc-600 dark:text-zinc-400 m-0 mb-7">
              {t('landing.cta.lead')}
            </p>
            <form
              onSubmit={(event) => event.preventDefault()}
              className="flex flex-wrap gap-2 max-w-[480px] mx-auto mb-3.5"
            >
              <input
                type="email"
                placeholder={t('landing.cta.emailPlaceholder')}
                aria-label={t('landing.cta.emailAria')}
                required
                className="flex-1 min-w-[240px] px-4 py-3.5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-[#0b0b12] text-zinc-900 dark:text-zinc-100 text-[15px] outline-none focus:border-blue-500 transition-colors"
              />
              <button type="submit" className={btnPrimary}>
                {t('landing.cta.requestAccess')}
              </button>
            </form>
            <div className="text-[13px] text-zinc-500 dark:text-zinc-400">
              {t('landing.cta.note')}
            </div>
          </div>
        </Reveal>
      </section>

      <footer className="px-6 md:px-8 pt-14 pb-8 border-t border-zinc-200 dark:border-zinc-800 bg-zinc-50/60 dark:bg-zinc-900/40">
        <div className="max-w-[1120px] mx-auto grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-10 mb-10">
          <div>
            <Logo />
            <p className="mt-4 text-sm text-zinc-600 dark:text-zinc-400 max-w-[280px] m-0">
              {t('landing.footer.blurb')}
            </p>
          </div>

          <nav className="grid grid-cols-2 sm:grid-cols-3 gap-6">
            <div>
              <h4 className="text-[13px] uppercase tracking-wider text-zinc-900 dark:text-zinc-100 m-0 mb-3 font-semibold">
                {t('landing.footer.product')}
              </h4>
              <a
                href="#features"
                className="block text-sm text-zinc-600 dark:text-zinc-400 mb-2 no-underline hover:text-blue-500 transition-colors"
              >
                {t('landing.footer.links.features')}
              </a>
              <a
                href="#benefits"
                className="block text-sm text-zinc-600 dark:text-zinc-400 mb-2 no-underline hover:text-blue-500 transition-colors"
              >
                {t('landing.footer.links.benefits')}
              </a>
              <Link
                to="/pricing"
                className="block text-sm text-zinc-600 dark:text-zinc-400 mb-2 no-underline hover:text-blue-500 transition-colors"
              >
                {t('landing.footer.links.pricing')}
              </Link>
            </div>

            <div>
              <h4 className="text-[13px] uppercase tracking-wider text-zinc-900 dark:text-zinc-100 m-0 mb-3 font-semibold">
                {t('landing.footer.company')}
              </h4>
              <Link
                to="/about"
                className="block text-sm text-zinc-600 dark:text-zinc-400 mb-2 no-underline hover:text-blue-500 transition-colors"
              >
                {t('landing.footer.links.about')}
              </Link>
              <Link
                to="/careers"
                className="block text-sm text-zinc-600 dark:text-zinc-400 mb-2 no-underline hover:text-blue-500 transition-colors"
              >
                {t('landing.footer.links.careers')}
              </Link>
              <Link
                to="/press"
                className="block text-sm text-zinc-600 dark:text-zinc-400 mb-2 no-underline hover:text-blue-500 transition-colors"
              >
                {t('landing.footer.links.press')}
              </Link>
            </div>

            <div>
              <h4 className="text-[13px] uppercase tracking-wider text-zinc-900 dark:text-zinc-100 m-0 mb-3 font-semibold">
                {t('landing.footer.resources')}
              </h4>
              <Link
                to="/docs"
                className="block text-sm text-zinc-600 dark:text-zinc-400 mb-2 no-underline hover:text-blue-500 transition-colors"
              >
                {t('landing.footer.links.docs')}
              </Link>
              <Link
                to="/changelog"
                className="block text-sm text-zinc-600 dark:text-zinc-400 mb-2 no-underline hover:text-blue-500 transition-colors"
              >
                {t('landing.footer.links.changelog')}
              </Link>
              <Link
                to="/status"
                className="block text-sm text-zinc-600 dark:text-zinc-400 mb-2 no-underline hover:text-blue-500 transition-colors"
              >
                {t('landing.footer.links.status')}
              </Link>
            </div>
          </nav>
        </div>

        <div className="max-w-[1120px] mx-auto flex flex-col md:flex-row justify-between gap-2 pt-6 border-t border-zinc-200 dark:border-zinc-800 text-[13px] text-zinc-500 dark:text-zinc-500 text-center md:text-left">
          <span>{'\u00A9'} {new Date().getFullYear()} {t('common.brand')}, Inc.</span>
          <span>{t('landing.footer.madeWith')}</span>
        </div>
      </footer>
    </div>
  )
}

