import React from 'react'

import backimg from '../../../public/imgeNew/exportcollection/jwellery.png'
import backimg2 from '../../../public/imgeNew/exportcollection/jwellery.jpg'

export default function ExploreCollection() {
    return (
        <>
            <section className='w-[100%]  mt-[110px] '>
                <div>
                    <div className='w-[100%] bg-[#F8F2F0] h-[100px]'>

                    </div>
                </div>
                <img className='w-[100%] absolute md:flex hidden z-[-10] md:h-[70vh] opacity-[0.6]' src={backimg} />
                <img className='w-[100%] absolute md:hidden flex z-[-10] md:h-[56vh] opacity-[0.6]' src={backimg2} />
                <div className='w-[100%] flex  py-[20px] gap-[15px] md:pt-[5%] pt-[6%] flex-col mx-auto z-[20]'>
                    <div className=' text-center md:text-[60px] text-[50px] text-[#fae3e3] font-philospher font-[900]' style={{ fontWeight: 'bold', lineHeight: '1.3' }}>
                        <p>Explore Collections</p>
                    </div>
                    <div className=' font-mulish md:w-[50%] flex text-center mx-auto  text-[#494242] ' >
                            <p>Immerse yourself in our curated selection of exquisite jewelry, designed to combine timeless elegance with modern flair.</p>
                        </div>

                </div>
            </section>
        </>
    )
}
