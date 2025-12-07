// @ts-check
import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Physical AI & Humanoid Robotics Book',
  tagline: 'Building and Controlling Intelligent Robots',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: 'https://TalhaJamal02.github.io',
  baseUrl: '/',

  organizationName: 'Talha Jamal',
  projectName: 'physical-ai-humanoid-robotics-book',

  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      ({
        docs: {
          sidebarPath: './sidebars.js',
          editUrl:
            'https://github.com/TalhaJamal02/physical-ai-humanoid-robotics-book/tree/main/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig: ({
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'Physical AI & Humanoid Robotics Book',
      logo: {
        alt: 'Talha',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Book',
        },
        {
          href: 'https://github.com/TalhaJamal02',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Book',
          items: [
            {
              html: `
            <p style="margin: 0; line-height: 1.5;">
              "Physical AI & Humanoid Robotics" explores robotics and AI, making learning engaging, practical, and accessible for everyone.
            </p>
          `,
            },
          ],
        },
        {
          title: 'Connect with Me',
          items: [
            {
              html: `
            <p style="margin: 0; line-height: 1.5;">
              Connect with me on 
              <a href="https://www.linkedin.com/in/talhajamal-/" target="_blank" rel="noopener noreferrer" style="color: #cfcfcf; text-decoration: underline;">LinkedIn</a>, 
              <a href="https://github.com/TalhaJamal02" target="_blank" rel="noopener noreferrer" style="color: #cfcfcf; text-decoration: underline;">GitHub</a>, 
              <a href="mailto:talhajamal056@gmail.com" style="color: #cfcfcf; text-decoration: underline;">Email</a>, and 
              <a href="https://discord.com/users/talhaa." target="_blank" rel="noopener noreferrer" style="color: #cfcfcf; text-decoration: underline;">Discord</a>.
            </p>
          `,
            },
          ],
        },
      ],
      copyright: `© ${new Date().getFullYear()} Talha Jamal — Author of Physical AI & Humanoid Robotics.`,
    },




    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  }),
};

export default config;
