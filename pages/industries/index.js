import React from "react";
import { HeadSection, IndustriesPage, Layout } from "../../components";

const index = () => {
  return (
    <div>
      <HeadSection
        title={"Industries  |  ATC Chains India"}
        description={"description"}
        keyWords={"Keywords"}
      />
      <Layout>
        <IndustriesPage />
      </Layout>
    </div>
  );
};

export default index;
