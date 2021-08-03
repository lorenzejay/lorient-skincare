import Head from "next/head";
import React from "react";
import { FaArrowRight } from "react-icons/fa";
import Layout from "../components/Layout";
import { handleOpenCalendly } from "../functions";

const Services = () => {
  return (
    <Layout isHome={false}>
      <Head>
        <title>SERVICES | L&apos;ORIENT SKINCARE</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/lorientlogo.png" />
      </Head>
      <main className="p-5 pt-32  md:px-10 lg:pt-64 lg:px-28 2xl:px-32 bg-cover mb-10 bg-center  min-h-screen">
        <h1 className="text-4xl lg:text-5xl font-semibold">Services</h1>
        <div className="mt-10 w-full flex flex-col lg:flex-row justify-between relative">
          <img
            src="/lorient-2.png"
            className="lg:w-1/2 object-cover h-96 lg:mr-20"
            alt="service facial for intro pacakge"
          />
          <div className="lg:flex-grow">
            <h3 className="text-4xl mt-5 font-semibold lg:mb-10  lg:text-5xl lg:mt-20">
              Intro Package.
            </h3>
            <p className="text-2xl font-medium lg:border-t lg:text-3xl pt-5">
              $ 75
            </p>
            <p className="mt-2 mb-5 text-lg flex-grow">
              35 min long relaxing facial. Great for the people on the go that
              need a complexion rejuvenation for a short amount of time. Does
              not include extraction.
            </p>
            <button
              className="border border-black px-10 lg:absolute lg:bottom-0 py-2  flex items-center"
              onClick={handleOpenCalendly}
            >
              Book Now{" "}
              <span>
                <FaArrowRight />
              </span>
            </button>
          </div>
        </div>

        <div className="flex flex-col  mt-10 lg:mt-24 lg:flex-row-reverse justify-between relative">
          <img
            src="/lorient-7.png"
            className="lg:w-1/2 object-cover h-96 lg:mr-12"
            alt="service facial for custom pacakge"
          />
          <div className="relative lg:mr-5">
            <h3 className="text-4xl mt-5 font-semibold mb-3 lg:mb-10 lg:relative  lg:text-5xl lg:mt-20">
              Custom Package.
            </h3>
            <p className="text-2xl font-medium lg:border-t lg:text-3xl ">
              $ 95
            </p>
            <p className="mt-2 leading-loose mb-5  flex-grow">
              This treatment is customized to your personal skincare goals and
              has everything included from the intro package.
            </p>
            <button
              className="border border-black px-10 lg:absolute lg:bottom-0 py-2 flex items-center"
              onClick={handleOpenCalendly}
            >
              Book Now{" "}
              <span>
                <FaArrowRight />
              </span>
            </button>
          </div>
        </div>

        <div className="flex flex-col mt-10 lg:mt-24 lg:flex-row justify-between relative">
          <img
            src="/lorient-9.png"
            className="lg:w-1/2 object-cover h-96 lg:mr-20"
            alt="service facial for acne pacakge"
          />
          <div className="lg:flex-grow">
            <h3 className="text-4xl mt-5 font-semibold lg:mb-10  lg:text-5xl lg:mt-20">
              Acne Package.
            </h3>
            <p className="text-2xl font-medium lg:border-t lg:text-3xl pt-5">
              $ 95
            </p>
            <p className="mt-2 mb-5 text-lg flex-grow">
              Acne facials are designed to treat the root cause of acne. It is
              crucial to deep clean the congested pores, especially with
              extraction to speed up the healing process.
            </p>
            <button
              className="border border-black px-10 lg:absolute lg:bottom-0 py-2  flex items-center"
              onClick={handleOpenCalendly}
            >
              Book Now{" "}
              <span>
                <FaArrowRight />
              </span>
            </button>
          </div>
        </div>

        <div className="flex flex-col  mt-10 lg:mt-24 lg:flex-row-reverse justify-between relative">
          <img
            src="/lorient-7.png"
            className="lg:w-1/2 object-cover h-96 lg:mr-12"
            alt="service facial for signature pacakge"
          />
          <div className="relative lg:mr-5">
            <h3 className="text-4xl mt-5 font-semibold mb-3 lg:mb-10 lg:relative  lg:text-5xl lg:mt-20">
              Signature Package.
            </h3>
            <p className="text-2xl font-medium lg:border-t lg:text-3xl ">
              $ 120
            </p>
            <p className="mt-2 leading-loose mb-5 flex-grow">
              L’orient signature facials use a specific skin care product
              catering to each individual needs. It includes thorough cleansing,
              gentle exfoliation, extraction, relaxing facial massage. Finish
              off with jelly treatment masks and ice globes to give your skin
              some love and glow naturally.
            </p>
            <button
              className="border border-black px-10 lg:bottom-0 py-2 flex items-center"
              onClick={handleOpenCalendly}
            >
              Book Now{" "}
              <span>
                <FaArrowRight />
              </span>
            </button>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default Services;
