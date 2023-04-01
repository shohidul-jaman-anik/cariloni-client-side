import React from "react";
import ShareButton from "../../Share/ShareButton/ShareButton";
import { Link } from "react-router-dom";

const AboutCarloni = () => {
  return (
    <section
      style={
        {
          // background: `url(${appointment})`,
        }
      }
      className="flex items-center "
    >
      <div
        data-aos="fade-right"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
        data-aos-duration="800"
        className="flex-1 hidden lg:block"
      >
        {/* <img className="mt-[-130px]" src={doctor} alt="" /> */}
      </div>
      <div
        data-aos="fade-left"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
        data-aos-duration="800"
        className="flex-1"
      >
        <h1 className="font-bold text-3xl">About Carloni Mortgage</h1>
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

        <p className="mt-5">-You've Come To The Right Place.</p>
        <div className="my-5">
          <ShareButton>
            <Link to="/">Read More</Link>
          </ShareButton>
        </div>
      </div>
    </section>
  );
};

export default AboutCarloni;
