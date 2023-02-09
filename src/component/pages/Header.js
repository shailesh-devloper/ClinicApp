import React from "react";
import { BsSearch } from "react-icons/bs";

const Header = () => {
  return (
    <>
      <header>
        <h2>Doctors</h2>
        <div className="search-bar">
          <div className="input-box">
            <span>
              <BsSearch className="search" />
            </span>
            <input type="text" placeholder="Search Doctor" />
          </div>
          <button className="ser-btn">New Doctor Search</button>
        </div>
      </header>
    </>
  );
};
export default Header;
