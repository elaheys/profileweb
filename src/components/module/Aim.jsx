import React from 'react';
//png
import target from "/target1.png";
import sell from "/exchange.png";
import rival from "/podium.png";
import innovation from "/innovation.png";

const Aim = () => {
    return (
        <div className='container md:my-24 my-14 aim'>
            {/* md:child:mx-5 gap-x-24 */}
            <div className='md:flex grid grid-cols-2 items-center justify-between child:mx-auto gap-x-8 gap-y-11 child:whitespace-nowrap child:flex-wrap md:flex-nowrap child:w-[80%] lg:child:w-[190px] child:text-center text-[10px] sm:text-xs md:text-lg tracking-tightest'>

            <div className='flex items-center flex-col bg-white border border-gray-200 p-4 gap-y-4'>
                <img className='md:w-16 w-12 md:h-16 h-12' src={target} alt='icon'/>
                <div>
                    <p>رسیدن به هدف</p>
                </div>
            </div>

            <div className='flex items-center flex-col  bg-white border border-gray-200 p-4 gap-x-4 gap-y-4'>
                <img className='md:w-16 w-12 md:h-16 h-12' src={sell} alt='icon'/>
                <div>
                    <p>افزایش فروش</p>
                </div>
            </div>

            <div className='flex items-center flex-col  bg-white border border-gray-200 p-4 gap-x-4 gap-y-4'>
                <img className='md:w-16 w-12 md:h-16 h-12' src={rival} alt='icon'/>
                <div>
                    <p>پیشی گرفتن از رقبا</p>
                </div>
            </div>

            <div className='flex items-center flex-col  bg-white border border-gray-200 p-4 gap-x-4 gap-y-4'>
                <img className='md:w-16 w-12 md:h-16 h-12' src={innovation} alt='icon'/>
                <div>
                    <p>نوآوری و خلاقیت</p>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Aim;