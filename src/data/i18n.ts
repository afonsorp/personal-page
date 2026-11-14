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
    bio: 'Software developer with over 17 years in the industry. I started in frontend — JavaScript, AngularJS, React — and today lead a six-person development team at Azakaw. My role combines delivery ownership with hands-on work: backlog grooming, sprint planning, and keeping work tested and release-ready, while still writing code and reviewing pull requests. I run 1:1s, mentor developers on the frontend, and take part in technical interviews.',
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
          'Built Lidya\'s frontend products for internal and public use with React, HTML, and LESS',
        ],
      },
      {
        role: 'Front End Developer',
        highlights: [
          'Built dynamic user experiences for the DZone Portal with AngularJS and SCSS',
        ],
      },
      {
        role: 'IT Analyst Programmer',
        highlights: [
          'Developed the Altaia project (PT Inovação) using WebFocus, HTML, CSS, and jQuery',
        ],
      },
    ],
    education: [
      { degree: 'Technologies and Information Systems' },
      { degree: 'Informatics (Erasmus)' },
    ],
  },

  pt: {
    subtitle: 'Team Lead & Desenvolvedor Frontend',
    bio: 'Programador com mais de 17 anos de experiência na indústria. Comecei no frontend — JavaScript, AngularJS, React — e hoje lidero uma equipa de seis pessoas na Azakaw. O meu papel combina responsabilidade de entrega com trabalho prático: grooming de backlog, planeamento de sprints, e garantir que o trabalho está testado e pronto para produção, sem deixar de escrever código e rever pull requests. Faço 1:1s, mentoro developers no frontend e participo em entrevistas técnicas.',
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
          'Lidera uma equipa de seis pessoas',
          'Responsável pelo backlog: grooming, estimativas, escrita e atribuição de tarefas',
          'Garante entregas no prazo com trabalho testado e pronto para produção',
          'Realiza 1:1s e dá feedback; mentora developers no frontend',
          'Mantém trabalho prático: escreve código e revê pull requests',
        ],
      },
      {
        role: 'Desenvolvedor Frontend Sénior',
        highlights: [],
      },
      {
        role: 'Desenvolvedor Frontend Sénior',
        highlights: [
          'Desenvolveu o frontend dos produtos Lidya para uso interno e público com React, HTML e LESS',
        ],
      },
      {
        role: 'Desenvolvedor Frontend',
        highlights: [
          'Criou experiências dinâmicas para o DZone Portal com AngularJS e SCSS',
        ],
      },
      {
        role: 'Analista Programador',
        highlights: [
          'Desenvolveu o projeto Altaia (PT Inovação) com WebFocus, HTML, CSS e jQuery',
        ],
      },
    ],
    education: [
      { degree: 'Tecnologias e Sistemas de Informação' },
      { degree: 'Informática (Erasmus)' },
    ],
  },
}
