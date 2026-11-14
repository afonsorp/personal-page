import { resume } from '@/data/resume'
import type { TranslationData } from '@/data/i18n'

export default function ContactSection({ tr }: { tr: TranslationData }) {
  return (
    <section className="mt-16 pb-24">
      <h2 className="font-mono text-[11px] text-muted tracking-wide">
        {tr.sections.contact}
      </h2>

      <div className="mt-4 space-y-2">
        <a
          href={`mailto:${resume.email}`}
          className="block font-sans text-sm text-muted underline decoration-rule underline-offset-2 hover:text-ink hover:decoration-ink transition-colors duration-100"
        >
          {resume.email}
        </a>
        <a
          href={resume.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="block font-sans text-sm text-muted underline decoration-rule underline-offset-2 hover:text-ink hover:decoration-ink transition-colors duration-100"
        >
          linkedin.com/in/afonsorp
        </a>
      </div>
    </section>
  )
}
