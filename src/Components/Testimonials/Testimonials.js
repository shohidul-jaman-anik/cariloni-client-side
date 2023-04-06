import React, { useEffect, useState } from "react";
import mgs from "../../Asset/tesimonial/mgs.png";
import "./Testimonials.css";

const Testimonials = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("Testimonials.json")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  return (
    <div className="reviewContainer">
    <div className="reviewSection">
      {reviews.map((review) => (
        <div >
          <div className="border p-3">
            <img src={mgs} alt="reviews" className=" h-16 w-16 " />
            <p>{review.review}</p>
            <h2 className="mt-7 font-bold text-gray-800">{review.name}</h2>
            <h2 className="">{review.ratings}</h2>
          </div>
        </div>
      ))}
</div>

      <div className="text-center mt-16 tesitmonialBtn">
        <button className="btn bg-sky-900 ">Load More</button>
      </div>
    </div>
  );
};

export default Testimonials;
