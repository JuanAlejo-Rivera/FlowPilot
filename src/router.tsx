import { useEffect } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import { AppLayout } from '@/layouts/AppLayout'
import InfoPage, { type InfoPageKey } from '@/pages/InfoPage'
import LandingPage from '@/pages/LandingPage'
import NotFoundPage from '@/pages/NotFoundPage'

const infoRoutes: Array<{ path: string; pageKey: InfoPageKey }> = [
  { path: '/demo', pageKey: 'demo' },
  { path: '/pricing', pageKey: 'pricing' },
  { path: '/about', pageKey: 'about' },
  { path: '/careers', pageKey: 'careers' },
  { path: '/press', pageKey: 'press' },
  { path: '/docs', pageKey: 'docs' },
  { path: '/changelog', pageKey: 'changelog' },
  { path: '/status', pageKey: 'status' },
]

function HtmlLanguageSync() {
  const { i18n } = useTranslation()

  useEffect(() => {
    const lang = i18n.resolvedLanguage ?? i18n.language
    document.documentElement.lang = lang.startsWith('es') ? 'es' : 'en'
  }, [i18n.language, i18n.resolvedLanguage])

  return null
}

export default function Router() {
  return (
    <BrowserRouter>
      <HtmlLanguageSync />

      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<LandingPage />} />
          {infoRoutes.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              element={<InfoPage pageKey={route.pageKey} />}
            />
          ))}

          <Route path="/home" element={<Navigate to="/" replace />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}