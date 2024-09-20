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
                <div className='flex flex-col md:flex-row items-center justify-between gap-y-11 flex-wrap lg:child:mx-6 child:w-[300px] lg:child:w-[290px] child:text-center lg:child:text-right text-zinc-900'>

                    <div className='flex items-center flex-col gap-y-1 shadow-normal rounded-[10px] p-10  bg-white'>
                    <img className='md:w-[120px] w-24 md:h-[120px] h-24' src={strategic} alt='icon'/>
                    <div className='text-right'>
                    <p className='md:text-base tracking-tightest'>تدوین استراتژی بازاریابی و تبلیغات</p>
                         <div className='block text-[12px]'> 
                           <li >تعیین هویت برند</li>
                           <li >ساختاردهی تصویر برند</li>
                           <li >مدیریت ارتباطات برند</li>
                           <li >اندازه‌گیری وفاداری به برند</li>
                         </div>
                    </div>

                    
                    </div>

                    <div className='flex items-center flex-col gap-y-1 shadow-normal rounded-[10px] p-10  bg-white'>
                        <img className='md:w-[120px] w-24 md:h-[120px] h-24' src={businessA} alt='icon'/>
                        <div className='text-right'>
                         <p className='md:text-base tracking-tightest'>تحقیقات بازار و تحلیل رقبا</p>
                         <div className='block text-[12px]'> 
                           <li >شناسایی نیازهای مشتریان</li>
                           <li >تحلیل رقبا</li>
                           <li >تحلیل روندهای بازار</li>
                           <li >ارزیابی سهم بازار</li>
                         </div>
                        </div>
                    </div>

                    <div className='flex items-center flex-col gap-y-1 shadow-normal rounded-[10px] p-10  bg-white'>
                        <img className='md:w-[120px] w-24 md:h-[120px] h-24' src={planing} alt='icon'/>
                        <div className='text-right'>
                         <p className='md:text-base text-nowrap tracking-tightest'>تدوین استراتژی بازاریابی و تبلیغات</p>
                         <div className='block text-[12px]'> 
                           <li >تحلیل SWOT </li>
                           <li >تقسیم‌بندی بازار</li>
                           <li >انتخاب کانال‌های تبلیغاتی</li>
                           <li >تعیین بودجه و اهداف کمپین</li>
                         </div>
                        </div>
                    </div>

                    <div className='flex items-center flex-col gap-y-1 shadow-normal rounded-[10px] p-10  bg-white'>
                        <img className='md:w-[120px] w-24 md:h-[120px] h-24' src={branding} alt='icon'/>
                        <div className='text-right'>
                         <p className='md:text-base text-nowrap tracking-tightest'>بهبود فرآیندهای فروش و خدمات مشتریان</p>
                         <div className='block text-[12px] tracking-tighter'> 
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