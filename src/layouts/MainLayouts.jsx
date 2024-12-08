import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer/Footer';


const MainLayouts = () => {

    const [isDarkTheme, setIsDarkTheme] = useState(false);

    // Check for saved theme in localStorage
    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            setIsDarkTheme(savedTheme === 'dark');
        }
    }, []);

    // Toggle theme function
    const toggleTheme = () => {
        setIsDarkTheme((prev) => !prev);
    };

    // Apply the theme to the body element
    useEffect(() => {
        const theme = isDarkTheme ? 'dark' : 'light';
        localStorage.setItem('theme', theme);
        document.body.classList.remove('dark', 'light');
        document.body.classList.add(theme);
    }, [isDarkTheme]);
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayouts;