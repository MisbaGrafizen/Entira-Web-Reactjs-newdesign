import React from 'react'

import desktopback from '../../../public/imgeNew/lanMain.png'
import mobileback from '../../../public/imgeNew/mainmobilelan/Entira-web-new-mobile.jpg'
import shop from '../../../public/mihirsirVector/shop.png'
import service from '../../../public/mihirsirVector/Hathora.png'
import diamond from '../../../public/newUpload/landing-2/diamond.png'

import sec2 from '../../../public/newUpload/landing-2/flower.png'


export default function Landing() {
    return (
      <>
        <div className="w-[100%] relative h-[100%]">
          <img
            className="md100:max-w-[100%] md70:max-h-[190vh] md100:max-h-[89vh]  z-[-20] absolute md:flex hidden "
            src={desktopback}
          />
          <img
            className="max-w-[100%] z-[-20] absolute mt-[40px] md:hidden flex "
            src={mobileback}
          />
          <div className=" w-[88%] md:flex flex-col  items-center  mx-auto  px-[10px] md70:pt-[13%] md100:pt-[10%]">
            <div>
              <div className="md:flex hidden flex-col gap-[20px]">
                <p
                  className="font-mulish text-[#fff]"
                  style={{ letterSpacing: "3px" }}
                >
                  WELCOME TO ENTIRA
                </p>
                <div
                  className="w-[60%] text-[40px] text-[#F8F2F0] font-philospher font-[900]"
                  style={{ fontWeight: "bold", lineHeight: "1.3" }}
                >
                  <p>
                    Where Global Elegance Meets Craftsmanship. Import-Export of
                    Premium Fashion Jewelry.
                  </p>
                </div>
                <div className="w-[55%] font-mulish  text-[#fff] ">
                  <p>
                    At Entira, we specialize in sourcing and delivering
                    high-quality fashion jewelry worldwide. Our unique designs
                    blend traditional craftsmanship with modern aesthetics,
                    bringing global trends to wholesale markets.
                  </p>
                </div>
              </div>
            </div>
            <div className="w-[100%] flex flex-wrap md100:flex-nowrap pt-[228%] md:pt-[0px] md100:top-[90px] md100:relative gap-[20px]">
              <div className="w-[100%] md:w-[48%] lg:w-[24%] py-[25px] text-[#928380] px-[38px] bg-[#F8F2F0] rounded-[7px]">
                <div className="flex gap-[20px] flex-col">
                  <img className="w-[60px] h-[60px] mx-auto" src={shop} />
                  <p className="text-[30px] leading-[30px] text-center font-philospher font-[600]">
                    Global Sourcing
                  </p>
                  <p className="text-center font-mulish text-[13px]">
                    We specialize in sourcing premium fashion jewelry from top
                    manufacturers worldwide, ensuring access to the latest
                    trends and high-quality craftsmanship.
                  </p>
                </div>
              </div>
              <div className="w-[100%] md:w-[48%] lg:w-[24%] py-[25px] text-[#928380] px-[38px] bg-[#F8F2F0] rounded-[7px]">
                <div className="flex gap-[20px] flex-col">
                  <img className="w-[60px] h-[60px] mx-auto" src={sec2} />
                  <p className="text-[30px] leading-[30px] text-center font-philospher font-[600]">
                    Wholesale Partnerships
                  </p>
                  <p className="text-center font-mulish text-[13px]">
                    We specialize in sourcing premium fashion jewelry from top
                    manufacturers worldwide, ensuring access to the latest
                    trends and high-quality craftsmanship.
                  </p>
                </div>
              </div>
              <div className="w-[100%] md:w-[48%] lg:w-[24%] py-[25px] text-[#928380] px-[38px] bg-[#F8F2F0] rounded-[7px]">
                <div className="flex gap-[20px] flex-col">
                  <img className="w-[60px] h-[60px] mx-auto" src={service} />
                  <p className="text-[30px] leading-[30px] text-center font-philospher font-[600]">
                    Custom Jewelry Design
                  </p>
                  <p className="text-center font-mulish text-[13px]">
                    We specialize in sourcing premium fashion jewelry from top
                    manufacturers worldwide, ensuring access to the latest
                    trends and high-quality craftsmanship.
                  </p>
                </div>
              </div>
              <div className="w-[100%] md:w-[48%] lg:w-[24%] py-[25px] text-[#928380] px-[38px] bg-[#F8F2F0] rounded-[7px]">
                <div className="flex gap-[20px] flex-col">
                  <img className="w-[60px] h-[60px] mx-auto" src={diamond} />
                  <p className="text-[30px] leading-[30px] text-center font-philospher font-[600]">
                    Global Shipping & Logistics
                  </p>
                  <p className="text-center font-mulish text-[13px]">
                    We specialize in sourcing premium fashion jewelry from top
                    manufacturers worldwide, ensuring access to the latest
                    trends and high-quality craftsmanship.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
}
