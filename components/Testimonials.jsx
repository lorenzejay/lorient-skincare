import React from "react";
import { GoQuote } from "react-icons/go";

const Testimonials = () => {
  return (
    <div className="p-5 md:px-10 pb-20 lg:py-32 lg:pt-16 lg:px-28 2xl:px-32 ">
      <div className="pt-10 lg:pt-20 mb-20">
        <h3
          className="uppercase text-2xl tracking-wide"
          style={{ color: "#EBA47A" }}
        >
          Testimonials
        </h3>
        <p className="text-xl lg:text-4xl 2xl:text-5xl lg:w-1/2 xl:w-1/3 font-semibold leading-relaxed">
          What Our Customers Say About Lorient
        </p>
      </div>
      <div className="flex flex-col lg:flex-row justify-between relative">
        <div className="lg:w-1/2 relative">
          <div className="relative">
            <img
              src="/testimonial1.JPEG"
              className="object-cover w-full h-96"
            />
            <div
              className="p-6 absolute right-6 -bottom-6 text-red-300 z-2"
              style={{ background: "#C78F6D" }}
            >
              <GoQuote className="text-white" />
            </div>
          </div>
          <h4 className="font-bold text-2xl my-4">Jessica Ramos</h4>
          <p>
            L'ORIENT gives the best facials. She really takes the time to
            understand my skin so she can tailor my treatments to what works
            best for me. I always worry that facials will break out my acne
            prone skin but I always leave clear and glowing
          </p>
        </div>
        <div className="lg:w-1/2 lg:absolute lg:pl-10 right-0 -top-48 mt-10 lg:mt-0">
          <div className="relative">
            <img
              src="/testimonial3.jpg"
              className="object-cover w-full object-center h-96"
            />
            <div
              className="p-6 absolute right-6 -bottom-6 text-red-300 z-2"
              style={{ background: "#C78F6D" }}
            >
              <GoQuote className="text-white" />
            </div>
          </div>
          <h4 className="font-bold text-2xl my-4">Kristina Ramos</h4>
          <p>
            I love getting facials from L'ORIENT. Not only do her facials leave
            my skin feeling fresh and hydrated, but she provides a calm,
            relaxing experience that puts me at ease and soothes both my mind
            and body.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
