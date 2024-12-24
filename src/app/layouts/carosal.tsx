"use client";
import "glider-js/glider.min.css";
import * as React from "react";
import Glider from "react-glider";
import "glider-js/glider.min.css";
import Image from "next/image";
import yelp from "../../../public/images/yelp.png";
export default function Carosel() {
  return (
    <>
      <div className=" md:w-3/4 m-auto w-2/4 mt-20">
        <Glider
          draggable
          hasArrows
          slidesToShow={1}
          slidesToScroll={1}
          iconRight={">"}
          iconLeft={"<"}
          responsive={[
            {
              breakpoint: 864,
              settings: {
                slidesToShow: 1,
              },
            },
          ]}
        >
          <div className="w-full text-center md:py-32">
            <div className="w-full flex justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="38px"
                height="25px"
                className="mb-[19px] text-gold text-center text-green-400"
              >
                <path
                  fill="currentColor"
                  fillRule="nonzero"
                  d="M38 18.3a6 6 0 0 0-1.4-3.8c-1-1.1-2.3-1.7-4-1.7a7.1 7.1 0 0 0-4.5 1.6 7 7 0 0 1-.8-3.9c0-2.8.8-4.9 2.3-6.2 1.6-1.4 4-2.4 7-3V0c-2 0-4.1.3-6 1a14.9 14.9 0 0 0-8.8 7.4 13 13 0 0 0-1.3 6c0 2.8.9 5.3 2.7 7.4a8.9 8.9 0 0 0 7.1 3.2c2 0 3.8-.6 5.4-1.7a5.8 5.8 0 0 0 2.3-5Zm-20.8 0a6 6 0 0 0-1.4-3.8c-.9-1.1-2.2-1.7-4-1.7-.7 0-1.4 0-2.2.3-.7.2-1.5.6-2.3 1.2a8 8 0 0 1-.8-3.8c0-2.8.8-4.9 2.4-6.2 1.6-1.4 4-2.4 7-3V0c-2.1 0-4.2.3-6.2 1-2 .6-3.7 1.6-5.1 2.9A13.2 13.2 0 0 0 0 14.3c0 3 .8 5.4 2.5 7.5 1.7 2.1 4 3.2 7 3.2 2 0 3.9-.6 5.4-1.7a5.8 5.8 0 0 0 2.3-5Z"
                ></path>
              </svg>
            </div>

            <p className="md:text-4xl text-green-400">
              We love our cleaning crew. They are always on time and always
              leave the house spotless.
            </p>
            <div className="w-full mt-10 flex justify-center">
              <Image src={yelp} alt="yelp" className="md:w-40 w-24"></Image>
            </div>
          </div>
          <div className="w-full text-center md:py-32">
            <div className="w-full flex justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="38px"
                height="25px"
                className="mb-[19px] text-gold text-center text-green-400"
              >
                <path
                  fill="currentColor"
                  fillRule="nonzero"
                  d="M38 18.3a6 6 0 0 0-1.4-3.8c-1-1.1-2.3-1.7-4-1.7a7.1 7.1 0 0 0-4.5 1.6 7 7 0 0 1-.8-3.9c0-2.8.8-4.9 2.3-6.2 1.6-1.4 4-2.4 7-3V0c-2 0-4.1.3-6 1a14.9 14.9 0 0 0-8.8 7.4 13 13 0 0 0-1.3 6c0 2.8.9 5.3 2.7 7.4a8.9 8.9 0 0 0 7.1 3.2c2 0 3.8-.6 5.4-1.7a5.8 5.8 0 0 0 2.3-5Zm-20.8 0a6 6 0 0 0-1.4-3.8c-.9-1.1-2.2-1.7-4-1.7-.7 0-1.4 0-2.2.3-.7.2-1.5.6-2.3 1.2a8 8 0 0 1-.8-3.8c0-2.8.8-4.9 2.4-6.2 1.6-1.4 4-2.4 7-3V0c-2.1 0-4.2.3-6.2 1-2 .6-3.7 1.6-5.1 2.9A13.2 13.2 0 0 0 0 14.3c0 3 .8 5.4 2.5 7.5 1.7 2.1 4 3.2 7 3.2 2 0 3.9-.6 5.4-1.7a5.8 5.8 0 0 0 2.3-5Z"
                ></path>
              </svg>
            </div>

            <p className="md:text-4xl text-green-400">
              We love our cleaning crew. They are always on time and always
              leave the house spotless.
            </p>
            <div className="w-full mt-10 flex justify-center">
              <Image src={yelp} alt="yelp" className="md:md:w-40 w-24"></Image>
            </div>
          </div>
          <div className="w-full text-center md:py-32">
            <div className="w-full flex justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="38px"
                height="25px"
                className="mb-[19px] text-gold text-center text-green-400"
              >
                <path
                  fill="currentColor"
                  fillRule="nonzero"
                  d="M38 18.3a6 6 0 0 0-1.4-3.8c-1-1.1-2.3-1.7-4-1.7a7.1 7.1 0 0 0-4.5 1.6 7 7 0 0 1-.8-3.9c0-2.8.8-4.9 2.3-6.2 1.6-1.4 4-2.4 7-3V0c-2 0-4.1.3-6 1a14.9 14.9 0 0 0-8.8 7.4 13 13 0 0 0-1.3 6c0 2.8.9 5.3 2.7 7.4a8.9 8.9 0 0 0 7.1 3.2c2 0 3.8-.6 5.4-1.7a5.8 5.8 0 0 0 2.3-5Zm-20.8 0a6 6 0 0 0-1.4-3.8c-.9-1.1-2.2-1.7-4-1.7-.7 0-1.4 0-2.2.3-.7.2-1.5.6-2.3 1.2a8 8 0 0 1-.8-3.8c0-2.8.8-4.9 2.4-6.2 1.6-1.4 4-2.4 7-3V0c-2.1 0-4.2.3-6.2 1-2 .6-3.7 1.6-5.1 2.9A13.2 13.2 0 0 0 0 14.3c0 3 .8 5.4 2.5 7.5 1.7 2.1 4 3.2 7 3.2 2 0 3.9-.6 5.4-1.7a5.8 5.8 0 0 0 2.3-5Z"
                ></path>
              </svg>
            </div>

            <p className="md:text-4xl text-green-400">
              We love our cleaning crew. They are always on time and always
              leave the house spotless.
            </p>
            <div className="w-full mt-10 flex justify-center">
              <Image src={yelp} alt="yelp" className="md:w-40 w-24"></Image>
            </div>
          </div>
          <div className="w-full text-center py-32">
            <div className="w-full flex justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="38px"
                height="25px"
                className="mb-[19px] text-gold text-center text-green-400"
              >
                <path
                  fill="currentColor"
                  fillRule="nonzero"
                  d="M38 18.3a6 6 0 0 0-1.4-3.8c-1-1.1-2.3-1.7-4-1.7a7.1 7.1 0 0 0-4.5 1.6 7 7 0 0 1-.8-3.9c0-2.8.8-4.9 2.3-6.2 1.6-1.4 4-2.4 7-3V0c-2 0-4.1.3-6 1a14.9 14.9 0 0 0-8.8 7.4 13 13 0 0 0-1.3 6c0 2.8.9 5.3 2.7 7.4a8.9 8.9 0 0 0 7.1 3.2c2 0 3.8-.6 5.4-1.7a5.8 5.8 0 0 0 2.3-5Zm-20.8 0a6 6 0 0 0-1.4-3.8c-.9-1.1-2.2-1.7-4-1.7-.7 0-1.4 0-2.2.3-.7.2-1.5.6-2.3 1.2a8 8 0 0 1-.8-3.8c0-2.8.8-4.9 2.4-6.2 1.6-1.4 4-2.4 7-3V0c-2.1 0-4.2.3-6.2 1-2 .6-3.7 1.6-5.1 2.9A13.2 13.2 0 0 0 0 14.3c0 3 .8 5.4 2.5 7.5 1.7 2.1 4 3.2 7 3.2 2 0 3.9-.6 5.4-1.7a5.8 5.8 0 0 0 2.3-5Z"
                ></path>
              </svg>
            </div>

            <p className="md:text-4xl text-green-400">
              We love our cleaning crew. They are always on time and always
              leave the house spotless.
            </p>
            <div className="w-full mt-10 flex justify-center">
              <Image src={yelp} alt="yelp" className="md:w-40 w-24"></Image>
            </div>
          </div>
        </Glider>
      </div>
    </>
  );
}
