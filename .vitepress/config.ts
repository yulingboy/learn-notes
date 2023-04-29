import { defineConfigWithTheme } from "vitepress";
import { type Config as ThemeConfig } from "@vue/theme";
import baseConfig from "@vue/theme/config";

export default defineConfigWithTheme<ThemeConfig>({
  extends: baseConfig,

  title: "三言两语",
  base: "/learn-notes/",
  head: [["link", { rel: "icon", href: '/' }]],
  srcDir: "src",
  themeConfig: {
    nav: geneNav(),
    sidebar: geneSidebar(),
    i18n: geneI18n(),
    socialLinks: [
      { icon: "github", link: "https://github.com/yulingboy/basic-notes" },
    ],
    footer: {
      copyright: `Copyright © 2023-${new Date().getFullYear()} 三言两语`,
    },
  },
  markdown: {
    lineNumbers: true,
  },
});

// 工具函数
function geneNav(): ThemeConfig["nav"] {
  return [];
}
function geneSidebar(): ThemeConfig["sidebar"] {
  return {};
}
function geneI18n(): ThemeConfig["i18n"] {
  return {
    toc: "本页目录",
    previous: "前一篇",
    next: "下一篇",
    pageNotFound: "页面未找到",
  };
}
