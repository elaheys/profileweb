import React, { useRef } from 'react';
import {Swiper,SwiperSlide} from 'swiper/react';
import 'swiper/css';
// import required modules
import { Autoplay } from 'swiper/modules';

const Skills = () => {
    const swiperRef = useRef(null)


    return (
        <div className='container my-20'>
            <Swiper
            
            slidesPerView={2}
            spaceBetween={14}
            onBeforeInit={(swiper) => {
            swiperRef.current = swiper;
            }}
            autoplay={{
                delay: 1000,
                pauseOnMouseEnter: true,
            }}
            modules={[Autoplay]}
            breakpoints={{
                640: {
                    slidesPerView: 3,
                    spaceBetween:14
                  },
                  768:{
                    slidesPerView: 3,
                    spaceBetween:20
                  },
                  1024: {
                    slidesPerView: 4,
                    spaceBetween:20
                  },
            }}
            >
                <SwiperSlide>slide1</SwiperSlide>
                <SwiperSlide>slide2</SwiperSlide>
                <SwiperSlide>slide3</SwiperSlide>
                <SwiperSlide>slide4</SwiperSlide>
                <SwiperSlide>slide5</SwiperSlide>
                <SwiperSlide>slide6</SwiperSlide>
                <SwiperSlide>slide7</SwiperSlide>
                <SwiperSlide>slide8</SwiperSlide>
                <SwiperSlide>slide9</SwiperSlide>
            </Swiper>
            
        </div>
    );
};

export default Skills;