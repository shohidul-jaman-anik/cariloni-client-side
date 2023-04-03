import React from "react";
import ShareButton from "../../Share/ShareButton/ShareButton";
import "./Services.css";
import img1 from "../../../Asset/Page1/Vector-7.png";
import img2 from "../../../Asset/Page1/Vector-8.png";
import img3 from "../../../Asset/Page1/Vector-9.png";
import img4 from "../../../Asset/Page1/Vector-12.png";
import img5 from "../../../Asset/Page1/Vector-10.png";
import img6 from "../../../Asset/Page1/Vector-11.png";

const Services = () => {
  const services = [
    {
      _id: 1,
      name: "Pre-Approval",
      description:
        "Frist Time homne buyer programs for as little as 5% downpayment, and much more Pre-quality and shop whith confidence",
      img: img1,
    },
    {
      _id: 2,
      name: "Purchases",
      description:
        "Frist Time homne buyer programs for as little as 5% downpayment, and much more Pre-quality and shop whith confidence.",
      img: img2,
    },
    {
      _id: 3,
      name: "Refinnances & Equity Loans",
      description:
        "Frist Time homne buyer programs for as little as 5% downpayment, and much more Pre-quality and shop whith confidence",
      img: img3,
    },
    {
      _id: 4,
      name: "Self-Employed",
      description:
        "Frist Time homne buyer programs for as little as 5% downpayment, and much more Pre-quality and shop whith confidence",
      img: img4,
    },
    {
      _id: 5,
      name: "Renewals",
      description:
        "Frist Time homne buyer programs for as little as 5% downpayment, and much more Pre-quality and shop whith confidence",
      img: img5,
    },
    {
      _id: 6,
      name: "Private Mortgages",
      description:
        "Frist Time homne buyer programs for as little as 5% downpayment, and much more Pre-quality and shop whith confidence",
      img: img6,
    },
  ];
  return (
    <div className="servicesContainer">
      <div className="text-center my-10">
        <h3 className="text-slate-800 font-bold text-5xl ">
          Penticton Morgage Service
        </h3>
        <h1 className="text-2xl text-slate-600 mt-4">
          Our brokers work with banks,credit unicns,online lenders,private{" "}
          <br />
          companies and many others to find the mortgage that is best for YOU.
        </h1>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {services.map((service) => (
          <div className="card bg-base-100 shadow-xl">
            <div className="pt-10 ps-10">
              <img
                src={service.img}
                alt="services name"
                className="rounded-xl h-16 w-16 "
              />
            </div>
            <div className="card-body">
              <h2 className="card-title text-gray-700">{service.name}</h2>
              <p>{service.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center my-10">
        <ShareButton className="">See More</ShareButton>
      </div>
    </div>
  );
};

export default Services;
