//internal imports
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { HeadSection, HomePage, Layout } from "../components";

const Home = () => {
  return (
    <motion.div exit={{ opacity: 0 }} initial="initial" animate="animate">
      <HeadSection
        title={"ATC Chains India"}
        description={"description"}
        keyWords={"Keywords"}
      />
      <Layout>
        <HomePage />
      </Layout>
    </motion.div>
  );
};

export default dynamic(() => Promise.resolve(Home), { ssr: false });
