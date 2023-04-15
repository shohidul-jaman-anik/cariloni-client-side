import React from "react";
import "./Banner.css";
import ShareButton from "../../Share/ShareButton/ShareButton";
import BannerImg from "../../../Asset/Page1/Banner.png";

const Banner = () => {

  return (
    <div>
        <div className="bannerContainer  bg-base-100 shadow-xl rounded-none grid sm:grid-cols-1">
          <div className="flex items-center lg:pb-16 2xl:pb-16">
            <div>
              <h2 className="bannerContent text-white text-5xl leading-">
                <div className="mb-5">
                  A <span className="highliteText"> FREE </span>No Obligation{" "} <br/>
                  Call Should <span className="highliteText"> SAVE YOU</span> Thousands!
                </div>
               
              </h2>
              <ShareButton>Call Now 250-493-9111</ShareButton>
            </div>
          </div>

          <img className="bannerImg" src={BannerImg} alt="Banner" />
        </div>
      
    </div>
  );
};

export default Banner;
