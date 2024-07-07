export const ROUTE_PRODUCT_LIST_PREFIX = '/products';

export type ProductCategory = 'cables' | 'earphones';
type ProductCategoryDisplay = 'Cables' | 'Earphones';

export const homeBanner = [
  {
    imageUrl: '/images/products/earphones/earphone1.jpg',
    alt: 'Monk slim metal',
    productUrl: `${ROUTE_PRODUCT_LIST_PREFIX}/Earphones`,
  },
  {
    imageUrl: '/images/products/earphones/earphone2.jpg',
    alt: 'Wired Earphones',
    productUrl: `${ROUTE_PRODUCT_LIST_PREFIX}/Earphones`,
  },
  {
    imageUrl: '/images/products/earphones/earphone3.jpg',
    alt: 'Monk plus',
    productUrl: `${ROUTE_PRODUCT_LIST_PREFIX}/Earphones`,
  },
];

type ProductNavigateItem = {
  subPath: string;
  displayName: string;
  category: ProductCategory;
};

export const productNavigate: ProductNavigateItem[] = [
  {
    subPath: '/earphones',
    displayName: 'Earphones',
    category: 'earphones',
  },
  {
    subPath: '/cables',
    displayName: 'Cables',
    category: 'cables',
  },
];

export type ProductDetail = {
  category: ProductCategory;
  categoryDisplay: ProductCategoryDisplay;
  productDetailSlug: string;
  thumbNail: string;
  images: string[];
  name: string;
  variants: string[];
  createdTime: string;
  description?: string;
  minPrice?: number;
  maxPrice?: number;
};

export const productData: ProductDetail[] = [
  {
    category: 'cables',
    categoryDisplay: 'Cables',
    productDetailSlug: 'adapter-cable',
    thumbNail: '/images/products/cables/adapter_cable/001.jpg',
    images: [
      '/images/products/cables/adapter_cable/001.jpg',
      '/images/products/cables/adapter_cable/002.jpg',
      '/images/products/cables/adapter_cable/003.jpg',
    ],
    name: 'Adapter Cables',
    variants: ['2.5mm TRRS Female', '3.5mm TRRS Female', '4.4MM Female', '3.5mm SE'],
    createdTime: '2021-01-22T02:01:12.150Z',
    minPrice: 10.0,
    maxPrice: 30.0,
  },
  {
    category: 'cables',
    categoryDisplay: 'Cables',
    productDetailSlug: 'copper-lite-cable',
    thumbNail: '/images/products/cables/basic_di_copper_lite/001.jpg',
    images: [
      '/images/products/cables/basic_di_copper_lite/001.jpg',
      '/images/products/cables/basic_di_copper_lite/002.jpg',
    ],
    name: 'Basic DI copper lite',
    variants: ['3.5SE', '2.5TRRS', '4.4TRRRS'],
    createdTime: '2021-02-03T02:01:12.150Z',
    minPrice: 30.0,
    maxPrice: 60.0,
  },
  {
    category: 'cables',
    categoryDisplay: 'Cables',
    productDetailSlug: 'customize-cable',
    thumbNail: '/images/products/cables/customize/001.jpg',
    images: ['/images/products/cables/customize/001.jpg'],
    name: 'Customized Cable',
    variants: ['Headphone Cables', 'Adapter Cables', 'Inter-Connect Cables'],
    description: 'All of the customized Cables have one month warranty from delivery',
    createdTime: '2021-02-14T02:01:12.150Z',
  },
  {
    category: 'cables',
    categoryDisplay: 'Cables',
    productDetailSlug: 'premium-silver-plated-copper-cable',
    thumbNail: '/images/products/cables/premium_silver_plated_copper/001.jpg',
    images: [
      '/images/products/cables/premium_silver_plated_copper/001.jpg',
      '/images/products/cables/premium_silver_plated_copper/002.jpg',
      '/images/products/cables/premium_silver_plated_copper/003.jpg',
      '/images/products/cables/premium_silver_plated_copper/004.jpg',
      '/images/products/cables/premium_silver_plated_copper/005.jpg',
    ],
    name: 'Premium Silver Plated Copper',
    variants: ['0.78mm 2Pin', 'MMCX'],
    description: '7x9x0.06mm per wire ，Silver Plated 6n OFC. \nAll of our headphone cable are 1.2m length.',
    createdTime: '2021-02-25T02:01:12.150Z',
    minPrice: 298.0,
  },
  {
    category: 'cables',
    categoryDisplay: 'Cables',
    productDetailSlug: 'standard-copper-cable',
    thumbNail: '/images/products/cables/standard_di_copper_lite/001.jpg',
    images: [
      '/images/products/cables/standard_di_copper_lite/001.jpg',
      '/images/products/cables/standard_di_copper_lite/002.jpg',
      '/images/products/cables/standard_di_copper_lite/003.jpg',
    ],
    name: 'Standard DI Copper',
    variants: ['0.78mm 2Pin', 'MMCX'],
    description:
      'We also have 3.5trrs version.\nIf you want 3.5trrs, please contact us.\nPlease note that 3.5trrs only can be used on Particular Digital Player, not for cellphone or PC. 3.5SE is the typical jack on cellphone, PC and digital player.',
    createdTime: '2021-02-25T02:01:12.150Z',
    minPrice: 158.0,
  },
  {
    category: 'cables',
    categoryDisplay: 'Cables',
    productDetailSlug: 'ultra-budget-cable',
    thumbNail: '/images/products/cables/ultra_budget/001.jpg',
    images: ['/images/products/cables/ultra_budget/001.jpg'],
    name: 'Ultra budget cables',
    variants: ['0.78mm 2Pin', 'MMCX'],
    description:
      'We also have 3.5trrs version.\nIf you want 3.5trrs, please contact us.\nPlease note that 3.5trrs only can be used on Particular Digital Player, not for cellphone or PC. 3.5SE is the typical jack on cellphone, PC and digital player.',
    createdTime: '2021-03-20T02:01:12.150Z',
    minPrice: 10.0,
    maxPrice: 20.0,
  },
  {
    category: 'earphones',
    categoryDisplay: 'Earphones',
    productDetailSlug: 'Earphones',
    thumbNail: '/images/products/earphones/earphone1.jpg',
    images: [
      '/images/products/earphones/earphone1.jpg',
      '/images/products/earphones/earphone2.jpg',
      '/images/products/earphones/earphone3.jpg',
      '/images/products/earphones/earphone6.jpg',
    ],
    name: 'Chinese Earphones',
    variants: ['3.5SE', '2.5TRRS', '4.4 TRRRS'],
    createdTime: '2021-05-21T02:01:12.150Z',
    minPrice: 148.0,
  },
];

export const getPriceDisplay = (minPrice?: number, maxPrice?: number, symbol = '$') => {
  if (typeof minPrice !== 'number' && typeof maxPrice !== 'number') return '';
  if (typeof minPrice === 'number' && typeof maxPrice !== 'number') return `${symbol}${minPrice.toFixed(2)}`;
  return `${symbol}${minPrice?.toFixed(2)} - ${maxPrice?.toFixed(2)}`;
};
