import React, { useEffect, useState } from 'react';
import { Tab } from '@headlessui/react';
import Image from 'next/image';
import ReactHtmlParser from 'react-html-parser';
import { Carousel } from 'flowbite-react';
import { useStateContext } from '../ContextProvider';
import { useQuery } from '@tanstack/react-query';
import { getIndustryList } from '../../../fetchers/universalFetch';
import { Loader, ProductNotFound } from '../../Ui';
const IndustryDetails = () => {
  const [sliderImgs, setSliderImgs] = useState([]);
  const [subCategoryList, setSubCategoryList] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [showcontainer, setShowcontainer] = useState(false);

  const [clickedItem, setClickedItem] = useState(1);

  const handleClick = (item, id) => {
    const SubIndustry = Industry?.filter((ind) => ind?.id == id);
    console.log('SubIndustry details', SubIndustry);
    setSubCategory(SubIndustry);
    setSubCategoryList(SubIndustry[0]?.industry_subcategory_name);

    setClickedItem(id);
    setShowcontainer(!showcontainer);
  };

  const [isActive, setIsActive] = useState(false);

  const { isLoading, isError, data, error } = useQuery({
    queryKey: ['industry'],
    queryFn: getIndustryList,
  });

  const Industry = data?.data?.Industry;
  if (isLoading) return <Loader />;
  if (isError) return <ProductNotFound text="No Industry Data Found" />;
  return (
    <>
      <div className=" industry_section sm:flex sm:w-full">
        <div className="tabgroup_buttons">
          <Tab.Group>
            <Tab.List className="grid grid-col-1 mt-10 justify-items-center sm:justify-start ">
              {Industry?.map((industry, i) => (
                <Tab
                  key={i}
                  className={` h-28 ${
                    clickedItem === industry?.id ? 'industryactive' : 'industry'
                  }`}
                  onClick={() => handleClick(industry, industry.id)}
                >
                  {industry?.industry_category_name}
                </Tab>
              ))}
            </Tab.List>
          </Tab.Group>
        </div>

        {subCategory.map((item, index) => (
          <div className="Allcontent  space-y-6 ">
            <br />
            <div
              key={index}
              id="custom_carousol"
              className="productimg max-w-4xl mx-auto   "
            >
              <Carousel>
                <div key={index} className=" grid place-items-center">
                  <Image
                    src={``}
                    alt="product image"
                    className="rounded-2xl w-full relative"
                    width={500}
                    height={500}
                  />
                  <div className="absolute bottom-0 productname  grid place-items-center productdetail  bg-gray-500   w-full h-12 rounded-b-2xl text-center text-blue-900 font-semibold">
                    <p className="text-sm"></p>
                  </div>
                </div>
              </Carousel>
            </div>

            <div className="myTabContent1 ">
              <div>
                <div className="alldata p-4 text-[#3B4355] ">
                  <p className="datatitle text-[24px] font-semibold ">
                    {ReactHtmlParser(item?.industry_category_desc)}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default IndustryDetails;
