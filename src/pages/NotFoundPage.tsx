import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import { LanguageSwitcher } from '../components/LanguageSwitcher'

export default function NotFoundPage() {
  const { t } = useTranslation()

  return (
    <main className="min-h-screen bg-[radial-gradient(130%_110%_at_10%_0%,#ffffff_0%,#eef3ff_45%,#edf2fa_100%)] dark:bg-none dark:bg-[#0b0b12] text-zinc-700 dark:text-zinc-300 px-6 py-8 md:px-8 grid place-items-center">
      <div className="w-full max-w-3xl">
        <header className="flex flex-wrap items-center justify-between gap-3 mb-10">
          <Link
            to="/"
            className="text-lg font-bold text-zinc-900 dark:text-zinc-100 no-underline"
          >
            {t('common.brand')}
          </Link>
          <LanguageSwitcher />
        </header>

        <section className="rounded-3xl border border-slate-200 dark:border-zinc-800 bg-white/82 dark:bg-zinc-900/40 backdrop-blur-sm dark:backdrop-blur-none shadow-[0_22px_56px_-34px_rgba(15,23,42,0.38)] dark:shadow-none p-8 md:p-12 text-center">
          <p className="m-0 mb-2 text-sm font-semibold tracking-[0.14em] uppercase text-blue-600 dark:text-blue-400">
            404
          </p>
          <h1 className="m-0 mb-4 text-3xl md:text-5xl font-medium tracking-tight text-zinc-900 dark:text-zinc-100">
            {t('pages.notFound.title')}
          </h1>
          <p className="m-0 text-base md:text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
            {t('pages.notFound.description')}
          </p>

          <div className="mt-8">
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

