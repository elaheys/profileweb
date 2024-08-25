import React from 'react';

const CallFooter = () => {
    return (
        <div className='flex items-center justify-center mx-auto h-1/2 my-40 text-white bg-sormei'>
            <div className='p-5 text-nowrap tracking-tightest md:tracking-normal'>
                <h5 className='text-sm md:text-xl'> جهت دریافت مشاوره همین الان <a href='#call' className='text-zard md:text-3xl text-xl'>تماس</a> بگیرید.</h5>
            </div>
        </div>
    );
};

export default CallFooter;