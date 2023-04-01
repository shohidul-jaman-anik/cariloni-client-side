import React from "react";
import "./Banner.css";
import ShareButton from "../../Share/ShareButton/ShareButton";

const Banner = () => {
  return (
    <div>
      <div className="bannerContainer card card-side bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title text-white text-5xl">
            A <span className="highliteText"> FREE </span >No Obligation 
            Call Should <span className="highliteText"> SAVE 
            YOU</span> Thousands!
          </h2>

          <ShareButton>Call Now 250-493-9111</ShareButton>
        </div>

        <figure>
          <img
            src="/images/stock/photo-1635805737707-575885ab0820.jpg"
            alt="Movie"
          />
        </figure>
      </div>
    </div>
  );
};

export default Banner;
