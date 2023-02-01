import React from "react";
import Layout from "../components/layout";
import MasterTable from "../components/master-table";

const Home = (props) => {
  return (
    <>
      <Layout>
        <h1>Products</h1>
        <MasterTable />
      </Layout>
    </>
  );
};

export default Home;
