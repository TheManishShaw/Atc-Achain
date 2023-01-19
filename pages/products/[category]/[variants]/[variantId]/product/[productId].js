import React from "react";
import {
  HeadSection,
  Layout,
  ProductDetailView,
} from "../../../../../../components";

const index = () => {
  return (
    <div>
      <HeadSection
        title={"Products Page | ATC Chains India"}
        description={"description"}
        keyWords={"Keywords"}
      />
      <Layout>
        <ProductDetailView currentPage="product" />
      </Layout>
    </div>
  );
};

export default index;
