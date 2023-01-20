import React from "react";
import { HeadSection, Layout, ProductsPage } from "../../../../components";

const index = () => {
  return (
    <div>
      <HeadSection
        title={"Products Variants | ATC Chains India"}
        description={"description"}
        keyWords={"Keywords"}
      />
      <Layout>
        <ProductsPage currentPage="Variants" />
      </Layout>
    </div>
  );
};

export default index;
