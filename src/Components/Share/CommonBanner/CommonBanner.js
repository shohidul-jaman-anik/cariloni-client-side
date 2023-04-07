import React from "react";
import { useLocation } from "react-router-dom";
import ShareButton from "../ShareButton/ShareButton";
import "./CommonBanner.css";

const CommonBanner = () => {
  const { pathname } = useLocation();

  return (
    <div>
      {pathname.includes("/about") && (
        <div className="aboutBannerComponent">
          <h3 className="text-white text-3xl">ABOUT US</h3>
          <h1 className="text-white text-6xl my-8 font-semibold">
            {" "}
            “If it <span className="highliteText">MAKE</span> Sense, We Get it{" "}
            <span className="highliteText">DONE!</span> ”
          </h1>

          <ShareButton>Call Now 250-493-9111</ShareButton>
        </div>
      )}
      {pathname.includes("/blogs") && (
        <div className="blogBannerComponent">
          <h1 className="text-white text-6xl my-8 font-semibold">
            Mortgage <span className="highliteText">NEWS </span>and Helpful
            Tips for Home   <span className="highliteText">BUYERS</span>
          </h1>
        </div>
      )}
      {/* {pathname.includes("/contact") && (
        <div className="commonBannerComponent">
          <h3 className="text-white text-3xl">ABOUT US</h3>
          <h1 className="text-white text-6xl my-8 font-semibold">
            Mortgage <span className="highliteText">NEWS </span>and Helpful
          </h1>
          <h1 className="text-white text-6xl my-8 font-semibold">
            Tips for Home <span className="highliteText">BUYERS</span>
          </h1>

          <ShareButton>Call Now 250-493-9111</ShareButton>
        </div>
      )} */}
      {pathname.includes("/testimonials") && (
        <div className="testimonialBannerComponent">
          <h1 className="text-white text-6xl my-8 font-semibold">
            <span className="highliteText">Happy</span> Customers <br/>Say<span className="highliteText"> ABOUT </span>Us
          </h1>
        </div>
      )}
      {pathname.includes("/contact") && (
        <div className="contactBannerComponent">
          <h1 className="text-white text-6xl my-8 font-semibold">
           A <span className="highliteText">FREE</span> No Obligation Call Should<span className="highliteText">SAVE</span>YOU Thousands!
          </h1>
        </div>
      )}
      {pathname.includes("/serviceDetails") && (
        <div className="commonBannerComponent">
          <h1 className="text-white text-6xl my-8 font-semibold">
           Mortgage for Buying a <br/><span className="highliteText">House</span> or Condo
          </h1>
        </div>
      )}

    </div>
  );
};

export default CommonBanner;
