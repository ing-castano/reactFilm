import React from 'react';
import { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

// import required modules
import { EffectCoverflow, Pagination, Mousewheel, Autoplay} from 'swiper/modules';
import tmdbImgServices from '../services/tmdb_img_services';
import config from '../datasources/remotes/tmdb/tmdb_config';
import AppTitle from './app_card_title/app_card_title';
import AppSectionHeadings from './app_section_headings/app_section_headings';


const {poster_sizes:{w342: posterSize}} = tmdbImgServices(); // pensado por si tmdb cambia la estructura del /configuration API
const SIZE = `h-auto w-auto`; // slice para sacarle la w
// const SIZE = `h-auto w-[${posterSize.slice(1)}px]`; // slice para sacarle la w - ES INESTABLE



const NewReleases = ({title, data}) => {

    return (
        <>
          <AppSectionHeadings>
            {title}
          </AppSectionHeadings> 
          <Swiper
            direction={'horizontal'}
            effect={'coverflow'}
            grabCursor={true}
            mousewheel={true}
            centeredSlides={true}
            slidesPerView={'auto'}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            pagination={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: true,
            }}
            modules={[Autoplay, EffectCoverflow, Mousewheel, Pagination]}
            className="mySwiper"
          >
            {
                data?.map((e) => {
                  let imageUrl = `${e.poster}`
                  return (
                    <SwiperSlide key={e.id} className={SIZE}>
                      <img src={imageUrl} />
                    </SwiperSlide>
                  );
                })
            }
          </Swiper>
        </>
      );
}

export default NewReleases