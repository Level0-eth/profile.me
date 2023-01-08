import React from "react";
import { Helmet } from "react-helmet";

import Layout from "../components/Layout/Layout";

const IndexPage = () => {
  return (
    <Layout>
      <Helmet>
        <title>Home</title>
        <link rel="icon" type="image/x-icon" href="./images/logo.png" />
      </Helmet>
    </Layout>
  );
};

export default IndexPage;
