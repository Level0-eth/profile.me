import React from "react";
import { Link } from "gatsby";

import "./index.css";

const Header = () => {
  return (
    <div className="container__fluid">
      <div className="container header">
        <div className="logo">
          <img src="/images/logo.png" />
        </div>
        <nav className="nav">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/profiles">Profiles</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;
