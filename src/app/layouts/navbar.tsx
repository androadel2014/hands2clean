"use client";

import Image from "next/image";
import logo from "../../../public/images/logo.jpg";
import BookCleaningDetails from "./bookcleaningdetails";
import Menu from "../components/menu";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <p
        className={`bg-green-600 text-center z-20 text-white sm:hidden py-1 ${
          isScrolled ? " fixed  top-0 w-full" : "sticky "
        }`}
      >
        Call or text us at (888) 624-3274
      </p>
      <div
        className={`flex justify-between md:top-0 z-20 mobile-bg-white ${
          isScrolled
            ? "bg-white fixed w-full md:top-0 top-8-pc "
            : "sticky bg-transparent"
        }`}
      >
        <Menu></Menu>
        <div className="flex items-center justify-center">
          <Link href="/" className="md:w-3/4 md:h-1/2 ">
            <Image src={logo} alt="logo"></Image>
          </Link>
        </div>
        <BookCleaningDetails mainColor="text-blue-800"></BookCleaningDetails>
      </div>
    </div>
  );
}

// const [isScrolled, setIsScrolled] = useState(false);
// useEffect(() => {
//   const handleScroll = () => {
//     // تحقق مما إذا كان المستخدم قد قام بالتمرير بمقدار 50 بكسل أو أكثر
//     if (window.scrollY > 50) {
//       setIsScrolled(true);
//     } else {
//       setIsScrolled(false);
//     }
//   };

//   // إضافة مستمع لحدث التمرير
//   window.addEventListener("scroll", handleScroll);

//   // تنظيف المستمع عند فك التثبيت
//   return () => {
//     window.removeEventListener("scroll", handleScroll);
//   };
// }, []);

// ${
//   isScrolled ? "bg-white" : "bg-transparent"
// }
