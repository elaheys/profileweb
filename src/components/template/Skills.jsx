import React, { useRef } from 'react';
import {Swiper,SwiperSlide} from 'swiper/react';
import 'swiper/css';
// import required modules
import { Autoplay } from 'swiper/modules';
//images
import tooska from "/brands/toska.png" 
import irancell from "/brands/irancell.png" 
import hamrahaval from "/brands/hamrahaval.png" 
import tanzib from "/brands/tanzib.jpg" 
import lifestar from "/brands/lifestar.png" 
import wepod from "/brands/wepod.webp" 

const Skills = () => {
    const swiperRef = useRef(null)


    return (
        <div className='bg-zard '>
            <div className='flex justify-center items-center text-base md:text-2xl py-12'>
                <h3 className=''>همراه با برندهای بزرگ کشور</h3>
            </div>
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
                <SwiperSlide>
                    <img src={tooska} alt='tooska' className='w-[140px] h-[140px] mySwiper'/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={tanzib} alt='tanzib' className='w-[140px] h-[140px] mySwiper'/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={irancell} alt='irancell' className='w-[140px] h-[140px] mySwiper'/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={hamrahaval} alt='hamrahaval' className='w-[140px] h-[140px] mySwiper'/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={wepod} alt='wepod' className='w-[140px] h-[140px] mySwiper'/>    
                </SwiperSlide>
                <SwiperSlide>
                    <img src={lifestar} alt='lifestar' className='w-[190px] h-[130px] mySwiper'/>    
                </SwiperSlide>
            </Swiper>
            
        </div>
    );
};

export default Skills;