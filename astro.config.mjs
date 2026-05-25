// @ts-check
import starlight from "@astrojs/starlight";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://pspdada.github.io",
  vite: {
    resolve: {
      alias: {
        "@components": "/src/components",
      },
    },
  },
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
          label: "Home",
          link: "/",
          translations: { "zh-CN": "主页" },
        },
        {
          label: "Blog",
          translations: { "zh-CN": "随笔" },
          items: [{ autogenerate: { directory: "blog" } }],
        },
        {
          label: "Project",
          translations: { "zh-CN": "项目" },
          items: [{ autogenerate: { directory: "project" } }],
        },
        {
          label: "Research",
          translations: { "zh-CN": "研究" },
          items: [{ autogenerate: { directory: "research" } }],
          // 手动设置示例：
          // items: [
          //   {
          //     label: "ICCV 2025 | SENTINEL",
          //     link: "/research/sentinel",
          //   },
          // ],
        },
      ],
      editLink: {
        baseUrl: "https://github.com/pspdada/pspdada.github.io/edit/main/",
      },
      customCss: ["./src/styles/custom.css"],
      components: {
        Footer: "./src/components/Footer.astro",
      },
      head: [
        {
          tag: "script",
          content: `
(function () {
  function createToggleBtn() {
    if (document.getElementById('sidebar-toggle-btn')) return;

    // 仅在有侧边栏的页面创建按钮（检测 data-has-sidebar 属性）
    if (!document.documentElement.hasAttribute('data-has-sidebar')) return;

    var btn = document.createElement('button');
    btn.id = 'sidebar-toggle-btn';
    btn.setAttribute('aria-label', '折叠/展开侧边栏');
    btn.innerHTML = '&#8249;';
    document.body.appendChild(btn);

    btn.addEventListener('click', function () {
      var collapsed = document.body.classList.toggle('sidebar-collapsed');
      btn.innerHTML = collapsed ? '&#8250;' : '&#8249;';
      localStorage.setItem('sidebarCollapsed', collapsed ? '1' : '0');
    });

    // 恢复上次折叠状态
    if (localStorage.getItem('sidebarCollapsed') === '1') {
      document.body.classList.add('sidebar-collapsed');
      btn.innerHTML = '&#8250;';
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', createToggleBtn);
  } else {
    createToggleBtn();
  }
})();
          `,
        },
      ],
    }),
  ],
});
