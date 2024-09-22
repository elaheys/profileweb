import React from 'react';

//img
import ax5 from "/logo/5.svg"

const Address = () => {
    return (
        <div className='relative top-14 z-10'>
        <div className='container tracking-tighter md:tracking-normal text-sm md:text-lg'>
            <div className=' mt-6 text-white'>
                <div id='call' className='flex sm:justify-between justify-center sm:flex-row flex-col  w-[90%] h-40 gap-x-3 mx-auto bg-abi'>
                    <div className='flex items-center mr-10'>
                        <img src={ax5}  alt='ax' className='lg:w-[80px] md:w-[60px] w-[40px] lg:h-[80px] md:h-[60px] h-[40px]'/>
                        <div className='lg:mr-5 mr-2'>
                            <p className='tracking-tighter text-sm sm:text-base md:text-lg'>یک جلسه مشاوره رایگان</p>
                            <p className='xl:text-[50px] sm:text-[25px] text-[20px] tracking-tighter lg:pt-5 sm:pt-3  text-zard whitespace-nowrap'>0938-020-6888</p>
                        </div>
                    </div>

                    <div className='flex flex-col items-center justify-center  lg:ml-20 ml-10'>
                        <p className='text-white pt-5 pr-10  xl:text-[30px] lg:text-[20px] tracking-tighter'>برای مشاوره همین حالا تماس بگیرید</p>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Address;