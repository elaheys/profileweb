import React from 'react';

const Banner = () => {
    return (
        <div>
            <section className="flex h-[300px] min-h-80 bg-[#4993cc]/10">
                <div className="flex flex-col w-[50%] mt-4 items-start md:mx-[100px] mx-9">

                    <h3 className="w-[170px] text-lg pb-2 font-IranYekanBold">
                        توحید خراسانی
                    </h3>
                    <p className="whitespace-nowrap text-[#2A5474] text-xl border-2 border-zinc-700 p-3">مشاور و منتور کسب و کار</p>  

                    <p className="w-[242px] sm:text-justify border-2 border-zinc-700 p-3 mt-2 sm:text-xl flex-wrap">
                        با مشورت پشیمانی را به
                        حداقل برسانید و موفقیت را 
                        به حداکثر.  
                        <span className='flex justify-end text-xs whitespace-nowrap'>«وینستون چرچیل»</span>
                    </p>
                    <div className="my-4 sm:text-base text-xs">
                        <a href="/tohidkhorasani.pdf" className="button bg-[#4993cc] rounded-md sm:p-3 p-2 text-white">دانلود فایل رزومه</a>
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