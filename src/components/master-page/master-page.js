import React from "react";
import Layout from "../layout";
import MasterTable from "../master-table";

const MasterPage = (props) => {
  return (
    <>
      <Layout>
        <h1>Products</h1>
        <MasterTable />
      </Layout>
    </>
  );
};

export default MasterPage;
