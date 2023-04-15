import React from "react";
import image from "../../../Asset/AboutPage/team.png";
import "./BrokersTeam.css"


const BrokersTeam = () => {
  return (
    <div className="teamContainer gap-x-10">
      <div className="teamDetails">
        <h1 className="font-bold text-4xl">
          About The <span className="underlineArrow ">Carloni Mortgage</span> Brokers Team
        </h1>
        <h3 className="mt-5">Amanda Quigley – Assistant</h3>
        <p className="mt-5">
          Amanda was born and raised in the Okanagan and has over five years’
          experience in financial office management. Amanda attained a Diploma
          in Criminal and Social Justice with distinction from Okanagan College,
          and is currently enrolled in a Bachelor’s of Professional Arts program
          with a major in criminology.
        </p>
        <p className="my-5">
          After completing her degree, she plans to head off to law school to
          study to become a lawyer. When she’s away from our Main Street
          Penticton office, Amanda can be found lounging at the beach or hiking
          up a mountain, enjoying all that the Okanagan has to offer!
        </p>
      </div>
      <div className="">
        <img src={image} className="teamImage" alt="Example side img"></img>
      </div>
    </div>
  );
};

export default BrokersTeam;
