import React from 'react';
import AboutCarloni from '../AboutCarloni/AboutCarloni';
import Banner from '../Banner/Banner';
import HowItWorks from '../HowItWorks/HowItWorks';
import Services from "../Services/Services";
import WhyWorkUS from '../WhyWorkUs/WhyWorkUS';
import DealExamples from '../DealExamples/DealExamples';
import ContactUs from '../ContactUs/ContactUs';
// import Testimonial from '../Testimonial/Testimonial';


const Home = () => {
    return (
        <div>
            {/* <Header></Header> */}
            <Banner></Banner>
            <Services></Services>
            <AboutCarloni></AboutCarloni>
            <WhyWorkUS></WhyWorkUS>
            <HowItWorks></HowItWorks>
            <DealExamples></DealExamples>
            {/* <Testimonial></Testimonial> */}
            <ContactUs></ContactUs>
        </div>
    );
};

export default Home;