import React from "react";
import Features from "../Features/Features";

const PriceCard = ({ price }) => {
  return (
    <div
      className="bg-gray-400 p-5 rounded-md flex
     flex-col  "
    >
      <div className="text-center pb-3">
        <h3 className="text-4xl">{price.price}</h3>
        <h3 className="text-3xl text-blue-700 font-bold">{price.option}</h3>
      </div>
      <p className="underline font-bold p-1">features </p>
      {price.features.map((feature, idx) => (
        <Features key={idx} feature={feature}></Features>
      ))}

      <button className=" w-full  text-bold font-3xl bg-slate-600 px-4 py-2 text-center rounded mt-auto  hover:bg-green-300">
        Bye Now
      </button>
    </div>
  );
};

export default PriceCard;
