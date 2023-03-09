import React from "react";
import Logo from "../assets/Logo.png";

const Header = () => {
  return (
    <header className="py-8">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <a href="https://www.linkedin.com/in/guilhermedelmiro/">
            <img className="w-60 rounded-2xl" src={Logo} alt="" />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
