import React from 'react'
import flower from '../../../public/newUpload/landing-2/flower.png'
import diamond from '../../../public/newUpload/landing-2/diamond.png'


export default function NeedAssitance() {
    return (
        <>

            <div className='w-[100%] z-[100] p-[20px] mx-auto  gap-[50px] flex flex-col  mt-[9%]'>
                <div className='flex flex-col gap-[10px] mx-auto justify-center w-[100%] '>
                  
                    <p className='w-[100%] text-[40px] md:text-[50px] leading-[45px] md:leading-[90px] text-[#928380] flex z-10 text-center justify-center font-philospher font-[900]'>
                    Need Assistance?
                    </p>
                    <div className='w-[100%] flex justify-center'>
                        <p className='text-[16px] font-mulish flex justify-center text-[#928380]  md:w-[49%]  z-10 text-center'>
                        Our support team is here to help with any questions or concerns. Whether you have inquiries about our products or need assistance with an order, we’ve got you covered.
                        </p>
                    </div>
                </div>
                <div className='w-[100%] flex flex-wrap justify-center md100:relative gap-[30px] z-10'>
                    <div className='w-[100%] md:w-[56%] lg:w-[29%] h-[300px] md:pt-[10px] pt-[27px] pb-[40px] flex  text-[#928380] px-[28px] bg-[#F8F2F0] rounded-[7px]'>
                        <div className='flex gap-[20px] items-center flex-col'>
                            <img className='w-[60px] h-[60px] mx-auto' src={diamond} />
                            <p className='text-[27px] leading-[30px] text-center font-philospher font-[600]'>
                            Customer Care
                            </p>
                            <p className='text-center font-mulish text-[13px]'>
                            Our team is ready to assist with any inquiries, from product questions to order support. We're here to help you every step of the way.
                            </p>
                            <div className=' bg-[#eebca3] text-white rounded-[6px] md:rounded-[10px] py-[5px] md:py-[10px] mt-[10px] mx-auto text-center w-[100px] md:w-[130px]'>
                                        <p>
                                           Chat now
                                        </p>
                                    </div>
                        </div>
                    </div>
                    <div className='w-[100%] md:w-[56%] lg:w-[29%] h-[300px]  pt-[27px] pb-[40px] flex items-center text-[#928380] px-[28px] bg-[#F8F2F0] rounded-[7px]'>
                        <div className='flex gap-[20px] items-center flex-col'>
                            <img className='w-[60px] h-[60px] mx-auto' src={flower} />
                            <p className='text-[27px] leading-[30px] text-center font-philospher font-[600]'>
                            Submit a Request
                            </p>
                            <p className='text-center font-mulish text-[13px]'>
                            Need more help? Submit a ticket, and we’ll respond promptly to provide the assistance you need.
                            </p>
                            <div className=' bg-[#eebca3] text-white rounded-[6px] md:rounded-[10px] py-[5px] md:py-[10px] mt-[25px] mx-auto text-center w-[100px] md:w-[130px]'>
                                        <p>
                                            Contact us
                                        </p>
                                    </div>
                        </div>
                    </div>

                    <div className='w-[100%] md:w-[56%] lg:w-[29%] h-[300px]  pt-[27px] pb-[40px] flex items-center text-[#928380] px-[28px] bg-[#F8F2F0] rounded-[7px]'>
                        <div className='flex gap-[20px] items-center flex-col'>
                            <img className='w-[60px] h-[60px] mx-auto' src={flower} />
                            <p className='text-[27px] leading-[30px] text-center font-philospher font-[600]'>
                            Industry Updates
                            </p>
                            <p className='text-center font-mulish text-[13px]'>
                            Stay informed on the latest jewelry trends and expert tips by visiting our blog for news and updates.
                            </p>
                            <div className=' bg-[#eebca3] text-white rounded-[6px] font-[200] md:rounded-[10px] py-[5px] md:py-[10px] mt-[25px] mx-auto text-center w-[100px] md:w-[130px]'>
                                        <p>
                                          Read Now
                                        </p>
                                    </div>
                        </div>
                    </div>


                </div>
            </div>
        </>
    )
}
