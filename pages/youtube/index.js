import React from "react";
import { HeadSection, Layout, YoutubePage } from "../../components";

const index = () => {
  return (
    <div>
      <HeadSection
        title={"Youtube  |  ATC Chains India"}
        description={"description"}
        keyWords={"Keywords"}
      />
      <Layout>
        <YoutubePage />
      </Layout>
    </div>
  );
};

export default index;
