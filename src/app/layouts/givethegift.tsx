"use client";

import Image from "next/image";
import givethegift from "../../../public/images/givethegift.jpg";
import Button from "../components/button/button";
import ChildrensNational from "../../../public/images/ChildrensNational.jpg";

export default function GivetheGift() {
  return (
    <>
      <div className="bg-green-100 lg:py-20 flex lg:justify-center lg:px-40 givinthegift">
        <div className="flex lg:justify-normal">
          <Image src={givethegift} alt="sdsdsd" className="w-1/2"></Image>
          <div className="bg-white h-full text-center text-green-400 p-14 flex items-center">
            <div>
              <h4 className="text-3xl mb-3">Give the Gift of Clean</h4>
              <p>
                Our e-gift certificates are the ideal present for
                weddings/showers, a new baby, college students or anyone
                celebrating a special event or occasion.
              </p>
              <Button
                text={"Gift Card"}
                clsname={
                  " text-green-400 bg-green-400 mt-5 px-14 py-2 hover:bg-green-600 text-white rounded-3xl"
                }
                handleDisplay={() => {}}
              ></Button>

              <Image
                src={ChildrensNational}
                alt="ChildrensNational"
                className="mt-10 w-3/4 m-auto"
              ></Image>
              <p className="mt-8">
                When you purchase a Maid Bright gift certificate, we will donate
                $10 to Children’s National, Washington DC’s pediatric hospital.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
