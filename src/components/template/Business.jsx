import React from 'react';
//svg
import strategic from "/Newsvg/strategic.svg";
import businessA from "/Newsvg/businessA.svg";
import planing from "/Newsvg/planing.svg";
import branding from "/Newsvg/branding.svg";

const Business = () => {
    return (
        <div id="business" className=' text-white '>
            <div className='flex justify-center items-center text-base md:text-2xl py-12 '>
                <h3 className='text-zinc-800'>چرا مشاوره بازاریابی و فروش ؟</h3>
            </div>

            <div className=' mb-12'>
                <div className='grid lg:grid-cols-4 grid-cols-1 gap-y-4 gap-x-4 md:mx-4 mx-6 child:text-center lg:child:text-right text-zinc-900'>

                    <div className='flex items-center flex-col gap-y-1 shadow-normal rounded-[10px] py-5 md:px-10 px-14 bg-white'>
                    <img className='md:w-[240px] w-32 md:h-[240px] h-32' src={strategic} alt='icon'/>
                    <div className='text-right'>
                    <p className='lg:text-lg tracking-tightest md:tracking-tight whitespace-nowrap font-IranYekanMedium md:font-IranYekanBold pb-2'>تدوین استراتژی بازاریابی و تبلیغات</p>
                         <div className='block font-IranYekanMedium md:text-[14px]'> 
                           <li >تعیین هویت برند</li>
                           <li >ساختاردهی تصویر برند</li>
                           <li >مدیریت ارتباطات برند</li>
                           <li >اندازه‌گیری وفاداری به برند</li>
                         </div>
                    </div>

                    
                    </div>

                    <div className='flex items-center flex-col gap-y-1 shadow-normal rounded-[10px] py-5 px-10 bg-white'>
                        <img className='md:w-[240px] w-32 md:h-[240px] h-32' src={businessA} alt='icon'/>
                        <div className='text-right'>
                         <p className='lg:text-lg tracking-tightest md:tracking-tight whitespace-nowrap font-IranYekanMedium md:font-IranYekanBold pb-2'>تحقیقات بازار و تحلیل رقبا</p>
                         <div className='block font-IranYekanMedium md:text-[14px]'> 
                           <li >شناسایی نیازهای مشتریان</li>
                           <li >تحلیل رقبا</li>
                           <li >تحلیل روندهای بازار</li>
                           <li >ارزیابی سهم بازار</li>
                         </div>
                        </div>
                    </div>

                    <div className='flex items-center flex-col gap-y-1 shadow-normal rounded-[10px] py-5 px-10 bg-white'>
                        <img className='md:w-[240px] w-32 md:h-[240px] h-32' src={planing} alt='icon'/>
                        <div className='text-right'>
                         <p className='lg:text-lg tracking-tightest md:tracking-tight whitespace-nowrap font-IranYekanMedium md:font-IranYekanBold pb-2'>تدوین استراتژی بازاریابی و تبلیغات</p>
                         <div className='block font-IranYekanMedium text-[14px]'> 
                           <li >تحلیل SWOT </li>
                           <li >تقسیم‌بندی بازار</li>
                           <li >انتخاب کانال‌های تبلیغاتی</li>
                           <li >تعیین بودجه و اهداف کمپین</li>
                         </div>
                        </div>
                    </div>

                    <div className='flex items-center flex-col gap-y-1 shadow-normal rounded-[10px] py-5 px-10 bg-white'>
                        <img className='md:w-[240px] w-32 md:h-[240px] h-32' src={branding} alt='icon'/>
                        <div className='text-right'>
                         <p className='lg:text-lg tracking-tightest md:tracking-tight whitespace-nowrap font-IranYekanMedium md:font-IranYekanBold pb-2'>بهبود فرآیند فروش و خدمات مشتریان</p>
                         <div className='block font-IranYekanMedium tracking-tightest lg:tracking-normal md:text-[14px]'> 
                           <li >تحلیل چرخه فروش</li>
                           <li >آموزش نیروی فروش</li>
                           <li className='text-nowrap'> سیستم‌های مدیریت ارتباط با مشتریان (CRM) </li>
                           <li >مدیریت بازخورد مشتریان</li>
                         </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Business;