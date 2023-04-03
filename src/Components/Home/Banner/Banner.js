import React from "react";
import "./Banner.css";
import ShareButton from "../../Share/ShareButton/ShareButton";
import BannerImg from "../../../Asset/Page1/Banner.png";
import { useLocation } from "react-router-dom";
import servicesBanner from "../../../Asset/Page2/servicesBanner.png";
import callVector from "../../../Asset/Page1/callVector.png"


const Banner = () => {
  const { pathname } = useLocation();
  return (
    <div>
      {!pathname.includes("services") ? (
        <div className="bannerContainer  bg-base-100 shadow-xl rounded-none grid sm:grid-cols-1">
          <div className="flex items-center">
            <div>
              <h2 className=" text-white text-5xl leading-">
                <div className="my-5">
                  {" "}
                  A <span className="highliteText"> FREE </span>No Obligation{" "}
                </div>
                <div className="my-5">
                  Call Should <span className="highliteText"> SAVE YOU</span>
                </div>
                <div className="my-5"> Thousands!</div>
              </h2>
              <div>
                <ShareButton><img src={callVector} alt="call vector" className="mr-3"></img> Call Now 250-493-9111</ShareButton>
              </div>
            </div>
          </div>

          <img className="bannerImg" src={BannerImg} alt="Banner" />
        </div>
      ) : (
        <div className="bannerContainer  bg-base-100 shadow-xl rounded-none  grid sm:grid-cols-1">
          <div className="flex items-center mr-10">
            <div>
              <h2 className=" text-white text-5xl leading-">
                <div className="my-5">Mortgage Services</div>
              </h2>
              <h3 className=" text-white text-3xl my-5">
                What does a mortgage broker do?{" "}
              </h3>
              <p className="text-sm text-white font-normal">
                What does a mortgage broker do? There’s no simple answer to that
                question. But that’s not because it’s unclear. Instead, it’s
                because a mortgage broker does so much. We are there for
                individuals and households looking to buy their very first home.
                We’re there for business owners who are ready to expand beyond
                their home office and into a commercial property to call their
                own. We’re there for existing home owners who want to take
                advantage of their equity for renovations, to fund an
                investment, or even buy a vacation property. We’re also there
                for people who have exhausted every effort to get out of debt
                and get their finances back on track. So what does a mortgage
                broker do? We serve our community – which includes YOU.
               
              </p>
              <p className="text-sm text-white font-normal my-5">
                  If you’re looking for mortgage services in Penticton or
                  anywhere in the Southern Interior of British Columbia you
                  needn’t look any further. Carloni Mortgages is a full-service
                  one-stop shop brokerage, specializing in the services detailed
                  below.
                </p>
              <div>
                <ShareButton><img src={callVector} alt="call vector" className="mr-3"></img> Call Now 250-493-9111</ShareButton>
              </div>
            </div>
          </div>

          <img className="bannerImg" src={servicesBanner} alt="Services Banner" />
        </div>
      )}
    </div>
  );
};

export default Banner;
