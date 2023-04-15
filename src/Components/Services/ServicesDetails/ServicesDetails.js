import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CommonBanner from "../../Share/CommonBanner/CommonBanner";
import detailsImg from "../../../Asset/Details/home.png";
import callVector from "../../../Asset/Page1/callVector.png";
import "./ServicesDetails.css";
import { FaPhone} from "react-icons/fa";


const ServicesDetails = () => {
  const [data, setData] = useState([]);
  const { id } = useParams();
  console.log("services id", id);

  useEffect(() => {
    fetch("/Services.json")
      .then((response) => response.json())
      .then((service) => {
        const newData = service.find((s) => s.id == id);
        setData(newData);
      });
  }, [id]);

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div className="">
      <CommonBanner></CommonBanner>

      <div className="ServiceDetailsSection">
      
        <div className="DetailsHeading">
          <h1><span className="underlineArrow">{data?.name}</span></h1>
          <p>
            Our brokers work with banks, credit unions, online lenders, private
            companies <br /> and many others to find the mortgage that is best
            for YOU.
          </p>
        </div>
        <div className="detailsContent">
          <div className="detailsImgSection ">
            <img src={data.img} className="detailsImg" alt=""></img>
          </div>
          <div className="detailsTinyBox">
          
          </div>
          <h1 className="header">{data?.header}</h1>
          <p>
          {data?.description}
          </p>
          <p>Provide access to a variety of home buyer programs (individuals, couples, families, self-employed persons,)</p>
          <p>Provide access to lower unadvertised mortgage rates</p>
          <p>Provide access to private mortgage options</p>

          <div className="subDetails">
            <h3>
              Get Started on the Home Buying Process with a Simple Phone Call
            </h3>
            <button className="bg-blue-950 btn px-10  btn-outline btn-white border-white hover:bg-white hover:text-gray-900 text-white">
            <FaPhone className="mr-3 rotate-90"></FaPhone> Call Now 250-493-9111
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesDetails;
