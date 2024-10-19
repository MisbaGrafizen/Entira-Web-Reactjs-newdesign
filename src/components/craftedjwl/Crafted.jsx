import React from 'react'
import bgvect from '../../../public/vectors/bg_img.png'
import flower from '../../../public/newUpload/landing-2/flower.png'
import diamond from '../../../public/newUpload/landing-2/diamond.png'
import help from '../../../public/mihirsirVector/helpcare.png'

export default function Crafted() {
    return (
        <>
            <div className='w-[100%] relative  mt-[40px]'>
                <div className='w-[100%] z-[3] overflow-hidden shadow-inner flex flex-wrap absolute  opacity-[0.3] '>
                    <div className='w-100% flex'>
                        <img className='w-[170px] inset-0' src={bgvect} />
                        <img className='w-[170px]' src={bgvect} />
                        <img className='w-[170px]' src={bgvect} />
                        <img className='w-[170px]' src={bgvect} />
                        <img className='w-[170px]' src={bgvect} />
                        <img className='w-[170px]' src={bgvect} />
                        <img className='w-[170px]' src={bgvect} />
                        <img className='w-[170px]' src={bgvect} />
                        <img className='w-[170px]' src={bgvect} />
                    </div>
                    <div className='w-100% flex'>
                        <img className='w-[170px]' src={bgvect} />
                        <img className='w-[170px]' src={bgvect} />
                        <img className='w-[170px]' src={bgvect} />
                        <img className='w-[170px]' src={bgvect} />
                        <img className='w-[170px]' src={bgvect} />
                        <img className='w-[170px]' src={bgvect} />
                        <img className='w-[170px]' src={bgvect} />
                        <img className='w-[170px]' src={bgvect} />
                        <img className='w-[170px]' src={bgvect} />
                    </div>
                    <div className='w-100% flex'>
                        <img className='w-[170px]' src={bgvect} />
                        <img className='w-[170px]' src={bgvect} />
                        <img className='w-[170px]' src={bgvect} />
                        <img className='w-[170px]' src={bgvect} />
                        <img className='w-[170px]' src={bgvect} />
                        <img className='w-[170px]' src={bgvect} />
                        <img className='w-[170px]' src={bgvect} />
                        <img className='w-[170px]' src={bgvect} />
                        <img className='w-[170px]' src={bgvect} />
                    </div>
                    <div className='w-100% flex'>
                        <img className='w-[170px]' src={bgvect} />
                        <img className='w-[170px]' src={bgvect} />
                        <img className='w-[170px]' src={bgvect} />
                        <img className='w-[170px]' src={bgvect} />
                        <img className='w-[170px]' src={bgvect} />
                        <img className='w-[170px]' src={bgvect} />
                        <img className='w-[170px]' src={bgvect} />
                        <img className='w-[170px]' src={bgvect} />
                        <img className='w-[170px]' src={bgvect} />
                    </div>
                </div>
                <div className='w-[100%] z-[100] p-[20px] mx-auto  gap-[50px] flex flex-col  mt-[1%]'>
                    <div className='flex flex-col gap-[10px] mx-auto justify-center w-[100%] '>
                        <p className='font-mulish text-center  flex z-10 justify-center font-[600] text-[14px] md:text-[20px] text-[#D0A38D]' style={{ letterSpacing: '3px' }}>
                            Why Choose us
                        </p>
                        <p className='w-[100%] text-[40px] md:text-[60px] leading-[45px] md:leading-[90px] text-[#928380] flex z-10 text-center justify-center font-philospher font-[900]'>
                            Jewelry Crafted Just for You
                        </p>
                        <div className='w-[100%] flex justify-center'>
                            <p className='text-[16px] font-mulish flex justify-center text-[#928380]  md:w-[45%]  z-10 text-center'>
                                Experience the art of jewelry created with precision and care. Our dedication to quality ensures that every piece is not only beautiful but also built to last.
                            </p>
                        </div>
                    </div>
                    <div className='w-[100%] flex flex-wrap justify-center md100:relative gap-[30px] z-10'>
                        <div className='w-[100%] md:w-[56%] lg:w-[29%] h-[300px] md:pt-[39px] pt-[27px] pb-[40px] flex  text-[#928380] px-[28px] bg-[#F8F2F0] rounded-[7px]'>
                            <div className='flex gap-[20px] items-center flex-col'>
                                <img className='w-[60px] h-[60px] mx-auto' src={diamond}/>
                                <p className='text-[27px] leading-[30px] text-center font-philospher font-[600]'>
                                Top-Grade Materials
                                </p>
                                <p className='text-center font-mulish text-[13px]'>
                                Bibendum dictumst morbi risus in augue himenaeos nunc nisl faucibus
                                </p>
                            </div>
                        </div>
                        <div className='w-[100%] md:w-[56%] lg:w-[29%] h-[300px]  pt-[27px] pb-[40px] flex items-center text-[#928380] px-[28px] bg-[#F8F2F0] rounded-[7px]'>
                            <div className='flex gap-[20px] items-center flex-col'>
                                <img className='w-[60px] h-[60px] mx-auto' src={flower}/>
                                <p className='text-[27px] leading-[30px] text-center font-philospher font-[600]'>
                                Master Craftsmanship
                                </p>
                                <p className='text-center font-mulish text-[13px]'>
                                Our team of professional jewelers brings decades of experience and artistry to each design. Every piece is crafted with meticulous attention to detail
                                </p>
                            </div>
                        </div>

                         <div className='w-[100%] md:w-[56%] lg:w-[29%] h-[300px]  pt-[27px] pb-[40px] flex items-center text-[#928380] px-[28px] bg-[#F8F2F0] rounded-[7px]'>
                            <div className='flex gap-[20px] items-center flex-col'>
                                <img className='w-[60px] h-[60px] mx-auto' src={help}/>
                                <p className='text-[27px] leading-[30px] text-center font-philospher font-[600]'>
                                Around-the-Clock Support
                                </p>
                                <p className='text-center font-mulish text-[13px]'>
                                Our customer support team is available around the clock to assist with any inquiries or needs
                                </p>
                            </div>
                        </div>
                       
                     
                    </div>
                </div>
            </div>

        </>
    )
}
