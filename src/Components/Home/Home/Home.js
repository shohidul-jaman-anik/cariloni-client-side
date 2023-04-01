import React from 'react';
import AboutCarloni from '../AboutCarloni/AboutCarloni';
import Banner from '../Banner/Banner';
import HowItWorks from '../HowItWorks/HowItWorks';
import Services from "../Services/Services";
import WhyWorkUS from '../WhyWorkUs/WhyWorkUS';


const Home = () => {
    return (
        <div>
            {/* <Header></Header> */}
            <Banner></Banner>
            <Services></Services>
            <AboutCarloni></AboutCarloni>
            <WhyWorkUS></WhyWorkUS>
            <HowItWorks></HowItWorks>
        </div>
    );
};

export default Home;