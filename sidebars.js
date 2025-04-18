/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  productoSidebar: [
    {
      type: 'category',
      label: 'Product Information',
      collapsed: false,
      items: [
        'product/introduction',
        'product/tech-stack',
        'product/roadmap',
      ],
    },
    {
      type: 'category',
      label: 'Modules',
      collapsed: false,
      items: [
        {
          type: 'category',
          label: 'Frontend',
          items: [
            'frontend/overview',
            'frontend/angular',
            'frontend/tailwind',
            'frontend/pwa',
            'frontend/i18n',
            'frontend/style-guide',
          ],
        },
        {
          type: 'category',
          label: 'Gateway YARP',
          items: [
            'gateway-yarp/overview',
          ],
        },
        {
          type: 'category',
          label: 'Microservices',
          items: [
            'services/overview',
            'services/user-service',
            'services/product-service',
            'services/order-service',
            'services/notification-service',
            'services/payment-service',
          ],
        },
        {
          type: 'category',
          label: 'Messaging',
          items: [
            'messaging/rabbitmq',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Shared Concepts',
      collapsed: false,
      items: [
        'shared-concepts/observability',
      ],
    },
    {
      type: 'doc',
      id: 'faq',
      label: 'FAQ',
    },
  ],
};

module.exports = sidebars; 