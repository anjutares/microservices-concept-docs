import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'CryoNova Labs',
  tagline: 'Manda sobre el frío, escala lo imposible',
  favicon: 'img/favicon.svg',

  // Set the production url of your site here
  url: 'https://cryonova-labs.demo.juanferrando.dev',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'CryoNova-Labs', // Usually your GitHub org/user name.
  projectName: 'mono-repo', // Usually your repo name.

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'es',
    locales: ['es'],
  },

  markdown: {
    mermaid: true,
    mdx1Compat: {
      comments: false,
    },
  },
  themes: ['@docusaurus/theme-mermaid'],

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: 'https://github.com/CryoNova-Labs/mono-repo/edit/main/',
          rehypePlugins: [],
          beforeDefaultRemarkPlugins: [],
          beforeDefaultRehypePlugins: [],
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
        sitemap: {
          changefreq: 'weekly',
          priority: 0.5,
        },
      } satisfies Preset.Options,
    ],
  ],

  plugins: [
    // Temporalmente deshabilitado hasta encontrar versiones compatibles
    // [
    //   'docusaurus-plugin-openapi-docs',
    //   {
    //     id: 'openapi',
    //     docsPluginId: 'classic',
    //     config: {
    //       api: {
    //         specPath: 'static/openapi/openapi.json',
    //         outputDir: 'docs/api-reference',
    //         sidebarOptions: {
    //           groupPathsBy: 'tag',
    //         },
    //       },
    //     },
    //   },
    // ],
    [
      '@docusaurus/plugin-client-redirects',
      {
        redirects: [
          // Redirecciones de rutas en español a inglés
          {
            from: '/docs/producto-general/introduccion',
            to: '/docs/product/introduction',
          },
          {
            from: '/docs/producto-general/stack-tecnologico',
            to: '/docs/product/tech-stack',
          },
          {
            from: '/docs/producto-general/roadmap',
            to: '/docs/product/roadmap',
          },
          // Redirecciones para los endpoints de microservicios
          {
            from: '/docs/services/README',
            to: '/docs/services/overview',
          },
          // Asegúrate de que las URLs antiguas sigan funcionando
          {
            from: '/docs/shared-concepts/observabilidad',
            to: '/docs/shared-concepts/observability',
          },
        ],
        createRedirects(existingPath) {
          // Crear redirecciones automáticas para patrones comunes
          if (existingPath.includes('/docs/product/')) {
            return [
              existingPath.replace('/docs/product/', '/docs/producto-general/'),
            ];
          }
          if (existingPath.includes('/services/overview')) {
            return [existingPath.replace('/overview', '/README')];
          }
          return undefined;
        },
      },
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/cryonova-social-card.jpg',
    navbar: {
      title: '',
      logo: {
        alt: 'CryoNova Labs Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: '/',
          position: 'left',
          label: 'Inicio',
        },
        {
          type: 'docSidebar',
          sidebarId: 'productoSidebar',
          position: 'left',
          label: 'Producto',
        },
        {
          type: 'doc',
          docId: 'frontend/overview',
          position: 'left',
          label: 'Frontend',
        },
        {
          type: 'doc',
          docId: 'gateway-yarp/overview',
          position: 'left',
          label: 'Gateway YARP',
        },
        {
          type: 'doc',
          docId: 'messaging/rabbitmq',
          position: 'left',
          label: 'Messaging',
        },
        {
          type: 'dropdown',
          label: 'Microservicios',
          position: 'left',
          items: [
            {
              type: 'doc',
              docId: 'services/overview',
              label: 'Visión General',
            },
            {
              type: 'doc',
              docId: 'services/user-service',
              label: 'UserSvc',
            },
            {
              type: 'doc',
              docId: 'services/product-service',
              label: 'ProductSvc',
            },
            {
              type: 'doc',
              docId: 'services/order-service',
              label: 'OrderSvc',
            },
            {
              type: 'doc',
              docId: 'services/notification-service',
              label: 'NotificationSvc',
            },
            {
              type: 'doc',
              docId: 'services/payment-service',
              label: 'PaymentSvc',
            },
          ],
        },
        {
          type: 'doc',
          docId: 'faq',
          label: 'FAQ',
        },
      ],
    },
    footer: {
      style: 'dark',
      logo: {
        alt: 'CryoNova Labs Logo',
        src: 'img/logo-footer.svg',
        href: 'https://cryonova-labs.com',
        width: 190,
        height: 65,
        className: 'footer-logo-enhanced',
      },
      links: [
        {
          title: 'Documentation',
          items: [
            {
              label: 'Introduction',
              to: '/docs/product/introduction',
            },
            {
              label: 'Technology Stack',
              to: '/docs/product/tech-stack',
            },
            {
              label: 'Roadmap',
              to: '/docs/product/roadmap',
            },
          ],
        },
        {
          title: 'Modules',
          items: [
            {
              label: 'Frontend',
              to: '/docs/frontend/overview',
            },
            {
              label: 'Backend',
              to: '/docs/services/overview',
            },
            {
              label: 'Gateway YARP',
              to: '/docs/gateway-yarp/overview',
            },
            {
              label: 'Messaging',
              to: '/docs/messaging/rabbitmq',
            },
          ],
        },
        {
          title: 'Microservices',
          items: [
            {
              label: 'UserSvc',
              to: '/docs/services/user-service',
            },
            {
              label: 'ProductSvc',
              to: '/docs/services/product-service',
            },
            {
              label: 'OrderSvc',
              to: '/docs/services/order-service',
            },
            {
              label: 'NotificationSvc',
              to: '/docs/services/notification-service',
            },
            {
              label: 'PaymentSvc',
              to: '/docs/services/payment-service',
            },
          ],
        },
        {
          title: 'Links & Resources',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/CryoNova-Labs/mono-repo',
            },
            {
              label: 'Status Page',
              href: 'https://status.cryonova-labs.com',
            },
            {
              label: 'Technical Blog',
              href: 'https://blog.cryonova-labs.com',
            },
            {
              label: 'Support',
              href: 'mailto:soporte@cryonova-labs.com',
            },
          ],
        },
        {
          title: 'Contact',
          items: [
            {
              label: 'Twitter',
              href: 'https://twitter.com/cryonovalabs',
            },
            {
              label: 'LinkedIn',
              href: 'https://linkedin.com/company/cryonova-labs',
            },
            {
              label: 'YouTube',
              href: 'https://youtube.com/c/CryoNovaLabs',
            },
            {
              html: `
                <a href="https://discord.gg/cryonovalabs" target="_blank" rel="noopener noreferrer" class="footer__link-item">
                  Discord
                </a>
              `,
            },
          ],
        },
      ],
      copyright: `
        <div class="footer__copyright-content">
          <p>CryoNova Labs - Advanced technology for cryogenic qubit control</p>
          <p>Copyright © ${new Date().getFullYear()} CryoNova Labs. All rights reserved.</p>
        </div>
      `,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config; 