import React, { useState } from "react";
import Link from "../Link/Link";


const NavBar = () => {
  const [open, setopen] = useState(false);

  const routes = [
    { id: 1, name: "Home", path: "/" },
    { id: 2, name: "About", path: "/about" },
    { id: 3, name: "Services", path: "/services" },
    { id: 4, name: "Contact", path: "/contact" },
    { id: 5, name: "Products", path: "/products" },
  ];

  return (
    <nav className=" bg-slate-600 p-5">
      {/* <div onClick={() => setopen(!open)}>
        <span>{open === true ? "open" : "close"}</span>
      </div> */}

      <ul className="md:flex">
        {routes.map((route) => (
          <Link key={route.id} route={route}></Link>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
