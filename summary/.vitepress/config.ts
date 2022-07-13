import { defineConfig } from 'vitepress';

export default defineConfig({
  lang: 'en-US',
  title: 'CTY Summary Project',
  vue: {
    reactivityTransform: true,
  },
  themeConfig: {
    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/MajesticString/cty-summary',
      },
    ],
    editLink: {
      pattern:
        'https://github.com/MajesticString/cty-summary/edit/main/summary/:path',
      text: 'Edit this page on GitHub',
    },

    nav: [
      {
        text: 'Course Summary',
        items: [
          { text: 'Hardware', link: '/hardware.md' },
          { text: 'Software', link: '/software.md' },
          { text: 'Numbering Systems', link: '/numbering-systems.md' },
          { text: 'Boolean Logic', link: '/boolean-logic.md' },
          { text: 'The Internet', link: '/internet.md' },
          { text: 'Websites', link: '/websites.md' },
          { text: 'Java', link: '/java.md' },
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
        collapsible: true,
        items: [
          { text: 'Hardware', link: '/hardware.md' },
          { text: 'Software', link: '/software.md' },
          { text: 'Numbering Systems', link: '/numbering-systems.md' },
          { text: 'Boolean Logic', link: '/boolean-logic.md' },
          { text: 'The Internet', link: '/internet.md' },
          { text: 'Websites', link: '/websites.md' },
          { text: 'Java', link: '/java.md' },
        ],
      },
      {
        text: 'Misc. Info',
        collapsible: true,
        items: [{ text: 'More Info', link: '/misc/README.md' }],
      },
    ],
  },
});
