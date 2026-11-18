// Everything on the /cv page.

export const experience = [
  {
    role: 'Research Scientist',
    org: 'Google DeepMind',
    period: '2025 – present',
    text: 'Speech and audio understanding models for Gemini: core model capabilities and safety alignment for audio-in and audio-out launches. Contributed to Gemini 3.5 Transcribe, Speak to Window (Gemini for macOS), Rambler in Gboard (Pixel 11), and Gemini 2.5 TTS on Vertex AI.',
    people: [{ prefix: 'Manager', name: 'Dr. Quan Wang', href: 'https://wangquan.me/' }],
  },
  {
    role: 'Member of Technical Staff',
    org: 'Trillion Labs',
    period: '2024 – 2025',
    text: 'Founding team member. Contributed to Trillion-7B and Tri-21B, multilingual LLMs for practical, real-world applications. Worked on model architecture and training infrastructure.',
    people: [],
  },
  {
    role: 'Research Scientist Intern',
    org: 'Meta Reality Labs',
    period: '2023 – 2024',
    text: 'Robust audiovisual representation learning under missing modalities, recovering absent information when only audio or video is available.',
    people: [{ prefix: 'Manager', name: 'Dr. Anurag Kumar', href: 'https://anuragkr90.github.io/' }],
  },
];

type Detail = { label: string; text: string; href?: string; em?: boolean };

export const education: { degree: string; org: string; period: string; details?: Detail[] }[] = [
  {
    degree: 'Ph.D. in Electrical Engineering',
    org: 'KAIST',
    period: '2020 – 2024',
    details: [
      { label: 'Advisor', text: 'Prof. Yong Man Ro', href: 'https://www.ivllab.kaist.ac.kr/people/professor' },
      { label: 'Thesis', text: 'Delving into Human Speech Understanding through Multimodal Representation Learning', em: true },
    ],
  },
  { degree: 'M.S. in Electrical Engineering', org: 'KAIST', period: '2019 – 2020' },
  { degree: 'B.S. in Electrical Engineering', org: 'KAIST', period: '2014 – 2019' },
];

export const awards = [
  { year: '2024', text: 'Outstanding Ph.D. Dissertation Award, KAIST School of EE' },
  { year: '2024', text: 'Outstanding Paper Award, ACL' },
  { year: '2021', text: 'Outstanding Teaching Assistant Award, KAIST' },
];

export const service = {
  organizing: [
    { text: 'Organizer, Audio-Visual Generation and Learning Workshop, ECCV 2024 & 2026', href: 'https://avgen123.github.io/eccv26.html' },
    { text: 'Onsite Coordinator, SANE 2025', href: 'https://www.saneworkshop.org/sane2025/' },
    { text: 'Organizing Committee, KAIST AI World Cup 2018' },
  ],
  thesis: ['PRHLT, Universitat Politècnica de València (2025)'],
  conferences: [
    'AAAI (2025–2027)',
    'AAAI AI Alignment Track (2026)',
    'BMVC (2026)',
    'CVPR (2024, 2025)',
    'ECCV (2024)',
    'ICASSP (2024–2027)',
    'ICLR (2024–2027)',
    'ICCV (2023, 2025)',
    'ICML (2021–2025)',
    'NeurIPS (2020, 2022–2024, 2026)',
    'NeurIPS Datasets & Benchmarks (2025)',
    'NeurIPS Workshop (2024)',
    'WACV (2026, 2027)',
  ],
  journals: ['IEEE TIP (2025)', 'IEEE TASLP (2024)', 'IEEE TCSVT (2023, 2024, 2026)', 'IEEE TMM (2023)'],
};

export const teaching = [
  'EE474 Introduction to Multimedia (2020–2023)',
  'EE837 Multimedia Processing and Learning (2022)',
  'EE534 Pattern Recognition (2021)',
];
