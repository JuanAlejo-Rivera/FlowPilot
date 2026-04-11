import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import { BackToTop } from '@/components/BackToTop'
import {
  BenefitCard,
  FeatureCard,
  Logo,
  MockUI,
  Nav,
  Reveal,
  btnGhost,
  btnPrimary,
  eyebrow,
  sectionH2,
  sectionHead,
  sectionLead,
} from '@/pages/landing/LandingParts'

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

  const featureSpans = ['md:col-span-4', 'md:col-span-2', 'md:col-span-6']

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
      className="min-h-screen w-full bg-[radial-gradient(120%_120%_at_0%_0%,#ffffff_0%,#eef9f4_38%,#edf8f3_100%)] dark:bg-none dark:bg-[#0b0b12] text-zinc-600 dark:text-zinc-400 font-sans antialiased"
    >
      <Nav />

      <section className="relative overflow-hidden max-w-7xl mx-auto px-6 md:px-8 py-16 md:py-24 grid gap-12 md:gap-14 md:grid-cols-[1.05fr_1.15fr] items-center">
        <div
          aria-hidden
          className="absolute inset-0 pointer-events-none bg-[radial-gradient(60%_55%_at_80%_10%,rgba(16,185,129,0.18),transparent_60%),radial-gradient(50%_50%_at_10%_90%,rgba(45,212,191,0.15),transparent_60%)] dark:opacity-40"
        />

        <Reveal className="relative">
          <span className={eyebrow}>{t('landing.badge')}</span>
          <h1 className="mt-5 mb-5 text-[44px] md:text-6xl leading-[1.05] tracking-[-0.02em] font-medium text-zinc-900 dark:text-zinc-100">
            {t('landing.hero.titleLead')}{' '}
            <span className="bg-linear-to-br from-emerald-500 to-teal-400 bg-clip-text text-transparent">
              {t('landing.hero.titleAccent')}
            </span>
            {t('landing.hero.titleTail')}
          </h1>
          <p className="text-[17px] md:text-[19px] leading-relaxed text-zinc-600 dark:text-zinc-400 max-w-135">
            {t('landing.hero.subtitle')}
          </p>
          <div className="flex flex-wrap gap-3 mt-8 mb-3.5">
            <a href="#cta" className={btnPrimary}>
              {t('nav.startFree')} <span aria-hidden>{'->'}</span>
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
            className="absolute -inset-[10%] -z-10 blur-3xl bg-[radial-gradient(closest-side,rgba(16,185,129,0.35),transparent_70%)] dark:opacity-40"
          />
        </Reveal>
      </section>

      <section
        id="features"
        className="px-6 md:px-8 py-20 md:py-24 border-t border-slate-200 dark:border-zinc-800"
      >
        <Reveal className={sectionHead}>
          <span className={eyebrow}>{t('landing.features.badge')}</span>
          <h2 className={sectionH2}>{t('landing.features.title')}</h2>
          <p className={sectionLead}>{t('landing.features.lead')}</p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-6 gap-6 max-w-280 mx-auto">
          {features.map((feature, index) => (
            <Reveal
              key={feature.title}
              delay={index * 90}
              className={featureSpans[index] ?? 'md:col-span-3'}
            >
              <FeatureCard {...feature} />
            </Reveal>
          ))}
        </div>
      </section>

      <section
        id="benefits"
        className="px-6 md:px-8 py-20 md:py-24 border-t border-slate-200 dark:border-zinc-800 bg-[radial-gradient(80%_60%_at_50%_0%,rgba(16,185,129,0.10),transparent_70%)] dark:bg-none"
      >
        <Reveal className={sectionHead}>
          <span className={eyebrow}>{t('landing.benefits.badge')}</span>
          <h2 className={sectionH2}>{t('landing.benefits.title')}</h2>
          <p className={sectionLead}>{t('landing.benefits.lead')}</p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-280 mx-auto">
          {benefits.map((benefit, index) => (
            <Reveal key={benefit.label} delay={index * 80}>
              <BenefitCard {...benefit} />
            </Reveal>
          ))}
        </div>
      </section>

      <section
        id="proof"
        className="px-6 md:px-8 py-20 md:py-24 border-t border-slate-200 dark:border-zinc-800"
      >
        <Reveal className={sectionHead}>
          <span className={eyebrow}>{t('landing.proof.badge')}</span>
          <h2 className={sectionH2}>{t('landing.proof.title')}</h2>
        </Reveal>

        <Reveal className="flex flex-wrap justify-center gap-3 max-w-225 mx-auto mb-14">
          {logos.map((name) => (
            <span
              key={name}
              className="px-4 py-2.5 border border-slate-200 dark:border-zinc-800 bg-white/65 dark:bg-transparent rounded-full text-sm font-semibold text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 hover:border-emerald-500/40 hover:-translate-y-0.5 transition-all duration-200"
            >
              {name}
            </span>
          ))}
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-[1.2fr_1fr] gap-6 max-w-280 mx-auto items-stretch">
          <Reveal>
            <div className="h-full p-9 rounded-3xl border border-slate-200 dark:border-zinc-800 bg-white/88 dark:bg-[#0b0b12] backdrop-blur-sm dark:backdrop-blur-none shadow-[0_20px_54px_-34px_rgba(15,23,42,0.42)] dark:shadow-none">
              <p className="text-xl md:text-[22px] leading-snug tracking-tight text-zinc-900 dark:text-zinc-100 m-0 mb-6">
                {t('landing.proof.testimonial')}
              </p>
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-full bg-linear-to-br from-emerald-500 to-teal-400 text-white inline-flex items-center justify-center font-bold text-sm">
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
                <div className="h-full text-center p-7 rounded-2xl border border-slate-200 dark:border-zinc-800 bg-white/84 dark:bg-[#0b0b12] backdrop-blur-sm dark:backdrop-blur-none shadow-[0_14px_36px_-28px_rgba(15,23,42,0.4)] dark:shadow-none hover:-translate-y-1 hover:border-emerald-500/40 transition-all duration-200">
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
          <div className="max-w-220 mx-auto rounded-3xl border border-emerald-500/40 px-8 md:px-12 py-14 md:py-16 text-center bg-white/88 dark:bg-[#0b0b12] backdrop-blur-sm dark:backdrop-blur-none shadow-[0_26px_64px_-30px_rgba(15,23,42,0.34)] dark:shadow-none bg-[radial-gradient(60%_80%_at_50%_0%,rgba(16,185,129,0.18),transparent_70%)] dark:bg-none">
            <h2 className="text-3xl md:text-[40px] tracking-tight font-medium text-zinc-900 dark:text-zinc-100 m-0 mb-3">
              {t('landing.cta.title')}
            </h2>
            <p className="text-base md:text-[17px] text-zinc-600 dark:text-zinc-400 m-0 mb-7">
              {t('landing.cta.lead')}
            </p>
            <form
              onSubmit={(event) => event.preventDefault()}
              className="flex flex-wrap gap-2 max-w-120 mx-auto mb-3.5"
            >
              <input
                type="email"
                placeholder={t('landing.cta.emailPlaceholder')}
                aria-label={t('landing.cta.emailAria')}
                required
                className="w-full min-w-0 sm:flex-1 sm:min-w-60 px-4 py-3.5 rounded-xl border border-slate-200 dark:border-zinc-800 bg-white/85 dark:bg-[#0b0b12] text-zinc-900 dark:text-zinc-100 text-[15px] outline-none focus:border-emerald-500 transition-colors"
              />
              <button type="submit" className={`${btnPrimary} w-full sm:w-auto`}>
                {t('landing.cta.requestAccess')}
              </button>
            </form>
            <div className="text-[13px] text-zinc-500 dark:text-zinc-400">
              {t('landing.cta.note')}
            </div>
          </div>
        </Reveal>
      </section>

      <footer className="px-6 md:px-8 pt-14 pb-8 border-t border-slate-300/70 dark:border-zinc-800 bg-[linear-gradient(180deg,rgba(255,255,255,0.58),rgba(226,232,240,0.75))] dark:bg-none dark:bg-zinc-900/40">
        <div className="max-w-280 mx-auto grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-10 mb-10">
          <div>
            <Logo />
            <p className="mt-4 text-sm text-zinc-600 dark:text-zinc-400 max-w-70 m-0">
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
                className="block text-sm text-zinc-600 dark:text-zinc-400 mb-2 no-underline hover:text-emerald-500 transition-colors"
              >
                {t('landing.footer.links.features')}
              </a>
              <a
                href="#benefits"
                className="block text-sm text-zinc-600 dark:text-zinc-400 mb-2 no-underline hover:text-emerald-500 transition-colors"
              >
                {t('landing.footer.links.benefits')}
              </a>
              <Link
                to="/pricing"
                className="block text-sm text-zinc-600 dark:text-zinc-400 mb-2 no-underline hover:text-emerald-500 transition-colors"
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
                className="block text-sm text-zinc-600 dark:text-zinc-400 mb-2 no-underline hover:text-emerald-500 transition-colors"
              >
                {t('landing.footer.links.about')}
              </Link>
              <Link
                to="/careers"
                className="block text-sm text-zinc-600 dark:text-zinc-400 mb-2 no-underline hover:text-emerald-500 transition-colors"
              >
                {t('landing.footer.links.careers')}
              </Link>
              <Link
                to="/press"
                className="block text-sm text-zinc-600 dark:text-zinc-400 mb-2 no-underline hover:text-emerald-500 transition-colors"
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
                className="block text-sm text-zinc-600 dark:text-zinc-400 mb-2 no-underline hover:text-emerald-500 transition-colors"
              >
                {t('landing.footer.links.docs')}
              </Link>
              <Link
                to="/changelog"
                className="block text-sm text-zinc-600 dark:text-zinc-400 mb-2 no-underline hover:text-emerald-500 transition-colors"
              >
                {t('landing.footer.links.changelog')}
              </Link>
              <Link
                to="/status"
                className="block text-sm text-zinc-600 dark:text-zinc-400 mb-2 no-underline hover:text-emerald-500 transition-colors"
              >
                {t('landing.footer.links.status')}
              </Link>
            </div>
          </nav>
        </div>

        <div className="max-w-280 mx-auto flex flex-col md:flex-row justify-between gap-2 pt-6 border-t border-slate-300/70 dark:border-zinc-800 text-[13px] text-zinc-500 dark:text-zinc-500 text-center md:text-left">
          <span>{'\u00A9'} {new Date().getFullYear()} {t('common.brand')}, Inc.</span>
          <span>{t('landing.footer.madeWith')}</span>
        </div>
      </footer>

      <BackToTop />
    </div>
  )
}

