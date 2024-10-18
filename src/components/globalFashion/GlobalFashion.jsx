import React from 'react'

import mainImg from '../../../public/imgeNew/add.png'
import sec1 from '../../../public/newUpload/landing-2/flower.png'


export default function GlobalFashion() {
    return (

        <>
            <div className='md:w-[88%] w-[95%] mx-auto md:pt-[10%] pt-[70px] px-[10px] '>
                <div className='flex md:flex-row flex-col items-center  md:w-[100%] md:justify-between  md:gap-[0px]'>
                    <div className='flex flex-col gap-[26px]'>
                        <p className='font-mulish md:text-left text-center  text-[#c09494]' style={{ letterSpacing: '3px' }}>
                            WHO WE ARE
                        </p>
                        <div className='md:w-[85%] text-center md:text-left text-[40px] text-[#9b9494] font-philospher font-[900]' style={{ fontWeight: 'bold', lineHeight: '1.3' }}>
                            <p>Global Fashion Jewelry Experts With Roots in Global Trade</p>
                        </div>
                        <div className='w-[85%] font-mulish  text-center mx-auto md:mx-0  md:text-left text-[#494242] ' >
                            <p>With decades of expertise in the jewelry industry, we blend traditional craftsmanship with modern innovation to bring you exceptional</p>
                        </div>

                        <div className='w-[150px] py-[7px] text-center rounded-[6px] md:mx-0 mx-auto text-[#fcf2f2] flex bg-[#D0A38D]'>
                            <p>
                                INQUIRE NOW
                            </p>
                        </div>
                    </div>
                    <div className='relative md:w-[50%] md:mt-[0px] mt-[30px] mb-[20px] '>
                        
                            <img className='rounded-[15px] md:w-[490px]' src={mainImg} />
                   
                        <div className='md:w-[80%] custom-shadow  md:top-[75%] md:left-[-30%] absolute  py-[20px] text-[#928380] px-[38px] bg-[#F8F2F0] rounded-[7px]'>
                            <div className='flex gap-[10px] flex-col'>
                                <img className='w-[60px] h-[60px] mx-auto' src={sec1} />
                                <p className='text-[27px] leading-[30px] text-center font-philospher font-[600]'>
                                Expert Jewelry Craft
                                </p>
                                <p className='text-center font-mulish text-[13px]'>
                                Our artisans specialize in creating custom-designed jewelry, crafted to meet your unique style and needs.
                                </p>
                            </div>
                        </div>

                      
                    </div>

                </div>
            </div>


        </>
    )
}
