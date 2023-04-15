import React from "react";
import ShareButton from "../../Share/ShareButton/ShareButton";
import "./Services.css";
import img1 from "../../../Asset/Page1/Vector (1f).svg";
import img2 from "../../../Asset/Page1/Vector (1).svg";
import img3 from "../../../Asset/Page1/Vector (2).svg";
import img4 from "../../../Asset/Page1/Vector (3).svg";
import img5 from "../../../Asset/Page1/Vector (4).svg";
import img6 from "../../../Asset/Page1/Vector (5).svg";

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
        <h3 className="serviceTitle ">
          <span></span> Penticton Morgage Service
        </h3>
        <p className="serviceSubTitile">
          Our brokers work with banks,credit unicns,online lenders,private{" "}
          <br />
          companies and many others to find the mortgage that is best for YOU.
        </p>
      </div>
      <div className="servicesSection ">
        {services.map((service) => (
          <div className="serviceCards  bg-base-100 shadow-lg hover:shadow-2xl ">
            <div className="">
              <img
                src={service.img}
                alt="services name"
                className="rounded-xl serviceIcon "
              />
            </div>
            <div className="serviceDescription">
              <h2 className=" text-start text-gray-700 font-bold">
                {service.name}
              </h2>
              <p>{service.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className=" tesitmonialBtn !mt-8">
        <button className=" btn ">See More</button>
      </div>
    </div>
  );
};

export default Services;
