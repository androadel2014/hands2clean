"use client";

import { useState } from "react";
import Button from "../components/button/button";
import img5 from "../../../public/images/img-5.jpg";
import img6 from "../../../public/images/img-6.jpg";
import img7 from "../../../public/images/img-7.jpg";
import img8 from "../../../public/images/img-8.jpg";
import Image from "next/image";
import Link from "next/link";

export default function Menu() {
  const [display, setDisplay] = useState(false);
  function handleDisplay() {
    setDisplay(!display);
  }

  var menuService = [
    {
      id: 1,
      title: "Housekeeping Services",
      image: img5,
    },
    {
      id: 2,
      title: "Recurring Cleanings",
      image: img6,
    },
    {
      id: 3,
      title: "Moving Cleaning",
      image: img7,
    },
    {
      id: 4,
      title: "One-Time Cleaning",
      image: img8,
    },
  ];
  return (
    <>
      <button
        className="flex items-center m-5 px-5 py-2 rounded-3xl bg-white text-md text-black max-h-10"
        onClick={handleDisplay}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="12px" height="9px">
          <g
            fill="none"
            fillRule="evenodd"
            stroke="currentColor"
            strokeLinecap="square"
          >
            <path d="M.5.5h11M.5 4.5h11M.5 8.5h11"></path>
          </g>
        </svg>
        <span className="ml-5">MENU</span>
      </button>
      <div
        className={`w-full h-full bg-green-600 top-0 left-0 overflow-auto  ${
          display ? "fixed" : "hidden"
        }`}
      >
        <Button
          clsname={
            "py-2 px-10 m-5 border border-white hover:bg-white hover:text-green-600 rounded-3xl "
          }
          text={"close"}
          handleDisplay={handleDisplay}
        ></Button>
        <div className="mt-10  max-w-screen-xl p-5 m-auto">
          <h3 className="text-white text-xl">Explore our Services</h3>
          <ul className="sm:flex sm:justify-between  mt-10 menu-items">
            {menuService.map((item) => (
              <li key={item.id} className="md:mr-5 ">
                {/* <div> */}
                <Image src={item.image} alt={item.title}></Image>
                {/* </div> */}
                <div className="md:mt-5 text-white text-xl">{item.title}</div>
              </li>
            ))}
          </ul>
          <div className="w-full h-0.5 bg-slate-50 opacity-40 my-16"></div>
          <ul className="grid md:grid-cols-4 gap-4 py-5 text-white text-2xl text-center-mobile">
            <li className="mb-8 hover:text-green-300">
              <Link href="/aboutus">About Us</Link>
            </li>
            <li className="mb-8 hover:text-green-300">
              <Link href="/contactus">Contact Us</Link>
            </li>
            <li className="mb-8 hover:text-green-300">
              <Link href="/blog">Blog</Link>
            </li>
            <li className="mb-8 hover:text-green-300">
              <Link href="/testimonials">Testimonials</Link>
            </li>
            <li className="mb-8 hover:text-green-300">
              <Link href="/giftcards">Giftcards</Link>
            </li>
            <li className="mb-8 hover:text-green-300">
              <Link href="/clientlogin">Client Login</Link>
            </li>
          </ul>
          <div className="w-full h-0.5 bg-slate-50 opacity-40 my-16"></div>
          <div className="text-white md:flex ">
            <div className="md:mr-28 text-center-mobile">
              <p>Call or text</p>
              <p>1-888-624-3274</p>
              <p>Mon - Fri, 8 AM - 5 PM</p>
            </div>
            <div className="text-center-mobile mt-2">
              <p>General inquiries & bookings</p>
              <p>service@maidbright.com</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
