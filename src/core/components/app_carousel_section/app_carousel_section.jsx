import React from 'react'
import { AppSwiper } from '../app_swiper/app_swiper'
import AppSwiperSlide from '../app_swiper/components/app_swiper_slide'
import AppSectionHeadings from '../app_section_headings/app_section_headings'
import AppCardTitle from '../app_card_title/app_card_title'
import AppCard from '../app_card/app_card'

const AppCarousel = ({title, data}) => {
  return (
    <div>
      <div>
        <AppSectionHeadings>
          {title}
        </AppSectionHeadings> 
      </div>
      <AppSwiper>
        {data?.map((e) => (
          <AppSwiperSlide 
            key={e.id} 
              style={{
                height: "250px",
                display: "flex",
                flexDirection: 'column',
                justifyContent: 'center',
              }}>
            <AppCard
              config = {{
                image: {
                  show: true,
                  src: `${e.poster}`,
                  alt: `${e.title}`,
                },
                width: '150px',
                height: '200px',
              }}
            >
                <AppCard.Header />
                <AppCard.Body />
                <AppCard.Footer>
                  <p className='text-center font-bold'>Play Trailer</p>
                </AppCard.Footer>
            </AppCard>
          </AppSwiperSlide>
        ))}
      </AppSwiper>
    </div>  
  )
}

export default AppCarousel