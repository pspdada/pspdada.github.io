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

## 🎊 新闻 <!-- omit in toc -->

- [2025.07.21] 所有代码、数据和模型已发布！
- [2025.06.26] 🎉 我们的 SENTINEL 被 **ICCV 2025** 接收！

## 🚀 概览 <!-- omit in toc -->

**SENTINEL** 引入了一种自动化、句子级别的早期干预策略，以防止和缓解多模态大语言模型（MLLM）中的对象幻觉。主要优势：

- **无需标注**：不需要人工标注。
- **模型无关**：兼容任何 MLLM 架构。
- **高效**：轻量级 LoRA 微调。

## 🔑 主要特性

- 🧠 **早期干预阻断幻觉传播**。我们发现 MLLMs 的幻觉主要在前几句中产生，并在后续输出中不断传播。SENTINEL 提前打断该链条，以最大程度地缓解幻觉。
<table align="center">
    <p align="center">
      <img src="/assets/research/SENTINEL/figure2.png" width="80%" />
    </p>
</table>

- 🔍 **无需人工标注的域内上下文偏好学习**。SENTINEL 通过检测器交叉验证构造*幻觉/真实*样本，并在不依赖专有 LLM 或手动标注的情况下构建域内偏好数据。
<table align="center">
    <p align="center">
      <img src="/assets/research/SENTINEL/figure3.png" width="80%" />
    </p>
</table>

- 💡 **上下文至关重要：丰富的连贯性提升鲁棒性**。通过优先选择上下文连贯的正样本，SENTINEL 显著提升了泛化能力。
<table align="center">
    <p align="center">
      <img src="/assets/research/SENTINEL/figure4.png" width="80%" />
    </p>
</table>

- ♻️ **迭代式上下文自举，生成多样无幻觉上下文**。我们的框架动态地扩展非幻觉上下文，覆盖更多场景，提升模型在推理阶段的鲁棒性。
<table align="center">
    <p align="center">
      <img src="/assets/research/SENTINEL/figure5.png" width="80%" />
    </p>
</table>

- 📊 **各基准测试中达到优秀水平**。
SENTINEL 在减少幻觉方面最多可达 **92%** 的降低，并在 Object HalBench、AMBER 和 HallusionBench 上超越先前 SOTA 方法，同时保持或提升通用任务性能。
<table align="center">
    <p align="center">
      <img src="/assets/research/SENTINEL/table1.png" width="80%" />
    </p>
</table>

## 📝 引用

如果我们的模型/代码/数据/论文对您有帮助，请引用我们的论文并为我们点 ⭐️！

```bibtex
@article{peng2025mitigating,
  title={Mitigating Object Hallucinations via Sentence-Level Early Intervention},
  author={Peng, Shangpin and Yang, Senqiao and Jiang, Li and Tian, Zhuotao},
  journal={arXiv preprint arXiv:2507.12455},
  year={2025}
}
```

## 📧 联系我们 <!-- omit in toc -->

如果您有任何问题、意见或建议，欢迎提交 issue 或 PR，共同推动该方向的研究进展。

## License <!-- omit in toc -->

[Apache License 2.0](https://www.apache.org/licenses/LICENSE-2.0)
