import React from "react";
import image from "../../../Asset/AboutPage/team.png";

const BrokersTeam = () => {
  return (
    <div className="dealContainer gap-x-10">
      <div className="flex-1 carloniContent">
        <h1 className="font-bold text-4xl">
          About The<span className="underlineArrow ">Carloni Mortgage</span>
          <p className="mt-2">Brokers Team</p>
        </h1>
        <p className="mt-5 font-bold text-xl ">Amanda Quigley – Assistant</p>
        <p className="mt-5">
          Amanda was born and raised in the Okanagan and has over five years’
          experience in financial office management. Amanda attained a Diploma
          in Criminal and Social Justice with distinction from Okanagan College,
          and is currently enrolled in a Bachelor’s of Professional Arts program
          with a major in criminology.
        </p>
        <p className="mt-5">
          After completing her degree, she plans to head off to law school to
          study to become a lawyer. When she’s away from our Main Street
          Penticton office, Amanda can be found lounging at the beach or hiking
          up a mountain, enjoying all that the Okanagan has to offer!
        </p>
      </div>
      <div className="ExampleImage">
        <img src={image} alt="Example side img" className="mt-[70px]"></img>
      </div>
    </div>
  );
};

export default BrokersTeam;
