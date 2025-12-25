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
    {
      type: 'category',
      label: 'Chapter 2: Physical AI',
      link: {
        type: 'doc',
        id: '02-physical-ai/index',
      },
      items: [],
    },
    {
      type: 'category',
      label: 'Chapter 3: Why Humanoids',
      link: {
        type: 'doc',
        id: '03-why-humanoids/index',
      },
      items: [],
    },
    {
      type: 'category',
      label: 'Chapter 4: Tech Stack',
      link: {
        type: 'doc',
        id: '04-tech-stack/index',
      },
      items: [],
    },
    {
      type: 'category',
      label: 'Chapter 5: Robotics Fundamentals',
      link: {
        type: 'doc',
        id: '05-robotics-fundamentals/index',
      },
      items: [],
    },
    {
      type: 'category',
      label: 'Chapter 6: Mechatronics',
      link: {
        type: 'doc',
        id: '06-mechatronics/index',
      },
      items: [],
    },
    {
      type: 'category',
      label: 'Chapter 7: AI Models',
      link: {
        type: 'doc',
        id: '07-ai-models/index',
      },
      items: [],
    },
    {
      type: 'category',
      label: 'Chapter 8: Simulation Labs',
      link: {
        type: 'doc',
        id: '08-simulation-labs/index',
      },
      items: [],
    },
    {
      type: 'category',
      label: 'Chapter 9: Hardware Labs',
      link: {
        type: 'doc',
        id: '09-hardware-labs/index',
      },
      items: [],
    },
    {
      type: 'category',
      label: 'Chapter 10: Industry',
      link: {
        type: 'doc',
        id: '10-industry/index',
      },
      items: [],
    },
    {
      type: 'category',
      label: 'Chapter 11: Ethics & Safety',
      link: {
        type: 'doc',
        id: '11-ethics-safety/index',
      },
      items: [],
    },
    {
      type: 'category',
      label: 'Chapter 12: Capstone',
      link: {
        type: 'doc',
        id: '12-capstone/index',
      },
      items: [],
    },
  ],
};

export default sidebars;
