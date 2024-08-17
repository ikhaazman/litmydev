import React from "react";
import { SiYoutube } from "react-icons/si";

const Footer = () => {
  return (
    <div className="w-full">
      <div className="bg-gradient-to-b from-tertiary-100 to-primary-200 text-center gap-y-5 lg:px-96 md:px-48 max-sm:px-10 py-12 flex flex-col items-center">
        <p className="font-semibold text-3xl font-manrope">Ladies in Tech</p>
        <p className="font-poppins font-normal">
          <em>
            "Here's to the women who dream big, code hard, and shatter glass
            ceilings."
          </em>
        </p>
        <button className="bg-primary-800 font-poppins rounded-full px-10 py-4 text-white">
          Be Featured
        </button>
      </div>
      <div className="bg-primary-800 px-20 max-sm:px-10 py-3 flex justify-between items-center">
        <div className="font-poppins text-white">
          &copy; Ladies in Tech 2024. All rights reserved.
        </div>
        <div>
          <ul>
            <li>
              <a href="https://www.youtube.com/@LitMYDev">
                <SiYoutube className="text-2xl text-white hover:text-primary-100" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
