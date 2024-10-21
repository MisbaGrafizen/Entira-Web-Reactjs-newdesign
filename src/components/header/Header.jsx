import React from 'react'

import logo from '../../../public/imgeNew/logo-entira.png'


export default function Header() {
    return (
        <>

            <div className='w-[100%]  '>
                <div className={`fixed left-0 right-0 md:w-[88%]  md:rounded-[8px] h-[85px] flex md:mx-auto items-center z-[5000] bg-[#fcf3f3] transition-all  duration-300 top-[-0px] md:top-[16px]`}>
                    <div className='mx-auto w-[100%]'>
                        <img className='md:w-[200px] w-[160px] ml-[2%]  md:mx-auto' src={logo} />
                    </div>
                    <div className='md:w-[110px] w-[80px]  text-[#F8F2F0] text-center  md:right-[2%] right-[3%] absolute text-[14px] rounded-[6px] h-[40px] flex items-center bg-[#D0A38D]'>
                    <a href='mailto:office@entira.com'>Email us</a>
                    </div>
                </div>
            </div>

        </>
    )
}
