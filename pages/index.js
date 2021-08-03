import Head from "next/head";
import AboutUs from "../components/AboutUs";
import Testimonials from "../components/Testimonials";
import Layout from "../components/Layout";
import { FaArrowRight } from "react-icons/fa";
import Link from "next/link";
import { handleOpenCalendly } from "../functions";
export default function Home() {
  return (
    <Layout isHome={true}>
      <Head>
        <title>L&apos;ORIENT SKINCARE</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="hero-bg bg-cover bg-no-repeat bg-top p-5 md:p-10 lg:px-28 2xl:px-32">
        {/* <div
        className={`fixed top-0 left-0 right-0 bottom-0 w-full h-full  z-0 flex `}
        style={{ backgroundColor: "rgba(0,0,0,0.75)" }}
      
      ></div> */}
        <div className="pt-32 sm:pt:48 lg:pt-48 2xl:pt-72">
          <h1 className="w-3/4 text-3xl md:text-5xl lg:text-6xl 2xl:text-7xl font-bold md:w-2/5 leading-relaxed text-white md:text-black">
            Specializes In Custom Skin Care Treatment.
          </h1>
          <p className="mt-10 text-lg  lg:text-2xl 2xl:text-4xl w-3/4 md:w-1/3 text-gray-50 lg:text-gray-700">
            Every facial is tailored to your skin type leaving your skin glowing
            and looking its best.
          </p>
        </div>
        <div className="absolute bottom-16 xl:left-28 hidden lg:block bottom border-t w-1/4">
          <p className=" text-gray-50 2xl:text-2xl">
            Lorient is a spa and beauty place that serves the best quality with
            professionals.
          </p>
        </div>

        {/* <div className='hidden absolute lg:flex flex-col right-28 w-1/6 '>
        <GoQuote className='text-red-400' />
        <p className='text-xl'>Affordable. Gorgeous and Beauty which you deserve.</p>
      </div> */}
      </div>
      <AboutUs />

      <div className="flex flex-col mt-10 lg:mt-24 lg:flex-row justify-between relative p-5  py-24 md:px-10 lg:px-28 lg:py-48 2xl:px-32 bg-cover mb-10 bg-center bg-main-bg ">
        <img
          src="/lorient-7.png"
          className="lg:w-1/2 object-cover h-96 lg:mr-20"
          alt="Package for signature facial lorient skin care"
        />
        <div className="lg:flex-grow relative">
          <h3 className="text-4xl mt-5 font-semibold lg:mb-10  lg:text-5xl lg:mt-20">
            Signature Package.
          </h3>
          <p className="text-2xl font-medium lg:border-t lg:text-3xl pt-5">
            $ 120
          </p>
          <p className="mt-2 mb-5 text-lg flex-grow">
            35 min long relaxing facial. Great for the people on the go that
            need a complexion rejuvenation for a short amount of time. Does not
            include extraction.
          </p>
          <button
            className="border mb-10 lg:mb-0 border-black px-10 lg:absolute lg:bottom-0 py-2  flex items-center"
            onClick={handleOpenCalendly}
          >
            Book Now{" "}
            <span>
              <FaArrowRight />
            </span>
          </button>

          <Link href="/services">
            <a
              className="cursor-pointer text-lg lg:mt-0 top-0 lg:absolute right-0 order-last"
              style={{ color: "#EBA47A" }}
            >
              See More packages
            </a>
          </Link>
        </div>
      </div>
      <Testimonials />
    </Layout>
  );
}
