// ─────────────────────────────────────────────────────────────
//  Site-wide profile info. Edit here; it propagates everywhere.
// ─────────────────────────────────────────────────────────────

export const profile = {
  name: 'Joanna Hong',
  role: 'Research Scientist',
  org: 'Google DeepMind',
  team: 'Gemini Audio',
  location: 'New York City',
  // Shown obfuscated on the page; mailto is assembled client-side.
  email: { user: 'joannahong', domain: 'ieee.org' },
  photo: '/profile.jpg',
  description:
    'Joanna Hong is a Research Scientist on the Gemini Audio team at Google DeepMind, working on speech, audio, and multimodal machine learning.',
  cv: 'https://drive.google.com/file/d/13KFpzn6cYIgMsrixR8in64VSI-phJ0_n/view?usp=share_link',
  links: [
    { label: 'Scholar', href: 'https://scholar.google.com/citations?user=wqvP0D8AAAAJ&hl=en' },
    { label: 'GitHub', href: 'https://github.com/joannahong' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/hongjoanna/' },
    { label: 'Instagram', href: 'https://www.instagram.com/joxoxoanna/' },
  ],
};

export const nav = [
  { label: 'about', href: '/' },
  { label: 'projects', href: '/projects/' },
  { label: 'publications', href: '/publications/' },
  { label: 'cv', href: '/cv/' },
];
