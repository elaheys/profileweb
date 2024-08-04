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
    return (
        <div className='container tracking-tighter md:tracking-normal text-sm md:text-lg'>
            <div className='grid md:grid-cols-3 grid-cols-1 gap-y-6 gap-x-2  mt-16'>
                <div id='call' className='w-[70%] h-40 mx-auto flex flex-col justify-center items-center border-2 border-abi rounded-[10px]'>
                    <div className='flex '>
                    <PhoneIcon className='w-5 h-5' />
                    <p className='pr-1'>شماره تماس :</p>
                    </div>
                    09380206888
                </div>
                <div className='w-[70%] h-40 mx-auto flex flex-col justify-center items-center border-2 border-abi rounded-[10px]'>
                    <div className='flex'>
                        <MapPinIcon className='w-5 h-5'/>
                        <p className='pr-1'>آدرس :</p>
                    </div>
                    <span className='p-2 tracking-tightest text-center'>
                    تهران ، میدان
                    ونک ، خیابان
                    مالصدرا ، جنب
                    پل کردستان ،
                    پارادایس هاب
                    </span>
                </div>
                <div>
                    <div className='w-[70%] h-40 mx-auto flex flex-col justify-center items-center  border-2 border-abi rounded-[10px]'>
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
                </div>
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
    );
};

export default Address;