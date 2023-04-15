import React from "react";
import "./HowItWorks.css";

const HowItWorks = () => {
  return (
    <div className="how-work-container">
      <h1 className="how-work-heading">
        How <span className="underlineArrow"> It Works</span>
      </h1>
      <div className="how-work-section">
        <div className="how-work max-w-sm py-12 p-6 mx-auto text-white border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <div className="circleArrow">
            <div className="numberContainer">
              <p>01</p>
            </div>
          </div>
          <h1 className="">You Apply</h1>
          <p>
            As your broker, we will complete an application with you. This
            process can be done as quickly as 15- minutes on the phone or
            online. We take the time to get to know you and your needs.
          </p>
        </div>
        <div className="how-work max-w-sm py-12 p-6 text-white border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <div className="circleArrow">
            <div className="numberContainer">
              <p>02</p>
            </div>
          </div>
          <h1 className="">We Shop</h1>
          <p>
            We leverage our relationships with Okanagan area banks, credit
            unions, trusts, online lenders, private companies and many others
            depending on your situation to find you the best mortgage options.
          </p>
        </div>
        <div className="how-work max-w-sm py-12 p-6 text-white border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <div className="circleArrow">
            <div className="numberContainer">
              <p>03</p>
            </div>
          </div>
          <h1 className="">You Select</h1>
          <p>
            We review the best mortgage options with you and explain every part
            of the process. With confidence you can select and sign your
            mortgage. This can all be done online or in person if you wish.
          </p>
        </div>
        <div className="how-work max-w-sm py-12 p-6 text-white border-gray-200 rounded-lg shadow  dark:bg-gray-800 dark:border-gray-700">
          <div className="circleArrow">
            <div className="numberContainer">
              <p>04</p>
            </div>
          </div>
          <h1 className="">You Save</h1>
          <p>
            We get your mortgage funded and you save because we found you the
            best terms. For conventional residential mortgages we are paid
            directly by the lender, our services are FREE to you.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
