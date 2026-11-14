'use client'

import { useLang } from '@/contexts/LanguageContext'

export default function LangToggle() {
  const { lang, setLang } = useLang()

  return (
    <div className="font-mono text-xs flex items-center gap-1.5 mt-1 shrink-0">
      <button
        onClick={() => setLang('en')}
        className={`transition-colors duration-100 ${lang === 'en' ? 'text-ink' : 'text-muted hover:text-ink'}`}
        aria-pressed={lang === 'en'}
      >
        EN
      </button>
      <span className="text-rule select-none">·</span>
      <button
        onClick={() => setLang('pt')}
        className={`transition-colors duration-100 ${lang === 'pt' ? 'text-ink' : 'text-muted hover:text-ink'}`}
        aria-pressed={lang === 'pt'}
      >
        PT
      </button>
    </div>
  )
}
