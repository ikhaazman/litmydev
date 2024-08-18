import React from "react";
import { Link } from "react-router-dom";
import { IMAGES } from "../assets";

const Header = () => {
  return (
    <div className="py-4 px-20 max-sm:px-10 flex justify-between items-center bg-transparent absolute top-0 z-10 w-full">
      <img src={IMAGES.litmyLogo} alt="Ladies in Tech MY" className="w-20" />
      <ul className="flex text-xl gap-x-12 font-poppins">
        <li className="">
          <Link to="/home">Home</Link>
        </li>
        {/* <li className="">
          <Link to="/about">About</Link>
        </li> */}
        {/* <li className="">
          <Link to="/directories">Directories</Link>
        </li> */}
        {/* <li className="">
          <Link to="/resources">Resources</Link>
        </li> */}
        <li className="">
          <Link to="/projects">Projects</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
