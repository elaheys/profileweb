import React from 'react';
//icon
import { MapPinIcon, PhoneIcon } from '@heroicons/react/24/outline';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin,faTelegram} from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
//img
import ax1 from "/logo/1.svg"
import ax2 from "/logo/2.svg"
import ax3 from "/logo/3.svg"
import ax4 from "/logo/4.svg"
import ax5 from "/logo/5.svg"
import ax6 from "/logo/6.svg"
import ax7 from "/logo/7.svg"
import ax8 from "/logo/8.svg"
import ax9 from "/logo/9.svg"
import ax10 from "/logo/10.svg"
import ax11 from "/logo/11.svg"
import ax12 from "/logo/12.svg"
import ax13 from "/logo/13.svg"
import ax14 from "/logo/14.svg"

const Address = () => {
    // 09380206888
    return (
        <div className='relative top-14 z-10'>
        <div className='container tracking-tighter md:tracking-normal text-sm md:text-lg'>
            <div className=' mt-16 text-white'>
                <div id='call' className='flex sm:justify-between justify-center sm:flex-row flex-col  w-[90%] h-40 gap-x-3 mx-auto bg-abi'>
                    <div className='flex items-center mr-10'>
                        <img src={ax5}  alt='ax' className='lg:w-[80px] md:w-[60px] w-[40px] lg:h-[80px] md:h-[60px] h-[40px]'/>
                        <div className='lg:mr-5 mr-2'>
                            <p className='tracking-tighter text-sm sm:text-base md:text-lg'>یک جلسه مشاوره رایگان</p>
                            <p className='xl:text-[50px] sm:text-[25px] text-[20px] tracking-tighter lg:pt-5 sm:pt-3  text-zard whitespace-nowrap'>0938-020-6888</p>
                        </div>
                    </div>

                    <div className='flex flex-col items-center justify-center  lg:ml-20 ml-10'>
                        {/* <p className='text-zard ml-80'>با ما در ارتباط باشید</p> */}
                        <p className='text-white pt-5 pr-10  xl:text-[30px] lg:text-[20px] tracking-tighter'>برای مشاوره همین حالا تماس بگیرید</p>
                    </div>
                    
                    
                </div>
                {/* <div className='w-[70%] h-40 mx-auto flex flex-col justify-center items-center bg-abi border-2 border-abi rounded-[10px]'>
                    <div className='flex'>
                        <MapPinIcon className='w-5 h-5'/>
                        <p className='pr-1'>آدرس :</p>
                    </div>
                    <span className='p-2 tracking-tightest text-center'>
                    تهران ، میدان
                    ونک ، خیابان
                    ملاصدرا ، جنب
                    پل کردستان ،
                    پارادایس هاب
                    </span>
                </div> */}
                {/* <div>
                    <div className='w-[70%] h-40 mx-auto flex flex-col justify-center items-center bg-abi  border-2 border-abi rounded-[10px]'>
                    <p>دیگر راه های ارتباطی :</p>
                    <div className='flex pt-2'>
                    <a href='https://www.linkedin.com/in/tohidkhorasanib3148090' target="_blank" className='hover:text-zard transition-colors md:ml-8 ml-2'>
                        <FontAwesomeIcon icon={faLinkedin} className='md:w-7 w-5 md:h-7 h-5'/>
                    </a>
                    
                    <a href='mailto:' target="_blank" className='hover:text-zard transition-colors md:ml-8 ml-2'>
                        <FontAwesomeIcon icon={faEnvelope} className='md:w-7 w-5 md:h-7 h-5'/>
                    </a>

                    <a href='https://t.me/Tohidkhorasani' target="_blank" className='hover:text-zard transition-colors'>
                        <FontAwesomeIcon icon={faTelegram} className='md:w-7 w-5 md:h-7 h-5'/>
                    </a>
                    </div>
                    </div>
                </div> */}
            </div>

            {/* <img src={ax1}  alt='ax' className='w-10 h-10 text-zard'/>
            <img src={ax2}  alt='ax' className='w-10 h-10 text-zard'/>
            <img src={ax3}  alt='ax' className='w-10 h-10 text-zard'/>
            <img src={ax4}  alt='ax' className='w-10 h-10 text-zard'/>
            <img src={ax5}  alt='ax' className='w-10 h-10 text-zard'/>
            <img src={ax6}  alt='ax' className='w-10 h-10 text-zard'/>
            <img src={ax7}  alt='ax' className='w-10 h-10 text-zard'/>
            <img src={ax8}  alt='ax' className='w-10 h-10 text-zard'/>
            <img src={ax9}  alt='ax' className='w-10 h-10 text-zard'/>
            <img src={ax10}  alt='ax' className='w-10 h-10 text-zard'/>
            <img src={ax11}  alt='ax' className='w-10 h-10 text-zard'/>
            <img src={ax12}  alt='ax' className='w-10 h-10 text-zard'/>
            <img src={ax13}  alt='ax' className='w-10 h-10 text-zard'/>
            <img src={ax14}  alt='ax' className='w-10 h-10 text-zard'/> */}
            
          
        </div>
        </div>
    );
};

export default Address;