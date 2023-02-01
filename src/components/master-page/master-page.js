import React from "react";
import Layout from "../layout";
import MasterTable from "../master-table";

import './master-page.css';

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
