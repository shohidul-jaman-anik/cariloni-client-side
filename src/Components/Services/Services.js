import React from 'react';
import Banner from '../Home/Banner/Banner';
import ServicesList from './ServicesList/ServicesList';
import ServicesBanner from './ServicesBanner.js/ServicesBanner';

const Services = () => {
    return (
        <div>
            
            {/* <Banner></Banner> */}
            <ServicesBanner></ServicesBanner>
            <ServicesList></ServicesList>
        </div>
    );
};

export default Services;