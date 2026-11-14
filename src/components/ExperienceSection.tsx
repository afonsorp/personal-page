import { resume } from '@/data/resume'
import type { TranslationData } from '@/data/i18n'

function formatPeriod(start: string, end: string | null, present: string): string {
  const startYear = start.split('-')[0]
  if (!end) return `${startYear} – ${present}`
  const endYear = end.split('-')[0]
  return startYear === endYear ? startYear : `${startYear} – ${endYear}`
}

export default function ExperienceSection({ tr }: { tr: TranslationData }) {
  return (
    <section className="mt-16">
      <h2 className="font-mono text-[11px] text-muted tracking-wide">
        {tr.sections.experience}
      </h2>

      <div className="mt-4 border-t border-rule">
        {resume.experience.map((entry, i) => {
          const expTr = tr.experience[i]
          const isCurrent = entry.end === null
          const period = formatPeriod(entry.start, entry.end, tr.present)

          return (
            <div
              key={i}
              className="group cursor-default py-5 border-b border-rule hover:bg-black/[0.02] transition-colors duration-100 sm:grid sm:grid-cols-[7rem_11rem_1fr] sm:gap-x-6 sm:items-start"
            >
              {/* On mobile: year + company share a line. On desktop: sm:contents makes them individual grid cells. */}
              <div className="flex items-baseline gap-3 mb-1.5 sm:contents">
                <span className="font-mono text-[11px] text-muted group-hover:text-ink/40 transition-colors duration-100 leading-5">
                  {period}
                </span>
                <span className="font-sans text-sm font-medium text-ink leading-5">
                  {entry.company}
                </span>
              </div>

              <div>
                <span className={`font-sans text-sm text-ink leading-5${isCurrent ? ' pencil-mark' : ''}`}>
                  {expTr.role}
                </span>

                {expTr.highlights.length > 0 && (
                  <div className="mt-2 space-y-1">
                    {expTr.highlights.map((h, j) => (
                      <p key={j} className="font-sans text-xs text-muted leading-relaxed">
                        {h}
                      </p>
                    ))}
                  </div>
                )}

                {entry.stack.length > 0 && (
                  <p className="mt-2.5 font-mono text-[10px] tracking-wide" style={{ color: 'rgba(107,107,107,0.5)' }}>
                    {entry.stack.join(' · ')}
                  </p>
                )}
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
