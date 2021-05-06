/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  noIndex: true,
  title: 'Contiamo Documentation',
  tagline: 'Contiamo Documentation Hub',
  url: 'https://contiamo.github.io',
  baseUrl: '/contiamo/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'contiamo', // Usually your GitHub org/user name.
  projectName: 'contiamo', // Usually your repo name.  
  themeConfig: {
    navbar: {
      title: 'Contiamo',
      logo: {
        alt: 'Contiamo',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: 'docs',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {
          to: 'docs',
          label: 'REST API',
          position: 'left',
        },
        {
          to: 'whats-new', 
          label: 'What\'s new', 
          position: 'left'
        },
        {
          href: 'https://contiamo.com',
          label: 'contiamo.com',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Getting Started',
              to: 'docs/',
            },
          ],
        },        
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Contiamo`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.json'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        blog: {
          /**
          * Path to data on filesystem relative to site dir.
          */
          path: 'releases',
          /**
          * Blog page title for better SEO
          */
          blogTitle: 'Contiamo release notes',
          /**
           * Blog page meta description for better SEO
           */
          blogDescription: 'Releases of the Contiamo platform',
          /**
           * Number of blog post elements to show in the blog sidebar
           * 'ALL' to show all blog posts
           * 0 to disable
           */
          blogSidebarCount: 'ALL',
          /**
           * Title of the blog sidebar
           */
          blogSidebarTitle: 'Releases',
          /**
           * URL route for the blog section of your site.
           * *DO NOT* include a trailing slash.
           */
          routeBasePath: 'whats-new',
          // Please change this to your repo.
          showReadingTime: false,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ]
  ],
};