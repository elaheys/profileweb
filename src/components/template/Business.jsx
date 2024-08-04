import React from 'react';

const Business = () => {
    return (
        <div className='container'>
            <div className='flex justify-center items-center text-base md:text-2xl my-20'>
                <h3>چرا مشاوره بازاریابی و فروش ؟</h3>
            </div>

            <div className='grid grid-cols-2 gap-x-4 gap-y-4 text-sm md:text-lg'>
                <p className='flex items-center justify-center text-center border-2 border-abi rounded-[10px] p-10 tracking-tightest md:tracking-normal'>تحقیقات بازار و تحلیل مشتریان</p>
                <p className='flex items-center justify-center text-center  border-2 border-abi rounded-[10px] p-10 tracking-tightest md:tracking-normal'>بهبود فرآیندهای فروش و خدمات
                مشتریان</p>
                <p className='flex items-center justify-center text-center  border-2 border-abi rounded-[10px] p-10 tracking-tightest md:tracking-normal'>تدوین استراتژی های بازاریابی و
                تبلیغات</p>
                <p className='flex items-center justify-center text-center  border-2 border-abi rounded-[10px] p-10 tracking-tightest md:tracking-normal'>برندینگ و مدیریت نام تجاری</p>
            </div>
        </div>
    );
};

export default Business;