import React from 'react'
import Header from '../components/header/Header'
import Landing from '../components/landing/Landing'
import GlobalFashion from '../components/globalFashion/GlobalFashion'
import NewCollection from '../components/NewCollection/NewCollection'
import ExploreCollection from '../components/ExploreCollection/ExploreCollection'

export default function Home() {
    return (
        <>
            <div className=''>



                <Header />
                <div className=' flex gap-[50px] flex-col '>
                    <Landing />
                    <GlobalFashion />
                    <ExploreCollection />
                    <NewCollection />
                </div>
            </div>
        </>
    )
}
