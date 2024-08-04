import React from 'react';

const Banner = () => {
    return (
        <div className='banner'>
            <section className="flex md:h-[450px] h-[400px] min-h-80 bg-[#4993cc]/10">
            <div className='flex flex-col'>
                <div className="w-[90%] md:mt-40 mt-12 border-2 border-abi rounded-[30px] md:items-start px-5 pt-3 sm:mx-[60px] lg:mx-[70px] mx-auto">

                    <h3 className="text-lg pr-3 font-IranYekanBold">
                        توحید خراسانی
                    </h3>
                    <p className="whitespace-nowrap text-[#2A5474] text-xl p-3">مشاور و منتور کسب و کار</p>  

                    <p className="sm:text-justify p-3 mt-2 sm:text-xl flex-wrap">
                        با مشورت پشیمانی را به
                        حداقل برسانید و موفقیت را 
                        به حداکثر.  
                        <span className='flex justify-end text-xs whitespace-nowrap'>«وینستون چرچیل»</span>
                    </p>
                </div>
                    {/* <div className="my-5 mx-[66px] sm:text-base text-xs">
                        <a href="/tohidkhorasani.pdf" className="button bg-[#4993cc] rounded-md sm:p-3 p-2 text-white">دانلود فایل رزومه</a>
                    </div> */}
                    <div className='w-[50%]'>

                    </div>
                </div>
                {/* ax  */}
                <div>

                </div>
            </section>
        </div>
    );
};

export default Banner;