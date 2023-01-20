import React from "react";
import { HeadSection, Layout, ProductsPage } from "../../../components";

const index = () => {
  return (
    <div>
      <HeadSection
        title={"Sub-Category Products |  ATC Chains India"}
        description={"description"}
        keyWords={"Keywords"}
      />
      <Layout>
        <ProductsPage currentPage="SubCategory" />
      </Layout>
    </div>
  );
};

export default index;
