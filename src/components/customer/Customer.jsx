import React from 'react'

import backimg from '../../../public/imgeNew/backfolder/backnew.png'
import backimg2 from '../../../public/imgeNew/backfolder/newbackimg.png'
import bgvect from '../../../public/vectors/bg_img.png'

export default function Customer() {
  return (
    <>
            <section className='w-[100%]   '>
            {/* <div className='w-[100%] z-[3] overflow-hidden shadow-inner flex flex-wrap absolute  opacity-[0.6] '>
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
                </div> */}
                <img className='w-[100%] absolute md:flex hidden z-[-10] h-[40vh] md:h-[60vh] opacity-[0.6]' src={backimg} />
                <img className='w-[100%] absolute md:hidden flex z-[-10] ] md:h-[56vh] opacity-[0.6]' src={backimg2} />
                <div className='w-[100%] flex  items-center justify-center  py-[20px] gap-[15px] md:pt-[12%] pt-[13%] flex-col mx-auto z-[20]'>
                    <div className=' text-center md:text-[60px] text-[40px] text-[#523c36] font-philospher font-[900]' style={{ fontWeight: 'bold', lineHeight: '1.3' }}>
                        <p>Explore Collections</p>
                    </div>
                    <div className=' font-mulish md:w-[50%] w-[88%] flex text-center mx-auto  text-[#494242] ' >
                            <p>Immerse yourself in our curated selection of exquisite jewelry, designed to combine timeless elegance with modern flair.</p>
                        </div>

                </div>
            </section>
        </>
  )
}
