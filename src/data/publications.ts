// 集中管理所有发表/研究内容的数据。
// 中英文页面都从这里读取，避免重复维护。
//
// 字段说明：
// - title: 论文标题
// - authors: 作者列表，highlight=true 表示加粗高亮（标记作者本人）
// - venue: 发表信息（如 ICCV 2025、Arxiv 2026、Core Contributor 等），会与 paper/code 同行展示
// - paper: 论文外部链接（可选）
// - code: 代码仓库外部链接（可选）
// - href: 站内详情页链接（可选）。若提供则 title 可点击跳转详情页
// - category: 分类 key，对应 categories 中的定义

export interface Author {
  name: string;
  highlight?: boolean;
}

export interface Publication {
  title: string;
  authors: Author[];
  venue?: string;
  paper?: string;
  code?: string;
  href?: string;
  category: string;
}

export interface CategoryDef {
  key: string;
  label: { en: string; zh: string };
}

// 分类顺序即页面展示顺序
export const categories: CategoryDef[] = [
  {
    key: "rl",
    label: { en: "Reinforcement Learning", zh: "强化学习" },
  },
  {
    key: "vlm",
    label: { en: "Vision-Language Models", zh: "视觉语言模型" },
  },
  {
    key: "agent",
    label: { en: "Agent", zh: "智能体" },
  },
];

// 按时间倒序排列（同分类内）
export const publications: Publication[] = [
  // ===== Reinforcement Learning =====
  {
    title:
      "Uni-OPD: Unifying On-Policy Distillation with a Dual-Perspective Recipe",
    authors: [
      { name: "Wenjin Hou*" },
      { name: "Shangpin Peng*", highlight: true },
      { name: "Weinong Wang" },
      { name: "Zheng Ruan" },
      { name: "et al." },
    ],
    venue: "Arxiv 2026",
    paper: "https://arxiv.org/abs/2605.03677",
    code: "https://github.com/WenjinHou/Uni-OPD",
    category: "rl",
  },
  {
    title:
      "Uni-DPO: A Unified Paradigm for Dynamic Preference Optimization of LLMs",
    authors: [
      { name: "Shangpin Peng", highlight: true },
      { name: "Weinong Wang" },
      { name: "Zhuotao Tian" },
      { name: "Senqiao Yang" },
      { name: "et al." },
      { name: "Min Zhang" },
    ],
    venue: "ICLR 2026",
    paper: "https://arxiv.org/abs/2506.10054",
    code: "https://github.com/pspdada/Uni-DPO",
    category: "rl",
  },

  // ===== VLM =====
  {
    title: "HunyuanOCR Technical Report",
    authors: [
      { name: "Hunyuan Vision Team" },
      { name: "Pengyuan Lyu" },
      { name: "Xingyu Wan" },
      { name: "Gengluo Li" },
      { name: "Shangpin Peng", highlight: true },
      { name: "et al." },
      { name: "Chengquan Zhang" },
    ],
    venue: "Core Contributor of Technical Report",
    paper: "https://arxiv.org/abs/2511.19575",
    code: "https://github.com/Tencent-Hunyuan/HunyuanOCR",
    category: "vlm",
  },
  {
    title:
      "Mitigating Object Hallucinations via Sentence-Level Early Intervention",
    authors: [
      { name: "Shangpin Peng", highlight: true },
      { name: "Senqiao Yang" },
      { name: "Li Jiang" },
      { name: "Zhuotao Tian" },
    ],
    venue: "ICCV 2025",
    paper:
      "https://openaccess.thecvf.com/content/ICCV2025/papers/Peng_Mitigating_Object_Hallucinations_via_Sentence-Level_Early_Intervention_ICCV_2025_paper.pdf",
    code: "https://github.com/pspdada/SENTINEL",
    href: "/research/sentinel",
    category: "vlm",
  },
  {
    title:
      "Chronicles-OCR: A Cross-Temporal Perception Benchmark for the Evolutionary Trajectory of Chinese Characters",
    authors: [
      { name: "Gengluo Li" },
      { name: "Shangpin Peng", highlight: true },
      { name: "Xingyu Wan" },
      { name: "Chengquan Zhang" },
      { name: "et al." },
      { name: "Han Hu" },
    ],
    venue: "Arxiv 2026",
    paper: "https://arxiv.org/abs/2605.11960",
    code: "https://github.com/VirtualLUOUCAS/Chronicles-OCR",
    category: "vlm",
  },

  // ===== Agent =====
  {
    title: "PhoneWorld: Scaling Phone-Use Agent Environments",
    authors: [
      { name: "Zhengyang Tang" },
      { name: "et al." },
      { name: "Shangpin Peng" }, // 不加粗
      { name: "et al." },
      { name: "Chengquan Zhang" },
      { name: "Han Hu" },
    ],
    venue: "Arxiv 2026",
    paper: "https://arxiv.org/abs/2605.29486",
    category: "agent",
  },
  {
    title:
      "Safe, or Simply Incapable? Rethinking Safety Evaluation for Phone-Use Agents",
    authors: [
      { name: "Zhengyang Tang" },
      { name: "et al." },
      { name: "Shangpin Peng" }, // 不加粗
      { name: "et al." },
      { name: "Chengquan Zhang" },
      { name: "Han Hu" },
    ],
    venue: "Arxiv 2026",
    paper: "https://arxiv.org/abs/2605.07630",
    code: "https://github.com/tangzhy/PhoneSafety",
    category: "agent",
  },
];
