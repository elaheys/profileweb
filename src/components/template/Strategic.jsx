import React from 'react';
//png
import target from "/logo/2.svg";
import sell from "/logo/1.svg";
import rival from "/logo/7.svg";
import innovation from "/logo/11.svg";
//icon
import { ArrowLeftIcon, ChevronLeftIcon } from '@heroicons/react/24/outline';

const Strategic = () => {
    return (
        <div className='container'>
            <div className='flex justify-center items-center text-base md:text-2xl mt-20'>
                <h3>چرا مشاوره استراتژیک ؟</h3>
            </div>

            <div className='services my-10'>
                <div className='flex items-center justify-between gap-y-11 flex-wrap child:w-1/2 lg:child:w-auto child:text-center lg:child:text-right text-zinc-700 '>

                    <div className='flex items-center flex-col gap-x-4 gap-y-5'>
                    <img className='md:w-[80px] w-12 md:h-[80px] h-12' src={target} alt='icon'/>
                    <div>
                        <p className='md:text-lg'>تدوین استراتژی</p>
                    </div>
                    </div>

                    <div className='flex items-center flex-col gap-x-4 gap-y-5'>
                        <img className='md:w-[80px] w-12 md:h-[80px] h-12' src={sell} alt='icon'/>
                    <div>
                        <p className='md:text-lg'>تحلیل بازار</p>
                    </div>
                    </div>

                    <div className='flex items-center flex-col gap-x-4 gap-y-5'>
                        <img className='md:w-[80px] w-12 md:h-[80px] h-12' src={rival} alt='icon'/>
                    <div>
                        <p className='md:text-lg'>برنامه ریزی توسعه</p>
                    </div>
                    </div>

                    <div className='flex items-center flex-col gap-x-4 gap-y-5'>
                        <img className='md:w-[80px] w-12 md:h-[80px] h-12' src={innovation} alt='icon'/>
                    <div>
                        <p className='md:text-lg'>فرصت ها و تهدیدها</p>
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