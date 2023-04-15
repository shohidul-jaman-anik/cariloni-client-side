import React, { useEffect, useState } from "react";
import "./ServicesList.css";
import { useNavigate } from "react-router-dom";

const ServicesList = () => {
  const [services, setServices] = useState([]);
  const navigate = useNavigate("");


  useEffect(() => {
    fetch("Services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  const handleServiceDetails = (id) => {
    console.log(id, "iddddddddddddd");
    navigate(`/serviceDetails/${id}`)
  };

  return (
    <div className="servicesContainer">
      <h1 className="serviceHeading">Penticton Mortgage Services</h1>
      <p className="serviceDescription">
        Our brokers work with banks, credit unions, online lenders, private
        companies <br /> and many others to find the mortgage that is best for
        YOU.
      </p>
      <div className="servicesList">
        {services.map((service) => (
          <div
            className="servicesCard rounded overflow-hidden shadow-lg"
            onClick={() => handleServiceDetails(service.id)}
          >
            <img className="w-full" src={service.img} alt="Mountain" />
            <img
              src={service.logo}
              alt="services logo"
              className="mt-[-30px] ml-5"
            ></img>
            <div className="serviceIntro px-6 py-6">
              <div className=" mb-2 ">{service.name}</div>
              <p className="">{service.description.substring(0, 150)}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesList;
