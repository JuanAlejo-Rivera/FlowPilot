import { useTranslation } from 'react-i18next'

type LanguageCode = 'en' | 'es'

export function LanguageSwitcher({ className = '' }: { className?: string }) {
  const { i18n, t } = useTranslation()
  const activeLanguage: LanguageCode =
    (i18n.resolvedLanguage ?? i18n.language).startsWith('es') ? 'es' : 'en'

  return (
    <div
      role="group"
      aria-label={t('common.language.label')}
      className={`inline-flex items-center gap-1 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white/80 dark:bg-zinc-900/60 p-1 ${className}`}
    >
      <button
        type="button"
        onClick={() => void i18n.changeLanguage('en')}
        className={`px-2.5 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
          activeLanguage === 'en'
            ? 'bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900'
            : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100'
        }`}
      >
        {t('common.language.en')}
      </button>
      <button
        type="button"
        onClick={() => void i18n.changeLanguage('es')}
        className={`px-2.5 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
          activeLanguage === 'es'
            ? 'bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900'
            : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100'
        }`}
      >
        {t('common.language.es')}
      </button>
    </div>
  )
}
