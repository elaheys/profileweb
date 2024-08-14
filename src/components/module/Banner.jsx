import React from 'react';
//image
import tohid from "/tohidkhorasani/hero-2.webp"

const Banner = () => {
    return (
        <div className='banner'>
            <section className="flex h-[400px] sm:h-[650px] sm:gap-x-96 min-h-80 md:bg-home-desktop md:bg-no-repeat md:bg-cover md:bg-[center_top] bg-abi/10">
            <div className='flex flex-col mx-auto md:mx-0'>
                <div className="md:w-[70%] w-[100%] mx-auto md:mt-40  mt-12 rounded-[20px] bg-white md:items-start px-6 py-5 md:mx-[60px] lg:mx-[70px] shadow-md">

                    <h3 className="text-lg pr-3 font-IranYekanBold">
                        توحید خراسانی
                    </h3>
                    <p className="whitespace-nowrap text-[#2A5474] text-xl p-3">مشاور و منتور کسب و کار</p>  

                    <p className="sm:text-justify md:tracking-tight p-3 mt-2 sm:text-xl flex-wrap ">
                        با مشورت پشیمانی را به  
                        حداقل < br/>برسانید و موفقیت را 
                        به حداکثر.  
                        <span className='flex justify-end text-xs whitespace-nowrap'>«وینستون چرچیل»</span>
                    </p>
                </div>
                    {/* <div className="my-5 mx-[66px] sm:text-base text-xs">
                        <a href="/tohidkhorasani.pdf" className="button bg-[#4993cc] rounded-md sm:p-3 p-2 text-white">دانلود فایل رزومه</a>
                    </div> */}
                    <div className=''>
                        
                    </div>
                </div>
                {/* ax  */}
                <div >
                    {/* <img src={tohid} alt='person' className=''/> */}
                </div>
            </section>
        </div>
    );
};

export default Banner;