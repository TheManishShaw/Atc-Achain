import Link from 'next/link';
import React from 'react';
import NewSingleSection from '../../news/elements/NewSingleSection';

const HomeBlogSection = () => {
  return (
    <div className="my-10">
      <div className="flex justify-between items-end mb-4">
        <div className="w-full hidden lg:block">
          <img
            className="w-[500px] h-full"
            src="/assets/icons/svg/blogSection.png"
            alt="product"
          />
        </div>
        <div className="w-full text-end p-2 mr-0 2xl:mr-28 lg:mr-20">
          <h2 className="font-semibold text-xl lg:text-[40px] 2xl:text-[46px] leading-[55px] text-primary">
            Discover the Industry insights with our Blogs.
          </h2>
          <p className="text-[20px] text-text-gray my-4">
            We deliver end-to-end conveying customer-centric services that
            caters to innovative solutions for all kinds of consumer.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 mx-2 lg:mx-20 2xl:mx-28 flex-wrap px-2 gap-10">
        <NewSingleSection />
      </div>
    </div>
  );
};

export default HomeBlogSection;
