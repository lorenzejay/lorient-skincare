import React from "react";
import { FaArrowRight, FaFacebook, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="p-5 md:px-10 lg:py-32 lg:pt-16 lg:px-28 2xl:px-32 bg-main-bg">
      <section>
        <h3 className="text-2xl font-bold">L&apos;ORIENT</h3>
        <p className="lg:w-1/3 my-3">
          Every facial is tailored to your skin type leaving your skin glowing
          and looking its best
        </p>
        <a
          href="mailto:lorientskincare@gmail.com"
          style={{ color: "#EBA47A" }}
          className="flex items-center"
        >
          lorientskincare@gmail.com{" "}
          <span>
            <FaArrowRight />
          </span>
        </a>
        <div className="flex justify-between border-t mt-10 pt-5">
          <p>Copyright, L&apos;ORIENT 2021, All rights reserved.</p>
          <div className="flex items-center justify-between lg:w-20">
            <a
              href="https://www.instagram.com/lorientskincare/"
              target="_blank"
              className="cursor-pointer"
              rel="noreferrer"
            >
              <FaInstagram
                size={24}
                className="pointer-events-none cursor-pointer"
                rel="noreferrer"
              />
            </a>
            {/* <FaFacebook size={24} /> */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
