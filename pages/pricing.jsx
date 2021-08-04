import Head from "next/head";
import React from "react";
import { openPopupWidget } from "react-calendly";
import Layout from "../components/Layout";
import { handleOpenCalendly } from "../functions";

const Pricing = () => {
  return (
    <Layout isHome={false}>
      <Head>
        <title>PRICING | L&apos;ORIENT SKINCARE</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/lorientlogo.png" />
      </Head>
      <main className="p-5 pt-32  md:px-10 lg:pt-64 lg:px-28 2xl:px-32 bg-cover mb-10 bg-center text-white  min-h-screen">
        <h1 className="w-full text-start font-bold text-4xl lg:text-5xl text-black mb-10">
          Simple, transparent pricing
        </h1>

        <section className="flex flex-col lg:flex-row w-full ">
          <div className="flex flex-col justify-start text-black mb-20 lg:mb-0 p-5 lg:w-1/4 transition-all duration-500 ease-in-out border border-opacity-0 hover:border-opacity-100 hover:shadow-lg rounded-md lg:mr-3">
            <h3 className="font-light text-2xl ">Express</h3>
            <p className="font-bold mt-2 text-4xl">$75</p>
            <p className="text-xl my-8 ">
              35 min long relaxing facial. Great for the people on the go that
              need a complexion rejuvenation for a short amount of time.
            </p>
            <ul className="flex-grow pricing-unordered-list list-none list-inside mb-5 text-gray-700 text-xl ">
              <li className="mt-5">Double Cleanse</li>
              <li className="mt-5">Exfoliation</li>
              <li className="mt-5">Hydro Jelly Mask</li>
              <li className="mt-5">Moisturizer</li>
              <li className="mt-5">SPF</li>
            </ul>
            <button
              className="border p-5 rounded-md transition duration-500 ease-in-out hover:bg-brown hover:text-white"
              style={{ borderColor: "#C78F6D" }}
              onClick={handleOpenCalendly}
            >
              Choose
            </button>
          </div>

          <div className="flex flex-col justify-start text-black mb-20 lg:mb-0 p-5 lg:w-1/4 transition-all duration-500 ease-in-out border border-opacity-0 hover:border-opacity-100 hover:shadow-lg rounded-md lg:mr-3">
            <h3 className="font-light text-2xl ">Custom</h3>
            <p className="font-bold mt-2 text-4xl">$95</p>
            <p className="text-xl my-8 ">
              This treatment is customized to your personal skincare goals and
              has everything included from the intro package.
            </p>
            <ul className="flex-grow pricing-unordered-list list-none list-inside mb-5 text-gray-700 text-xl ">
              <li className="mt-5">Double Cleanse</li>
              <li className="mt-5">Enzyme Mask</li>
              <li className="mt-5">Extraction</li>
              <li className="mt-5">Ice Globes</li>
              <li className="mt-5">Moisturize and SPF</li>
            </ul>
            <button
              className="border p-5 rounded-md transition duration-500 ease-in-out hover:bg-brown hover:text-white"
              style={{ borderColor: "#C78F6D" }}
              onClick={handleOpenCalendly}
            >
              Choose
            </button>
          </div>

          <div className="flex flex-col justify-start mb-20 lg:mb-0 lg:mr-3 p-5 lg:w-1/4 transition-all duration-500 ease-in-out border border-opacity-0 hover:border-opacity-100 hover:shadow-lg bg-brown text-white rounded-md">
            <h3 className="font-light text-2xl ">Acne Facial</h3>
            <p className="font-bold mt-2 text-4xl">$95</p>
            <p className="text-xl my-8 ">
              Acne facials are designed to treat the root cause of acne. Great
              for those who needs heavier extraction and a faster healing
              process.
            </p>
            <ul className="pricing-unordered-list list-none list-inside mb-5 text-gray-700 text-xl ">
              <li className="mt-5">Signature Double Cleanse</li>
              <li className="mt-5">Enzyme Booster with 02 Booster</li>
              <li className="mt-5">Extraction</li>
              <li className="mt-5">Calming Balm</li>
              <li className="mt-5">Botanical Soothing SPF Cream</li>
            </ul>
            <button
              className="border p-5 rounded-md transition duration-500 ease-in-out hover:bg-main-bg hover:text-black"
              style={{ borderColor: "#FFFFFF" }}
              onClick={handleOpenCalendly}
            >
              Choose
            </button>
          </div>

          <div className="flex flex-col justify-start text-black mb-20 lg:mb-0 p-5 lg:w-1/4 transition-all duration-500 ease-in-out border border-opacity-0 hover:border-opacity-100 hover:shadow-lg rounded-md">
            <h3 className="font-light text-2xl ">Signature</h3>
            <p className="font-bold mt-2 text-4xl">$120</p>
            <p className="text-xl my-8 ">
              L’orient signature facials use a specific skin care product
              catering to each individual needs.
            </p>
            <ul className="flex-grow pricing-unordered-list list-none list-inside mb-5 text-gray-700 text-xl ">
              <li className="mt-5">Double Cleanse & Enzye Wash</li>
              <li className="mt-5">Extraction</li>
              <li className="mt-5">Gua Sha Facial Massage</li>
              <li className="mt-5">Hydro Jelly Mask</li>
              <li className="mt-5">
                Finish with Ice Globes, Moisturizer and SPF
              </li>
            </ul>
            <button
              className="border p-5 rounded-md transition duration-500 ease-in-out hover:bg-brown hover:text-white"
              style={{ borderColor: "#C78F6D" }}
              onClick={handleOpenCalendly}
            >
              Choose
            </button>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default Pricing;
