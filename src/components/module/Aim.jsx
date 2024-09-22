import React from 'react';
//png
import target from "/logo/2.svg";
import sell from "/logo/7.svg";
import innovation from "/logo/11.svg";
import business from "/logo/3.svg"

const Aim = () => {
    return (
        <div className='container md:my-24 my-14 aim'>
            <div className='md:flex md:mx-8 grid grid-cols-2 items-center justify-between child:mx-auto gap-x-2 gap-y-11 child:whitespace-nowrap child:flex-wrap md:flex-nowrap child:w-[80%] lg:child:w-[220px] child:text-center text-[10px] sm:text-xs md:text-lg tracking-tightest'>

            <div className='flex items-center flex-col bg-white border border-gray-200 p-4 gap-y-4 rounded-[20px] shadow-md'>
                <img className='md:w-16 w-12 md:h-16 h-12' src={target} alt='icon'/>
                <div>
                    <p>مشاوره استراتژیک</p>
                </div>
            </div>

            <div className='flex items-center flex-col  bg-white border border-gray-200 p-4 gap-x-4 gap-y-4 rounded-[20px] shadow-md'>
                <img className='md:w-16 w-12 md:h-16 h-12' src={business} alt='icon'/>
                <div>
                    <p>بازاریابی و فروش</p>
                </div>
            </div>

            <div className='flex items-center flex-col  bg-white border border-gray-200 p-4 gap-x-4 gap-y-4 rounded-[20px] shadow-md'>
                <img className='md:w-16 w-12 md:h-16 h-12' src={innovation} alt='icon'/>
                <div>
                    <p>مشاوره مدیریت</p>
                </div>
            </div>

            <div className='flex items-center flex-col  bg-white border border-gray-200 p-4 gap-x-4 gap-y-4 rounded-[20px] shadow-md'>
                <img className='md:w-16 w-12 md:h-16 h-12' src={sell} alt='icon'/>
                <div>
                    <p>مشاوره مالی</p>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Aim;