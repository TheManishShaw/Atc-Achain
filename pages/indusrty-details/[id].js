import React from "react";
import { motion } from "framer-motion";
import {
  BannerImage,
  HeadSection,
  Layout,
  ProductNotFound,
} from "../../components";
const index = () => {
  return (
    <motion.div exit={{ opacity: 0 }} initial="initial" animate="animate">
      <HeadSection
        title={"Indusrty-details | ATC Chains India"}
        description={"description"}
        keyWords={"Keywords"}
      />
      <Layout>
        <BannerImage
          image={"/assets/icons/svg/findSolutionBg.svg"}
          text=""
          description=""
        />
        <ProductNotFound />
      </Layout>
    </motion.div>
  );
};

export default index;
