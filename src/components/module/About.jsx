import React, {  useRef } from 'react';
import { useInView } from 'react-intersection-observer'
import tohid from "../../../public/tohidkhorasani/3.webp"

const About = () => {

    // const { ref:myRef , inView:myElementIsVisible } = useInView()
    // const { ref:myRef2 , inView:myElementIsVisible2 } = useInView()

    // console.log(myElementIsVisible);
    // ref={myRef} className={`${myElementIsVisible ? 'show' :""} md:w-1/2 w-full ml-5`}

    return (
        <>
        
            <div id='about' className='container text-justify md:my-20 mt-12 ' >
            <div className='flex flex-col md:flex-row md:mr-[200px]'>

                <img src={tohid} alt='khorasani' className='md:w-[300px] md:h-[300px] rounded-[20px] object-cover'/>
          
                <p className='md:pr-10 pt-12 md:pt-0 md:w-[50%] md:h-[50%] tracking-wide leading-8'>
                آیا کسب و کار شما با چالش هایی مانند کاهش فروش یا نداشتن استراتژی مشخص
                مواجه است؟
                آیا فکر می کنید سهم درستی از بازار نصیب کسب و کار شما نشده است ؟
                من توحید خراسانی با بیش از 12 سال تجربه در ایجاد و راه اندازی استارتاپ ها
                و کسب و کارهای گوناگون به شما کمک می کنم تا این موانع را پشت سر
                بگذارید. با استفاده از راهکارهای عملی و استراتژی های نوآورانه، میتوانید
                بهره وری خود را افزایش دهید، استراتژی های موفقی برای رشد تدوین کنید و
                فروش خود را بهبود بخشید.
                ما میخواهیم در کنار شما این چالش ها را به فرصت های جدید و سودآور تبدیل
                کنیم.
                </p>
            </div>
        </div>
        
        </>
    );
};

export default About;