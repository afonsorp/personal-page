export type Lang = 'en' | 'pt'

export interface TranslationData {
  subtitle: string
  bio: string
  sections: {
    experience: string
    education: string
    contact: string
  }
  present: string
  experience: Array<{
    role: string
    highlights: string[]
  }>
  education: Array<{
    degree: string
  }>
}

export const t: Record<Lang, TranslationData> = {
  en: {
    subtitle: 'Team Lead & Frontend Developer',
    bio: 'Software developer with over 17 years in the industry. I started in frontend — JavaScript, Angular, React — and today lead a six-person development team at Azakaw. My role combines delivery ownership with hands-on work: backlog grooming, sprint planning, and keeping work tested and release-ready, while still writing code and reviewing pull requests. I run 1:1s, mentor developers on the frontend, and take part in technical interviews.',
    sections: {
      experience: 'experience',
      education: 'education',
      contact: 'contact',
    },
    present: 'present',
    experience: [
      {
        role: 'Team Lead',
        highlights: [
          'Lead a six-person software team',
          'Own the team\'s backlog: ticket grooming, estimation, writing and assigning work',
          'Ensure on-time delivery with work tested and release-ready',
          'Run 1:1s and give feedback; mentor developers on the frontend',
          'Stay hands-on: write code and review pull requests',
        ],
      },
      {
        role: 'Senior Frontend Developer',
        highlights: [],
      },
      {
        role: 'Senior Frontend Developer',
        highlights: [
          'Contributed to Lidya\'s frontend products for internal and public use with React, HTML, and LESS',
        ],
      },
      {
        role: 'Front End Developer',
        highlights: [
          'Contributed to dynamic user experiences for the DZone Portal with Angular and SCSS',
        ],
      },
      {
        role: 'IT Analyst Programmer',
        highlights: [
          'Contributed to the Altaia project (PT Inovação) using WebFocus, HTML, CSS, and jQuery',
        ],
      },
    ],
    education: [
      { degree: 'Technologies and Information Systems' },
      { degree: 'Informatics (Erasmus)' },
    ],
  },

  pt: {
    subtitle: 'Team Lead & Programador Frontend',
    bio: 'Programador com mais de 17 anos de experiência. Comecei no frontend — JavaScript, Angular, React — e actualmente lidero uma equipa de seis pessoas na Azakaw. O meu trabalho combina gestão de entrega com envolvimento técnico directo: refinamento de backlog, planeamento de sprints e garantia de qualidade, sem deixar de escrever e rever código. Faço 1:1s, acompanho o crescimento dos programadores do frontend e participo em entrevistas técnicas.',
    sections: {
      experience: 'experiência',
      education: 'educação',
      contact: 'contacto',
    },
    present: 'presente',
    experience: [
      {
        role: 'Team Lead',
        highlights: [
          'Liderar uma equipa de seis programadores',
          'Gerir o backlog da equipa: refinamento, estimativas e atribuição de tarefas',
          'Garantir entregas dentro do prazo, com trabalho testado e pronto para produção',
          'Realizar 1:1s e dar feedback; acompanhar o crescimento dos programadores do frontend',
          'Manter presença técnica activa: escrever código e rever pull requests',
        ],
      },
      {
        role: 'Programador Frontend Sénior',
        highlights: [],
      },
      {
        role: 'Programador Frontend Sénior',
        highlights: [
          'Contribuiu para o frontend dos produtos Lidya — uso interno e público — com React, HTML e LESS',
        ],
      },
      {
        role: 'Programador Frontend',
        highlights: [
          'Contribuiu para as experiências de utilizador do DZone Portal com Angular e SCSS',
        ],
      },
      {
        role: 'Analista Programador',
        highlights: [
          'Contribuiu para o projecto Altaia (PT Inovação) com WebFocus, HTML, CSS e jQuery',
        ],
      },
    ],
    education: [
      { degree: 'Tecnologias e Sistemas de Informação' },
      { degree: 'Informática (Erasmus)' },
    ],
  },
}
