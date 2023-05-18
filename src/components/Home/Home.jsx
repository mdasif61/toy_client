import React from 'react';
import Banner from './Banner';
import ToySectionOne from './ToySectionOne';
import ToySectionTwo from './ToySectionTwo';
import Tab from './Tab';

const Home = () => {
    return (
        <div>
           <Banner></Banner> 
           <ToySectionOne></ToySectionOne>
           <Tab></Tab>
           <ToySectionTwo></ToySectionTwo>
        </div>
    );
};

export default Home;