import React from "react";
import "./SignUp.css"


const SignUp = () => {
  return (
    <div className="signUpContainer">
      <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto flex flex-wrap items-center">
          <div class="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
            <h1 class="title-font font-medium text-6xl text-white">
            Carloni Report <p className="text-yellow-300">Sign Up</p>
            </h1> 
            <p class="leading-relaxed mt-4 text-white">
              Find out what is happening with mortgage rates, the housing market
              in Penticton, and exclusive deals we’ve funded. You’ll quickly
              find out why we’re the Southern Interior’s premier brokerage.
            </p>
            <p class="leading-relaxed mt-4 text-white">
              Note: These emails will not be too frequent, and we promise not to
              spam you. Plus, you can unsubscribe anytime.
            </p>
          </div>
          <div class="lg:w-2/6 md:w-1/2  rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
            
            <div class="relative mb-4">
              <label for="full-name" class="leading-7 text-sm  text-white">
                First Name
              </label>
              <input
                type="text"
                id="full-name"
                name="full-name"
                class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div class="relative mb-4">
              <label for="full-name" class="leading-7 text-sm  text-white">
                Last Name
              </label>
              <input
                type="text"
                id="full-name"
                name="full-name"
                class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div class="relative mb-4">
              <label for="email" class="leading-7 text-sm  text-white">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <button class=" bg-yellow-300 font-bold border-0 py-2 px-8 focus:outline-none  rounded text-lg">
              Submit
            </button>
            {/* <p class="text-xs text-gray-500 mt-3">
              Literally you probably haven't heard of them jean shorts.
            </p> */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default SignUp;
