import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';
import 'react-multi-carousel/lib/styles.css';
import { useQuery } from '@tanstack/react-query';
import { getAllMainCategory } from '../../../fetchers/universalFetch';
import { fadeIn } from '../../../utils/motion';
import { CustomError } from '../common/error/customError';
import Loader from '../common/loader/Loader';

const ProductCard = () => {
  const { isLoading, isError, data, error, isIdle, onSuccess } = useQuery({
    queryKey: ['maincategory'],
    queryFn: getAllMainCategory,
  });

  const productData = data?.data?.response?.primary_products;

  return (
    <>
      {isIdle ? (
        'Not ready...'
      ) : isLoading ? (
        <Loader />
      ) : isError ? (
        <CustomError message={error.message} />
      ) : (
        productData &&
        productData?.slice(6)?.map((product, index) => {
          return (
            <motion.div
              variants={fadeIn('right', 'spring', index * 0.2, 0.75)}
              className="m-4"
              key={index}
            >
              <div className="w-full  bg-white rounded-3xl border border-gra-400 dark:bg-gray-800 dark:border-gray-700">
                <div className=" p-4 mx-auto ">
                  <Image
                    className="rounded-3xl mx-auto"
                    width={500}
                    height={300}
                    src={
                      product?.image_1920 && product?.image_1920
                        ? `${process.env.NEXT_PUBLIC_API_BASE_URL_DEV}${
                            product?.image_1920
                              ? product?.image_1920
                              : product?.image_url
                          }`
                        : '/assets/images/products/aluminium-kettenfoerdersystem-4-modular-automation-1380x640_01 3.png'
                    }
                    alt={product?.name}
                  />
                </div>
                <div className="px-5 pb-5">
                  <a href="#">
                    <h2 className="text-xl font-bold mb-3 text-text-secondary dark:text-white line-clamp-1">
                      {product?.name}
                    </h2>
                  </a>

                  <div className="flex items-center justify-between w-96">
                    <span className="text-md font-normal text-text-primary opacity-75 dark:text-white line-clamp-2">
                      Lorem ipsum is placeholder text commonly used in the
                      graphic, print, and publishing Multi Hinge transporter
                      Belt. Roller Chain & Multi Hinge transporter Belt.
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })
      )}
    </>
  );
};

export default ProductCard;
