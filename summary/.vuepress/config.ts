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
          {
            text: 'Home',
            link: '/',
          },
          {
            text: 'Hardware',
            link: '/hardware.md',
          },
          {
            text: 'Software',
            link: '/software.md',
          },
          {
            text: 'Numbering Systems',
            link: '/numbering-systems.md',
          },
          {
            text: 'Boolean Logic',
            link: '/boolean-logic.md',
          },
          {
            text: 'Internet',
            link: '/internet.md',
          },
          {
            text: 'Websites',
            link: '/websites.md',
          },
          {
            text: 'Java',
            link: '/java.md',
          },
          {
            text: 'Ethics',
            link: '/ethics.md',
          },
        ],
      },
      {
        text: 'Sorting Algorithms',
        link: '/sorting-algorithms/README.md',
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
          {
            text: 'Home',
            link: '/',
          },
          {
            text: 'Hardware',
            link: '/hardware.md',
          },
          {
            text: 'Software',
            link: '/software.md',
          },
          {
            text: 'Numbering Systems',
            link: '/numbering-systems.md',
          },
          {
            text: 'Boolean Logic',
            link: '/boolean-logic.md',
          },
          {
            text: 'Internet',
            link: '/internet.md',
          },
          {
            text: 'Websites',
            link: '/websites.md',
          },
          {
            text: 'Java',
            link: '/java.md',
          },
          {
            text: 'Ethics',
            link: '/ethics.md',
          },
          {
            text: 'Sorting Algorithms',
            children: [
              {
                text: 'Home',
                link: '/sorting-algorithms/README.md',
              },
              {
                text: 'Sorting',
                link: '/sorting-algorithms/sorting.md',
              },
              {
                text: 'Searching',
                link: '/sorting-algorithms/searching.md',
              },
            ],
          },
          {
            text: 'Misc. Info',
            link: '/misc/README.md',
          },
        ],
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
