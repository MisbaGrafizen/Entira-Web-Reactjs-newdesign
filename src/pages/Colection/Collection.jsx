import React, { useRef, useState, useEffect } from 'react';
import Header from '../../components/header/Header';

import arrival1 from '../../../public/imgeNew/new-arrival/arrival-1.png';
import arrival2 from '../../../public/imgeNew/new-arrival/arrival-2.png';
import arrival3 from '../../../public/imgeNew/new-arrival/arrival-3.png';
import arrival4 from '../../../public/imgeNew/new-arrival/arrival-4.png';
import arrival5 from '../../../public/imgeNew/new-arrival/arrival-5.png';
import arrival6 from '../../../public/imgeNew/new-arrival/arrival-6.png';
import arrival7 from '../../../public/imgeNew/new-arrival/arrival-7.png';
import arrival8 from '../../../public/imgeNew/new-arrival/arrival-8.png';

export default function Collection() {
  const arrivals = [arrival1, arrival2, arrival3, arrival4, arrival5, arrival6, arrival7, arrival8];

  // State and Ref to track the section visibility
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  // Scroll to top when the page loads or refreshes
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top on load
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Stop observing after the section is visible
        }
      },
      { threshold: 0.2 } // Trigger when 20% of the section is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <>
      <Header />
      <section
        ref={sectionRef}
        className={`md:w-[88%] w-[97%] relative md:top-[90px] top-[80px]  bg-[#fff] mx-auto rounded-[15px] h-[100%] ${
          isVisible ? 'section-visible' : 'section-hidden'
        }`}
      >
        <div className='w-[100%] flex flex-col gap-[30px]'>
          <div className='w-[100%] flex flex-col gap-[16px] justify-center'>
            <div className='md:text-[50px] text-[40px] text-[#928380] font-philospher pt-[20px] text-center font-[900]'>
              <p>Latest Trends</p>
            </div>
            <div className='font-mulish md:w-[50%] w-[88%] flex text-center !font-[200] mx-auto  text-[#b9aeac]'>
              <p>Immerse yourself in our curated selection of exquisite jewelry, designed to combine timeless elegance with modern flair.</p>
            </div>
          </div>

          <div className='w-[100%] grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-[10px] md:gap-[16px]'>
            {arrivals.map((arrival, index) => (
              <div key={index} className='p-[15px] rounded-[10px] hover:bg-[#fff3ec] transition duration-300'>
                <img className='w-full h-auto rounded-[10px]' src={arrival} alt={`arrival-${index + 1}`} />
                <div className='bg-[#eebca3] text-white rounded-[6px] md:rounded-[10px] py-[5px] md:py-[10px] mt-[25px] mx-auto text-center w-[100px] md:w-[130px]'>
                  <p>Add to cart</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
