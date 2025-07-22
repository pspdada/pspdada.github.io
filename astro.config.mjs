// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  site: 'https://pspdada.github.io',
  integrations: [
    starlight({
      title: {
        en: "psp_dada's home",
        "zh-CN": "psp_dada 个人主页",
      },
      // 网站描述
      description: "psp_dada's personal homepage",
      // 网站图标
      logo: {
        src: "./src/assets/avatar.jpg",
      },
      // 为此网站设置英语为默认语言。
      defaultLocale: "en",
      locales: {
        // 英文文档在 `src/content/docs/en/` 中。
        en: {
          label: "English",
        },
        // 简体中文文档在 `src/content/docs/zh-cn/` 中。
        "zh-cn": {
          label: "简体中文",
          lang: "zh-CN",
        },
      },
      // 定义页脚是否应包含上一页和下一页的链接
      pagination: false,
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/pspdada",
        },
      ],
      sidebar: [
        {
          label: "Guides",
          items: [
            {
              label: "Home",
              link: "/",
              translations: { "zh-CN": "主页" },
            },
            {
              label: "Research",
              translations: { "zh-CN": "研究" },
              items: [
                {
                  label: "ICCV 2025 | SENTINEL",
                  link: "/research/sentinel",
                },
              ],
            },
          ],
        },
      ],
    }),
  ],
});
