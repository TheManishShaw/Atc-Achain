import { useQuery } from '@tanstack/react-query';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { getIndustryList } from '../../../fetchers/universalFetch';
import { PlayIcon } from '../../../public/assets/icons/icons';

const IndustrySolutionHome = () => {
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
    <div className=" industry-solution-bg">
      <div className="bg-black/75  h-[90vh] grid grid-cols-1 lg:grid-cols-2 lg:px-32">
        <div className=" grid gap-6 items-center py-10 px-20">
          <div className=" w-full home-industry-solution-bg px-6 py-6 lg:py-14 lg:px-20">
            <select
              className="block w-full -mb-2 px-6 py-4 text-lg text-primary2 border-none rounded-3xl focus:ring-0 focus:outline-none focus:border-none "
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
          <div className=" w-full flex flex-wrap-reverse home-industry-solution-bg px-6 py-6 lg:py-14 lg:px-20">
            <select
              disabled={disabled}
              className="block w-full -mb-2 px-6 py-4  text-lg text-primary2 border-none rounded-3xl focus:ring-0 focus:outline-none focus:border-none "
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
          <div className=" w-full home-industry-solution-bg px-6 py-6 lg:py-14 lg:px-20">
            <button
              disabled
              className={`${
                selectedSubCategory === null
                  ? ' cursor-not-allowed bg-gray-50/60 border-gray-300/60'
                  : 'bg-gray-50 border-gray-300'
              } -mb-2 text-xl w-full  font-bold py-4 text-primary2 border-none rounded-3xl focus:ring-none focus:outline-none focus:border-none `}
            >
              <Link
                href={`/indusrty-details/${selectedSubCategory}`}
                className="flex items-center justify-between"
              >
                Find My Solution <PlayIcon />
              </Link>
            </button>
          </div>
        </div>
        <div className=" w-full bottom-8 right-5 text-white">
          <div className="flex items-center justify-start h-full px-4 lg:mt-20">
            <div className=" lg:pl-52">
              <p className="capitalize font-bold">SOLUTION</p>
              <h2 className="text-4xl font-semibold py-4">Make your convey</h2>
              <p>
                We got alot of Message With the same Questions so here are some
                fast answer for populare Question
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndustrySolutionHome;
