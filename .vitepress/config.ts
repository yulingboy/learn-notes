import { defineConfig } from 'vitepress'
import AutoSidebarPlugin from 'vitepress-auto-sidebar-plugin'

export default defineConfig({
  lang: 'zh-CN',
  title: '三言两语',
  description: '日常记录',

  srcDir: './docs',

  cleanUrls: true,



  themeConfig: {
    nav: [
      { text: 'Git', link: '/git/' },
      { text: 'About', link: '/about' },
    ],
    

    outline: [2, 3],


    socialLinks: [
      { icon: "github", link: "https://github.com/yulingboy/learn-notes" },
    ],

    lastUpdated: {
      text: '上次更新时间'
    },
    docFooter: {
      prev: '上一页',
      next: '下一页'
    },

    footer: {
      copyright: `Copyright © 2023-${new Date().getFullYear()} 三言两语`,
    },
  },

  vite: {
    plugins: [
      AutoSidebarPlugin()
    ]
  }
})
