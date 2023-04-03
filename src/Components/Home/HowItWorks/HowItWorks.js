import React from "react";
import "./HowItWorks.css";

const HowItWorks = () => {
  return (
    <div className="how-work-container">
      <h1 className="text-white text-4xl font-semibold mb-16 text-center">How It Works</h1>
      <div className="grid grid-cols-4 ">
        <div class="how-work max-w-sm py-12 p-6 text-white border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <div className="numberContainer">
            <p>01</p>
          </div>
          <h1 className="text-3xl font-semibold my-5">You Apply</h1>
          <p>
            As your broker, we will complete an application with you. This
            process can be done as quickly as 15- minutes on the phone or
            online. We take the time to get to know you and your needs.
          </p>
        </div>
        <div class="how-work max-w-sm py-12 p-6 text-white border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <div className="numberContainer">
            <p5>02</p5>
          </div>
          <h1 className="text-3xl font-semibold my-5">We Shop</h1>
          <p>
            We leverage our relationships with Okanagan area banks, credit
            unions, trusts, online lenders, private companies and many others
            depending on your situation to find you the best mortgage options.
          </p>
        </div>
        <div class="how-work max-w-sm py-12 p-6 text-white border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <div className="numberContainer">
            <p>03</p>
          </div>
          <h1 className="text-3xl font-semibold my-5">You Select</h1>
          <p>
            We review the best mortgage options with you and explain every part
            of the process. With confidence you can select and sign your
            mortgage. This can all be done online or in person if you wish.
          </p>
        </div>
        <div class="how-work max-w-sm py-12 p-6 text-white border-gray-200 rounded-lg shadow  dark:bg-gray-800 dark:border-gray-700">
          <div className="numberContainer">
            <p>04</p>
          </div>
          <h1 className="text-3xl font-semibold my-5">You Save</h1>
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
