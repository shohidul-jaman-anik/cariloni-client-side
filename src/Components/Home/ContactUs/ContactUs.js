import React from "react";
import "./ContactUs.css";
import call from "../../../Asset/Page1/call.png";
import gmail from "../../../Asset/Page1/gmail.png";
import location from "../../../Asset/Page1/location.png";

const ContactUs = () => {
  return (
    <div className="contactContainer flex justify-evenly items-center">
      <div className="contactInfo ">
        <h1 className="contactUnderline ">Contact Us</h1>
        <p>
          Duis aute irure dolor in <br /> reprehenderit in voluptate velit{" "}
        </p>

        <div className="text-right text-slate-700 my-8 flex justify-end items-center">
          <div>
            <h3 className="font-bold text-lg">Phone</h3>
            <p>(250)493-9111</p>
          </div>
          <img className="ms-3" src={call} alt="call"></img>
        </div>
        <div className="text-right text-slate-700 my-8 flex justify-end items-center">
          <div>
            <h3 className="font-bold text-lg">Email</h3>
            <p>hello@carlonimortgages.com</p>
          </div>
          <img className="ms-3" src={gmail} alt="gmail"></img>
        </div>
        <div className="text-right text-slate-700 my-8 flex justify-end items-center">
          <div>
            <h3 className="font-bold text-lg">Address</h3>
            <p>366 Main St, Penticton, BC</p>
          </div>
          <img className="ms-3" src={location} alt="location"></img>
        </div>
      </div>
      <div>
        <iframe
          className="w-full googlemap"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1826.6082991801002!2d90.44616633637685!3d23.703957977537105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa73f7f2ef1d0fd13%3A0x9599fa88ba48d2bb!2sPixelean%20-%20Ui%20UX%20Design%20Agency!5e0!3m2!1sen!2sbd!4v1680428469495!5m2!1sen!2sbd"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          title="pixelean"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactUs;
