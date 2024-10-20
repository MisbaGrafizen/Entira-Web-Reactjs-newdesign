import React from 'react'

export default function Footer() {
    return (
        <>
            <div className='w-[100%] bg-[#F8F2F0] mx-auto relative mt-[80px] h-[95vh] md:h-[45vh] py-[20px] '>
                <div className='w-[88%] pt-[30px] gap-[30px] md:gap-[0px] absolute shadow-2xl top-[-15%] custom-shadow left-0 right-0    pb-[40px] flex md:flex-row flex-col px-[30px]  rounded-[10px] justify-between mx-auto bg-white'>
                    <div className='md:w-[40%] md:h-[30%] flex flex-col gap-[10px] '>
                        <p className='text-[30px] text-[#928380] flex z-10  font-philospher font-[900]'>
                            Head Office
                        </p>
                        <div className='flex  font-mulish font-[100]  text-[#928380] items-center text-left gap-[10px]'>
                            <i className="fa-solid w-[20px] fa-envelope"></i>
                            <p className='flex text-left'>
                                office@entira.com
                            </p>
                        </div>
                        <div className='flex  text-[#928380] items-center text-left gap-[10px]'>
                            <i class="fa-solid w-[20px] fa-phone-volume"></i>
                            <p className='flex text-left'>
                                +91 75673 99311
                            </p>
                        </div>
                    </div>
                    <div className='md:w-[30%] md:h-[30%] flex flex-col gap-[10px] '>
                        <p className='text-[30px] text-[#928380] flex z-10  font-philospher font-[900]'>
                            Support                        </p>
                        <div className='flex  text-[#928380] items-center text-left gap-[10px]'>
                            <p className='  font-mulish font-[100] flex text-left'>
                                Help Center
                            </p>
                        </div>
                        <div className='flex  font-mulish font-[100]  text-[#928380] items-center text-left gap-[10px]'>
                            <p className='flex text-left'>
                                Ticket
                            </p>
                        </div>
                        <div className='flex  font-mulish font-[100]  text-[#928380] items-center text-left gap-[10px]'>
                            <p className='flex text-left'>
                                Support Center
                            </p>
                        </div>
                        <div className='flex   text-[#928380] items-center text-left gap-[10px]'>
                            <p className='flex  font-mulish font-[100] text-left'>
                                Faq
                            </p>
                        </div>
                    </div>
                    <div className='md:w-[420px] '>


                        <div className=' md:text-right md:h-[30%] flex flex-col gap-[30px] '>
                            <p className='text-[30px] text-[#928380] flex z-10  font-philospher font-[900]'>
                                Get Exclusive Offers
                            </p>
                            <div className='flex  font-mulish  text-[#e2d8d5] items-center text-left gap-[10px]'>
                                <p>
                                    Join our mailing list to receive exclusive discounts, sneak peeks of new arrivals, and the latest jewelry insights directly to your inbox.
                                </p>

                            </div>
                            <div className='flex h-[40px] ] md:mt-[20px] font-mulish items-center text-left gap-[10px]'>
                                <input className='h-[40px] bg-[#fcf6f5]  text-[#928380] md:w-[70%]  text-[15px]  outline-none rounded-[7px] px-[10px]' placeholder='Email' type='text' />
                                <div className='w-[140px] cursor-pointer flex justify-center items-center  text-center text-[#fff] h-[40px] bg-[#eebca3] rounded-[7px]'>
                                    <p>
                                        Sign up
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div>
                    <p className=' font-mulish text-[13px] md:text-[20px] w-[88%] flex justify-center left-0 right-0  md:w-[100%] text-[#928380] mx-auto text-center absolute bottom-[1px] md:bottom-[20px]'>
                    © 2024 All Rights Reserved by Entira Jewelry || Designed and Developed with ❤️ by Grafizen International LLC
                    </p>
                </div>
            </div>

        </>
    )
}
