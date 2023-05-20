import React, { useEffect } from 'react';
import Banner from './Banner';
import ToySectionOne from './ToySectionOne';
import ToySectionTwo from './ToySectionTwo';
import Tab from './Tab';
import Gallery from './Gallery';

const Home = () => {

    useEffect(()=>{
        window.scrollTo(0,0)
      },[])

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