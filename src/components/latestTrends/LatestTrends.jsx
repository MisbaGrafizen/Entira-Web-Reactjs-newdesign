import React from 'react'

import arrival1 from '../../../public/imgeNew/new-arrival/arrival-1.png'
import arrival2 from '../../../public/imgeNew/new-arrival/arrival-2.png'
import arrival3 from '../../../public/imgeNew/new-arrival/arrival-3.png'
import arrival4 from '../../../public/imgeNew/new-arrival/arrival-4.png'
import arrival5 from '../../../public/imgeNew/new-arrival/arrival-5.png'
import arrival6 from '../../../public/imgeNew/new-arrival/arrival-6.png'
import arrival7 from '../../../public/imgeNew/new-arrival/arrival-7.png'
import arrival8 from '../../../public/imgeNew/new-arrival/arrival-8.png'
import { Link, useNavigate } from 'react-router-dom'




export default function LatestTrends() {

const navigate = useNavigate ()

const LatestTrends =()=>{
  navigate("/latest-trends")
}

  return (
    <>
      <section className="md:w-[88%] w-[100%] relative md:top-[-40%] top-[-60%]  bg-[#fff] mx-auto mb-[40px] rounded-[15px] h-[100%]  ">
        <div className="w-[100%] flex  flex-col gap-[30px] ">
          <div className="w-[100%] flex flex-col gap-[16px] justify-center">
            <div className=" md:text-[50px] text-[40px] text-[#928380] font-philospher  pt-[20px] text-center font-[900]">
              <p>Latest Trends</p>
            </div>
            <div className=" font-mulish md:w-[50%] w-[88%] flex text-center !font-[200] mx-auto  text-[#b9aeac] ">
              <p>
                Immerse yourself in our curated selection of exquisite
                jewelry, designed to combine timeless elegance with modern
                flair.
              </p>
            </div>
          </div>
        
            <div className="w-[100%] flex flex-col gap-[]4px">
              <div className="md:w-[100%] w-[90%]  mx-auto md:pb-[30px] pb-[30px] flex md:flex-row flex-col gap-[10px] ">
                <div className="flex flex-row md:flex-row">
                  <div className="md:w-[50%] rounded-[10px] p-[15px] hover:bg-[#fff3ec] transition duration-300  ">
                    <img
                      className=" md:max-w-[1500px] rounded-[10px]"
                      src={arrival1}
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
                  <div className="md:w-[50%] rounded-[10px] p-[15px] hover:bg-[#fff3ec] transition duration-300  ">
                    <img
                      className=" md:max-w-[1500px] rounded-[10px]"
                      src={arrival2}
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
                <div className="w-[100%] flex flex-row md:flex-row">
                  <div className="md:w-[50%] rounded-[10px] p-[15px] hover:bg-[#fff3ec] transition duration-300  ">
                    <img
                      className=" md:max-w-[1500px] rounded-[10px]"
                      src={arrival3}
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
                  <div className="md:w-[50%] rounded-[10px] p-[15px] hover:bg-[#fff3ec] transition duration-300  ">
                    <img
                      className=" md:max-w-[1500px] rounded-[10px]"
                      src={arrival4}
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
                {/* <div className='md:w-[25%] rounded-[10px] p-[25px] hover:bg-[#fff3ec] transition duration-300  '>
                    <img className=' md:max-w-[1500px] rounded-[10px]' src={category3} />
                    <div className=' bg-[#eebca3] text-white rounded-[6px] md:rounded-[10px] py-[5px] md:py-[10px] mt-[25px] mx-auto text-center w-[100px] md:w-[130px]'>
                        <p>
                            Add to cart
                        </p>
                    </div>
                </div>
                <div className='md:w-[25%] rounded-[10px] p-[25px] hover:bg-[#fff3ec] transition duration-300  '>
                    <img className=' md:max-w-[1500px] rounded-[10px]' src={category4} />
                    <div className=' bg-[#eebca3] text-white rounded-[6px] md:rounded-[10px] py-[5px] md:py-[10px] mt-[25px] mx-auto text-center w-[100px] md:w-[130px]'>
                        <p>
                            Add to cart
                        </p>
                    </div>
                </div> */}
              </div>
              <div className="md:w-[100%] w-[90%]  mx-auto md:pb-[30px] pb-[30px] flex md:flex-row flex-col gap-[10px] ">
                <div className="flex flex-row md:flex-row">
                  <div className="md:w-[50%] rounded-[10px] p-[15px] hover:bg-[#fff3ec] transition duration-300  ">
                    <img
                      className=" md:max-w-[1500px] rounded-[10px]"
                      src={arrival5}
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
                  <div className="md:w-[50%] rounded-[10px] p-[15px] hover:bg-[#fff3ec] transition duration-300  ">
                    <img
                      className=" md:max-w-[1500px] rounded-[10px]"
                      src={arrival6}
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
                <div className="w-[100%] flex flex-row md:flex-row">
                  <div className="md:w-[50%] rounded-[10px] p-[15px] hover:bg-[#fff3ec] transition duration-300  ">
                    <img
                      className=" md:max-w-[1500px] rounded-[10px]"
                      src={arrival7}
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
                  <div className="md:w-[50%] rounded-[10px] p-[15px] hover:bg-[#fff3ec] transition duration-300  ">
                    <img
                      className=" md:max-w-[1500px] rounded-[10px]"
                      src={arrival8}
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
                {/* <div className='md:w-[25%] rounded-[10px] p-[25px] hover:bg-[#fff3ec] transition duration-300  '>
                    <img className=' md:max-w-[1500px] rounded-[10px]' src={category3} />
                    <div className=' bg-[#eebca3] text-white rounded-[10px] py-[10px] mt-[25px] mx-auto text-center w-[130px]'>
                        <p>
                            Add to cart
                        </p>
                    </div>
                </div>
                <div className='md:w-[25%] rounded-[10px] p-[25px] hover:bg-[#fff3ec] transition duration-300  '>
                    <img className=' md:max-w-[1500px] rounded-[10px]' src={category4} />
                    <div className=' bg-[#eebca3] text-white rounded-[10px] py-[10px] mt-[25px] mx-auto text-center w-[130px]'>
                        <p>
                            Add to cart
                        </p>
                    </div>
                </div> */}
              </div>
            </div>


           
           
            <div
  className="bg-[#eebca3] text-white px-[5px] cursor-pointer font-mulish rounded-[6px] md:text-[17px] text-[15px] md:rounded-[10px] py-[5px] md:py-[10px] mx-auto text-center w-[140px] md:w-[130px] 
  transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-[#dba893] active:scale-95 active:bg-[#c98b7e]"
  onClick={LatestTrends}
>
  <p>VIEW ALL</p>
</div>

            

         
        </div>
      </section>
    </>
  );
}
