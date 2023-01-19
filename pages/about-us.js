import React from 'react';
import { AboutPage, HeadSection, Layout } from '../components';

const about = () => {
  return (
    <>
      <HeadSection
        title={'About us | ATC Chains India'}
        description={'description'}
        keyWords={'Keywords'}
      />
      <Layout>
        <AboutPage />
      </Layout>
    </>
  );
};

export default about;
