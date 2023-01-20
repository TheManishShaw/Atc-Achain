import React, { useEffect, useState } from 'react';
import { useMutation, useQuery } from '@tanstack/react-query';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import _ from 'lodash';

import {
  getAllMainCategory,
  getAllSubCategory,
  getAllVariants,
  searchProduct,
} from '../../../fetchers/universalFetch';
import { RightArrowIcon, SearchIcon } from '../../../public/assets/icons/icons';
import {
  BreadCrumbs,
  ErrorBoundary,
  Loader,
  ProductDetailCard,
  ProductNotFound,
  Toaster,
} from '../../Ui';
import VariantView from './VariantView';
import { useForm } from 'react-hook-form';

const MainProductPage = ({ currentPage }) => {
  const {
    register,
    reset,
    formState: { errors },
    handleSubmit,
  } = useForm({ mode: 'onChange' });
  const [searchData, setSearchData] = useState();
  const router = useRouter();
  const { category, variantId } = router.query;
  const ProductId = parseInt(category) !== NaN ? parseInt(category) : '';
  const Id = parseInt(variantId) !== NaN ? parseInt(variantId) : '';
  console.log('ProductId, Id', ProductId, Id);

  const MainCategory = useQuery({
    queryKey: ['MainCategory'],
    queryFn: getAllMainCategory,
  });

  const SubCategory = useQuery({
    queryKey: ['SubCategory'],
    queryFn: () => getAllSubCategory(ProductId),
    enabled: !!ProductId,
  });
  const variants = useQuery({
    queryKey: ['Variants', Id],
    queryFn: () => getAllVariants({ ProductId, Id }),
    enabled: !!Id,
  });

  let product = [];

  if (currentPage === 'MainCategory') {
    product =
      MainCategory?.data?.data?.response?.primary_products &&
      MainCategory?.data?.data?.response?.primary_products;
  }

  if (currentPage === 'SubCategory') {
    product =
      SubCategory?.data?.data?.response?.sub_category &&
      SubCategory?.data?.data?.response?.sub_category;
  }
  if (currentPage === 'VariantsId') {
    product = variants?.data?.data?.variants && variants?.data?.data?.variants;
  }

  const { mutate, isLoading, isError, isSuccess, status, data } = useMutation({
    mutationFn: (searchData) => {
      return searchProduct(searchData);
    },
  });
  if (data?.data?.result?.products?.search_products) {
    product =
      data?.data?.result?.products?.search_products &&
      data?.data?.result?.products?.search_products;
  }
  console.log(
    'data----------------__>',
    data?.data?.result?.products?.search_products
  );

  useEffect(() => {
    if (status === 200) {
      Toaster.fire({
        icon: 'success',
        title: data?.message || data?.data?.result,
      });
    }
    reset();
  }, [isSuccess]);

  const search = (data) => {
    mutate(data);
    setSearchData(data);
    console.log('onSuccess,', data);
  };

  return (
    <ErrorBoundary>
      <div className="flex gap-4 items-center my-16 justify-between">
        <div className="w-full">
          {currentPage === 'VariantsId' ? (
            <div className="mb-2">
              <BreadCrumbs />
            </div>
          ) : (
            ''
          )}

          <h2 className="text-text-orange text-2xl lg:text-3xl font-bold capitalize">
            Showing all <span className="text-text-primary">the Products</span>
          </h2>
        </div>
        <div className="max-w-lg w-full lg:block hidden">
          <form onSubmit={handleSubmit(search)}>
            {' '}
            <div className="bg-white shadow-lg p-2 py-3 rounded-xl border px-5 gap-3 flex items-center justify-center">
              <SearchIcon />
              <input
                type="search"
                className="border-none w-full bg-text-gray/210 rounded-xl focus:ring-none"
                placeholder="Search Product"
                {...register('name')}
              />
              <button
                type="submit"
                className="bg-primary hover:bg-btn-secondary transition-all ease-in-out duration-200 p-3 rounded-xl"
              >
                <RightArrowIcon />
              </button>
            </div>
          </form>
        </div>
      </div>

      {currentPage === 'VariantsId' ? (
        <div className="grid grid-cols-1 px-2 lg:grid-cols-2 gap-6">
          {product &&
            product?.map((product, index) => (
              <VariantView
                currentPage={currentPage}
                key={index}
                index={index}
                data={product}
              />
            ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 2xl:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 gap-6">
          {product &&
            product?.map((product, index) => (
              <ProductDetailCard
                currentPage={currentPage}
                key={index}
                index={index}
                data={product}
              />
            ))}
        </div>
      )}
    </ErrorBoundary>
  );
};

export default dynamic(() => Promise.resolve(MainProductPage), { ssr: false });
