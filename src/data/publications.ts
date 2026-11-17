// ─────────────────────────────────────────────────────────────
//  Publications. Newest first within each type.
//  • Put a `*` after a name for equal contribution.
//  • `selected: true` → shown on the home page.
//  • `note` → e.g. "Oral"; `award` → highlighted badge.
// ─────────────────────────────────────────────────────────────

export type Publication = {
  title: string;
  authors: string[];
  venue: string; // full venue name
  short: string; // short badge, e.g. "CVPR 2023"
  year: number;
  type: 'conference' | 'journal';
  href: string;
  note?: string;
  award?: string;
  selected?: boolean;
};

export const ME = 'Joanna Hong';

export const publications: Publication[] = [
  // ── Journals ───────────────────────────────────────────────
  {
    title: 'Efficient Audiovisual Speech Processing via MUTUD: Multimodal Training and Unimodal Deployment',
    authors: ['Joanna Hong', 'Sanjeel Parekh', 'Honglie Chen', 'Jacob Donley', 'Ke Tan', 'Buye Xu', 'Anurag Kumar'],
    venue: 'Transactions on Machine Learning Research (TMLR)',
    short: 'TMLR 2026',
    year: 2026,
    type: 'journal',
    href: 'https://openreview.net/pdf?id=5bshBY8RDf',
    selected: true,
  },
  {
    title: 'Speech Reconstruction with Reminiscent Sound via Visual Voice Memory',
    authors: ['Joanna Hong', 'Minsu Kim', 'Se Jin Park', 'Yong Man Ro'],
    venue: 'IEEE/ACM Transactions on Audio, Speech, and Language Processing (TASLP)',
    short: 'TASLP 2021',
    year: 2021,
    type: 'journal',
    href: 'https://ieeexplore.ieee.org/document/9618777',
  },
  {
    title: 'CroMM-VSR: Cross-Modal Memory Augmented Visual Speech Recognition',
    authors: ['Minsu Kim', 'Joanna Hong', 'Se Jin Park', 'Yong Man Ro'],
    venue: 'IEEE Transactions on Multimedia (TMM)',
    short: 'TMM 2021',
    year: 2021,
    type: 'journal',
    href: 'https://ieeexplore.ieee.org/abstract/document/9566778',
  },

  // ── Conferences ────────────────────────────────────────────
  {
    title: "Let's Go Real Talk: Spoken Dialogue Model for Face-to-Face Conversation",
    authors: ['Se Jin Park', 'Chae Won Kim', 'Hyeongseop Rha', 'Minsu Kim', 'Joanna Hong', 'Jeonghun Yeo', 'Yong Man Ro'],
    venue: 'Association for Computational Linguistics (ACL)',
    short: 'ACL 2024',
    year: 2024,
    type: 'conference',
    href: 'https://aclanthology.org/2024.acl-long.860.pdf',
    note: 'Oral',
    award: 'Outstanding Paper',
    selected: true,
  },
  {
    title: 'Intuitive Multilingual Audio-Visual Speech Recognition with a Single-Trained Model',
    authors: ['Joanna Hong', 'Se Jin Park', 'Yong Man Ro'],
    venue: 'Findings of the Association for Computational Linguistics: EMNLP',
    short: 'EMNLP 2023',
    year: 2023,
    type: 'conference',
    href: 'https://aclanthology.org/2023.findings-emnlp.324.pdf',
    selected: true,
  },
  {
    title: 'DiffV2S: Diffusion-based Video-to-Speech Synthesis with Vision-guided Speaker Embedding',
    authors: ['Jeongsoo Choi*', 'Joanna Hong*', 'Yong Man Ro'],
    venue: 'IEEE/CVF International Conference on Computer Vision (ICCV)',
    short: 'ICCV 2023',
    year: 2023,
    type: 'conference',
    href: 'https://openaccess.thecvf.com/content/ICCV2023/papers/Choi_DiffV2S_Diffusion-Based_Video-to-Speech_Synthesis_with_Vision-Guided_Speaker_Embedding_ICCV_2023_paper.pdf',
  },
  {
    title: 'Watch or Listen: Robust Audio-Visual Speech Recognition with Visual Corruption Modeling and Reliability Scoring',
    authors: ['Joanna Hong*', 'Minsu Kim*', 'Jeongsoo Choi', 'Yong Man Ro'],
    venue: 'IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR)',
    short: 'CVPR 2023',
    year: 2023,
    type: 'conference',
    href: 'https://openaccess.thecvf.com/content/CVPR2023/papers/Hong_Watch_or_Listen_Robust_Audio-Visual_Speech_Recognition_With_Visual_Corruption_CVPR_2023_paper.pdf',
    selected: true,
  },
  {
    title: 'Lip-to-Speech Synthesis in the Wild with Multi-task Learning',
    authors: ['Minsu Kim*', 'Joanna Hong*', 'Yong Man Ro'],
    venue: 'IEEE International Conference on Acoustics, Speech and Signal Processing (ICASSP)',
    short: 'ICASSP 2023',
    year: 2023,
    type: 'conference',
    href: 'https://arxiv.org/pdf/2302.08841.pdf',
  },
  {
    title: 'VisageSynTalk: Unseen Speaker Video-to-Speech Synthesis via Speech-Visage Feature Selection',
    authors: ['Joanna Hong', 'Minsu Kim', 'Yong Man Ro'],
    venue: 'European Conference on Computer Vision (ECCV)',
    short: 'ECCV 2022',
    year: 2022,
    type: 'conference',
    href: 'https://www.ecva.net/papers/eccv_2022/papers_ECCV/papers/136960445.pdf',
  },
  {
    title: 'Visual Context-driven Audio Feature Enhancement for Robust End-to-End Audio-Visual Speech Recognition',
    authors: ['Joanna Hong*', 'Minsu Kim*', 'Daehun Yoo', 'Yong Man Ro'],
    venue: 'Interspeech',
    short: 'Interspeech 2022',
    year: 2022,
    type: 'conference',
    href: 'https://www.isca-archive.org/interspeech_2022/hong22_interspeech.pdf',
    note: 'Oral',
  },
  {
    title: 'SyncTalkFace: Talking Face Generation with Precise Lip-syncing via Audio-Lip Memory',
    authors: ['Se Jin Park', 'Minsu Kim', 'Joanna Hong', 'Jeongsoo Choi', 'Yong Man Ro'],
    venue: 'AAAI Conference on Artificial Intelligence (AAAI)',
    short: 'AAAI 2022',
    year: 2022,
    type: 'conference',
    href: 'https://arxiv.org/pdf/2211.00924.pdf',
    note: 'Oral',
  },
  {
    title: 'Lip to Speech Synthesis with Visual Context Attentional GAN',
    authors: ['Minsu Kim', 'Joanna Hong', 'Yong Man Ro'],
    venue: 'Conference on Neural Information Processing Systems (NeurIPS)',
    short: 'NeurIPS 2021',
    year: 2021,
    type: 'conference',
    href: 'https://proceedings.neurips.cc/paper/2021/file/16437d40c29a1a7b1e78143c9c38f289-Paper.pdf',
  },
  {
    title: 'Multi-Modality Associative Bridging Through Memory: Speech Sound Recollected From Face Video',
    authors: ['Minsu Kim*', 'Joanna Hong*', 'Se Jin Park', 'Yong Man Ro'],
    venue: 'IEEE/CVF International Conference on Computer Vision (ICCV)',
    short: 'ICCV 2021',
    year: 2021,
    type: 'conference',
    href: 'https://openaccess.thecvf.com/content/ICCV2021/papers/Kim_Multi-Modality_Associative_Bridging_Through_Memory_Speech_Sound_Recollected_From_Face_ICCV_2021_paper.pdf',
  },
  {
    title: 'Unsupervised Disentangling of Viewpoint and Residues Variations by Substituting Representations for Robust Face Recognition',
    authors: ['Minsu Kim', 'Joanna Hong', 'Junho Kim', 'Hong Joo Lee', 'Yong Man Ro'],
    venue: 'International Conference on Pattern Recognition (ICPR)',
    short: 'ICPR 2021',
    year: 2021,
    type: 'conference',
    href: 'https://ieeexplore.ieee.org/document/9413039',
  },
  {
    title: 'Comprehensive Facial Expression Synthesis Using Human-Interpretable Language',
    authors: ['Joanna Hong', 'Jung Uk Kim', 'Sangmin Lee', 'Yong Man Ro'],
    venue: 'IEEE International Conference on Image Processing (ICIP)',
    short: 'ICIP 2020',
    year: 2020,
    type: 'conference',
    href: 'https://arxiv.org/abs/2007.08154.pdf',
  },
  {
    title: 'Face Tells Detailed Expression: Generating Comprehensive Facial Expression Sentence Through Facial Action Units',
    authors: ['Joanna Hong', 'Hong Joo Lee', 'Yelin Kim', 'Yong Man Ro'],
    venue: 'International Conference on Multimedia Modeling (MMM)',
    short: 'MMM 2020',
    year: 2020,
    type: 'conference',
    href: 'https://dl.acm.org/doi/abs/10.1007/978-3-030-37734-2_9',
  },
];

export const byYearDesc = [...publications].sort((a, b) => b.year - a.year);
export const selectedPublications = byYearDesc.filter((p) => p.selected);
