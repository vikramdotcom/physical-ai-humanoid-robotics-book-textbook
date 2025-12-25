import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  textbookSidebar: [
    {
      type: 'category',
      label: 'Chapter 1: Introduction',
      link: {
        type: 'doc',
        id: 'intro/index',
      },
      items: [
        'intro/theory',
        'intro/why-humanoids',
        'intro/tech-stack',
        'intro/roadmap',
      ],
    },
  ],
};

export default sidebars;
