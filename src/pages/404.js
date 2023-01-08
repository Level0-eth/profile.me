import React from "react";
import { Helmet } from "react-helmet";

const NotFoundPage = () => {
  return (
    <>
      <Helmet>
        <title>404</title>
        <link rel="icon" type="image/x-icon" href="./images/logo.png" />
      </Helmet>
    </>
  );
};

export default NotFoundPage;
