import React, { useState } from "react";
import "./Testimonial.css";
import quotaion from "../../../Asset/Page1/quotation.png";
import rightArrow from "../../../Asset/Page1/Stroke-1 (1).png"
import leftArrow from "../../../Asset/Page1/Stroke-1.png"


const Testimonial = () => {
  const people = [
    {
      name: "Adam Negan",
      role: "⭐⭐⭐⭐⭐",
      picture:
        "https://fancytailwind.com/static/profile13-9abe52b1e8851f9e4afde349f2789d3e.jpg",
      testimony:
        "Rene is very professional, friendly, and easy to talk too. This was our first mortgage and he made sure we understood all the information, plus he got us the best rates. I have recommended a few of my friends to him now and they are over the moon with the deals he did for them. Great guy and I will continue to tell my friends to go with his company.",
    },
    {
      name: "Shanon Brown",
      role: "⭐⭐⭐⭐⭐",
      picture:
        "https://fancytailwind.com/static/profile16-3468a6740e58a45b951142454acb94d0.jpg",
      testimony:
        "Carloni is very professional, hard-worker, and easy to talk too. This was our first mortgage and he made sure we understood all the information, plus he got us the best rates. I have recommended a few of my friends to him now and they are over the moon with the deals he did for them. Great guy and I will continue to tell my friends to go with his company.",
    },
  ];
  const [current, setCurrent] = useState(0);
  const previousTestimony = () =>
    current > 0 ? setCurrent(current - 1) : setCurrent(people.length - 1);
  const nextTestimony = () =>
    current < people.length - 1 ? setCurrent(current + 1) : setCurrent(0);

  return (
    <div className="testimonialContainer mb-16">
      <div className="mx-auto w-full max-w-7xl bg-gray-50">
        <div className="relative mx-auto w-full h-full max-w-7xl flex shadow-xl mb-[-170px]">
          {/* :PICTURE CONTAINER */}
          <div className="absolute md:relative w-full  min-h-full rounded-r overflow-hidden bg-gray-700">
            <img
              src={people[current].picture}
              alt=""
              className="absolute top-0 left-0  h-full object-cover filter grayscale brightness-125"
            />
          </div>

          {/* :TESTIMONY CONTAINER */}
          <div className="contentTestimonial z-10 relative py-14 px-12   w-full  min-h-360px rounded md:rounded-r-none  bg-opacity-70 md:bg-opacity-100 text-white">
            <div className=" mx-10 max-w-md flex flex-col">
              <h1 className="text-white text-4xl font-bold ">
                Happy <span className="underlineArrow"> customers </span> <br/> Say about us
              </h1>

              {/* ::Quote SVG */}
              <div className="flex-shrink-0">
                {/* <svg
                  className="w-10 lg:w-12 h-10 lg:h-12 my-8"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg> */}
                <img src={quotaion} alt="" className="my-10 quotaionImg"></img>

                
              </div>
              {/* ::Testimony */}
              <p className="text-xl sm:text-1xl lg:text-2xl leading-normal">
                {people[current].testimony}
              </p>
              {/* ::Name */}
              <h3 className="mt-5 text-lg text-base font-semibold">
                {people[current].name}
              </h3>
              {/* ::Role */}
              <p className="text-sm">{people[current].role}</p>
            </div>
          </div>

          {/* :BUTTONS */}
          <div className="arrowButton z-10 absolute bottom-11  right-1/2 md:-right-3 py-1 px-3 space-x-3 flex text-yellow-100 transform translate-x-1/2 md:translate-x-0 mr-16">
            <img
            src={rightArrow}
              type="button"
              aria-label="previous"
              className="flex-shrink-0 hover:text-white"
              onClick={previousTestimony}
            >
              {/* <ArrowNarrowLeftIcon className="w-8" /> */} 
            </img>
            <img
            src={leftArrow}
              type="button"
              aria-label="next"
              className="flex-shrink-0 hover:text-white"
              onClick={nextTestimony}
            >
              {/* <ArrowNarrowRightIcon className="w-8" /> */} 
            </img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
