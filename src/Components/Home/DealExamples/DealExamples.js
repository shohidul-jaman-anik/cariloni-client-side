import React from "react";
import image from "../../../Asset/Page1/Rectangle65.png";
import "./DealExamples.css";

const DealExamples = () => {
  return (
    <div>
        <h1 className="dealHeading">Deal <span className="underlineArrow">Examples</span> </h1>
      <div className="dealContainer">
        <div className="dealExampleSection">
          <div className="ExampleDetails">
            <h1>Penticton Real Estate News | July 2022</h1>
            <p>
              Penticton Real Estate News | July 2022 For the first time in 3
              years, summer (as we have always known it) is in full swing in
              Penticton BC. The Peach…
            </p>
            <button className="btn btn-outline mt-5 ">Read More...</button>
          </div>
          <div className="ExampleDetails">
            <h1>Penticton Real Estate News | July 2022</h1>
            <p>
              Penticton Real Estate News | July 2022 For the first time in 3
              years, summer (as we have always known it) is in full swing in
              Penticton BC. The Peach…
            </p>
            <button className="btn btn-outline mt-5">Read More...</button>
          </div>
          <div className="ExampleDetails">
            <h1>Penticton Real Estate News | July 2022</h1>
            <p>
              Penticton Real Estate News | July 2022 For the first time in 3
              years, summer (as we have always known it) is in full swing in
              Penticton BC. The Peach…
            </p>
            <button className="btn btn-outline mt-5">Read More...</button>
          </div>
          <div className="ExampleDetails">
            <h1>Penticton Real Estate News | July 2022</h1>
            <p>
              Penticton Real Estate News | July 2022 For the first time in 3
              years, summer (as we have always known it) is in full swing in
              Penticton BC. The Peach…
            </p>
            <button className="btn btn-outline mt-5" mt-5>
              Read More...
            </button>
          </div>
        </div>
        <div className="ExampleImage">
          <img src={image} alt="Example side img" className="mt-[83px] ml-[-83px]"></img>
        </div>
      </div>
    </div>
  );
};

export default DealExamples;
