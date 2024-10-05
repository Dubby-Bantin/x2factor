import React from "react";
import { Link } from "react-router-dom";

const NavigationLink = ({ children, name, path, onClick }) => {
  return (
    <Link
      to={path}
      onClick={onClick}
      className="flex p-1 rounded cursor-pointer stroke-[0.75] hover:stroke-neutral-100 overflow-hidden stroke-neutral-400 text-white hover:text-neutral-100 place-items-center gap-3 hover:bg-neutral-700/30 transition-colors duration-100"
    >
      {children}
      <p className="text-inherit font-poppins overflow-clip whitespace-nowrap tracking-wide">
        {name}
      </p>
    </Link>
  );
};

export default NavigationLink;
