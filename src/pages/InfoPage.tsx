import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import { LanguageSwitcher } from '../components/LanguageSwitcher'

export type InfoPageKey =
  | 'demo'
  | 'pricing'
  | 'about'
  | 'careers'
  | 'press'
  | 'docs'
  | 'changelog'
  | 'status'

export default function InfoPage({ pageKey }: { pageKey: InfoPageKey }) {
  const { t } = useTranslation()

  return (
    <main className="min-h-screen bg-white dark:bg-[#0b0b12] text-zinc-700 dark:text-zinc-300 px-6 py-8 md:px-8">
      <div className="max-w-4xl mx-auto">
        <header className="flex flex-wrap items-center justify-between gap-3 mb-12">
          <Link
            to="/"
            className="text-lg font-bold text-zinc-900 dark:text-zinc-100 no-underline"
          >
            {t('common.brand')}
          </Link>
          <LanguageSwitcher />
        </header>

        <section className="rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/60 dark:bg-zinc-900/40 p-8 md:p-12">
          <h1 className="m-0 mb-4 text-3xl md:text-5xl font-medium tracking-tight text-zinc-900 dark:text-zinc-100">
            {t(`pages.${pageKey}.title`)}
          </h1>
          <p className="m-0 text-base md:text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-2xl">
            {t(`pages.${pageKey}.description`)}
          </p>

          <div className="mt-8">
            <Link
              to="/"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-br from-fuchsia-500 to-indigo-500 text-white text-[15px] font-semibold no-underline shadow-[0_10px_30px_-12px_rgba(99,102,241,0.6)] hover:-translate-y-0.5 hover:shadow-[0_16px_40px_-12px_rgba(99,102,241,0.75)] transition-all duration-200"
            >
              {t('common.backHome')}
            </Link>
          </div>
        </section>
      </div>
    </main>
  )
}
