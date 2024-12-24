"use client";

import Button from "../components/button/button";
import SectionBook from "../components/sectionbook";
import img1 from "../../../public/images/img-1.jpg";
import img2 from "../../../public/images/img-2.jpg";
import img3 from "../../../public/images/img-3.jpg";
import { useState } from "react";

export default function BookCleaningDetails({ mainColor }) {
  // const mainColor = mainColor;
  const cleaningServices = [
    {
      id: 1,
      title: "Recurring Service",
      description: [
        { id: 1, text: "Weekly, Bi-Weekly or Monthly" },
        { id: 2, text: "Consistent cleaning crew" },
        { id: 3, text: "Customize for your need" },
        { id: 4, text: "No contract" },
      ],
      image: img1,
      buttonText: "Schedule a Free Estimate",
    },
    {
      id: 2,
      title: "One-Time Cleaning",
      description: [
        { id: 1, text: "On-demand cleaning" },
        { id: 2, text: "Schedule when needed" },
        { id: 3, text: "Customize for your need" },
        { id: 4, text: "No contract" },
      ],
      image: img2,
      buttonText: "Schedule a One Time Cleaning",
    },
    {
      id: 3,
      title: "Moving Cleaning",
      description: [
        { id: 1, text: "Turn-over cleaning" },
        { id: 2, text: "Fast & convenient" },
        { id: 3, text: "Customize for your need" },
        { id: 4, text: "No contract" },
      ],
      image: img3,
      buttonText: "Schedule Moving Cleaning",
    },
  ];

  const [display, setDisplay] = useState(false);

  function handleDisplay() {
    setDisplay(!display);
  }

  return (
    <>
      <Button
        clsname={
          "hover:bg-blue-950 m-5 px-5 rounded-3xl bg-blue-600 text-md text-white m-0 hidden sm:block"
        }
        text={"book cleaning"}
        handleDisplay={handleDisplay}
      ></Button>
      <Button
        clsname={
          "hover:bg-blue-950 m-5 px-5 rounded-3xl bg-blue-600 text-md text-white  m-0 block sm:hidden"
        }
        text={"book"}
        handleDisplay={handleDisplay}
      ></Button>

      <div
        className={`w-screen h-full bg-white top-0 left-0 overflow-auto ${
          display ? "fixed" : "hidden"
        }`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 29.7 29.7"
          width="29.6984848px"
          height="29.6984848px"
          className={`border-2 border-blue-500 rounded-full cursor-pointer fixed right-10 top-10 ${mainColor} `}
          onClick={handleDisplay}
        >
          <g
            fill="none"
            fillRule="evenodd"
            stroke="currentColor"
            strokeLinecap="square"
          >
            <path d="m7.78 7.78 14.14 14.14M21.92 7.78 7.78 21.92"></path>
          </g>
        </svg>
        <div className="mt-10  max-w-screen-xl p-5 m-auto ">
          <div className="mb-10">
            <p className={mainColor}>Book your cleaning</p>
            <p className={`text-2xl ${mainColor}`}>
              We Have High Standards for Your Home.
            </p>
          </div>
          <div className="flex flex-col xl:flex-row mb-14 xl:mb-16 ">
            {/* {console.log(cleaningServices.map((service) => service))} */}
            {cleaningServices.map((service) => (
              // console.log(service.image)
              <SectionBook
                key={service.id}
                title={service.title}
                img={service.image}
                service={service.description}
                textcolor={mainColor}
                buttomText={service.buttonText}
              ></SectionBook>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
