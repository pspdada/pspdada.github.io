// @ts-check
import starlight from "@astrojs/starlight";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://pspdada.github.io",
  integrations: [
    starlight({
      title: {
        en: "psp_dada's home",
        "zh-CN": "psp_dada 个人主页",
      },
      // 网站描述
      description: "psp_dada's personal homepage",
      // 网站图标：在导航栏中设置一个 logo 图片，与网站标题一起显示或替代网站标题
      logo: {
        src: "./public/assets/avatar.jpg",
      },
      // 设置网站的默认 favicon 的路径
      favicon: "/assets/avatar.jpg",
      // 为此网站设置英语为默认语言。
      defaultLocale: "root",
      locales: {
        // 英文文档在 `src/content/docs/en/` 中。
        root: {
          label: "English",
          lang: "en",
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
        { icon: "gitlab", label: "GitLab", href: "https://gitlab.com/pspdada" },
      ],
      sidebar: [
        {
          label: "Guides",
          translations: { "zh-CN": "目录" },
          items: [
            {
              label: "Home",
              link: "/",
              translations: { "zh-CN": "主页" },
            },
            {
              label: "Blog",
              translations: { "zh-CN": "随笔" },
              // 自动生成
              autogenerate: { directory: "blog" },
            },
            {
              label: "Project",
              translations: { "zh-CN": "项目" },
              // 自动生成
              autogenerate: { directory: "project" },
            },
            {
              label: "Research",
              translations: { "zh-CN": "研究" },
              // 自动生成
              autogenerate: { directory: "research" },
              // 手动设置
              // items: [
              //   {
              //     label: "ICCV 2025 | SENTINEL",
              //     link: "/research/sentinel",
              //   },
              // ],
            },
          ],
        },
      ],
      editLink: {
        baseUrl: "https://github.com/pspdada/pspdada.github.io/edit/main/",
      },
      components: {
        Footer: "./src/components/Footer.astro",
      },
    }),
  ],
});
