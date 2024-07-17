import React, { useState } from 'react';
//components
import MobileHeader from '../components/module/MobileHeader';

const Header = () => {

    const [isOpen, setIsOpen] = useState(false);
    
    return (
        <div>
        <svg className="hidden">
        <symbol id="bars" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-5">
            <path clipRule="evenodd" d="M2 4.75A.75.75 0 0 1 2.75 4h14.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 4.75ZM2 10a.75.75 0 0 1 .75-.75h14.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 10Zm0 5.25a.75.75 0 0 1 .75-.75h14.5a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1-.75-.75Z"  />
        </symbol>    
        </svg>

        <header className=" flex items-center justify-between text-white bg-[#4993cc] w-full h-14 px-5 lg:px-10 py-5 mx-auto">
        {/* desktop header  */}
        <div className="hidden sm:flex items-center gap-x-4 lg:gap-x-6 text-xs md:text-sm mr-16">
            <a href="#about" className='border-b-2 p-1.5 border-b-transparent hover:border-zinc-700 transition-all'>درباره من</a>
            <a href="#" className='border-b-2 p-1.5 border-b-transparent hover:border-zinc-700 transition-all'>مهارت ها</a>
            <a href="#" className='border-b-2 p-1.5 border-b-transparent hover:border-zinc-700 transition-all'>تجربه های شغلی</a>
            {/* <!-- <a href="#">دیگر فعالیت های شغلی</a> --> */}
            <a href="#" className='border-b-2 p-1.5 border-b-transparent hover:border-zinc-700 transition-all'>اطلاعات تماس</a>
            {/* <!-- <a href="#">دریافت فایل رزومه</a> --> */}
        </div>
        <div onClick={() => setIsOpen(true)} className='nav-icon flex sm:hidden items-center justify-between px-4 h-16 cursor-pointer'>
            <svg className='w-6 h-6 text-white'>
                <use xlinkHref="#bars"></use>
            </svg>
        </div>
        <div className="ml-16">
            <p >توحید خراسانی</p>
        </div>
    </header>

        <MobileHeader isOpen={isOpen} setIsOpen={setIsOpen}/>
            
        </div>
    );
};

export default Header;