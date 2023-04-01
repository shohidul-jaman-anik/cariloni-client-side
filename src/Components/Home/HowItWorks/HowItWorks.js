import React from "react";
import "./HowItWorks.css";

const HowItWorks = () => {
  return (
    <div className="how-work-container">
      <h1>How It Works</h1>
      <div>
        <div class="how-work max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <div className="numberContainer">
            <p>01</p>
          </div>
          <h1 className="text-3xl font-semibold my-3">You Apply</h1>
          <p>
            As your broker, we will complete an application with you. This
            process can be done as quickly as 15- minutes on the phone or
            online. We take the time to get to know you and your needs.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
