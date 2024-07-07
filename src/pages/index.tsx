/* eslint-disable @next/next/no-img-element */
import CardFullBg from '@Components/Card/CardFullBg';
import homeNotices, { HomeNoticeProps } from '@Data/homeNotice';
import { homeBanner } from '@Data/products';
import type { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next';
import Link from 'next/link';
import SwiperCore, { Autoplay, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';

SwiperCore.use([Autoplay, Pagination]);

// Pretending like we fetch data form server here!
export const getStaticProps: GetStaticProps = () => ({
  props: {
    banners: homeBanner,
    noticeCategories: homeNotices,
  },
});

const Home: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({ banners, noticeCategories }) => {
  return (
    <div>
      <Swiper
        centeredSlides={true}
        loop={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        speed={600}
        className="site-container [--swiper-theme-color:#f43f5e]"
      >
        {banners.map(({ imageUrl, productUrl, alt }: typeof homeBanner[0], idx: any) => (
          <SwiperSlide key={idx}>
            <Link href={productUrl} passHref>
              <a>
                <img src={imageUrl} alt={alt} />
              </a>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="site-container mt-12">
        <div className="flex flex-wrap">
          {noticeCategories.map((item: HomeNoticeProps) => (
            <div key={item.title} className={`px-4 mb-4 relative w-full ${item.lgScreenWidth}`}>
              <CardFullBg image={item.image} link={item.link} title={item.title} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
