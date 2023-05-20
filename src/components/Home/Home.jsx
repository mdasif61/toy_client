import React from 'react';
import Banner from './Banner';
import ToySectionOne from './ToySectionOne';
import ToySectionTwo from './ToySectionTwo';
import Tab from './Tab';
import Gallery from './Gallery';

const Home = () => {
    return (
        <div>
           <Banner></Banner> 
           <Gallery></Gallery>
           <ToySectionOne></ToySectionOne>
           <Tab></Tab>
           <ToySectionTwo></ToySectionTwo>
        </div>
    );
};

export default Home;