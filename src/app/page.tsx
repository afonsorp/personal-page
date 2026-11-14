'use client'

import { useLang } from '@/contexts/LanguageContext'
import { t } from '@/data/i18n'
import Header from '@/components/Header'
import ExperienceSection from '@/components/ExperienceSection'
import EducationSection from '@/components/EducationSection'
import ContactSection from '@/components/ContactSection'

export default function Home() {
  const { lang } = useLang()
  const tr = t[lang]

  return (
    <main className="max-w-4xl mx-auto px-6 sm:px-10 py-16 sm:py-24">
      <Header subtitle={tr.subtitle} />

      <p className="font-sans text-sm text-muted mt-10 leading-relaxed text-pretty" style={{ maxWidth: '65ch' }}>
        {tr.bio}
      </p>

      <ExperienceSection tr={tr} />
      <EducationSection tr={tr} />
      <ContactSection tr={tr} />
    </main>
  )
}
