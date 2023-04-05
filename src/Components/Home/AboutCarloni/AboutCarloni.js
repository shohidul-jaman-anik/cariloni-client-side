import React from "react";
import ShareButton from "../../Share/ShareButton/ShareButton";
import { Link } from "react-router-dom";
import carloni from "../../../Asset/Page1/carloni.png";
import "./AboutCarloni.css";
import arrow from "../../../Asset/Page1/Arrow 1.png"


const AboutCarloni = () => {
  return (
    <div className="carloniContainer ">
      <div className="carloni-section">
        <div className=" lg:mr-20">
          <img className="mt-[-55px]" src={carloni} alt="" />
        </div>
        <div className=" text-white carloniContent">
          <h1 className="font-bold text-4xl">
            About <span className="underlineArrow">Carloni Mortgage</span>
          </h1>
          <p className="mt-5">
            Our Philosophy is Simple. "If it Makes Sense, We get It Done."
            Drawing On Two Decades Of Lending Experiment We Have Access TO A
            Massive Lender Network And When Necessary Top Our Own Exclusive
            Funding Sources.
          </p>
          <p className="mt-5">
            We Get Deals Done That Nobody Else Can. We Work With First Time Home
            Buyers To Seasoned Investor. IF It's Experience You're Looking For
          </p>

          <p className="mt-5">-You've Come To The Right Place.</p>
          <div className="my-5 flex items-center">
            <button className="btn btn-outline carloniBtn">
              <Link to="/">Read More</Link>
            </button>
            <p className="ms-5 text-yellow-200 flex">About Rene Carluni <img src={arrow} alt="arrow" className="ms-3"></img></p>
          </div>
          <div className="boxArrow">
             
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutCarloni;
