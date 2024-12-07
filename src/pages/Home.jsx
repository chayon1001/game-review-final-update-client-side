import React from 'react';
import Banner from '../components/Banner/Banner';
import HighestRatedGames from '../components/HighestRatedGames/HighestRatedGames';

const Home = () => {
    return (
        <div className='-z-10'>
            <Banner></Banner>
            <HighestRatedGames></HighestRatedGames>
        </div>
    );
};

export default Home;