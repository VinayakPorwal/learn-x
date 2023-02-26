// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Learn-X",
  tagline: "Learning is always cool",
  favicon: "img/logopng.png",

  // Set the production url of your site here
  url: "https://learngpt.netlify.app",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "craft-x", // Usually your GitHub org/user name.
  projectName: "Learn-x", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        

        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: "dark",
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },

      // AnnouncementBar at the top
      // announcementBar: {
      //   id: 'announcementBar-2', // Increment on change
      //   content: `⭐️ If you like Docusaurus, give it a star on <a target="_blank" rel="noopener noreferrer" href="https://github.com/facebook/docusaurus">GitHub</a> and follow us on <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/docusaurus">Twitter</a>`,
      // },

      algolia: {
        // The application ID provided by Algolia
        appId: "RRHIMAZGEU",

        // Public API key: it is safe to commit it
        apiKey: "7af6dc50a85843619fb0f37695a52733",

        indexName: "learn-ex",

        // Optional: see doc section below
        contextualSearch: true,

        // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
        externalUrlRegex: "external\\.com|domain\\.com",

        // Optional: Replace parts of the item URLs from Algolia. Useful when using the same search index for multiple deployments using a different baseUrl. You can use regexp or string in the `from` param. For example: localhost:3000 vs myCompany.com/docs
        replaceSearchResultPathname: {
          from: "/docs", // or as RegExp: /\/docs\//
          to: "/docs",
        },

        // Optional: Algolia search parameters
        searchParameters: {},

        // Optional: path for search page that enabled by default (`false` to disable it)
        searchPagePath: "search",
      },

      // Replace with your project's social card
      image: "img/docusaurus-social-card.jpg",
      navbar: {
        title: "Learn-X",
        logo: {
          alt: "My Site Logo",
          src: "img/logopng.png",
        },
        items: [
          {
            // type: 'doc',
            to: "/docs/Oops-Concepts/Introduction",
            position: "left",
            label: "Tutorial",
          },
          { to: "/blog", label: "Blog", position: "left" },
          // { to: "/test", label: "test", position: "left" },
          {to: '/about', label: 'About', position: 'left'},
          {
            href: "https://github.com/vinayakporwal/learn-x",
            className: "header-github-link",
            'arial-label' : "GitHub-repository",
            position: "right",

           
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Learn",
            items: [
              {
                label: "OOPS",
                to: "/docs/Oops-Concepts/Introduction",
              },
              {
                label: "React",
                to: "/docs/Learn-React/Introduction",
              },
            ],
          },
          {
            title: "Blogs",
            items: [
              {
                label: "Async - Await",
                to: "/blog",
              },
            ],
          },
          // {
          //   title: "Community",
          //   items: [
          //     {
          //       label: "Stack Overflow",
          //       href: "https://stackoverflow.com/questions/tagged/docusaurus",
          //     },
          //     {
          //       label: "Discord",
          //       href: "https://discordapp.com/invite/docusaurus",
          //     },
          //     {
          //       label: "Twitter",
          //       href: "https://twitter.com/docusaurus",
          //     },
          //   ],
          // },
          {
            title: "More",
            items: [
              {
                label: "Contribute",
                href: "https://github.com/VinayakPorwal/learn-x",
              },
              {
                label: "Craft-X",
                href: "https://craft-x.vercel.app",
              },
            ],
          },
          {
            title: "Contact",
            items: [
              {
                label: "LinkedIn",
                href: "https://www.linkedin.com/in/vinayakporwal/",
              },
              {
                label: "Github",
                href: "https://github.com/VinayakPorwal",
              },
              
            ],
          },
        ],
        

        //   logo: {
        //     alt: "Meta Open Source Logo",
        //   src: "/img/logopng.png",
        //   width: 32,
        //   height: 32,
        //   href: "https://opensource.fb.com",
        // },
       
          
        
        copyright: `Copyright © ${new Date().getFullYear()} Learn-X | <img src="/img/logopng.png" class="img"> <a href="https://craft-x.vercel.app">Craft-X</a>`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
