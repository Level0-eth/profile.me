import React from "react";
import { Helmet } from "react-helmet";

import Layout from "../components/Layout/Layout";
import Header from "../components/Header/Header";

const IndexPage = () => {
  return (
    <Layout>
      <Helmet>
        <title>Home</title>
        <link rel="icon" type="image/x-icon" href="./images/logo.png" />
      </Helmet>
      <Header />
    </Layout>
  );
};

export default IndexPage;
