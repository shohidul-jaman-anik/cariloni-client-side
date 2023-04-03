import React, { useEffect, useState } from "react";
import ShareButton from "../Share/ShareButton/ShareButton";

const Testimonials = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("Testimonials.json")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  return (
    <section class="text-gray-600 body-font servicesContainer">
     <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {reviews.map((review) => (
          <div className="card bg-base-100 shadow-xl">
            <div className="pt-10 ps-10">
              {/* <img
                src={review.img}
                alt="reviews name"
                className="rounded-xl h-16 w-16 "
              /> */}
            </div>
            <div className="card-body">
              <h2 className="card-title text-gray-700">{review.name}</h2>
              <p>{review.review}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center my-10">
        <ShareButton className="">See More</ShareButton>
      </div>
    </section>
  );
};

export default Testimonials;
