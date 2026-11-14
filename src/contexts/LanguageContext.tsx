'use client'

import { createContext, useContext, useState, useEffect } from 'react'
import type { Lang } from '@/data/i18n'

interface LanguageContextValue {
  lang: Lang
  setLang: (lang: Lang) => void
}

const LanguageContext = createContext<LanguageContextValue>({
  lang: 'en',
  setLang: () => {},
})

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>('en')

  useEffect(() => {
    const saved = localStorage.getItem('lang')
    if (saved === 'en' || saved === 'pt') setLangState(saved)
  }, [])

  useEffect(() => {
    document.documentElement.lang = lang
  }, [lang])

  const setLang = (newLang: Lang) => {
    localStorage.setItem('lang', newLang)
    setLangState(newLang)
  }

  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLang = () => useContext(LanguageContext)
