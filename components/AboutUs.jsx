import Link from "next/link";
import React from "react";
import { GoQuote } from "react-icons/go";

const AboutUs = () => {
  return (
    <div className="p-5 md:px-10 lg:py-28 lg:px-28 2xl:px-32 w-full">
      <div className="flex flex-col lg:flex-row lg:justify-between relative">
        <img
          src="/lorient-1.png"
          className="object-cover w-full lg:w-1/4 h-96 my-4 lg:my-0"
        />
        <div className="order-first flex flex-grow flex-col just ify-center mx-auto text-center z-10 my-10 lg:my-0 lg:absolute top-20 right-0 left-0">
          <h3
            className="text-2xl 2xl:text-3xl mb-4 uppercase font-light tracking-wider  "
            style={{ color: "#C78F6D" }}
          >
            About Us
          </h3>
          <p className="text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl w-full mx-auto  font-normal">
            Relaxing, Revitalizing &amp; Refreshing
          </p>
          <p className="text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl lg:mt-4 lg:w-1/2 mx-auto font-normal">
            The Best In Los Angeles
          </p>
          <Link href="/services">
            <button className="mt-5 text-lg 2xl:text-3xl font-thin">
              Learn More
            </button>
          </Link>
        </div>
        <img
          src="/lorient-2.png"
          className="object-cover w-full lg:w-72 lg:h-72 my-4 lg:my-0"
        />
      </div>
      <div className="hidden lg:flex flex-col justify-evenly lg:flex-row lg:justify-between relative mt-20 w-full ">
        <img
          src="/lorient-3.png"
          className="w-full my-4 lg:my-0 lg:w-1/4 lg:h-64 2xl:h-80 object-cover"
        />
        <img
          src="/lorient-4.png"
          className="w-full my-4 lg:my-0 lg:w-1/3 lg:h-96 object-cover"
        />
        <img
          src="/lorient-6.png"
          className="w-full my-4 lg:my-0 lg:w-1/4 lg:h-72 object-cover lg:relative -top-12 right-0"
        />
      </div>
    </div>
  );
};

export default AboutUs;
