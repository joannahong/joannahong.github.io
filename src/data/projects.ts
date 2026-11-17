// ─────────────────────────────────────────────────────────────
//  Projects. Set `draft: true` to hide an entry from the site.
//  `group` decides which section it appears under on /projects.
// ─────────────────────────────────────────────────────────────

export type Project = {
  title: string;
  org: string;
  period: string;
  group: 'google' | 'earlier';
  summary: string;
  bullets?: string[];
  tags?: string[];
  links?: { label: string; href: string }[];
  featured?: boolean; // show on home page
  draft?: boolean;
};

export const projects: Project[] = [
  // ── Google DeepMind ────────────────────────────────────────
  {
    title: 'Gemini Audio: speech & audio understanding',
    org: 'Google DeepMind',
    period: '2025 – present',
    group: 'google',
    summary:
      'Developing state-of-the-art speech and audio understanding models for Gemini, driving both core model capabilities and safety alignment for audio-in and audio-out launches.',
    tags: ['Gemini', 'speech', 'audio LLMs', 'safety'],
    featured: true,
  },
  // TODO(Joanna): add publicly announced Google launches from LinkedIn here.
  // Copy this block, fill it in, and remove `draft: true` to publish.
  {
    title: 'Launch name',
    org: 'Google DeepMind',
    period: '2026',
    group: 'google',
    summary: 'One or two sentences on what shipped and what you owned.',
    tags: ['Gemini'],
    links: [{ label: 'announcement', href: 'https://blog.google/' }],
    featured: true,
    draft: true,
  },

  // ── Earlier ────────────────────────────────────────────────
  {
    title: 'Tri-21B & Trillion-7B',
    org: 'Trillion Labs',
    period: '2024 – 2025',
    group: 'earlier',
    summary:
      'Multilingual large language models built for practical, real-world use, part of Trillion Labs’ effort to build a strong Korean foundation model. Worked on model architecture and training infrastructure.',
    tags: ['LLM', 'pretraining', 'multilingual'],
    links: [{ label: 'model', href: 'https://huggingface.co/trillionlabs/Tri-21B' }],
    featured: true,
  },
  {
    title: 'MUTUD: multimodal training, unimodal deployment',
    org: 'Meta Reality Labs',
    period: '2023 – 2024',
    group: 'earlier',
    summary:
      'Robust audiovisual representation learning under missing modalities: recovering absent information when only audio or only video is available at inference time.',
    tags: ['audio-visual', 'robustness', 'TMLR 2026'],
    links: [{ label: 'paper', href: 'https://openreview.net/pdf?id=5bshBY8RDf' }],
    featured: true,
  },
  {
    title: "Let's Go Real Talk: face-to-face spoken dialogue",
    org: 'KAIST',
    period: '2024',
    group: 'earlier',
    summary:
      'A spoken dialogue model that takes audio-visual user input and generates audio-visual responses, a step toward avatar-style face-to-face conversation. ACL 2024 Oral and Outstanding Paper Award.',
    tags: ['spoken dialogue', 'audio-visual', 'ACL 2024'],
    links: [{ label: 'paper', href: 'https://aclanthology.org/2024.acl-long.860.pdf' }],
  },
];

export const visibleProjects = projects.filter((p) => !p.draft);
