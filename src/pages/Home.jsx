import React from 'react'
import Header from '../components/header/Header'
import Landing from '../components/landing/Landing'
import GlobalFashion from '../components/globalFashion/GlobalFashion'
import NewCollection from '../components/NewCollection/NewCollection'
import ExploreCollection from '../components/ExploreCollection/ExploreCollection'
import Crafted from '../components/craftedjwl/Crafted'
import FashionStyle from '../components/fashionStyle/FashionStyle'
import LatestTrends from '../components/latestTrends/LatestTrends'
import Customer from '../components/customer/Customer'
import NeedAssitance from '../components/needAssitance/NeedAssitance'
import Footer from '../components/footer/Footer'

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
                    <Crafted />
                    <FashionStyle />
                    <LatestTrends />
                    <Customer />
                   <NeedAssitance />
                   <Footer />
                </div>
            </div>
        </>
    )
}
