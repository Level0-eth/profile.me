import React from "react";
import PropTypes from "prop-types";

import Header from "../Header/Header";

import "../../../static/css/reset.css";
import "../../../static/css/global.css";

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
};

export default Layout;

Layout.propTypes = {
  children: PropTypes.array
};
