import React from 'react'
import MultipleRing from '../../../public/imgeNew/latest2.png'
import MultipleRingMobile from '../../../public/imgeNew/latest2mobilepng.png'
import icon1 from '../../../public/newUpload/landing-2/flower.png'
import penh from '../../../public/mihirsirVector/HEARTPEN.png'
import idea from '../../../public/mihirsirVector/idea.png'
import ring from '../../../public/mihirsirVector/ring.png'

export default function FashionStyle() {
    return (
        <>
            <div className='md:w-[88%] mx-auto  mt-[5%] ' >
                <div className='w-[100%] flex md:flex-row flex-col '>
                    <div className='md:w-[50%] p-[50px] bg-[#f8f2f0] rounded-bl-[15px] rounded-tl-[15px]'>
                        <div className='flex  flex-col gap-[20px]'>
                            <p className='  flex z-10  text-[15px] md:text-[15px] text-[#D0A38D]' style={{ letterSpacing: '3px' }}>
                                OUR VALUE
                            </p>
                            <p className='w-[100%] text-[35px] md:text-[45px] leading-[45px] md:leading-[60px] text-[#928380] flex z-10  font-philospher font-[900]'>
                                Fashion and style in every thing we own.
                            </p>
                            <p className='text-[15px] font-mulish flex  text-[#928380] md:w-[90%] z-10'>
                                Experience the art of jewelry created with precision and care. Our dedication to quality ensures that every piece is not only beautiful but also built to last.
                            </p>
                            <div className='w-[100%] border-t-[1px] mt-[10px] border-[#D0A38D]'>
                            </div>
                            <div className='flex w-[90%] flex-col md:gap-[30px] gap-[40px]'  >
                                <div className='flex md:flex-row flex-col mx-auto gap-[40px]  md:gap-[40px]'>
                                    <div className='flex flex-col  md:w-[49%] gap-[6px]'>
                                        <img className=" w-[50px] md:w-[60px] " src={penh} />
                                        <p className=' font-philospher text-[30px] md:text-[25px] text-[#928380]'>
                                            Expertise
                                        </p>
                                        <p className=' text-[#928380]  font-mulish  text-[15px]'>
                                            Our knowledge in gemstones, metals, and craftsmanship ensures that every piece is crafted to perfection .
                                        </p>
                                    </div>
                                    <div className='flex flex-col md:w-[49%] gap-[6px]'>
                                        <img className=" w-[50px] md:w-[60px] " src={idea} />
                                        <p className=' font-philospher text-[25px] md:text-[25px] text-[#928380]'>
                                        Innovation
                                        </p>
                                        <p className=' text-[#928380]  font-mulish  text-[15px]'>
                                        We push the limits of traditional jewelry design, blending timeless elegance with modern creativity.
                                        </p>
                                    </div>

                                </div>
                                <div className='flex md:flex-row flex-col mx-auto gap-[40px]  md:gap-[5%]'>
                                    <div className='flex flex-col md:w-[49%] gap-[6px]'>
                                        <img className=" w-[50px] md:w-[60px] " src={ring} />
                                        <p className=' font-philospher text-[30px] md:text-[25px] text-[#928380]'>
                                        Perfection
                                        </p>
                                        <p className=' text-[#928380]  font-mulish  text-[15px]'>
                                        Attention to detail is our hallmark, resulting in pieces that are not only beautiful but truly distinctive
                                        </p>
                                    </div>
                                    <div className='flex flex-col md:w-[49%] gap-[6px]'>
                                        <img className=" w-[50px] md:w-[60px] " src={icon1} />
                                        <p className=' font-philospher text-[25px] md:text-[25px] text-[#928380]'>
                                        Evolution
                                        </p>
                                        <p className=' text-[#928380]  font-mulish  text-[15px]'>
                                            Our knowledge in gemstones, metals, and craftsmanship ensures that every piece is crafted to perfection .
                                        </p>
                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>
                    <div className='w-[50%] md:flex hidden '>
                        <img src={MultipleRing} />
                    </div>
                    <div className='w-[100%] md:hidden flex '>
                        <img src={MultipleRingMobile} />
                    </div>
                </div>
            </div>
        </>
    )
}
