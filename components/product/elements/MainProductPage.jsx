import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import _ from "lodash";

import {
  getAllMainCategory,
  getAllSubCategory,
  getAllVariants,
  searchProduct,
} from "../../../fetchers/universalFetch";
import { RightArrowIcon, SearchIcon } from "../../../public/assets/icons/icons";
import {
  BreadCrumbs,
  ErrorBoundary,
  Loader,
  ProductDetailCard,
  ProductNotFound,
} from "../../Ui";
import VariantView from "./VariantView";
import { useForm } from "react-hook-form";

const MainProductPage = ({ currentPage }) => {
  const {
    register,
    getValues,
    setValue,
    reset,
    control,
    formState: { errors },
    handleSubmit,
  } = useForm({ mode: "onChange" });
  const [fetch, setFetch] = useState();
  const router = useRouter();
  const { category, variantId } = router.query;
  const ProductId = parseInt(category);
  const Id = parseInt(variantId);

  const { isLoading, isError, data, error, onSuccess } = useQuery({
    queryKey: [currentPage],
    queryFn:
      currentPage === "MainCategory"
        ? getAllMainCategory
        : currentPage === "SubCategory"
        ? () => getAllSubCategory(ProductId)
        : currentPage === "VariantsId"
        ? () => getAllVariants({ ProductId, Id })
        : "",
  });

  const product =
    currentPage === "MainCategory"
      ? data?.data?.response?.primary_products
      : currentPage === "SubCategory"
      ? data?.data?.response?.sub_category
      : currentPage === "VariantsId"
      ? data?.data?.variants
      : "";

  const searchData = (data) => {
    const { isLoading, isError, error, onSuccess } = useQuery({
      queryKey: [currentPage],
      queryFn: () => searchProduct(data),
    });
    console.log("onSuccess,", onSuccess);
  };
  if (isLoading) return <Loader />;
  if (isError) return <ProductNotFound text="Product Not Found" />;
  return (
    <ErrorBoundary>
      <div className="flex gap-4 items-center my-16 justify-between">
        <div className="w-full">
          {currentPage === "VariantsId" ? (
            <div className="mb-2">
              <BreadCrumbs />
            </div>
          ) : (
            ""
          )}

          <h2 className="text-text-orange text-2xl lg:text-3xl font-bold capitalize">
            Showing all <span className="text-text-primary">the Products</span>
          </h2>
        </div>
        <div className="max-w-lg w-full lg:block hidden">
          <form onSubmit={handleSubmit(searchData)}>
            {" "}
            <div className="bg-white shadow-lg p-2 py-3 rounded-xl border px-5 gap-3 flex items-center justify-center">
              <SearchIcon />
              <input
                type="search"
                className="border-none w-full bg-text-gray/210 rounded-xl focus:ring-none"
                placeholder="Search Product"
                {...register("name")}
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

      {currentPage === "VariantsId" ? (
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
