import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import AboutMe from '../AboutMe/AboutMe';
import Banner from '../Banner/Banner';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Banner></Banner>
            <AboutMe></AboutMe>
        </div>
    );
};

export default Home;