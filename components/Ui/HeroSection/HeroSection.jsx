import { useQuery } from '@tanstack/react-query';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { getIndustryList } from '../../../fetchers/universalFetch';
import { PlayIcon } from '../../../public/assets/icons/icons';

const HeroSection = () => {
  const [selected, setSelected] = useState({});
  const [subCategory, setSubCategory] = useState([]);
  const [selectedSubCategory, setSelectedSubCategory] = useState(null);
  const { isLoading, isError, data, error } = useQuery({
    queryKey: ['industryList'],
    queryFn: getIndustryList,
  });
  const Industry = data?.data?.Industry;
  const selectedIndusrty = (e) => {
    const indList = e?.target?.value || e;

    const SubIndustry = Industry?.filter((ind) => ind?.id == indList);
    setSubCategory(SubIndustry[0]?.industry_subcategory_name);

    const id = SubIndustry[0]?.industry_subcategory_name;
  };
  const subCategories = (e) => {
    setSelectedSubCategory(e.target.value);
  };

  const disabled = subCategory.length === 0;
  return (
    <section className="relative h-96 lg:h-[85vh] -mt-20 flex flex-col items-start  justify-evenly text-start text-white py-0 lg:px-20 sm:px-2 px-8">
      <div className="video-docker rounded-b-3xl  absolute bottom-0 top-0 left-0 w-full h-full overflow-hidden">
        <video
          className="min-w-full min-h-full absolute object-cover"
          src="https://josecuono.dev/video1.mp4"
          type="video/mp4"
          autoPlay
          muted
          loop
        ></video>
        <div className="min-w-full min-h-full bg-[#120202] opacity-70 absolute object-cover"></div>
      </div>
      <div className="video-content z-0 w-full pt-28 md:w-full sm:full lg:w-[100vh]">
        <h1 className="font-semibold tracking-widest lg:font-bold  2xl:text-6xl text-2xl text-white  lg:text-4xl sm:text-lg md:text-2xl">
          Belting solutions set to fix all your customized needs.
        </h1>
        <div className=" lg:w-5/6 w-5/6 py-6 md:w-full">
          <h3 className=" leading-[30px] text-lg lg:text-2xl text-white opacity-75">
            Thriving in the manufacturing Industry, We build durable & robust
            machines which are built to last for generations.
          </h3>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 lg:mt-0 mt-96 gap-3">
          <div className="w-full">
            <select
              className="block w-full px-4 py-4 text-lg text-gray-900 border border-gray-300 rounded-3xl bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              onChange={(e) => selectedIndusrty(e)}
            >
              <option slected>Select Category</option>
              {Industry?.map((industry, index) => (
                <option key={index} value={industry.id}>
                  {industry?.industry_category_name}
                </option>
              ))}
            </select>
          </div>
          <div>
            <select
              disabled={disabled}
              className="block w-full px-6 py-4 text-lg text-gray-900 border border-gray-300 rounded-3xl bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              onChange={(e) => subCategories(e)}
            >
              <option slected>Select Sub Category</option>
              {subCategory?.map((sub, index) => (
                <option key={index} value={sub?.id}>
                  {sub?.name}
                </option>
              ))}
            </select>
          </div>
          <div className="w-full">
            <Link href={`/indusrty-details/${selectedSubCategory}`}>
              <button
                className={`${
                  selectedSubCategory === null
                    ? ' cursor-not-allowed bg-gray-50/60 border-gray-300/60'
                    : 'bg-gray-50 border-gray-300'
                }  flex items-center justify-between  w-full px-4 py-4 text-lg text-gray-900 border  rounded-3xl  focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
              >
                Find Solution <PlayIcon />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
