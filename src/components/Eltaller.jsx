import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';

import slide_image_1 from '/taller.jpg';
import slide_image_2 from '/laminadora.jpg';
import slide_image_3 from '/pinceles.jpg';



const Eltaller = () => {




  return (
    <div className='flex flex-col lg:flex-row mt-5 md:mt-8 mx-[1.2rem] mb-24 md:mx-[7.2rem] lg:mx-auto max-w-[75rem] justify-between'>
        <div className='lg:w-[20rem] mb-5'>
            <p className='my-auto ml-0 lg:max-w-xl text-sm md:text-xl leading-7 text-claro md:leading-10 font-light'>
            <span className='text-7xl text-oscuro font-bold'>El taller</span>cuenta con mas de XX cantidad de tornos y XX de hornos especificios para cada actividad, ademas contamos con X aulas equipadas con todo lo necesario y mas...
            </p>
        </div>

    <div className="container lg:hidden">
      <Swiper
        effect={'coverflow'}
        spaceBetween={20}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5
        }}
        pagination={{ el: '.swiper-pagination', clickable: true }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
      >
        <SwiperSlide>
          <img src={slide_image_1} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_2} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_3} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_1} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_2} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_3} alt="slide_image" />
        </SwiperSlide>

        <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
            <ion-icon name="arrow-back-outline"></ion-icon>
          </div>
          <div className="swiper-button-next slider-arrow">
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
    </div>
  <div className='hidden mr-0 lg:flex flex-row justify-around items-center w-[51rem]'>
  <img className='h-[12rem] rounded-[10px]  aspect-square object-cover sombra' src={slide_image_1} alt="slide_image" />
  <img className='h-[19rem]  rounded-[10px] object-cover aspect-square sombra-lg' src={slide_image_2} alt="slide_image" />
  <img className='h-[12rem] object-cover aspect-square rounded-[10px] sombra' src={slide_image_3} alt="slide_image" />
  </div>

        
    </div>
  )
}

export default Eltaller