import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import { DisplayControlsMenu } from '../components/DisplayControlsMenu'
import { Logo } from './landing/LandingParts'

export type InfoPageKey =
  | 'demo'
  | 'pricing'
  | 'about'
  | 'careers'
  | 'press'
  | 'docs'
  | 'changelog'
  | 'status'

type PricingTier = {
  name: string
  price: string
  period: string
  blurb: string
  cta: string
  features: string[]
  highlight?: boolean
}

type DemoMeta = {
  badge: string
  note: string
  bullets: string[]
}

export default function InfoPage({ pageKey }: { pageKey: InfoPageKey }) {
  const { t } = useTranslation()
  const isDemo = pageKey === 'demo'
  const isPricing = pageKey === 'pricing'

  const demoMeta = isDemo
    ? (t('pages.demo.meta', {
        returnObjects: true,
      }) as DemoMeta)
    : null

  const pricingMeta = isPricing
    ? (t('pages.pricing.meta', {
        returnObjects: true,
      }) as { badge: string; note: string; footnote: string })
    : null

  const pricingTiers = isPricing
    ? (t('pages.pricing.tiers', { returnObjects: true }) as PricingTier[])
    : []

  return (
    <main className="min-h-screen bg-[radial-gradient(130%_110%_at_10%_0%,#ffffff_0%,#eef3ff_45%,#edf2fa_100%)] dark:bg-none dark:bg-[#0b0b12] text-zinc-700 dark:text-zinc-300 px-6 py-8 md:px-8">
      <div className={`${isPricing ? 'max-w-6xl' : 'max-w-4xl'} mx-auto`}>
        <header className="flex flex-wrap items-center justify-between gap-3 mb-12">
          <Logo />
          <DisplayControlsMenu />
        </header>

        <section className="rounded-3xl border border-slate-200 dark:border-zinc-800 bg-white/82 dark:bg-zinc-900/40 backdrop-blur-sm dark:backdrop-blur-none shadow-[0_22px_56px_-34px_rgba(15,23,42,0.38)] dark:shadow-none p-8 md:p-12">
          <h1 className="m-0 mb-4 text-3xl md:text-5xl font-medium tracking-tight text-zinc-900 dark:text-zinc-100">
            {t(`pages.${pageKey}.title`)}
          </h1>
          <p className="m-0 text-base md:text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-2xl">
            {t(`pages.${pageKey}.description`)}
          </p>

          {isDemo ? (
            <div className="mt-8 rounded-2xl border border-blue-500/25 bg-blue-500/7 dark:bg-blue-500/12 p-5 md:p-6">
              <p className="m-0 text-[11px] uppercase tracking-[0.12em] text-blue-700 dark:text-blue-300 font-semibold">
                {demoMeta?.badge}
              </p>
              <p className="m-0 mt-2 text-sm md:text-base text-zinc-700 dark:text-zinc-200 leading-relaxed">
                {demoMeta?.note}
              </p>

              <ul className="m-0 mt-4 p-0 list-none space-y-2.5">
                {(demoMeta?.bullets ?? []).map((item) => (
                  <li
                    key={item}
                    className="flex gap-2.5 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300"
                  >
                    <span aria-hidden className="text-blue-600 dark:text-blue-400">
                      •
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}

          {isPricing ? (
            <div className="mt-8">
              <p className="m-0 text-[11px] uppercase tracking-[0.12em] text-blue-600 dark:text-blue-400 font-semibold">
                {pricingMeta?.badge}
              </p>

              <div className="mt-4 grid grid-cols-1 lg:grid-cols-3 gap-4">
                {pricingTiers.map((tier) => (
                  <article
                    key={tier.name}
                    className={`rounded-2xl border p-5 md:p-6 backdrop-blur-sm dark:backdrop-blur-none transition-all duration-200 ${
                      tier.highlight
                        ? 'border-blue-500/40 bg-blue-500/7 dark:bg-blue-500/12'
                        : 'border-slate-200 dark:border-zinc-800 bg-white/78 dark:bg-[#0b0b12]'
                    }`}
                  >
                    <h2 className="m-0 text-lg font-semibold text-zinc-900 dark:text-zinc-100">
                      {tier.name}
                    </h2>
                    <p className="m-0 mt-1 text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                      {tier.blurb}
                    </p>

                    <div className="mt-4 flex items-end gap-1.5">
                      <span className="text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">
                        {tier.price}
                      </span>
                      <span className="text-xs text-zinc-500 dark:text-zinc-400 pb-1">
                        {tier.period}
                      </span>
                    </div>

                    <ul className="m-0 mt-4 p-0 list-none space-y-2.5">
                      {tier.features.map((feature) => (
                        <li key={feature} className="flex gap-2.5 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
                          <span aria-hidden className="text-blue-600 dark:text-blue-400">•</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <Link
                      to="/demo"
                      className={`mt-6 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold no-underline transition-all duration-200 ${
                        tier.highlight
                          ? 'bg-linear-to-br from-blue-700 to-cyan-500 dark:from-blue-600 dark:to-cyan-500 text-white shadow-[0_12px_30px_-14px_rgba(37,99,235,0.55)] hover:-translate-y-0.5'
                          : 'bg-white/80 dark:bg-zinc-900/50 text-zinc-700 dark:text-zinc-200 border border-slate-200 dark:border-zinc-700 hover:border-blue-500/40'
                      }`}
                    >
                      {tier.cta}
                    </Link>
                  </article>
                ))}
              </div>

              <p className="m-0 mt-5 text-sm text-zinc-600 dark:text-zinc-300">
                {pricingMeta?.note}
              </p>
              <p className="m-0 mt-1 text-xs text-zinc-500 dark:text-zinc-400">
                {pricingMeta?.footnote}
              </p>
            </div>
          ) : null}

          <div className="mt-8 md:mt-10">
            <Link
              to="/"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-linear-to-br from-blue-700 to-cyan-500 dark:from-blue-600 dark:to-cyan-500 text-white text-[15px] font-semibold no-underline shadow-[0_12px_30px_-14px_rgba(37,99,235,0.55)] hover:-translate-y-0.5 hover:shadow-[0_18px_46px_-16px_rgba(37,99,235,0.68)] dark:shadow-[0_10px_30px_-12px_rgba(99,102,241,0.6)] dark:hover:shadow-[0_16px_40px_-12px_rgba(99,102,241,0.75)] transition-all duration-200"
            >
              {t('common.backHome')}
            </Link>
          </div>
        </section>
      </div>
    </main>
  )
}

