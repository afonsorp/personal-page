'use client'

import { motion } from 'framer-motion'
import { resume } from '@/data/resume'
import LangToggle from './LangToggle'

interface HeaderProps {
  subtitle: string
}

export default function Header({ subtitle }: HeaderProps) {
  return (
    <header>
      <div className="flex items-start justify-between gap-6">
        <motion.h1
          className="font-lora font-bold leading-[0.93] tracking-tight text-ink"
          style={{ fontSize: 'clamp(2.75rem, 7.5vw, 6rem)' }}
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
        >
          Pedro Afonso
        </motion.h1>
        <LangToggle />
      </div>

      <hr className="border-t border-rule mt-5 mb-3" />

      <p className="font-sans text-sm text-muted">
        {subtitle}&ensp;·&ensp;{resume.location}
      </p>
    </header>
  )
}
