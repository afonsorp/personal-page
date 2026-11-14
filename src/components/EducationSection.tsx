import { resume } from '@/data/resume'
import type { TranslationData } from '@/data/i18n'
import type { EducationEntry } from '@/data/resume'

function isSubEntry(entry: EducationEntry, prev: EducationEntry): boolean {
  const start = parseInt(entry.start)
  const end = parseInt(entry.end)
  const prevStart = parseInt(prev.start)
  const prevEnd = parseInt(prev.end)
  return start >= prevStart && end <= prevEnd
}

export default function EducationSection({ tr }: { tr: TranslationData }) {
  return (
    <section className="mt-16">
      <h2 className="font-mono text-[11px] text-muted tracking-wide">
        {tr.sections.education}
      </h2>

      <div className="mt-4 border-t border-rule">
        {resume.education.map((entry, i) => {
          const prev = i > 0 ? resume.education[i - 1] : null
          const isSub = prev ? isSubEntry(entry, prev) : false
          const nextEntry = i < resume.education.length - 1 ? resume.education[i + 1] : null
          const hasSubNext = nextEntry ? isSubEntry(nextEntry, entry) : false

          return (
            <div
              key={i}
              className={[
                'group cursor-default hover:bg-black/[0.02] transition-colors duration-100',
                'sm:grid sm:grid-cols-[7rem_11rem_1fr] sm:gap-x-6 sm:items-start',
                hasSubNext ? 'border-b border-rule/30' : 'border-b border-rule',
                isSub ? 'pt-3' : 'pt-5',
                'pb-5',
              ].join(' ')}
            >
              <div className="flex items-baseline gap-3 mb-1.5 sm:contents">
                <span className="font-mono text-[11px] text-muted group-hover:text-ink/40 transition-colors duration-100 leading-5">
                  {entry.start} – {entry.end}
                </span>
                <span className={[
                  'font-sans text-sm leading-5',
                  isSub ? 'text-muted' : 'font-medium text-ink',
                ].join(' ')}>
                  {entry.institution}
                </span>
              </div>

              <span className={[
                'font-sans text-sm leading-5',
                isSub ? 'text-muted' : 'font-medium text-ink',
              ].join(' ')}>
                {tr.education[i].degree}
              </span>
            </div>
          )
        })}
      </div>
    </section>
  )
}
