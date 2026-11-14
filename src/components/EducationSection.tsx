import { resume } from '@/data/resume'
import type { TranslationData } from '@/data/i18n'

export default function EducationSection({ tr }: { tr: TranslationData }) {
  return (
    <section className="mt-16">
      <h2 className="font-mono text-[11px] text-muted tracking-wide">
        {tr.sections.education}
      </h2>

      <div className="mt-4 border-t border-rule">
        {resume.education.map((entry, i) => (
          <div
            key={i}
            className="group cursor-default py-5 border-b border-rule hover:bg-black/[0.02] transition-colors duration-100 sm:grid sm:grid-cols-[7rem_11rem_1fr] sm:gap-x-6 sm:items-start"
          >
            <div className="flex items-baseline gap-3 mb-1.5 sm:contents">
              <span className="font-mono text-[11px] text-muted group-hover:text-ink/40 transition-colors duration-100 leading-5">
                {entry.start} – {entry.end}
              </span>
              <span className="font-sans text-sm font-medium text-ink leading-5">
                {entry.institution}
              </span>
            </div>

            <span className="font-sans text-sm text-muted leading-5">
              {tr.education[i].degree}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}
