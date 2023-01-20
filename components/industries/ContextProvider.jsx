import { Accordion, Carousel } from 'flowbite-react';
import React from 'react';
import ReactHtmlParser from 'react-html-parser';
import { Disclosure } from '@headlessui/react';
import { RightArrowIcon } from '../../public/assets/icons/icons';
import { ArrowUpCircleIcon, ChevronUpIcon } from '@heroicons/react/20/solid';
import { useQuery } from '@tanstack/react-query';
import { getIndustryList } from '../../fetchers/universalFetch';
import { useState } from 'react';
import { Tab } from '@headlessui/react';
import Image from 'next/image';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}
const ContextProvider = () => {
  const [subCategoryList, setSubCategoryList] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [showcontainer, setShowcontainer] = useState(false);

  const [clickedItem, setClickedItem] = useState(1);

  const handleClick = (item, id) => {
    console.log('id----------------------', id);
    const SubIndustry = Industry?.filter((ind) => ind?.id == id);
    console.log('SubIndustry details', SubIndustry);
    setSubCategory(SubIndustry);
    setSubCategoryList(SubIndustry[0]?.industry_subcategory_name);
    console.log('subCategoryList', subCategoryList);
    setClickedItem(id);
    setShowcontainer(!showcontainer);
  };

  const { isLoading, isError, data, error } = useQuery({
    queryKey: ['industry'],
    queryFn: getIndustryList,
  });

  const Industry = data?.data?.Industry;
  console.log('Industry', Industry);

  let [categories] = useState({
    Recent: [
      {
        id: 1,
        title: 'Does drinking coffee make you smarter?',
        date: '5h ago',
        commentCount: 5,
        shareCount: 2,
      },
      {
        id: 2,
        title: "So you've bought coffee... now what?",
        date: '2h ago',
        commentCount: 3,
        shareCount: 2,
      },
    ],
    Popular: [
      {
        id: 1,
        title: 'Is tech making coffee better or worse?',
        date: 'Jan 7',
        commentCount: 29,
        shareCount: 16,
      },
      {
        id: 2,
        title: 'The most innovative things happening in coffee',
        date: 'Mar 19',
        commentCount: 24,
        shareCount: 12,
      },
    ],
    Trending: [
      {
        id: 1,
        title: 'Ask Me Anything: 10 answers to your questions about coffee',
        date: '2d ago',
        commentCount: 9,
        shareCount: 5,
      },
      {
        id: 2,
        title: "The worst advice we've ever heard about coffee",
        date: '4d ago',
        commentCount: 1,
        shareCount: 2,
      },
    ],
  });
  return (
    <>
      <div className="w-full ">
        <div className=" w-full  rounded-2xl ">
          {Industry &&
            Industry.map((industries, index) => (
              <Disclosure key={index}>
                {({ open }) => (
                  <>
                    <div
                      className={` ${
                        open ? 'industryactive' : 'industry text-primary'
                      } py-10 px-8 w-80 hover:bg-industryactive focus:ring-0`}
                      onClick={() => handleClick(industries, industries.id)}
                    >
                      <Disclosure.Button className="flex w-full px-8 items-center justify-between rounded-lg text-left text-sm font-medium focus:outline-none  focus-visible:ring-none">
                        <span> {industries?.industry_category_name}</span>
                        <ChevronUpIcon
                          className={`${
                            open ? 'rotate-180 text-white transform' : ''
                          } h-8 w-8`}
                        />
                      </Disclosure.Button>
                    </div>
                    <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                      <div className="w-full flex gap-4 sm:px-0">
                        <Tab.Group>
                          <Tab.List className="block rounded-xl w-80 ">
                            {subCategoryList.map((category, index) => (
                              <Tab
                                key={index}
                                className={({ selected }) =>
                                  classNames(
                                    ' rounded-lg  py-10 w-80 px-6 text-sm font-medium leading-5 ',
                                    'ring-white ring-opacity-60 ring-offset-2 focus:outline-none focus:ring-none',
                                    selected
                                      ? 'industryactive text-white'
                                      : 'text-primary2 hover:bg-white/[0.12] industry hover:text-primary'
                                  )
                                }
                              >
                                {category?.name}
                              </Tab>
                            ))}
                          </Tab.List>
                          <Tab.Panels className="mt-2 w-full">
                            {subCategoryList.map((category, idx) => (
                              <Tab.Panel
                                key={idx}
                                className={classNames(
                                  'rounded-xl  p-3',
                                  'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2'
                                )}
                              >
                                {category?.multi_images != 0 && (
                                  <div
                                    id="custom_carousol"
                                    className="productimg max-w-3xl h-[29rem]  mx-auto   "
                                  >
                                    <Carousel>
                                      {category?.multi_images.map(
                                        (image, index) => (
                                          <div
                                            key={index}
                                            className="  place-items-center"
                                          >
                                            <img
                                              src={`${process.env.NEXT_PUBLIC_API_BASE_URL_DEV}${image?.image_url}`}
                                              alt="product image"
                                              className="rounded-2xl h-96 w-full  relative"
                                            />
                                            <div className="absolute bottom-0 productname  grid place-items-center productdetail  bg-gray-500   w-full h-12 rounded-b-2xl text-center text-blue-900 font-semibold">
                                              <p className="text-sm">
                                                {image?.name}
                                              </p>
                                            </div>
                                          </div>
                                        )
                                      )}
                                    </Carousel>
                                  </div>
                                )}

                                <h1 className="text-primary text-2xl font-semibold py-6">
                                  Product description
                                </h1>
                                <h3 className="text-sm font-medium leading-5">
                                  {ReactHtmlParser(category.description)}
                                </h3>
                              </Tab.Panel>
                            ))}
                          </Tab.Panels>
                        </Tab.Group>
                      </div>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ))}
        </div>
      </div>
    </>
  );
};

export default ContextProvider;
