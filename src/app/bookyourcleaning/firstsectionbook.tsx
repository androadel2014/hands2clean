// "use client";
import React from "react";
import ItemBookInput from "./itembookinput";
import SelectBox from "./selectbox";
import HeadReq from "./headreq";
import GreenContainer from "./greenContainer";
import TitleWithDivider from "./TitleWithDivider";

export default function FirstSectionBook({
  selectedOption,
  setSelectedOption,
}) {
  const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(event.target.id);
  };
  const selectbox1 = [1, 2, 3, 4, 5];
  const selectbox2 = [1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5];
  const HouseType = [
    {
      key: 1,
      type: "radio",
      name: "HouseType",
      id: "SingleFamilyHouse",
      labeltext: "Single Family House",
      imgurl: "/images/SingleFamilyHouse.png",
      onchangefun: handleOptionChange,
    },
    {
      key: 2,
      type: "radio",
      name: "HouseType",
      id: "Townhome",
      labeltext: "Townhome",
      imgurl: "/images/Townhome.png",
      onchangefun: handleOptionChange,
    },
    {
      key: 3,
      type: "radio",
      name: "HouseType",
      id: "Apartment",
      labeltext: "Apartment",
      imgurl: "/images/Apartments.png",
      onchangefun: handleOptionChange,
    },
  ];
  return (
    <GreenContainer
      content={
        <>
          <TitleWithDivider text={"Tell Us About Your Home"}></TitleWithDivider>
          <HeadReq
            text={"Select House Type"}
            req={true}
            clasName="text-green-600"
          ></HeadReq>
          <div className="flex justify-between mt-10">
            {HouseType.map((item) => (
              <ItemBookInput
                key={item.key}
                type={item.type}
                name={item.name}
                id={item.id}
                labeltext={item.labeltext}
                imgurl={item.imgurl}
                onchangefun={item.onchangefun}
              ></ItemBookInput>
            ))}
          </div>
          <HeadReq
            req={true}
            text="Number of Bedrooms"
            clasName="mt-20"
          ></HeadReq>

          <SelectBox options={selectbox1} />
          <div className="mt-10 mb-10">
            <HeadReq req={true} text="Number of Bathrooms"></HeadReq>
            <SelectBox options={selectbox2}></SelectBox>
          </div>
        </>
      }
    ></GreenContainer>
  );
}
