// Short, dated updates shown on the home page ("Now / News").
// Newest first. `href` is optional.

export type NewsItem = { date: string; kind: string; text: string; href?: string };

export const news: NewsItem[] = [
  {
    date: '2026',
    kind: 'service',
    text: 'Co-organizing the Audio-Visual Generation and Learning Workshop at ECCV 2026.',
    href: 'https://avgen123.github.io/index.html',
  },
  { date: '2025', kind: 'career', text: 'Joined Google DeepMind as a Research Scientist on Gemini Audio.' },
  {
    date: '2025',
    kind: 'service',
    text: 'Onsite coordinator for SANE 2025 (Speech and Audio in the Northeast).',
    href: 'https://www.saneworkshop.org/sane2025/',
  },
  { date: '2024', kind: 'award', text: 'Outstanding Ph.D. Dissertation Award, KAIST School of EE.' },
  {
    date: '2024',
    kind: 'award',
    text: "Outstanding Paper Award at ACL 2024 for “Let's Go Real Talk.”",
    href: 'https://aclanthology.org/2024.acl-long.860.pdf',
  },
];
