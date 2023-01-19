import React from "react";
import { HeadSection, Layout, ProductsPage } from "../../components";

const index = () => {
  return (
    <div>
      <HeadSection
        title={"Products |  ATC Chains India"}
        description={"description"}
        keyWords={"Keywords"}
      />
      <Layout>
        <ProductsPage currentPage="MainCategory" />
      </Layout>
    </div>
  );
};

export default index;
