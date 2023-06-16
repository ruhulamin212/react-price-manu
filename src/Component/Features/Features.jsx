import React from "react";
import {  CheckCircleIcon } from "@heroicons/react/24/solid";



const Features = ({feature}) => {
  return (
    <div className='flex'>
      <CheckCircleIcon className="h-8 w-8 text-black-500 pr-3" />
      <span>{feature}</span>
    </div>
  );
};

export default Features;
