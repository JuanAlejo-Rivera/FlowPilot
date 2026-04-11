import { useTranslation } from 'react-i18next'

type LanguageCode = 'en' | 'es'

type LanguageSwitcherProps = {
  className?: string
  compact?: boolean
  onChange?: (language: LanguageCode) => void
}

export function LanguageSwitcher({
  className = '',
  compact = false,
  onChange,
}: LanguageSwitcherProps) {
  const { i18n, t } = useTranslation()
  const activeLanguage: LanguageCode =
    (i18n.resolvedLanguage ?? i18n.language).startsWith('es') ? 'es' : 'en'

  const changeLanguage = (language: LanguageCode) => {
    void i18n.changeLanguage(language)
    onChange?.(language)
  }

  const rootStyles = compact
    ? 'inline-flex items-center gap-0.5 p-0.5'
    : 'inline-flex items-center gap-0.5 rounded-xl border border-zinc-300/75 dark:border-zinc-700/75 bg-white/55 dark:bg-zinc-900/45 backdrop-blur-sm dark:backdrop-blur-none p-0.5'

  const buttonBase = compact
    ? 'px-2 py-1 rounded-md text-[11px] font-semibold transition-colors'
    : 'px-2.5 py-1.5 rounded-lg text-xs font-semibold transition-colors'

  const activeStyles =
    'bg-zinc-200 text-zinc-900 dark:bg-zinc-700 dark:text-zinc-100'
  const inactiveStyles =
    'text-zinc-500 dark:text-zinc-400 hover:text-zinc-800 dark:hover:text-zinc-200'

  return (
    <div
      role="group"
      aria-label={t('common.language.label')}
      className={`${rootStyles} ${className}`}
    >
      <button
        type="button"
        onClick={() => changeLanguage('en')}
        className={`${buttonBase} ${
          activeLanguage === 'en' ? activeStyles : inactiveStyles
        }`}
      >
        {t('common.language.en')}
      </button>
      <button
        type="button"
        onClick={() => changeLanguage('es')}
        className={`${buttonBase} ${
          activeLanguage === 'es' ? activeStyles : inactiveStyles
        }`}
      >
        {t('common.language.es')}
      </button>
    </div>
  )
}
