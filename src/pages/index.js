import React from "react";
import { Helmet } from "react-helmet";

import Layout from "../components/Layout/Layout";
import Banner from "../components/Banner/Banner";

const IndexPage = () => {
  return (
    <Layout>
      <Helmet>
        <title>Home</title>
        <link rel="icon" type="image/x-icon" href="./images/logo.png" />
      </Helmet>
      <Banner />
    </Layout>
  );
};

export default IndexPage;
