import React from 'react';
//logo
import next from "/logo/next3.svg"

const MobileHeader = ({isOpen, setIsOpen}) => {

    
    return (
    <div>
        <svg className="hidden">
        <symbol id="phone" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-5">
            <path d="M3.5 2A1.5 1.5 0 0 0 2 3.5V5c0 1.149.15 2.263.43 3.326a13.022 13.022 0 0 0 9.244 9.244c1.063.28 2.177.43 3.326.43h1.5a1.5 1.5 0 0 0 1.5-1.5v-1.148a1.5 1.5 0 0 0-1.175-1.465l-3.223-.716a1.5 1.5 0 0 0-1.767 1.052l-.267.933c-.117.41-.555.643-.95.48a11.542 11.542 0 0 1-6.254-6.254c-.163-.395.07-.833.48-.95l.933-.267a1.5 1.5 0 0 0 1.052-1.767l-.716-3.223A1.5 1.5 0 0 0 4.648 2H3.5ZM16.5 4.56l-3.22 3.22a.75.75 0 1 1-1.06-1.06l3.22-3.22h-2.69a.75.75 0 0 1 0-1.5h4.5a.75.75 0 0 1 .75.75v4.5a.75.75 0 0 1-1.5 0V4.56Z" />
        </symbol>   
        <symbol id="x-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-5">
            <path d="M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94 6.28 5.22Z" />
        </symbol>
        <symbol id="briefcase" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-5">
            <path clipRule="evenodd" d="M6 3.75A2.75 2.75 0 0 1 8.75 1h2.5A2.75 2.75 0 0 1 14 3.75v.443c.572.055 1.14.122 1.706.2C17.053 4.582 18 5.75 18 7.07v3.469c0 1.126-.694 2.191-1.83 2.54-1.952.599-4.024.921-6.17.921s-4.219-.322-6.17-.921C2.694 12.73 2 11.665 2 10.539V7.07c0-1.321.947-2.489 2.294-2.676A41.047 41.047 0 0 1 6 4.193V3.75Zm6.5 0v.325a41.622 41.622 0 0 0-5 0V3.75c0-.69.56-1.25 1.25-1.25h2.5c.69 0 1.25.56 1.25 1.25ZM10 10a1 1 0 0 0-1 1v.01a1 1 0 0 0 1 1h.01a1 1 0 0 0 1-1V11a1 1 0 0 0-1-1H10Z"  />
            <path d="M3 15.055v-.684c.126.053.255.1.39.142 2.092.642 4.313.987 6.61.987 2.297 0 4.518-.345 6.61-.987.135-.041.264-.089.39-.142v.684c0 1.347-.985 2.53-2.363 2.686a41.454 41.454 0 0 1-9.274 0C3.985 17.585 3 16.402 3 15.055Z" />
        </symbol>
        <symbol id="user" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-5">
            <path d="M10 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM3.465 14.493a1.23 1.23 0 0 0 .41 1.412A9.957 9.957 0 0 0 10 18c2.31 0 4.438-.784 6.131-2.1.43-.333.604-.903.408-1.41a7.002 7.002 0 0 0-13.074.003Z" />
        </symbol>
        <symbol id="work" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-5">
            <path clipRule="evenodd" d="M15.988 3.012A2.25 2.25 0 0 1 18 5.25v6.5A2.25 2.25 0 0 1 15.75 14H13.5V7A2.5 2.5 0 0 0 11 4.5H8.128a2.252 2.252 0 0 1 1.884-1.488A2.25 2.25 0 0 1 12.25 1h1.5a2.25 2.25 0 0 1 2.238 2.012ZM11.5 3.25a.75.75 0 0 1 .75-.75h1.5a.75.75 0 0 1 .75.75v.25h-3v-.25Z"  />
            <path clipRule="evenodd" d="M2 7a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7Zm2 3.25a.75.75 0 0 1 .75-.75h4.5a.75.75 0 0 1 0 1.5h-4.5a.75.75 0 0 1-.75-.75Zm0 3.5a.75.75 0 0 1 .75-.75h4.5a.75.75 0 0 1 0 1.5h-4.5a.75.75 0 0 1-.75-.75Z"  />
        </symbol>
        <symbol id="arrowdown" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-5">
            <path d="M10.75 2.75a.75.75 0 0 0-1.5 0v8.614L6.295 8.235a.75.75 0 1 0-1.09 1.03l4.25 4.5a.75.75 0 0 0 1.09 0l4.25-4.5a.75.75 0 0 0-1.09-1.03l-2.955 3.129V2.75Z" />
            <path d="M3.5 12.75a.75.75 0 0 0-1.5 0v2.5A2.75 2.75 0 0 0 4.75 18h10.5A2.75 2.75 0 0 0 18 15.25v-2.5a.75.75 0 0 0-1.5 0v2.5c0 .69-.56 1.25-1.25 1.25H4.75c-.69 0-1.25-.56-1.25-1.25v-2.5Z" />
        </symbol>    
        </svg>

        <div className={`${isOpen ? "right-0 " : "-right-64"} nav fixed z-20 top-0 bottom-0  w-64 pt-3 px-4 bg-white overflow-y-auto transition-all`}>
            <div className='flex items-center justify-between pb-2 mb-6 border-b border-b-gray-100 '>
            
            <div>
                <img src={next} alt='logo' className='w-12 h-12'/>
            </div>

            <div onClick={() => setIsOpen(false)} className=" nav-close-btn text-end">
                <svg className='w-6 h-6 text-zinc-600 '>
                    <use xlinkHref="#x-icon"></use>
                </svg>
            </div>
            
            </div>

            <ul className='child:pr-2.5 text-zinc-600 space-y-6'>
                
               
               
                <li>
                    <a onClick={() => setIsOpen(false)} href="#about" className='flex items-center gap-x-2'>
                    <svg className='w-5 h-5 text-zinc-600 '>
                        <use xlinkHref="#user"></use>
                    </svg>
                         درباره من
                    </a>
                </li>
                <li>
                    <a href='#strategic' onClick={() => setIsOpen(false)} className='flex items-center gap-x-2'>
                    <svg className='w-5 h-5 text-zinc-600 '>
                        <use xlinkHref="#briefcase"></use>
                    </svg>
                         مشاوره استراتژیک
                    </a>
                </li>
                <li>
                    <a href='#business' onClick={() => setIsOpen(false)} className='flex items-center gap-x-2'>
                    <svg className='w-5 h-5 text-zinc-600 '>
                        <use xlinkHref="#work"></use>
                    </svg>
                          مشاوره بازاریابی 
                    </a>
                </li>
                
                <li>
                    <a href='#call' onClick={() => setIsOpen(false)} className='flex items-center gap-x-2'>
                    <svg className='w-5 h-5 text-zinc-600 '>
                       <use xlinkHref="#phone"></use>
                    </svg>
                         اطلاعات تماس 
                    </a>
                </li>
                {/* <li>
                    <a href='#' className='flex items-center gap-x-2'>
                    <svg className='w-5 h-5 text-zinc-600 '>
                        <use xlinkHref="#arrowdown"></use>
                    </svg>
                         دریافت فایل رزومه
                    </a>
                </li> */}
            </ul>
        </div>

        {/* siah shodane body ba baz shodan menu */}
        <div onClick={() => setIsOpen(false)} className={`${isOpen ? "overlay--visible" : "hidden"} overlay`}></div>
        </div>
    );
};

export default MobileHeader;