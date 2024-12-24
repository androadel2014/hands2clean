"use client";

import { useState } from "react";
import FirstSectionBook from "./firstsectionbook";
import SecondSectionBook from "./secondsectionbook";
import OtherPart from "./otherpart";
import SelectCleaningDate from "./SelectCleaningDate";
import YourTotal from "./YourTotal";
import PromotionsSection from "./PromotionsSection";

export default function BookYourCleaning() {
  const [selectedOption, setSelectedOption] = useState("");

  return (
    <>
      <div className="pt-28">
        <p className="text-3xl text-green-600 text-center">
          Book Your Cleaning
        </p>
        <p className="text-center text-green-600 mt-3">
          We have high standards for your home.
        </p>
        <form action="" className="md:m-32 md:mb-0 ">
          <FirstSectionBook
            selectedOption={selectedOption}
            setSelectedOption={setSelectedOption}
          ></FirstSectionBook>
          <SecondSectionBook></SecondSectionBook>
          <OtherPart selectedOption={selectedOption}></OtherPart>
          <SelectCleaningDate></SelectCleaningDate>
          <YourTotal></YourTotal>
          <div className="flex justify-end md:w-4/6 md:m-auto px-20 md:pt-0 mt-20">
            <input
              type="submit"
              value="Continue"
              className="text-mdhover:bg-blue-950 cursor-pointer 
              px-8 py-2 -0 rounded-3xl bg-blue-600 text-md text-white mt-10
                sm:block"
            ></input>
          </div>
        </form>
        <PromotionsSection></PromotionsSection>
      </div>
    </>
  );
}
