import React from "react";
import "./CommonBanner.css";
import callVector from "../../../Asset/Page1/callVector.png";
import ShareButton from "../ShareButton/ShareButton";
import { useLocation } from "react-router-dom";

const CommonBanner = () => {
  const { pathname } = useLocation();

  return (
    <div>
      {pathname.includes("/about") && (
        <div className="commonBannerComponent">
          <h3 className="text-white text-3xl">ABOUT US</h3>
          <h1 className="text-white text-6xl my-8 font-semibold">
            {" "}
            “If it <span className="highliteText">MAKE</span> Sense, We Get it{" "}
            <span className="highliteText">DONE!</span> ”
          </h1>

          <ShareButton>
            <img src={callVector} alt="call vector" className="mr-3"></img> Call
            Now 250-493-9111
          </ShareButton>
        </div>
      )}
      {pathname.includes("/blogs") && (
        <div className="commonBannerComponent">
          <h3 className="text-white text-3xl">ABOUT US</h3>
          <h1 className="text-white text-6xl my-8 font-semibold">
          Mortgage <span className="highliteText">NEWS </span>and Helpful
          </h1>
          <h1 className="text-white text-6xl my-8 font-semibold">
          Tips for Home <span className="highliteText">BUYERS</span>
          </h1>

        </div>
      )}

    </div>
  );
};

export default CommonBanner;
