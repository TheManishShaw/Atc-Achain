import React from 'react';
import NewSingleSection from './elements/NewSingleSection';
import { HeadSection, Layout, TitleSection } from '../Ui';

const NewsPage = () => {
  return (
    <>
      <HeadSection
        title={'Blogs | ATC Chains India'}
        description={'description'}
        keyWords={'Keywords'}
      />
      <Layout>
        <div className="my-28">
          <TitleSection name="News" />
        </div>

        <div className=" grid grid-cols-1 lg:grid-cols-2  gap-10 hover:gap-10 font-mono mx-20 ">
          <NewSingleSection />
        </div>
      </Layout>
    </>
  );
};

export default NewsPage;
