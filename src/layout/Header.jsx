import React, { useState } from 'react';
//components
import MobileHeader from '../components/module/MobileHeader';
//logo
import next from "/logo/next3.svg"

const Header = () => {

    const [isOpen, setIsOpen] = useState(false);
    
    return (
        <div>
        <svg className="hidden">
        <symbol id="bars" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-5">
            <path clipRule="evenodd" d="M2 4.75A.75.75 0 0 1 2.75 4h14.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 4.75ZM2 10a.75.75 0 0 1 .75-.75h14.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 10Zm0 5.25a.75.75 0 0 1 .75-.75h14.5a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1-.75-.75Z"  />
        </symbol>    
        </svg>

        <header className="flex justify-between md:fixed top-5 right-0 z-30
        left-0 w-[98%] lg:w-[90%] md:h-20 h-[70px] items-center rounded-[20px] text-white px-5 lg:px-10 py-5 mx-auto bg-white md:bg-sormei/70 md:backdrop-blur-[6px] ">
        {/* desktop header  */}
        {/* <div className='flex justify-between '> */}
        <div className='flex'>
        <div className="ml-8 md:flex hidden">
            {/* <p >توحید خراسانی</p> */}
            <img src={next} alt='logo' className='md:w-[70px] md:h-16 w-14 h-14'/>
        </div>
        <div className="hidden md:flex items-center gap-x-4 lg:gap-x-6 text-xs md:text-sm">
            <a href="#about" className='border-b-2 p-1.5 border-b-transparent hover:border-zard transition-all'>درباره من</a>
            <a href="#strategic" className='border-b-2 p-1.5 border-b-transparent hover:border-zard transition-all'>مشاوره استراتژیک</a>
            <a href="#business" className='border-b-2 p-1.5 border-b-transparent hover:border-zard transition-all'>مشاوره بازاریابی</a>
            {/* <!-- <a href="#">دیگر فعالیت های شغلی</a> --> */}
            <a href="#call" className='border-b-2 p-1.5 border-b-transparent hover:border-zard transition-all'>اطلاعات تماس</a>
            {/* <!-- <a href="#">دریافت فایل رزومه</a> --> */}
        </div>
        <div onClick={() => setIsOpen(true)} className='nav-icon flex  md:hidden items-center justify-between cursor-pointer'>
            <svg className='w-6 h-6 text-sormei'>
                <use xlinkHref="#bars"></use>
            </svg>
        </div>
        </div>
        
        <div className="md:ml-8 ">
            {/* <p >توحید خراسانی</p> */}
            <a href="#call" className='text-[18px] headerText '>مشاوره رایگان</a>
        </div>
        
        {/* </div> */}
        
        
    </header>

        <MobileHeader isOpen={isOpen} setIsOpen={setIsOpen}/>
            
        </div>
    );
};

export default Header;