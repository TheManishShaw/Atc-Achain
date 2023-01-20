import React from 'react';
import ProductsPage from '../../../../../../components/product/ProductsPage';
import HeadSection from '../../../../../../components/Ui/Headsection/HeadSection';
import Layout from '../../../../../../components/Ui/Layout/Layout';

const index = () => {
  return (
    <div>
      <HeadSection
        title={'Products Page | ATC Chains India'}
        description={'description'}
        keyWords={'Keywords'}
      />
      <Layout>
        <ProductsPage currentPage='product' />
      </Layout>
    </div>
  );
};

export default index;
