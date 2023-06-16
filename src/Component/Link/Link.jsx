import React from "react";
import "./Link.css";

// eslint-disable-next-line react/prop-types
const Link = ({ route }) => {
  return (
    <div>
      <li className="pl-3">
        <a
          className=" bg-slate-300 pt-3 pb-3 pl-4 pr-4 rounded-lg hover:bg-sky-400"
          href={route.path}
        >
          {route.name}
        </a>
      </li>
    </div>
  );
};

export default Link;
