import React from "react";

import "./index.css";

const Banner = () => {
  return (
    <div className="container banner">
      <div>
        <h1>Profile.me</h1>
        <h3>
          - By{" "}
          <a href="https://levelzero.club/" target="_blank" rel="noreferrer">
            levelzero.club
          </a>
        </h3>
      </div>
    </div>
  );
};

export default Banner;
