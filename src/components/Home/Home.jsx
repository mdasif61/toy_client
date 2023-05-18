import React from 'react';
import Banner from './Banner';
import ToySectionOne from './ToySectionOne';
import ToySectionTwo from './ToySectionTwo';

const Home = () => {
    return (
        <div>
           <Banner></Banner> 
           <ToySectionOne></ToySectionOne>
           <ToySectionTwo></ToySectionTwo>
        </div>
    );
};

export default Home;