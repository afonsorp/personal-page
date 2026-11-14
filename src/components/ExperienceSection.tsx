import { resume } from '@/data/resume'
import type { TranslationData } from '@/data/i18n'
import type { ExperienceEntry } from '@/data/resume'

function formatPeriod(start: string, end: string | null, present: string): string {
  const startYear = start.split('-')[0]
  if (!end) return `${startYear} – ${present}`
  const endYear = end.split('-')[0]
  return startYear === endYear ? startYear : `${startYear} – ${endYear}`
}

type GroupItem = {
  entry: ExperienceEntry
  expTr: TranslationData['experience'][number]
}

export default function ExperienceSection({ tr }: { tr: TranslationData }) {
  // Group consecutive same-company entries so promotions are legible
  const groups: GroupItem[][] = []
  resume.experience.forEach((entry, i) => {
    const last = groups[groups.length - 1]
    if (last && last[0].entry.company.toLowerCase() === entry.company.toLowerCase()) {
      last.push({ entry, expTr: tr.experience[i] })
    } else {
      groups.push([{ entry, expTr: tr.experience[i] }])
    }
  })

  return (
    <section className="mt-16">
      <h2 className="font-mono text-[11px] text-muted tracking-wide">
        {tr.sections.experience}
      </h2>

      <div className="mt-4 border-t border-rule">
        {groups.flatMap((group, gi) =>
          group.map(({ entry, expTr }, j) => {
            const isFirstInGroup = j === 0
            const isLastInGroup = j === group.length - 1
            const isGrouped = group.length > 1
            const isSubEntry = isGrouped && !isFirstInGroup
            const isCurrent = entry.end === null
            const period = formatPeriod(entry.start, entry.end, tr.present)

            return (
              <div
                key={`${gi}-${j}`}
                className={[
                  'group cursor-default hover:bg-black/[0.02] transition-colors duration-100',
                  'sm:grid sm:grid-cols-[7rem_11rem_1fr] sm:gap-x-6 sm:items-start',
                  isLastInGroup ? 'border-b border-rule' : 'border-b border-rule/30',
                  isFirstInGroup ? 'pt-5' : 'pt-3',
                  'pb-5',
                ].join(' ')}
              >
                <div className="flex items-baseline gap-3 mb-1.5 sm:contents">
                  <span className="font-mono text-[11px] text-muted group-hover:text-ink/40 transition-colors duration-100 leading-5">
                    {period}
                  </span>
                  <span className="font-sans text-sm font-medium text-ink leading-5">
                    {isFirstInGroup ? entry.company : ''}
                  </span>
                </div>

                <div>
                  <span className={[
                    'font-sans text-sm font-medium leading-5',
                    isCurrent ? 'text-ink pencil-mark' : isSubEntry ? 'text-muted' : 'text-ink',
                  ].join(' ')}>
                    {expTr.role}
                    {isCurrent && <span className="sr-only"> (current position)</span>}
                  </span>

                  {expTr.highlights.length > 0 && (
                    <div className="mt-2 space-y-1">
                      {expTr.highlights.map((h, k) => (
                        <p key={k} className="font-sans text-xs text-muted leading-relaxed">
                          {h}
                        </p>
                      ))}
                    </div>
                  )}

                  {entry.stack.length > 0 && (
                    <p className="mt-2.5 font-mono text-[11px] text-muted tracking-wide">
                      {entry.stack.join(' · ')}
                    </p>
                  )}
                </div>
              </div>
            )
          })
        )}
      </div>
    </section>
  )
}
