import React from 'react';
//icon
import { MapPinIcon, PhoneIcon } from '@heroicons/react/24/outline';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin,faTelegram} from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'

// http://52.59.121.162/wp-admin/admin.php?page=wp-mail-smtp

const Footer = () => {
    return (
        <>
        <div className=" text-white bg-[#142336]">
            {/* <div className='container grid grid-cols-3 gap-x-8'>
                <section className='mt-5'>
                    <div className='flex'>
                    <PhoneIcon className='w-5 h-5' />
                    <p>شماره تماس :</p>
                    </div>
                    09380206888
                </section>
                <section className='mt-5'>
                    <div className='flex'>
                    <MapPinIcon className='w-5 h-5'/>
                    <p>آدرس :</p>
                    </div>
                    <span>
                    تهران ، میدان
                    ونک ، خیابان
                    مالصدرا ، جنب
                    پل کردستان ،
                    پارادایس هاب
                    </span>
                </section>
                <section className='md:flex mt-5'>
                    <p>دیگر راه های ارتباطی :</p>
                    <div className='mx-auto'>
                    <a href='https://www.linkedin.com/in/tohidkhorasanib3148090' target="_blank" className='hover:text-zinc-600 transition-colors md:ml-8 ml-2'>
                        <FontAwesomeIcon icon={faLinkedin} className='md:w-7 w-5 md:h-7 h-5'/>
                    </a>
                    
                    <a href='mailto:' target="_blank" className='hover:text-zinc-600 transition-colors md:ml-8 ml-2'>
                        <FontAwesomeIcon icon={faEnvelope} className='md:w-7 w-5 md:h-7 h-5'/>
                    </a>

                    <a href='https://t.me/Tohidkhorasani' target="_blank" className='hover:text-zinc-600 transition-colors'>
                        <FontAwesomeIcon icon={faTelegram} className='md:w-7 w-5 md:h-7 h-5'/>
                    </a>
                    </div>
                </section> 
            </div> */}
            
            <p className='container flex justify-center items-center text-xs tracking-tightest md:tracking-normal h-fit py-5'>1403 © تمامی حقوق این وبسایت محفوظ است. کپی به هرشکل غیرمجاز و غیرقانونی است.</p>
        </div>
        </>
    );
};

export default Footer;