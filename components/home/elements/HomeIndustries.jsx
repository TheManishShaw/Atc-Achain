import React from 'react';
import { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useQuery } from '@tanstack/react-query';
import { getIndustryList } from '../../../fetchers/universalFetch';

const HomeIndustries = () => {
  const { isLoading, isError, data, error } = useQuery({
    queryKey: ['industryList'],
    queryFn: getIndustryList,
  });
  const Industry = data?.data?.Industry;

  return (
    <>
      {Industry &&
        Industry.map((industries, index) => (
          <div key={index} className="relative mx-2">
            <div className="">
              <div
                className="w-[400px] lg:w-[600px]"
                key={industries.industry_category_name}
              >
                <img
                  className="rounded-[30px] w-full h-full "
                  src={`/assets/images/industry/industry-1.png`}
                  alt=""
                />
                <div className="opacity-95 w-[350px] lg:w-[500px] mx-auto -mt-24 border bg-white rounded-3xl py-5 px-10  m-8">
                  <p className="text-primary font-semibold text-xl sm:text-2xl line-clamp-1 ">
                    {industries.industry_category_name}
                  </p>
                  <p className="line-clam b-5 font-thin text-gray-500 mt-2 line-clamp-5">
                    {industries.industry_category_desc}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
    </>
  );
};

export default HomeIndustries;
