import React from 'react';
//png
import sell from "/Newsvg/sell.svg";
import strategic2 from "/Newsvg/strategic2.svg";
import rival from "/Newsvg/rival.svg";
import chances from "/Newsvg/chances.svg";

const Strategic = () => {
    return (
        <div id="strategic" className='py-1 mt-12 bg-zard'>
            <div className='flex justify-center items-center text-base md:text-2xl py-12'>
                <h3>چرا مشاوره استراتژیک ؟</h3>
            </div>

            <div className=' mb-12'>
                <div className='grid lg:grid-cols-4 grid-cols-1 gap-y-4 gap-x-4 md:mx-4 mx-6 child:text-center text-zinc-900'>

                    <div className='grid grid-cols-1 shadow-normal rounded-[10px] p-10  bg-white'>
                    <img className='md:w-[240px] w-h-32 md:h-[240px] h-32 mx-auto mt-1' src={strategic2} alt='icon'/>
                    <div>
                        <p className='md:text-lg tracking-tightest mb-2'>تدوین استراتژی</p>
                    </div>
                    </div>

                    <div className='grid grid-cols-1 shadow-normal rounded-[10px] p-10  bg-white'>
                        <img className='md:w-[240px] w-32 md:h-[240px] h-32 mx-auto -mt-[6px] ' src={sell} alt='icon'/>
                    <div>
                        <p className='md:text-lg tracking-tightest mt-1'>تحلیل بازار</p>
                    </div>
                    </div>

                    <div className='grid grid-cols-1 shadow-normal rounded-[10px] p-10 bg-white'>
                        <img className='md:w-[240px] w-32 md:h-[240px] h-32 mx-auto mt-1' src={rival} alt='icon'/>
                    <div>
                        <p className='md:text-lg tracking-tightest mb-2'>برنامه ریزی توسعه</p>
                    </div>
                    </div>

                    <div className='grid grid-cols-1 shadow-normal rounded-[10px] p-10  bg-white'>
                        <img className='md:w-[240px] w-32 md:h-[240px] h-32 mx-auto mt-2' src={chances} alt='icon'/>
                    <div>
                        <p className='md:text-lg tracking-tightest mb-2'>فرصت ها و تهدیدها</p>
                    </div>
                    </div>
                </div>
            </div>

            {/* <div className='flex justify-center whitespace-nowrap p-2 mx-auto w-[200px] hover:text-white bg-zard  rounded-[10px] hover:bg-abi transition-all cursor-pointer'>
                <a href='#' className='inline-flex '>
                    ویدیو مشاوره استراتژیک
                    <ArrowLeftIcon className='w-5 pr-1'/>
                </a>
            </div> */}
            
        </div>
    );
};

export default Strategic;