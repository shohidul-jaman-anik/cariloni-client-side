import React from "react";

const WhyWorkUS = () => {
  const whyWorkWithUS = [
    {
      _id: 1,
      name: "Why Work with  Carloni Mortgage Brokers?",
      description:
        "Our brokers work with banks, credit unions, online lenders, private companies and many others to find the mortgage that is best for YOU.",
      //   img: surgery,
    },
    {
      _id: 2,
      name: "Rates",
      description:
        "Massive Lender network of banks, credit unions, online lenders and private money ensures that you get the lowest rate possible.",
      //   img: medicine,
    },
    {
      _id: 3,
      name: "Experience",
      description:
        "Two Decades of lending & real estate experience. Great relationships with local real estate agents and professionals.",
      //   img: Phiseotherapy,
    },

    {
      _id: 4,
      name: "Speed",
      description:
        "You want your mortgage approval quickly. Get answers within 15 minutes on the phone with one of our experienced mortgage brokers.",
      //   img: pregnent,
    },
    {
      _id: 5,
      name: "knowledge",
      description:
        "The mortgage world is constantly changing, and we're on top of it. We have first hand experience of our own with both residential and commercial properties, development, renovations, construction and investments.",
      //   img: urology,
    },
    {
      _id: 6,
      name: "Team",
      description:
        "You've got the whole Carloni Mortgage team working for you. When you or your Realtor wants someone to talk to you'll find peace of kind that one of our brokers is always available. Better yet, you can pop by our Main Street Penticton office anytime!",
      //   img: dental,
    },
  ];
  return (
    <div className="p-64">
     
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {whyWorkWithUS.map((service) => (
          <div className="card bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
              <img
                src={service.img}
                alt="services name"
                className="rounded-xl h-32 w-28"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-slate-700">{service.name}</h2>
              <p>{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyWorkUS;
