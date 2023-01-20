import { Popover, Transition } from '@headlessui/react';
import { useQuery } from '@tanstack/react-query';
import { Carousel } from 'flowbite-react';
import Link from 'next/link';

import { Fragment, useRef } from 'react';
import { getAllSubCategory } from '../../../fetchers/universalFetch';
import { RightArrowIcon } from '../../../public/assets/icons/icons';
import ProductDetailView from '../../product/elements/ProductDetailView';
import ProductCard from '../Card/ProductCard';
import ProductDetailCard from '../Card/ProductDetailCard';
import Slider from '../slider/Slider';

const solutions = [
  {
    name: 'Insights',
    description: 'Measure actions your users take',
    href: '##',
  },
  {
    name: 'Automations',
    description: 'Create your own targeted content',
    href: '##',
  },
];

const PopOver = ({ id }) => {
  const { isLoading, isError, data, error, onSuccess } = useQuery({
    queryKey: ['popoverItem'],
    queryFn: () => getAllSubCategory(id),
  });

  const popoverSubCategoryDataList = data?.data?.response?.sub_category;
  const buttonRef = useRef(null);
  const timeoutDuration = 200;
  let timeout;
  const closePopover = () => {
    return buttonRef.current?.dispatchEvent(
      new KeyboardEvent('keydown', {
        key: 'Escape',
        bubbles: true,
        cancelable: true,
      })
    );
  };

  const onMouseEnter = (open) => {
    clearTimeout(timeout);
    if (open) return;
    return buttonRef.current?.click();
  };

  const onMouseLeave = (open) => {
    if (!open) return;
    timeout = setTimeout(() => closePopover(), timeoutDuration);
  };

  return (
    <div className="w-full rounded-xl">
      <Popover className="  ">
        {({ open }) => (
          <>
            <div onMouseLeave={onMouseLeave.bind(null, open)}>
              <Popover.Button
                ref={buttonRef}
                className={`
                  ${open ? '' : 'text-opacity-90'}
                  text-white group relative px-3 py-2 rounded-md inline-flex items-center text-base font-medium hover:text-opacity-100 focus:outline-none focus-visible:ring-opacity-75`}
                onMouseEnter={onMouseEnter.bind(null, open)}
                onMouseLeave={onMouseLeave.bind(null, open)}
              >
                <a
                  href="#"
                  className="text-white bg-text-secondary hover:bg-btn-secondary focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm  p-3 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  <RightArrowIcon />
                </a>
              </Popover.Button>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1"
              >
                <Popover.Panel className="absolute  z-50  px-4 mt-0 transform -translate-x-2/3 left-1/3 sm:px-0 ">
                  <div
                    className=" relative z-10 rounded-lg shadow-lg ring-1 ring-black ring-opacity-5"
                    onMouseEnter={onMouseEnter.bind(null, open)}
                    onMouseLeave={onMouseLeave.bind(null, open)}
                  >
                    <div className=" w-full max-w-md bg-white rounded-xl overflow-hidden p-7 ">
                      <div>
                        <h1 className="font-bold w-full text-xl text-text-orange">
                          Showing Sub{' '}
                          <span className="text-primary">categories</span>
                        </h1>
                      </div>

                      <section className="sandbox__carousel">
                        <Slider>
                          {popoverSubCategoryDataList?.map(
                            (dataList, index) => (
                              <div
                                key={index}
                                className="z-auto mx-2 shadow-lg bg-[url('/assets/icons/svg/product-bg.svg')]  bg-cover bg-no-repeat rounded-xl "
                              >
                                <div className="h-[100px] w-[180px]  mx-auto ">
                                  <img
                                    className="overflow-hidden mx-auto mt-6"
                                    src={`${process.env.NEXT_PUBLIC_API_BASE_URL_DEV}${dataList?.image_1920[0]}`}
                                    alt="product image"
                                    width={100}
                                    height={100}
                                  />
                                </div>

                                <Link href={``}>
                                  <div className="px-4 py-1 bg-btn-primary flex justify-center items-center text-white rounded-b-xl">
                                    <div className="text-lg font-semibold tracking-tight ">
                                      <p className=" line-clamp-1">
                                        {dataList?.display_name}
                                      </p>
                                    </div>
                                  </div>
                                </Link>
                              </div>
                            )
                          )}
                        </Slider>
                      </section>
                      <div className="flex items-center mt-3 justify-center w-full">
                        <Link href={`/products`}>
                          <p className="text-primary underline text-center">
                            Show all the products
                          </p>
                        </Link>
                      </div>
                    </div>
                  </div>
                </Popover.Panel>
              </Transition>
            </div>
          </>
        )}
      </Popover>
    </div>
  );
};
export default PopOver;
