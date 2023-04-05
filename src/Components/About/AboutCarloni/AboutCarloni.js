import React from "react";
import image from "../../../Asset/AboutPage/Group 41685.png";
import "./AboutCarloni.css"


const AboutCarloni = () => {
  return (
    <div className="aboutCarloni gap-x-10">
      <div className=" carloniDetails">
        <h1 className="font-bold text-4xl">
          About <span className="underlineArrow ">Carloni Mortgage</span>
        </h1>
        <p className="mt-5">
          Our Philosophy is Simple. "If it Makes Sense, We get It Done." Drawing
          On Two Decades Of Lending Experiment We Have Access TO A Massive
          Lender Network And When Necessary Top Our Own Exclusive Funding
          Sources.
        </p>
        <p className="mt-5">
          We Get Deals Done That Nobody Else Can. We Work With First Time Home
          Buyers To Seasoned Investor. IF It's Experience You're Looking For
        </p>

        <p className="mt-5 ">-You've Come To The Right Place.</p>
      </div>
      <div className="ExampleImage">
        <img src={image} alt="Example side img" ></img>
      </div>
    </div>
  );
};

export default AboutCarloni;
