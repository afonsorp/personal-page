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
    bio: 'Software developer with over 17 years in the industry. I started in frontend, working with JavaScript, Angular, and React, and today lead a six-person development team at Azakaw. My work covers both delivery management and hands-on code: backlog grooming, sprint planning, keeping releases on track, and still writing and reviewing pull requests. I run 1:1s, mentor developers on the frontend, and take part in technical interviews.',
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
          'I lead a six-person software team',
          'Own the team\'s backlog: ticket grooming, estimation, writing and assigning work',
          'Ensure on-time delivery with work tested and release-ready',
          'Run 1:1s and give feedback; mentor developers on the frontend',
          'Write code and review pull requests',
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
          'Contributed to the DZone Portal\'s frontend with Angular and SCSS',
          'Handled production deployments and support tasks',
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
    bio: 'Programador com mais de 17 anos de experiência. Comecei no frontend, com JavaScript, Angular e React, e actualmente lidero uma equipa de seis pessoas na Azakaw. O meu trabalho divide-se entre gestão de entrega e trabalho técnico directo: refinamento de backlog, planeamento de sprints e garantia de qualidade, sem deixar de escrever e rever código. Faço 1:1s, acompanho o crescimento dos programadores do frontend e participo em entrevistas técnicas.',
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
          'Lidero uma equipa de seis programadores',
          'Giro o backlog da equipa: refinamento, estimativas e atribuição de tarefas',
          'Garanto entregas dentro do prazo, com trabalho testado e pronto para produção',
          'Faço 1:1s e dou feedback; acompanho o crescimento dos programadores do frontend',
          'Escrevo código e revejo pull requests',
        ],
      },
      {
        role: 'Programador Frontend Sénior',
        highlights: [],
      },
      {
        role: 'Programador Frontend Sénior',
        highlights: [
          'Contribuí para o frontend dos produtos Lidya (uso interno e público) com React, HTML e LESS',
        ],
      },
      {
        role: 'Programador Frontend',
        highlights: [
          'Contribuí para o frontend do DZone Portal com Angular e SCSS',
          'Geri deploys para produção e tarefas de suporte',
        ],
      },
      {
        role: 'Analista Programador',
        highlights: [
          'Contribuí para o projecto Altaia (PT Inovação) com WebFocus, HTML, CSS e jQuery',
        ],
      },
    ],
    education: [
      { degree: 'Tecnologias e Sistemas de Informação' },
      { degree: 'Informática (Erasmus)' },
    ],
  },
}
