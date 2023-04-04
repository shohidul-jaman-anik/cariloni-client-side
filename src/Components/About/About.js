import React from 'react';
import CommonBanner from '../Share/CommonBanner/CommonBanner';
import AboutRene from './AboutRene/AboutRene';
import AboutCarloni from './AboutCarloni/AboutCarloni';
import BrokersTeam from './BrokersTeam/BrokersTeam';

const About = () => {
    return (
        <div>
            <CommonBanner></CommonBanner>
            <AboutCarloni></AboutCarloni>
            <AboutRene></AboutRene>
            <BrokersTeam></BrokersTeam>
        </div>
    );
};

export default About;