import React from 'react'
import category1 from '../../../public/imgeNew/category/cate1.png'
import category2 from '../../../public/imgeNew/category/cate2.png'
import category3 from '../../../public/imgeNew/category/cate3.png'
import category4 from '../../../public/imgeNew/category/cate4.png'





export default function NewCollection() {
    return (
      <>
        <section className="md:w-[88%] relative md:top-[-40%] top-[-60%] shadow-2xl bg-[#fff] mx-auto rounded-[15px] h-[100%] w-[100%]  ">
          <div className="w-[100%] flex  flex-col gap-[30px] ">
            <div className="w-[100%] flex flex-col gap-[16px] justify-center">
              <div className=" text-[30px] text-[#3d3a3a] font-philospher  pt-[20px] text-center font-[900]">
                <p>Best Selling Designs</p>
              </div>
              <div className="w-[100px] border-t-[2px] text-center mx-auto border-[#eebca3]"></div>
            </div>
            <div className="md:w-[100%] px-[30px] md:pb-[30px] pb-[30px] flex md:flex-row flex-col gap-[10px] ">
              <div className="md:w-[25%] rounded-[10px] p-[25px] hover:bg-[#fff3ec] transition duration-300  ">
                <img
                  className=" md:max-w-[1500px] rounded-[10px]"
                  src={category1}
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
              <div className="md:w-[25%] rounded-[10px] p-[25px] hover:bg-[#fff3ec] transition duration-300  ">
                <img
                  className=" md:max-w-[1500px] rounded-[10px]"
                  src={category2}
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
              <div className="md:w-[25%] rounded-[10px] p-[25px] hover:bg-[#fff3ec] transition duration-300  ">
                <img
                  className=" md:max-w-[1500px] rounded-[10px]"
                  src={category3}
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
              <div className="md:w-[25%] rounded-[10px] p-[25px] hover:bg-[#fff3ec] transition duration-300  ">
                <img
                  className=" md:max-w-[1500px] rounded-[10px]"
                  src={category4}
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
            </div>
          </div>
        </section>
      </>
    );
}
