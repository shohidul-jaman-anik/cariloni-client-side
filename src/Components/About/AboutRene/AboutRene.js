import React from "react";
import "./AboutRene.css";
import rene from "../../../Asset/AboutPage/Rene.png";
import { Link } from "react-router-dom";
import "./AboutRene.css";

const AboutRene = () => {
  return (
    <div className="reneContainer ">
      <div className="sideObject"></div>
      <div className="reni-section">
        <div className="AboutReneImg">
          <img className="reneImg" src={rene} alt="" />
        </div>
        <div className="reneCarloniContent text-white">
          <h1 className="">
            About <span className="underlineArrow ">Rene Carloni</span>
          </h1>
          <div>
            <p className="mt-5">
              Rene Carloni is one of the most experienced and respected mortgage
              brokers in the business. He has previously owned Dominion Lending
              Centers and Mortgage Centre Franchises. Rene has over two decades
              of lending experience, including 15 as a licensed mortgage broker
              and has been involved in nearly every type of financing you can
              think of.
            </p>
            <p className="mt-5">
              Rene is actively involved in real estate development, commercial
              real estate, private mortgage lending and various other finance
              companies. He has real life and professional experience with
              complex transactions. 
              {/* Rene understands clients who are going
              through divorce, difficult family situations, business ups and
              downs and renovations. Rene can sit with a client and really
              understand their needs and offer the best possible financial
              advice and positioning while incorporating the lowest possible
              rate. */}

              {/* This allows his clients to move forward in whichever life
              and housing decision fits their needs with confidence, while
              keeping more money in their pocket. */}
            </p>
            {/* <p className="mt-5">
              Rene was born in Denmark and lives in Penticton, BC with his two
              young boys, Ace 9 & Fox 6, who can sometimes be found at the
              office helping Dad. His family values translate to home purchases,
              commercial mortgages for small family businesses, and everything
              beyond and between.
            </p>
            <p className="mt-5">
              Having cumulatively funded over 250,000 loans in his career
              through various companies Rene Carloni is the most experienced
              broker in the Southern Interior of BC, and quite possibly the
              entire country.
            </p> */}
          </div>

          
        </div>
      </div>
    </div>
  );
};

export default AboutRene;
