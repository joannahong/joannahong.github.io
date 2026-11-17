// Short, dated updates shown on the home page ("Now / News").
// Newest first. `href` is optional.

export type NewsItem = { date: string; kind: string; text: string; href?: string };

export const news: NewsItem[] = [
  {
    date: '2026',
    kind: 'launch',
    text: 'Gemini 3.5 Transcribe is out.',
    href: 'https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-3-5-transcribe/',
  },
  {
    date: '2026',
    kind: 'service',
    text: 'Co-organized the 3rd AVGenL Workshop at ECCV 2026 in Malmö.',
    href: 'https://avgen123.github.io/eccv26.html',
  },
  {
    date: '2026',
    kind: 'launch',
    text: 'Rambler in Gboard launched with Pixel 11.',
    href: 'https://blog.google/products-and-platforms/devices/pixel/pixel-11-features/',
  },
  {
    date: '2026',
    kind: 'launch',
    text: 'Speak to Window is live in the Gemini app for macOS.',
    href: 'https://blog.google/innovation-and-ai/products/gemini-app/speak-naturally-gemini-app-mac-os/',
  },
  {
    date: '2025',
    kind: 'service',
    text: 'Helped coordinate SANE 2025 (Speech and Audio in the Northeast) at Google NYC.',
    href: 'https://www.saneworkshop.org/sane2025/',
  },
  {
    date: '2025',
    kind: 'launch',
    text: 'First launch at DeepMind: Gemini 2.5 Pro & Flash TTS, now GA on Vertex AI.',
    href: 'https://docs.cloud.google.com/text-to-speech/docs/gemini-tts',
  },
  { date: '2025', kind: 'career', text: 'Joined Google DeepMind as a Research Scientist on Gemini Audio.' },
  { date: '2024', kind: 'award', text: 'Outstanding Ph.D. Dissertation Award, KAIST School of EE.' },
  {
    date: '2024',
    kind: 'award',
    text: "Outstanding Paper Award at ACL 2024 for “Let's Go Real Talk.”",
    href: 'https://aclanthology.org/2024.acl-long.860.pdf',
  },
];
