import React from "react";
import "./ContactUs.css"


const ContactUs = () => {
  return (
    <div className="contactContainer grid grid-cols-2 ">
      <div className="contactInfo ">
        <h1>Contact Us</h1>
        <p>Duis aute irure dolor in <br/> reprehenderit in voluptate velit </p>
        <div className="text-right text-slate-700 my-8">
            <h3 className="font-bold text-lg">Phone</h3>
            <p>(250)493-9111</p>
        </div>
        <div className="text-right text-slate-700 my-8">
            <h3 className="font-bold text-lg">Email</h3>
            <p>hello@carlonimortgages.com</p>
        </div>
        <div className="text-right text-slate-700 my-8">
            <h3 className="font-bold text-lg">Address</h3>
            <p>366 Main St, Penticton, BC</p>
        </div>
      </div>
      <div>
        <iframe
        className="w-full"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1826.6082991801002!2d90.44616633637685!3d23.703957977537105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa73f7f2ef1d0fd13%3A0x9599fa88ba48d2bb!2sPixelean%20-%20Ui%20UX%20Design%20Agency!5e0!3m2!1sen!2sbd!4v1680428469495!5m2!1sen!2sbd"
          width="600"
          height="450"
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
