import React from 'react';

const Business = () => {
    return (
        <div className=' text-white '>
            <div className='flex justify-center items-center text-base md:text-2xl py-12 '>
                <h3 className='text-zinc-800'>چرا مشاوره بازاریابی و فروش ؟</h3>
            </div>

            <div className='flex child:w-full md:flex-row flex-col gap-x-10 gap-y-9 text-sm md:text-lg pb-12 mx-12 text-zinc-900 child:tracking-tightest'>
                <p className='h-52 flex items-center justify-center text-center shadow-normal rounded-[10px] p-10   bg-white'>تحقیقات بازار و تحلیل مشتریان</p>
                <p className='h-52 flex items-center justify-center text-center shadow-normal rounded-[10px] p-10  bg-white'>بهبود فرآیندهای فروش و خدمات
                مشتریان</p>
                <p className='h-52 flex items-center justify-center text-center shadow-normal rounded-[10px] p-10  bg-white'>تدوین استراتژی های بازاریابی و
                تبلیغات</p>
                <p className='h-52 flex items-center justify-center text-center shadow-normal rounded-[10px] p-10  bg-white'>برندینگ و مدیریت نام تجاری</p>
            </div>
        </div>
    );
};

export default Business;