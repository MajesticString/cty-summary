import { searchPlugin } from '@vuepress/plugin-search';
import { shikiPlugin } from '@vuepress/plugin-shiki';
import { defaultTheme, defineUserConfig } from 'vuepress-vite';

export default defineUserConfig({
  lang: 'en-US',
  title: 'CTY Summary Project',
  theme: defaultTheme({
    sidebarDepth: 3,
    repo: 'MajesticString/cty-summary',
    docsDir: 'summary',
    editLinkText: 'Edit this page on GitHub',
    navbar: [
      {
        text: 'Course Summary',
        children: [
          '/',
          '/hardware.md',
          '/software.md',
          '/numbering-systems.md',
          '/boolean-logic.md',
          '/internet.md',
          '/websites.md',
          '/java.md',
          '/algorithms.md',
        ],
      },
      {
        text: 'Misc. Info',
        link: '/misc/README.md',
      },
    ],
    sidebar: [
      {
        text: 'Course Summary',
        children: [
          '/',
          '/hardware.md',
          '/software.md',
          '/numbering-systems.md',
          '/boolean-logic.md',
          '/internet.md',
          '/websites.md',
          '/java.md',
        ],
      },
      {
        text: 'Misc. Info',
        children: ['/misc/README.md'],
      },
    ],
  }),
  plugins: [
    shikiPlugin({
      theme: 'one-dark-pro',
    }),

    searchPlugin({
      locales: {
        '/': {
          placeholder: 'Search',
        },
      },
    }),
  ],
});
