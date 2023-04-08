import React from "react";
import CommonBanner from "../Share/CommonBanner/CommonBanner";
import "./Contact.css";
import carloni from "../../Asset/Contact/Carloni.png";
import call from "../../Asset/Contact/call.png";
import gmail from "../../Asset/Contact/gmail.png";
import location from "../../Asset/Contact/location.png";

const Contact = () => {
  return (
    <div>
      <CommonBanner></CommonBanner>

      <div className="contectSection">
        <div className="contactInformation">
          <h1>Don’t hasitate to </h1>
          <h1>contact us</h1>
          <div className="mt-16">
            <div className="flex justify-start items-center mt-5">
              <img src={call} alt=""></img>
              <h1 className="text-white ms-4 text-3xl">(250)493-9111</h1>
            </div>
            <div className="flex justify-start items-center mt-5">
              <img src={gmail} alt=""></img>
              <h1 className="text-white ms-4 text-3xl">
                hello@carlonimortgages.com
              </h1>
            </div>
            <div className="flex justify-start items-center mt-5">
              <img src={location} alt=""></img>
              <h1 className="text-white ms-4 text-3xl">
                366 Main St, Penticton, BC
              </h1>
            </div>
          </div>

          <img src={carloni} className="crloniImg" alt="carloni"></img>
        </div>
      
        <div>
            <h1 className="text-3xl text-slate-700 font-semibold mt-16 mapHeading">  Find us on map</h1>
          <iframe
            className="contactMap  mx-auto mb-16 mt-5"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1826.6082991801002!2d90.44616633637685!3d23.703957977537105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa73f7f2ef1d0fd13%3A0x9599fa88ba48d2bb!2sPixelean%20-%20Ui%20UX%20Design%20Agency!5e0!3m2!1sen!2sbd!4v1680428469495!5m2!1sen!2sbd"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="pixelean"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
