import React from 'react';
import {
  HeadSection,
  Layout,
  NewSingleSection,
  TitleSection,
} from '../../components';
import BlogDetails from '../../components/news/elements/BlogDetails';

const index = () => {
  return (
    <>
      <HeadSection
        title={'Blog Details | ATC Chains India'}
        description={'description'}
        keyWords={'Keywords'}
      />
      <Layout>
        <BlogDetails />
        <TitleSection name="Related Blogs" />
        <div className="grid grid-cols-1 mt-10 lg:grid-cols-2 px-4">
          <NewSingleSection />
        </div>
      </Layout>
    </>
  );
};

export default index;
