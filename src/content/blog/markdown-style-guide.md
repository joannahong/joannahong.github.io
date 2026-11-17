---
title: 'Markdown style guide'
description: 'Reference for every element a post can use. This is a draft, visible only on your local preview.'
date: 2026-11-16
tags: ['meta']
draft: true
---

This post is a **draft** (`draft: true` in the frontmatter), so it shows up only when you run
`npm run dev` and never on the live site. Use it as a reference while writing.

## Headings

Use `##` for sections and `###` for subsections. The post title comes from the frontmatter,
so don't add a `#` heading.

### Text

Regular paragraphs, **bold**, _italic_, `inline code`, and [links](https://joannahong.github.io).

> Blockquotes render in italic serif. Good for a key takeaway.

- Bullet lists
- work as expected
  - including nesting

1. Numbered lists
2. too

## Code

```python
import torch

def snr(clean: torch.Tensor, noisy: torch.Tensor) -> torch.Tensor:
    noise = noisy - clean
    return 10 * torch.log10(clean.pow(2).sum() / noise.pow(2).sum())
```

## Tables

| Model    | WER ↓ | Params |
| -------- | ----- | ------ |
| Baseline | 12.4  | 300M   |
| Ours     | 9.8   | 310M   |

## Images

Put images in `public/blog/<post-name>/` and reference them like this:

```md
![Alt text](/blog/my-post/figure.png)
```

---

That's it.
