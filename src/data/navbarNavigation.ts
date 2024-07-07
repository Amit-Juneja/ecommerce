export type NavigationItem = {
  name: string;
  link?: string;
  collapse?: NavigationItem[];
};

const navigationItems: NavigationItem[] = [
  {
    name: 'Products',
    link: '/products',
    collapse: [
      {
        name: 'Cables',
        link: '?category=cables',
        collapse: [
          {
            name: 'Adapter Cables',
            link: '/products/adapter-cable',
          },
          {
            name: 'Basic DI copper lite',
            link: '/products/copper-lite-cable',
          },
          {
            name: 'Customized Cable',
            link: '/products/customize-cable',
          },
          {
            name: 'Premium Silver Plated Copper',
            link: '/products/premium-silver-plated-copper-cable',
          },
          {
            name: 'Standard DI Copper',
            link: '/products/standard-copper-cable',
          },
          {
            name: 'Ultra budget cables',
            link: '/products/ultra-budget-cable',
          },
        ],
      },
      {
        name: 'Earphones',
        link: '?category=earphones',
        collapse: [
          {
            name: 'Wired Earphones',
            link: '/products/Earphones',
          },
          {
            name: 'MOE',
            link: '/products/Earphones',
          },
          {
            name: 'Monk lite',
            link: '/products/Earphones',
          },
          {
            name: 'Monk plus',
            link: '/products/Earphones',
          },
        ],
      },
    ],
  },
];

export default navigationItems;
