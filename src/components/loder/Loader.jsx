import React from 'react'
import './Loder.css'

export default function Loader() {
    return (
        <>
            <div className='w-[100%] h-[100vh] mx-auto flex flex-col justify-center items-center '>


                <div className="loader">
                    <div className="circle">
                        <div className="dot"></div>
                        <div className="outline"></div>
                    </div>
                    <div className="circle">
                        <div className="dot"></div>
                        <div className="outline"></div>
                    </div>
                    <div className="circle">
                        <div className="dot"></div>
                        <div className="outline"></div>
                    </div>
                    <div className="circle">
                        <div className="dot"></div>
                        <div className="outline"></div>
                    </div>
                </div>
            </div>
        </>
    )
}
