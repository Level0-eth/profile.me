import React from "react";
import PropTypes from "prop-types";

import "../../../static/css/reset.css";
import "../../../static/css/global.css";

const Layout = ({ children }) => {
  return <div>{children}</div>;
};

export default Layout;

Layout.propTypes = {
  children: PropTypes.array
};
