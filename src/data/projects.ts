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
  image?: string; // 16:9 thumbnail in /public/projects
  featured?: boolean; // show on home page
  draft?: boolean;
};

export const projects: Project[] = [
  // ── Google DeepMind ────────────────────────────────────────
  {
    title: 'Gemini 3.5 Transcribe',
    image: '/projects/gemini-3-5-transcribe.jpg',
    org: 'Google AI Studio',
    period: '2026',
    group: 'google',
    summary: 'Intelligent transcription with Gemini, available to developers in Google AI Studio.',
    tags: ['Gemini', 'ASR', 'transcription'],
    links: [{ label: 'announcement', href: 'https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-3-5-transcribe/' }],
    featured: true,
  },
  {
    title: 'Speak to Window',
    image: '/projects/speak-to-window.jpg',
    org: 'Gemini app for macOS',
    period: '2026',
    group: 'google',
    summary: 'Natural voice input in the Gemini desktop app for macOS, bringing speech and multimodal AI into people’s everyday workflows.',
    tags: ['Gemini app', 'dictation', 'multimodal'],
    links: [
      { label: 'announcement', href: 'https://blog.google/innovation-and-ai/products/gemini-app/speak-naturally-gemini-app-mac-os/' },
      { label: 'download', href: 'https://gemini.google/desktop/' },
    ],
    featured: true,
  },
  {
    title: 'Rambler in Gboard',
    image: '/projects/rambler.jpg',
    org: 'Gboard on Pixel 11',
    period: '2026',
    group: 'google',
    summary: 'Gemini-powered voice input built for the way people actually talk: it transcribes your point cleanly and concisely, even through “um”s and “ah”s.',
    tags: ['Gboard', 'Pixel', 'voice typing'],
    links: [{ label: 'announcement', href: 'https://blog.google/products-and-platforms/devices/pixel/pixel-11-features/' }],
    featured: true,
  },
  {
    title: 'Gemini 2.5 Pro & Flash TTS',
    image: '/projects/gemini-tts.jpg',
    org: 'Google Cloud Vertex AI',
    period: '2025',
    group: 'google',
    summary: 'Gemini text-to-speech models made generally available to developers and businesses on Vertex AI. My first launch at Google DeepMind.',
    tags: ['Gemini', 'TTS', 'Vertex AI'],
    links: [
      { label: 'announcement', href: 'https://cloud.google.com/blog/products/ai-machine-learning/building-momentum-for-gen-media-including-nano-banana-/' },
      { label: 'docs', href: 'https://docs.cloud.google.com/text-to-speech/docs/gemini-tts' },
    ],
    featured: true,
  },

  // ── Earlier ────────────────────────────────────────────────
  {
    title: 'Tri-21B & Trillion-7B',
    image: '/projects/tri-21b.jpg',
    org: 'Trillion Labs',
    period: '2024 – 2025',
    group: 'earlier',
    summary:
      'As a founding team member, worked on model architecture and training infrastructure for multilingual LLMs built for real-world deployment, part of Trillion Labs’ effort to build Korea’s most powerful foundation model. Tri-21B was released open source.',
    tags: ['LLM', 'pretraining', 'multilingual'],
    links: [{ label: 'model', href: 'https://huggingface.co/trillionlabs/Tri-21B' }],
  },
];

export const visibleProjects = projects.filter((p) => !p.draft);
