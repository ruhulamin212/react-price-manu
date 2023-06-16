import { data } from "autoprefixer";
import React, { useEffect, useState } from "react";
import PriceCard from "../PriceCard/PriceCard";

const Price = () => {
  const [prices, srtPrices] = useState([]);
  useEffect(() => {
    fetch("price.json")
      .then((res) => res.json())
      .then((data) => srtPrices(data));
  }, []);
  return (
    <div className="mx-12">
      <h3 className="capitalize mt-4 p-4 bg-slate-500 text-slate-800 font-bold text-6xl text-center">
        awsesome affordabole price
      </h3>
      <div className="grid md:grid-cols-3 gap-5 pt-5  ">
        {prices.map((price) => (
          <PriceCard key={price.id} price={price}></PriceCard>
        ))}
      </div>
    </div>
  );
};

export default Price;
