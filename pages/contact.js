import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import { ContactForm, HeadSection, Layout } from '../components';
// Internal Imports

const index = () => {
  return (
    <>
      <HeadSection
        title={'Contact || ATC Chains India'}
        description={'description'}
        keyWords={'Keywords'}
      />
      <Layout>
        <ContactForm />
      </Layout>
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
