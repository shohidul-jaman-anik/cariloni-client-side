import React, { useRef, useState } from "react";
// import ReCAPTCHA from "react-google-recaptcha";
import "./SignUp.css";
import emailjs from "@emailjs/browser";
import "react-toastify/dist/ReactToastify.css";

const SignUp = () => {
  // const [agree, setAgree] = useState(false)
  // const firstNameRef = useRef('')
  // const lastNameRef = useRef('')
  // const emailRef = useRef('')
  // const messageRef = useRef('')
  const [successMgs, setSuccessMgs] = useState("");
  const [errorMgs, setErrorMgs] = useState("");

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_vdjd2yq",
        "template_jw7ropi",
        form.current,
        "bJnVC09FS_Vnt0ijq"
      )
      .then(
        (result) => {
          setSuccessMgs("Email sent successfully");
        },
        (error) => {
          setErrorMgs(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <div className="signUpContainer">
      <section className="text-gray-600 body-font">
        <div className="reportSection container py-24">
          <div className="contactSideContent lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
            <h1 className="title-font font-medium text-6xl text-white">
              Carloni Report <p className="text-yellow-300">Sign Up</p>
            </h1>
            <p className="leading-relaxed mt-4 text-white">
              Find out what is happening with mortgage rates, the housing market
              in Penticton, and exclusive deals we’ve funded. You’ll quickly
              find out why we’re the Southern Interior’s premier brokerage.
            </p>

            <div className="contactHr">
              <hr></hr>
            </div>

            <p className="leading-relaxed mt-4 text-white">
              Note: These emails will not be too frequent, and we promise not to
              spam you. Plus, you can unsubscribe anytime.
            </p>
          </div>
          <form
            ref={form}
            onSubmit={sendEmail}
            className="contactForm lg:w-2/6 md:w-1/2  rounded-lg  flex flex-col md:ml-auto w-full mt-10 md:mt-0"
          >
            <div className="relative mb-4">
              <p>
                <label
                  for="full-name"
                  className="leading-7 text-sm  text-white"
                >
                  First Name
                </label>
              </p>
              <input
                type="text"
                id="full-name"
                name="client-first-name"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                required
                // ref={firstNameRef}
              />
            </div>
            <div className="relative mb-4">
              <p>
                <label
                  for="full-name"
                  className="leading-7 text-sm  text-white"
                >
                  Last Name
                </label>
              </p>
              <input
                type="text"
                id="full-name"
                name="last-name"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                // ref={lastNameRef}
              />
            </div>
            <div className="relative mb-4">
              <p>
                <label for="email" className="leading-7 text-sm  text-white">
                  Email
                </label>
              </p>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                // ref={emailRef}
                required
              />
            </div>

            {/* <ReCAPTCHA
              sitekey="6Lex9mglAAAAAJy2yzNKM5R9J1Hb4P35echLnduv"
              onChange={onChange}
            /> */}

            <input
              type="submit"
              value="Submit"
              className=" bg-yellow-300 font-bold border-0 py-2 px-8 focus:outline-none  rounded text-lg"
            ></input>

            <span className="text-green-400 mb-2">{successMgs}</span>
            <span className="text-red-400 mb-2">{errorMgs}</span>
          </form>
        </div>
      </section>
    </div>
  );
};

export default SignUp;
