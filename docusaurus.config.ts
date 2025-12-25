import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Physical AI & Humanoid Robotics',
  tagline: 'A comprehensive textbook for teaching Physical AI and humanoid robotics',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: 'https://physical-ai-humanoiid-robotics-book.vercel.app',
  baseUrl: '/',


  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  plugins: [
    '@docusaurus/plugin-ideal-image',
  ],

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          routeBasePath: '/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/social-card.jpg',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'Physical AI Textbook',
      logo: {
        alt: 'Physical AI Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'textbookSidebar',
          position: 'left',
          label: 'Chapters',
        },
        {
          href: 'https://github.com/vikramdotcom/physical-ai-humanoid-robotics-book-textbook',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Textbook',
          items: [
            {
              label: 'Chapter 1: Introduction',
              to: '/01-intro',
            },
          ],
        },
        {
          title: 'Resources',
          items: [
            {
              label: 'ROS2 Documentation',
              href: 'https://docs.ros.org/',
            },
            {
              label: 'NVIDIA Isaac',
              href: 'https://developer.nvidia.com/isaac-sim',
            },
            {
              label: 'MuJoCo',
              href: 'https://mujoco.org/',
            },
          ],
        },
      ],
      copyright: `Copyright ${new Date().getFullYear()} Physical AI Textbook. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['python', 'bash', 'yaml', 'json'],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
