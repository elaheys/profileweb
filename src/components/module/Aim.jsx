import React from 'react';
//png
import target from "/target1.png";
import sell from "/exchange.png";
import rival from "/podium.png";
import innovation from "/innovation.png";

const Aim = () => {
    return (
        <div className='container services my-14'>
            <div className='flex items-center justify-between gap-y-11 flex-wrap md:flex-nowrap child:w-1/2 lg:child:w-auto child:text-center text-xs md:text-lg tracking-tightest'>

            <div className='flex items-center flex-col gap-x-4 gap-y-5'>
                <img className='md:w-16 w-12 md:h-16 h-12' src={target} alt='icon'/>
                <div>
                    <p>رسیدن به هدف</p>
                </div>
            </div>

            <div className='flex items-center flex-col gap-x-4 gap-y-5'>
                <img className='md:w-16 w-12 md:h-16 h-12' src={sell} alt='icon'/>
                <div>
                    <p>افزایش فروش</p>
                </div>
            </div>

            <div className='flex items-center flex-col gap-x-4 gap-y-5'>
                <img className='md:w-16 w-12 md:h-16 h-12' src={rival} alt='icon'/>
                <div>
                    <p>پیشی گرفتن از رقبا</p>
                </div>
            </div>

            <div className='flex items-center flex-col gap-x-4 gap-y-5'>
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