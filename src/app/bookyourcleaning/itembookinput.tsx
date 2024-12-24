"use client";

import React, { CSSProperties } from "react";
export default function ItemBookInput({
  type = "",
  name = "",
  id = "",
  inputclassname = "",
  labeltext = "",
  labelclassname = "",
  imgurl = "",
  span = "",
  span2 = "",
  span3 = "",
  onchangefun,
}) {
  return (
    <div className="text-center">
      <input
        type={type}
        name={name}
        id={id}
        className={`hidden radioinput ${inputclassname}`}
        onChange={onchangefun}
      />
      <label
        htmlFor={id}
        className={`radiolabel  ${labelclassname}`}
        style={
          {
            "--background-image-url": `url('${imgurl}')`,
          } as CSSProperties
        }
      >
        {labeltext}
        {span ? <span className="block">{span}</span> : ""}
        {span2 ? <span className="block text-sm">{span2}</span> : ""}
        {span2 ? <span className="block text-xs">{span3}</span> : ""}
      </label>
    </div>
  );
}

{
  /* <>
    <input
    type="radio"
    name="HouseType"
    id="SingleFamilyHouse"
    className="hidden housetype"
    />
    <label htmlFor="SingleFamilyHouse" className="SingleFamilyHouse ">
    Single Family House
    </label>
</> */
}
