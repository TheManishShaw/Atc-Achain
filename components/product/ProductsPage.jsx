import React from 'react';
import { motion } from 'framer-motion';
import {
  Banner,
  ErrorBoundary,
  MainProductPage,
  Slider,
  SubProducts,
} from '../Ui';
import { staggerContainer } from '../../utils/motion';

const ProductsPage = ({ currentPage }) => {
  return (
    <ErrorBoundary>
      <div>
        <Banner image={'product-page-banner'} />
        <div className=" 2xl:px-8 relative">
          <div className="-mt-20 overflow-x-hidden overflow-y-visible">
            <SubProducts />
          </div>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
          >
            <MainProductPage currentPage={currentPage} />
          </motion.div>
        </div>
      </div>
    </ErrorBoundary>
  );
};

export default ProductsPage;
