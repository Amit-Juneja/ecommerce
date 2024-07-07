import type { Props as CardProp } from '@Components/Card/CardFullBg';
import { ROUTE_PRODUCT_LIST_PREFIX } from './products';

export type HomeNoticeProps = CardProp & {
  lgScreenWidth: 'md:w-1/4' | 'md:w-1/2';
};

const homeNotices: HomeNoticeProps[] = [
  {
    image: '/images/home-notices/001_earbud.jpg',
    link: { to: `${ROUTE_PRODUCT_LIST_PREFIX}?category=earphones` },
    title: 'Earphones',
    lgScreenWidth: 'md:w-1/4',
  },
  {
    image: '/images/home-notices/004_cable.jpg',
    link: { to: `${ROUTE_PRODUCT_LIST_PREFIX}?category=cables` },
    title: 'Cable',
    lgScreenWidth: 'md:w-1/4',
  },
];

export default homeNotices;
