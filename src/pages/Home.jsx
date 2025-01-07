import React, { useEffect, useState } from 'react';
import Banner from '../components/Banner/Banner';
import HighestRatedGames from '../components/High/HighestRatedGames';

import { Typewriter } from "react-simple-typewriter";
import { Fade } from "react-awesome-reveal";
import ContactUs from './ContactUs/ContactUs';
import BlogLayout from './BlogLayout/BlogLayout';

const Home = () => {
    // const [isDarkTheme, setIsDarkTheme] = useState(false);

    // // Check for saved theme in localStorage on component mount
    // useEffect(() => {
    //     const savedTheme = localStorage.getItem('theme');
    //     if (savedTheme) {
    //         setIsDarkTheme(savedTheme === 'dark');
    //     }
    // }, []);

    // useEffect(() => {
    //     // Apply the theme to the body element based on isDarkTheme
    //     const theme = isDarkTheme ? 'dark' : 'light';
    //     localStorage.setItem('theme', theme); // Save theme preference in localStorage
    //     document.body.classList.remove('dark', 'light');
    //     document.body.classList.add(theme);
    // }, [isDarkTheme]);

    // // Function to handle mouse enter event
    // const handleMouseEnter = () => {
    //     setIsDarkTheme(true); // Set dark theme on mouse enter
    // };

    // // Function to handle mouse leave event
    // const handleMouseLeave = () => {
    //     setIsDarkTheme(false); // Set light theme on mouse leave
    // };

    return (
        <div
            className="-z-10 highest-rated-section"
            // onMouseEnter={handleMouseEnter} // Trigger dark theme on mouse enter
            // onMouseLeave={handleMouseLeave} // Trigger light theme on mouse leave
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
