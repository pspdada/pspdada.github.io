---
title: ICCV 2025 | Mitigating Object Hallucinations via Sentence-Level Early Intervention
description: ICCV 2025 | Mitigating Object Hallucinations via Sentence-Level Early Intervention
template: splash
---

<div align="center">

<div style="display:flex;gap:8px;flex-wrap:wrap;justify-content:center;">
<a href='https://arxiv.org/abs/2507.12455'>
<img src='https://img.shields.io/badge/Paper-Arxiv-purple'></a>
<a href='https://huggingface.co/datasets/psp-dada/SENTINEL'>
<img src='https://img.shields.io/badge/Datasets-HF-Green'></a>
<a href='https://huggingface.co/collections/psp-dada/sentinel-686ea70912079af142015286'>
<img src='https://img.shields.io/badge/Models-HF-orange'></a>
<a href='https://huggingface.co/papers/2507.12455'>
<img src='https://img.shields.io/badge/Discussion-HF-blue'></a>
<a href='https://github.com/pspdada/SENTINEL/blob/main/LICENSE'>
<img src='https://img.shields.io/badge/LICENSE-Apache_2.0-yellow'></a>
</div>

**[Shangpin Peng](https://scholar.google.com/citations?user=mKnBrRAAAAAJ&hl=zh-CN) \* <sup>1</sup>**, **[Senqiao Yang](https://scholar.google.com/citations?user=NcJc-RwAAAAJ) \* <sup>2</sup>**, **[Li Jiang](https://scholar.google.com/citations?user=5cIodxsAAAAJ) <sup>3</sup>**, **[Zhuotao Tian](https://scholar.google.com/citations?user=mEjhz-IAAAAJ&hl=zh-CN) <sup>1</sup>**<sup>✉️</sup>
<sup>1</sup>Harbin Institute of Technology, Shenzhen
<sup>2</sup>The Chinese University of Hong Kong
<sup>3</sup>The Chinese University of Hong Kong, Shenzhen

\* Equal contribution.
<sup>✉️</sup> Corresponding author: tianzhuotao@hit.edu.cn.

</div>

## 🎊 News <!-- omit in toc -->

- [2025.07.21] All code, data, and models are released!
- [2025.06.26] 🎉 Our SENTINEL is accepted by **ICCV 2025**!

## 🚀 Overview <!-- omit in toc -->

**SENTINEL** introduces an automatic, sentence‑level early intervention strategy to prevent and mitigate object hallucinations in multimodal large language models (MLLMs). Key advantages:

- **Annotation‑free**: No human labeling required.

- **Model-agnostic**: Compatible with any MLLM architecture.

- **Efficient**: Lightweight LoRA fine‑tuning.

## 🔑 Key Features

- 🧠 **Early intervention halts hallucination propagation**. We find that hallucinations of MLLMs predominantly arise in early sentences and propagate through the rest of the output. SENTINEL interrupts this chain early to maximize mitigation.
<table align="center">
    <p align="center">
      <img src="/assets/research/SENTINEL/figure2.png" width="80%" />
    </p>
</table>

- 🔍 **In-domain contextual preference learning without human labels**. SENTINEL constructs hallucinated/factual samples via detector cross-validation and builds context-aware preference data without relying on proprietary LLMs or manual annotations.
<table align="center">
    <p align="center">
      <img src="/assets/research/SENTINEL/figure3.png" width="80%" />
    </p>
</table>

- 💡 **Context matters: rich coherence drives robustness**. By prioritizing context-coherent positive samples over hallucinated ones, SENTINEL significantly boosts generalization.
<table align="center">
    <p align="center">
      <img src="/assets/research/SENTINEL/figure4.png" width="80%" />
    </p>
</table>

- ♻️ **Iterative contextual bootstrapping for diverse hallucination-free contexts**. Our pipeline dynamically grows non-hallucinated contexts and expands coverage across varied scenes, improving robustness across generations.
<table align="center">
    <p align="center">
      <img src="/assets/research/SENTINEL/figure5.png" width="80%" />
    </p>
</table>

- 📊 **State-of-the-art results across benchmarks**.
SENTINEL achieves **up to 92% reduction** in hallucinations and outperforms prior SOTA methods across Object HalBench, AMBER, and HallusionBench, while maintaining or improving general task performance.
<table align="center">
    <p align="center">
      <img src="/assets/research/SENTINEL/table1.png" width="80%" />
    </p>
</table>

## 📝 Citation

If you find our model/code/data/paper helpful, please consider citing our papers 📝 and starring us ⭐️！

```bibtex
@article{peng2025mitigating,
  title={Mitigating Object Hallucinations via Sentence-Level Early Intervention},
  author={Peng, Shangpin and Yang, Senqiao and Jiang, Li and Tian, Zhuotao},
  journal={arXiv preprint arXiv:2507.12455},
  year={2025}
}
```

## 📧 Contact us <!-- omit in toc -->

If you have any questions, comments, or suggestions, please do not hesitate to submit an issue or PR to help advance research in this area.

## License <!-- omit in toc -->

[Apache License 2.0](https://www.apache.org/licenses/LICENSE-2.0)
