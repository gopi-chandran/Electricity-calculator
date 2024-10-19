import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <>
      <div className="header">
        <div className="header__left ">
       
          <div className="width=50px"> </div>
          <div className="header__links ">
            <Link className="header__link title-text " to="/">Home</Link>
            <Link className="header__link title-text" to="calculator">Calculator</Link>
            <Link className="header__link title-text" to="chart">Table</Link>
          </div>
        </div>
       
      </div>
    </>
  );
};

export default Header;