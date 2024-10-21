import React, { useRef, useState, useEffect } from 'react';
import Header from '../../components/header/Header';
import Footer from "../../components/footer/Footer";

import arrival1 from '../../../public/imgeNew/new-arrival/arrival-1.png';
import arrival2 from '../../../public/imgeNew/new-arrival/arrival-2.png';
import arrival3 from '../../../public/imgeNew/new-arrival/arrival-3.png';
import arrival4 from '../../../public/imgeNew/new-arrival/arrival-4.png';
import arrival5 from '../../../public/imgeNew/new-arrival/arrival-5.png';
import arrival6 from '../../../public/imgeNew/new-arrival/arrival-6.png';
import arrival7 from '../../../public/imgeNew/new-arrival/arrival-7.png';
import arrival8 from '../../../public/imgeNew/new-arrival/arrival-8.png';
import arrival9 from "../../../public/ENTIRA/arrival9.png";
import arrival10 from "../../../public/ENTIRA/arrival10.png";
import arrival11 from "../../../public/ENTIRA/arrival11.png";
import arrival12 from "../../../public/ENTIRA/arrival12.png";
import arrival13 from "../../../public/ENTIRA/arrival13.png";
import arrival14 from "../../../public/ENTIRA/arrival14.png";
import arrival15 from "../../../public/ENTIRA/arrival15.png";
import arrival16 from "../../../public/ENTIRA/arrival16.png";
import arrival17 from "../../../public/ENTIRA/arrival17.png";
import arrival18 from "../../../public/ENTIRA/arrival18.png";
import arrival19 from "../../../public/ENTIRA/arrival19.png";
import arrival20 from "../../../public/ENTIRA/arrival20.png";
import arrival21 from "../../../public/ENTIRA/arrival21.png";
import arrival22 from "../../../public/ENTIRA/arrival22.png";
import arrival23 from "../../../public/ENTIRA/arrival23.png";
import arrival24 from "../../../public/ENTIRA/arrival24.png";
import arrival25 from "../../../public/ENTIRA/arrival25.png";
import arrival26 from "../../../public/ENTIRA/arrival26.png";
import arrival27 from "../../../public/ENTIRA/arrival27.png";
import arrival28 from "../../../public/ENTIRA/arrival28.png";
import arrival29 from "../../../public/ENTIRA/arrival29.png";
import arrival30 from "../../../public/ENTIRA/arrival30.png";
import arrival31 from "../../../public/ENTIRA/arrival31.png";
import arrival32 from "../../../public/ENTIRA/arrival32.png";
import arrival33 from "../../../public/ENTIRA/arrival33.png";
import arrival34 from "../../../public/ENTIRA/arrival34.png";
import arrival35 from "../../../public/ENTIRA/arrival35.png";
import arrival36 from "../../../public/ENTIRA/arrival36.png";
import arrival37 from "../../../public/ENTIRA/arrival37.png";
import arrival38 from "../../../public/ENTIRA/arrival38.png";
import arrival39 from "../../../public/ENTIRA/arrival39.png";
import arrival40 from "../../../public/ENTIRA/arrival40.png";
import arrival41 from "../../../public/ENTIRA/arrival41.png";
import arrival42 from "../../../public/ENTIRA/arrival42.png";
import arrival43 from "../../../public/ENTIRA/arrival43.png";
import arrival44 from "../../../public/ENTIRA/arrival44.png";
import arrival45 from "../../../public/ENTIRA/arrival45.png";
import arrival46 from "../../../public/ENTIRA/arrival46.png";
import arrival47 from "../../../public/ENTIRA/arrival47.png";
import arrival48 from "../../../public/ENTIRA/arrival48.png";
import arrival49 from "../../../public/ENTIRA/arrival49.png";
import arrival50 from "../../../public/ENTIRA/arrival50.png";
import arrival51 from "../../../public/ENTIRA/arrival51.png";
import arrival52 from "../../../public/ENTIRA/arrival52.png";
import arrival53 from "../../../public/ENTIRA/arrival53.png";
import arrival54 from "../../../public/ENTIRA/arrival54.png";
// import arrival55 from "../../../public/ENTIRA/arrival55.png";
import arrival56 from "../../../public/ENTIRA/arrival56.png";
// import arrival57 from "../../../public/ENTIRA/arrival57.png";
// import arrival58 from "../../../public/ENTIRA/arrival58.png";
// import arrival59 from "../../../public/ENTIRA/arrival59.png";
// import arrival60 from "../../../public/ENTIRA/arrival60.png";
// import arrival61 from "../../../public/ENTIRA/arrival61.png";
// import arrival62 from "../../../public/ENTIRA/arrival62.png";
// import arrival63 from "../../../public/ENTIRA/arrival63.png";
// import arrival64 from "../../../public/ENTIRA/arrival64.png";
// import arrival65 from "../../../public/ENTIRA/arrival65.png";
// import arrival66 from "../../../public/ENTIRA/arrival66.png";
// import arrival67 from "../../../public/ENTIRA/arrival67.png";
// import arrival68 from "../../../public/ENTIRA/arrival68.png";
// import arrival69 from "../../../public/ENTIRA/arrival69.png";
// import arrival70 from "../../../public/ENTIRA/arrival70.png";
// import arrival71 from "../../../public/ENTIRA/arrival71.png";
// import arrival72 from "../../../public/ENTIRA/arrival72.png";
// import arrival73 from "../../../public/ENTIRA/arrival73.png";
// import arrival74 from "../../../public/ENTIRA/arrival74.png";
// import arrival75 from "../../../public/ENTIRA/arrival75.png";
// import arrival76 from "../../../public/ENTIRA/arrival76.png";
// import arrival77 from "../../../public/ENTIRA/arrival77.png";
// import arrival78 from "../../../public/ENTIRA/arrival78.png";
// import arrival79 from "../../../public/ENTIRA/arrival79.png";
// import arrival80 from "../../../public/ENTIRA/arrival80.png";
// import arrival81 from "../../../public/ENTIRA/arrival81.png";
// import arrival82 from "../../../public/ENTIRA/arrival82.png";
// import arrival83 from "../../../public/ENTIRA/arrival83.png";








