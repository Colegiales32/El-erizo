import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useRef,useContext,useEffect } from 'react';
import ErizoContext from '../context/erizoContext';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';

import slide_image_1 from '/taller.webp';
import slide_image_2 from '/laminadora.webp';
import slide_image_3 from '/pinceles.webp';



const Eltaller = () => {
  const { registerRefs } = useContext(ErizoContext);
  const tallerRef = [useRef(null), useRef(null),useRef(null)];

  useEffect(() => {
    // Registra las referencias en el contexto
    tallerRef.forEach(ref => registerRefs(ref));
  }, [registerRefs]);


  return (
    <div loading="lazy" id='taller' className='flex flex-col lg:flex-row mt-5 md:mt-8 mx-[1.2rem] md:mx-[7.2rem] xl:mx-auto justify-between max-w-[75rem] mb-24'>
        <div ref={tallerRef[0]} className='fade-in-up-scroll lg:w-[20rem] mb-5'>
            <p className='my-auto ml-0 lg:max-w-xl text-sm md:text-xl leading-7 text-claro md:leading-10 font-light'>
            <span className='text-7xl text-oscuro font-bold'>El taller</span>cuenta con mas de XX cantidad de tornos y XX de hornos especificios para cada actividad, ademas contamos con X aulas equipadas con todo lo necesario y mas...
            </p>
        </div>

    <div ref={tallerRef[1]} className=" fade-in-up-scroll container lg:hidden">
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
  <div ref={tallerRef[2]} className='hidden fade-in-up-scroll  mr-0 lg:flex flex-row justify-between gap-[2rem] items-center max-w-[51rem]'>
  <img className='lg:h-[8rem] xl:h-[12rem] rounded-[10px]  aspect-square object-cover sombra' src={slide_image_1} alt="slide_image" />
  <img className='lg:h-[12rem] xl:h-[19rem] rounded-[10px] object-cover aspect-square sombra-lg' src={slide_image_2} alt="slide_image" />
  <img className='lg:h-[8rem] xl:h-[12rem] object-cover aspect-square rounded-[10px] sombra' src={slide_image_3} alt="slide_image" />
  </div>

        
    </div>
  )
}

export default Eltaller