import React from "react";

import "./index.css";

const Header = () => {
  return (
    <div className="container__fluid">
      <div className="container header">
        <div className="logo">
          <img src="./images/logo.png" />
        </div>
        <nav className="nav">
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/profiles">Profiles</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;
