import React from "react";
import Image from "next/image";
import star from "../public/star.png";

export const Opinion = ({ date, description, name }) => (
  // <div className="container w-full p-3 shadow my-2 w-full md:w-1/2 lg:w-1/3 lg:my-0 rounded-md">
  <div className="container mx-auto p-3 w-full shadow my-2 rounded-md flex flex-col justify-between">
    <p className="my-2 font-extralight">{description}</p>
    <div className="flex flex-row justify-between items-end">
      <div className="flex flex-row">
        <Image src={star} />
        <Image src={star} />
        <Image src={star} />
        <Image src={star} />
        <Image src={star} />
      </div>
      <p className="text-right">{name}</p>
    </div>
  </div>
);