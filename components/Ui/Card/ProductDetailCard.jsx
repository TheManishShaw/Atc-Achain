import { Carousel } from 'flowbite-react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';
import { fadeIn } from '../../../utils/motion';

const ProductDetailCard = ({ data, currentPage, index }) => {
  const router = useRouter();
  const { category, variantId } = router.query;

  const mainCategory = parseInt(category);
  const subCategoryId = parseInt(variantId);

  const productUrl =
    currentPage === 'MainCategory'
      ? `/products/${data?.id}`
      : currentPage === 'SubCategory'
      ? `/products/${mainCategory}/variants/${data?.id}`
      : currentPage === 'VariantsId'
      ? `/products/${mainCategory}/variants/${subCategoryId}/product/${data?.id}`
      : '';

  return (
    <ErrorBoundary>
      <motion.div className="my-4 px-2 mx-auto  bg-transparent">
        <div className="z-auto h-[350px] w-[350px] shadow-lg  overflow-hidden bg-[url('/assets/icons/svg/product-bg.svg')]  bg-cover bg-no-repeat rounded-xl  transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-105 hover:shadow-2xl  duration-200">
          {currentPage === 'MainCategory' || currentPage === 'VariantsId' ? (
            <div className="flex  mx-auto  items-center justify-center  ">
              <img
                className="z-0  mt-14"
                src={
                  data && data?.image_1920 && data?.image_1920
                    ? `${process.env.NEXT_PUBLIC_API_BASE_URL_DEV}${
                        data?.image_1920 ? data?.image_1920 : data?.image_url
                      }`
                    : '/assets/images/products/image 39.png'
                }
                alt="product image"
                width={300}
                height={300}
              />
            </div>
          ) : (
            <div className="h-[285px] w-[300px] overflow-x-hidden mx-auto overflow-hidden">
              <Carousel
                className=""
                indicators={false}
                controls={false}
                slideInterval={3000}
              >
                {data &&
                  data?.image_1920 &&
                  data?.image_1920?.map((image, index) => (
                    <img
                      className="overflow-hidden mt-14"
                      src={
                        data?.image_1920 && data?.image_1920
                          ? `${process.env.NEXT_PUBLIC_API_BASE_URL_DEV}${image}`
                          : '/assets/images/products/image 39.png'
                      }
                      alt="product image"
                      key={index}
                      width={300}
                      height={300}
                    />
                  ))}
              </Carousel>
            </div>
          )}
          <Link href={productUrl}>
            <div className="px-4 py-5 bg-btn-primary flex justify-center items-center text-white rounded-b-xl">
              <div className="text-xl font-semibold tracking-tight ">
                <p className=" line-clamp-1">
                  {data?.name || data?.product_name || data?.display_name}
                </p>
                <p className="text-sm text-gray-400">
                  {data?.price ? data?.price : ''}
                </p>
              </div>
            </div>
          </Link>
        </div>
      </motion.div>
    </ErrorBoundary>
  );
};

export default ProductDetailCard;
