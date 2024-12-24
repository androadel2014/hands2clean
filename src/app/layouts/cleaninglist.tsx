"use client";
import "glider-js/glider.min.css";
import * as React from "react";
import Glider from "react-glider";
import "glider-js/glider.min.css";
import Image from "next/image";
import img1 from "../../../public/images/img-1.jpg";
import img2 from "../../../public/images/img-2.jpg";
import img3 from "../../../public/images/img-3.jpg";
import CleaningItem from "../components/cleaningitem";
export default function CleaningList() {
  var cleaningServices = [
    {
      id: 1,
      title: "Kitchen",
      description: [
        { id: 1, text: "Cabinet Fronts" },
        { id: 2, text: "Countertops" },
        { id: 3, text: "Stovetop, Front and Hood" },
        { id: 4, text: "Refrigerator Top, Front and Sides" },
        { id: 5, text: "Sink Walls Spot Cleaned" },
        { id: 6, text: "Doors Spot Cleaned" },
        { id: 7, text: "Floors Vacuumed & Washed" },
        { id: 8, text: "Wipe Blinds/Windowsills" },
        { id: 9, text: "Window Over Sink" },
        { id: 10, text: "Clean Accessories" },
      ],
      image: img1,
    },
    {
      id: 2,
      title: "Kitchen2",
      description: [
        { id: 1, text: "Cabinet Fronts2" },
        { id: 2, text: "Countertops2" },
        { id: 3, text: "Stovetop, Front and Hood2" },
        { id: 4, text: "Refrigerator Top, Front and Sides2" },
        { id: 5, text: "Sink Walls Spot Cleaned2" },
        { id: 6, text: "Doors Spot Cleaned2" },
        { id: 7, text: "Floors Vacuumed & Washed2" },
        { id: 8, text: "Wipe Blinds/Windowsills2" },
        { id: 9, text: "Window Over Sink2" },
        { id: 10, text: "Clean Accessories2" },
      ],
      image: img2,
    },
    {
      id: 3,
      title: "Kitchen3",
      description: [
        { id: 1, text: "Cabinet Fronts3" },
        { id: 2, text: "Countertops3" },
        { id: 3, text: "Stovetop, Front and Hood3" },
        { id: 4, text: "Refrigerator Top, Front and Sides3" },
        { id: 5, text: "Sink Walls Spot Cleaned3" },
        { id: 6, text: "Doors Spot Cleaned3" },
        { id: 7, text: "Floors Vacuumed & Washed3" },
        { id: 8, text: "Wipe Blinds/Windowsills3" },
        { id: 9, text: "Window Over Sink3" },
        { id: 10, text: "Clean Accessories3" },
      ],
      image: img3,
    },
  ];

  return (
    <>
      <h2 className="text-center text-4xl text-green-400 font-medium mt-20">
        Cleaning Checklist
      </h2>
      <div className="m-auto p-5">
        <Glider
          draggable
          slidesToShow={2.2}
          slidesToScroll={2.2}
          responsive={[
            {
              breakpoint: 864,
              settings: {
                slidesToShow: 2.2,
              },
            },
          ]}
        >
          <CleaningItem cleaningServices={cleaningServices}></CleaningItem>
        </Glider>
      </div>
    </>
  );
}
