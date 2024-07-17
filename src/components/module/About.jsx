import React, { useEffect, useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer'

const About = () => {
    // const myRef = useRef(null)
    // const [myElementIsVisible,setMyElementIsVisible] = useState()

    const { ref:myRef , inView:myElementIsVisible } = useInView()
    const { ref:myRef2 , inView:myElementIsVisible2 } = useInView()

    console.log(myElementIsVisible);

    return (
        <>
        
            <div id='about' className='container flex flex-col md:flex-row text-justify my-8 ' >
            
            <section ref={myRef} className={`${myElementIsVisible ? 'show' :""} md:w-1/2 w-full ml-5`}>
                <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore, porro atque facere exercitationem, earum ratione voluptate iure repellat aspernatur dolorum corporis adipisci provident temporibus, suscipit placeat ad eveniet cumque minus consequatur. Laudantium, saepe fugiat. Eum deserunt animi adipisci. 
                    Placeat deleniti voluptatum natus id tempora delectus hic et vel ipsum dolores.
                </p>
            </section> 
            

            <section ref={myRef2} className={`${myElementIsVisible2 ? '' :""} md:w-1/2 w-full`}>
                <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore, porro atque facere exercitationem, earum ratione voluptate iure repellat aspernatur dolorum corporis adipisci provident temporibus, suscipit placeat ad eveniet cumque minus consequatur. Laudantium, saepe fugiat. Eum deserunt animi adipisci. 
                    Placeat deleniti voluptatum natus id tempora delectus hic et vel ipsum dolores.
                </p>
            </section>
            
        </div>
        
        </>
    );
};

export default About;