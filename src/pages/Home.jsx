import React, { useEffect, useState } from 'react';
import Banner from '../components/Banner/Banner';
import HighestRatedGames from '../components/High/HighestRatedGames';

import { Typewriter } from "react-simple-typewriter";
import { Fade } from "react-awesome-reveal";
import ContactUs from './ContactUs/ContactUs';
import BlogLayout from './BlogLayout/BlogLayout';

const Home = () => {
   
    return (
        <div
            className="-z-10 highest-rated-section"
            
        >
            <Fade duration={1000}>
                <h2>
                    <Typewriter
                        words={["Explore the Top Rated Games!"]}
                        loop={1}
                        cursor
                        cursorStyle="_"
                        typeSpeed={100}
                        deleteSpeed={50}
                        delaySpeed={1000}
                    />
                    
                </h2>
                <Banner />


               
            </Fade>
            <Fade delay={500} duration={1000}>
                <HighestRatedGames />
                <BlogLayout></BlogLayout>

                <ContactUs></ContactUs>

            </Fade>
        </div>
    );
};

export default Home;
