import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ServicesDetails = () => {
  const [data, setData] = useState([]);
  const { id } = useParams("");
  console.log("services id", id);

  useEffect(() => {
    fetch("/Services.json")
      .then((response) => response.json())
      .then((service) => {
        const newData = service.find((s) => s.id === id);
        setData(newData);
      });
  }, [id]);

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className="serviceDetailsComponent">
        <h3 className="text-white text-3xl">ABOUT US</h3>
        <h1 className="text-white text-6xl my-8 font-semibold">
          Mortgage <span className="highliteText">NEWS </span>and Helpful
        </h1>
        <h1 className="text-white text-6xl my-8 font-semibold">
          Tips for Home <span className="highliteText">BUYERS</span>
        </h1>
      </div>

      <div></div>
    </div>
  );
};

export default ServicesDetails;
