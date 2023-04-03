import React from "react";
import ShareButton from "../../Share/ShareButton/ShareButton";
import { Link } from "react-router-dom";
import carloni from "../../../Asset/Page1/carloni.png";
import "./AboutCarloni.css";

const AboutCarloni = () => {
  return (
    <div className="flex items-start carloniContainer ">
      <div className="carloni-section">
        <div className="flex-1 hidden lg:block lg:mr-20">
          <img className="mt-[-55px]" src={carloni} alt="" />
        </div>
        <div className="flex-1 text-white">
          <h1 className="font-bold text-4xl">
            About <span className="subPng">Carloni Mortgage</span>
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
          <div className="my-5">
            <button className="btn btn-outline carloniBtn">
              <Link to="/">Read More</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutCarloni;
