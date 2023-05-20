import React, { useEffect } from 'react';
import Banner from './Banner';
import ToySectionOne from './ToySectionOne';
import ToySectionTwo from './ToySectionTwo';
import Tab from './Tab';
import Gallery from './Gallery';
import dynamicTitle from '../Shared/CustomHook';

const Home = () => {

    dynamicTitle('Home')

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