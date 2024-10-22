import React, { useState, useEffect } from 'react';
import Header from '../components/header/Header';
import Landing from '../components/landing/Landing';
import GlobalFashion from '../components/globalFashion/GlobalFashion';
import NewCollection from '../components/NewCollection/NewCollection';
import ExploreCollection from '../components/ExploreCollection/ExploreCollection';
import Crafted from '../components/craftedjwl/Crafted';
import FashionStyle from '../components/fashionStyle/FashionStyle';
import LatestTrends from '../components/latestTrends/LatestTrends';
import Customer from '../components/customer/Customer';
import NeedAssitance from '../components/needAssitance/NeedAssitance';
import Footer from '../components/footer/Footer';
import Loader from '../components/loder/Loader';

export default function Home() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Set a timeout of 3 seconds (3000 milliseconds)
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2000);

        // Clean up the timer when the component is unmounted
        return () => clearTimeout(timer);
    }, []);

    // Function to preload images or other assets
    const preloadAssets = () => {
        const images = [
            '/path/to/image1.jpg',
            '/path/to/image2.jpg',
            // Add more images or assets you want to preload
        ];

        images.forEach((src) => {
            const img = new Image();
            img.src = src;
        });
    };

    useEffect(() => {
        preloadAssets(); // Start preloading assets
    }, []);

    return (
        <>
            {isLoading ? (
                <Loader />
            ) : (
                <div className=''>
                    <Header />
                    <div className='flex gap-[50px] flex-col'>
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
            )}
        </>
    );
}