export default function Collection() {
  const arrivals = [
    arrival1,
    arrival2,
    arrival3,
    arrival4,
    arrival5,
    arrival6,
    arrival7,
    arrival8,
    arrival9,
    arrival10,
    arrival11,
    arrival12,
    arrival13,
    arrival14,
    arrival15,
    arrival16,
    arrival17,
    arrival18,
    arrival19,
    arrival20,
    arrival21,
    arrival22,
    arrival23,
    arrival24,
    arrival25,
    arrival26,
    arrival27,
    arrival25,
    arrival26,
    arrival27,
    arrival28,
    arrival29,
    arrival30,
    arrival31,
    arrival32,
    arrival33,
    arrival34,
    arrival35,
    arrival36,
    arrival37,
    arrival38,
    arrival39,
    arrival40,
    arrival41,
    arrival42,
    arrival43,
    arrival44,
    arrival45,
    arrival46,
    arrival47,
    arrival48,
    arrival49,
    arrival50,
    arrival51,
    arrival52,
    arrival53,
    arrival54,
    arrival56,
    // arrival57,
    // arrival58,
    // arrival59,
    // arrival60,
    // arrival61,
    // arrival62,
    // arrival63,
    // arrival64,
    // arrival65,
    // arrival66,
    // arrival67,
    // arrival68,
    // arrival69,
    // arrival70,
    // arrival71,
    // arrival72,
    // arrival73,
    // arrival74,
    // arrival75,
    // arrival76,
    // arrival78,
    // arrival79,
    // arrival80,
    // arrival81,
    // arrival82,
    // arrival83,

  ];

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
        className={`md:w-[88%] w-[97%] relative md:top-[90px] gap-[20px] flex flex-col top-[80px]  bg-[#fff] mx-auto rounded-[15px] h-[100%] ${
          isVisible ? "section-visible" : "section-hidden"
        }`}
      >
        <div className="w-[100%] flex flex-col gap-[30px]">
          <div className="w-[100%] flex flex-col gap-[16px] justify-center">
            <div className="md:text-[50px] text-[40px] text-[#928380] font-philospher pt-[20px] text-center font-[900]">
              <p>Latest Trends</p>
            </div>
            <div className="font-mulish md:w-[50%] w-[88%] flex text-center !font-[200] mx-auto  text-[#b9aeac]">
              <p>
                Immerse yourself in our curated selection of exquisite jewelry,
                designed to combine timeless elegance with modern flair.
              </p>
            </div>
          </div>

          <div className="w-[100%] grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-[10px] md:gap-[16px]">
            {arrivals.map((arrival, index) => (
              <div
                key={index}
                className="p-[15px] rounded-[10px] hover:bg-[#fff3ec] transition duration-300"
              >
                <img
                  className="w-full h-auto rounded-[10px]"
                  src={arrival}
                  alt={`arrival-${index + 1}`}
                />
                <div className="bg-[#eebca3] text-white px-[5px] cursor-pointer rounded-[6px] text-[15px] md:rounded-[10px] py-[5px] md:py-[10px] mt-[25px] mx-auto text-center w-[110px] md:w-[130px]">
                  <a
                    href="https://wa.me/917567399311"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    INQUIRE NOW
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
        <Footer className="" />
      </section>
    </>
  );
}
