import React, { useEffect, useState } from "react";
import mgs from "../../Asset/tesimonial/mgs.png";
import "./Testimonials.css";

const Testimonials = () => {
  // const [reviews, setReviews] = useState([]);

  // useEffect(() => {
  //   fetch("Testimonials.json")
  //     .then((res) => res.json())
  //     .then((data) => setReviews(data));
  // }, []);

  return (
    // <div className="reviewContainer">
    //   <div className="reviewSection">
    //     {reviews.map((review) => (
    //       <div >
    //         <div className="border p-3">
    //           <img src={mgs} alt="reviews" className=" h-16 w-16 " />
    //           <p>{review.review}</p>
    //           <h2 className="mt-7 font-bold text-gray-800">{review.name}</h2>
    //           <h2 className="">{review.ratings}</h2>
    //         </div>
    //       </div>
    //     ))}
    //   </div>

    //   <div className="text-center mt-16 tesitmonialBtn">
    //     <button className="btn bg-sky-900 ">Load More</button>
    //   </div>
    // </div>

    <div className="reviewContainer">
      <div className="reviewSection">
        <div className="firstColumn">
          <div className="border p-3">
            <img src={mgs} alt="reviews" className=" h-16 w-16 " />
            <p>
              Rene is very professional, friendly, and easy to talk too. This
              was our first mortgage and he made sure we understood all the
              information, plus he got us the best rates. I have recommended a
              few of my friends to him now and they are over the moon with the
              deals he did for them. Great guy and I will continue to tell my
              friends to go with his company.
            </p>
            <h2 className="mt-7 font-bold text-gray-800">Tracy R.</h2>
            <h2 className="">⭐⭐⭐⭐⭐</h2>
          </div>
          <div className="border p-3">
            <img src={mgs} alt="reviews" className=" h-16 w-16 " />
            <p>
              Rene was professional, courteous and extremely knowledgeable, I
              would recommend for your mortgage needs.
            </p>
            <h2 className="mt-7 font-bold text-gray-800">Pre-Approval</h2>
            <h2 className="">⭐⭐⭐⭐⭐</h2>
          </div>
          <div className="border p-3">
            <img src={mgs} alt="reviews" className=" h-16 w-16 " />
            <p>
              "Rene was professional, courteous and extremely knowledgeable, I
              would recommend for your mortgage needs."
            </p>
            <h2 className="mt-7 font-bold text-gray-800">Tracy R.</h2>
            <h2 className="">⭐⭐⭐⭐⭐</h2>
          </div>
        </div>

        <div className="firstColumn">
          <div className="border p-3">
            <img src={mgs} alt="reviews" className=" h-16 w-16 " />
            <p>
              "Rene was professional, courteous and extremely knowledgeable, I
              would recommend for your mortgage needs."
            </p>
            <h2 className="mt-7 font-bold text-gray-800">Alex C</h2>
            <h2 className="">⭐⭐⭐⭐⭐</h2>
          </div>
          <div className="border p-3">
            <img src={mgs} alt="reviews" className=" h-16 w-16 " />
            <p>
              Great rates, highly professional and extremely knowledgeable.
              Would recommend to anyone looking for mortgage advice and
              services."
            </p>
            <h2 className="mt-7 font-bold text-gray-800">Brayer B.</h2>
            <h2 className="">⭐⭐⭐⭐⭐</h2>
          </div>
          <div className="border p-3">
            <img src={mgs} alt="reviews" className=" h-16 w-16 " />
            <p>
              "Rene is very professional, friendly, and easy to talk too. This
              was our first mortgage and he made sure we understood all the
              information. I have recommended a few of my friends to him now and
              they are over the moon with the deals he did for them. Great guy
              and I will continue to tell my friends to go with his company."
            </p>
            <h2 className="mt-7 font-bold text-gray-800">Tracy R.</h2>
            <h2 className="">⭐⭐⭐⭐⭐</h2>
          </div>
        </div>

        <div className="firstColumn">
          <div className="border p-3">
            <img src={mgs} alt="reviews" className=" h-16 w-16 " />
            <p>
              Rene is very professional, friendly, and easy to talk too. This
              was our first mortgage and he made sure we understood all the
              information, plus he got us the best rates. I have recommended a
              few of my friends to him now and they are over the moon with the
              deals he did for them. Great guy and I will continue to tell my
              friends to go with his company.
            </p>
            <h2 className="mt-7 font-bold text-gray-800">Alex C</h2>
            <h2 className="">⭐⭐⭐⭐⭐</h2>
          </div>
          <div className="border p-3">
            <img src={mgs} alt="reviews" className=" h-16 w-16 " />
            <p>
              "Rene was professional, courteous and extremely knowledgeable, I
              would recommend for your mortgage needs."
            </p>
            <h2 className="mt-7 font-bold text-gray-800">Brayer B.</h2>
            <h2 className="">⭐⭐⭐⭐⭐</h2>
          </div>
          <div className="border p-3">
            <img src={mgs} alt="reviews" className=" h-16 w-16 " />
            <p>
              Rene was professional, courteous and extremely knowledgeable, I
              would recommend for your mortgage needs.
            </p>
            <h2 className="mt-7 font-bold text-gray-800">Tracy R.</h2>
            <h2 className="">⭐⭐⭐⭐⭐</h2>
          </div>
        </div>
      </div>

      <div className="text-center mt-16 tesitmonialBtn">
        <button className=" btn ">Load More</button>
      </div>
      {/* <div className="secondaryBtn">
          <p>Load More</p>
      </div> */}
    </div>
  );
};

export default Testimonials;
