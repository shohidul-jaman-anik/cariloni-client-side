import React from "react";
import "./WhyWorkUs.css";
import img1 from "../../../Asset/Page1/Vector.png";
import img2 from "../../../Asset/Page1/Vector-3.png";
import img3 from "../../../Asset/Page1/Vector-1.png";
import img4 from "../../../Asset/Page1/Vector-4.png";
import img5 from "../../../Asset/Page1/Vector-2.png";

const WhyWorkUS = () => {
  const whyWorkWithUS = [
    {
      _id: 2,
      name: "Rates",
      description:
        "Massive Lender network of banks, credit unions, online lenders and private money ensures that you get the lowest rate possible.",
      img: img1,
    },
    {
      _id: 3,
      name: "Experience",
      description:
        "Two Decades of lending & real estate experience. Great relationships with local real estate agents and professionals.",
      img: img2,
    },

    {
      _id: 4,
      name: "Speed",
      description:
        "You want your mortgage approval quickly. Get answers within 15 minutes on the phone with one of our experienced mortgage brokers.",
      img: img4,
    },
    {
      _id: 5,
      name: "knowledge",
      description:
        "The mortgage world is constantly changing, and we're on top of it. We have first hand experience of our own with both residential and commercial properties, development, renovations, construction and investments.",
      img: img3,
    },
    {
      _id: 6,
      name: "Team",
      description:
        "You've got the whole Carloni Mortgage team working for you. When you or your Realtor wants someone to talk to you'll find peace of kind that one of our brokers is always available. Better yet, you can pop by our Main Street Penticton office anytime!",
      img: img5,
    },
  ];
  return (
    <div className="workUsContainer">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="card ">
          <div className="card-body">
            <h2 className="font-bold text-slate-700 text-4xl ">
              Why Work with <span className="underlineArrow">Carloni Mortgage</span> Brokers?
            </h2>
            <p>
              Our brokers work with banks, credit unions, online lenders,
              private companies and many others to find the mortgage that is
              best for YOU.
            </p>
          </div>
        </div>

        {whyWorkWithUS.map((service) => (
          <div className="card bg-base-100 shadow-xl">
            <img
              src={service.img}
              alt="services name"
              className=" h-14 w-12 ms-9 mt-10"
            />
            <div className="card-body">
              <h2 className="card-title text-slate-700">{service.name}</h2>
              <p>{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyWorkUS;
