import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { CubeIcon } from "../../../public/assets/icons/icons";

const VariantView = ({ data, currentPage, index }) => {
  const router = useRouter();
  const { category, variantId } = router.query;

  const mainCategory = parseInt(category);
  const subCategoryId = parseInt(variantId);

  const productUrl =
    currentPage === "MainCategory"
      ? `/products/${data?.id}`
      : currentPage === "SubCategory"
      ? `/products/${mainCategory}/variants/${data?.id}`
      : currentPage === "VariantsId"
      ? `/products/${mainCategory}/variants/${subCategoryId}/product/${data?.id}`
      : "";

  return (
    <>
      {index % 2 === 0 ? (
        <div className="flex  rounded-lg ">
          <div className=" bg-white w-full rounded-l-lg mx-auto ">
            <img
              className="mx-auto p-2"
              src={
                data?.image_url
                  ? `${process.env.NEXT_PUBLIC_API_BASE_URL_DEV}${data?.image_url}`
                  : "/assets/images/products/productImageNotFound.jpg"
              }
            />
          </div>
          <div className="variant-bg rounded-lg overflow-hidden mx-auto w-full py-4 px-4 pr-16 text-white">
            <Link href={productUrl} className="cusros-pointer">
              <div className="pb-4">
                <h1 className="font-bold text-lg line-clamp-2">
                  {data?.product_name}
                </h1>
              </div>

              <div className="grid grid-cols-2 w-full  gap-3">
                {data?.weight && (
                  <div className="flex gap-4 items-center w-full">
                    <div className="bg-white p-3 hidden lg:block rounded-lg">
                      <CubeIcon />
                    </div>
                    <div>
                      <h5>Height</h5>
                      <p>{data?.height}</p>
                      <p></p>
                    </div>
                  </div>
                )}
                {data?.weight && (
                  <div className="flex gap-4 items-center w-full">
                    <div className="bg-white hidden lg:block p-3 rounded-lg">
                      <CubeIcon />
                    </div>
                    <div>
                      <h5>Weight</h5>
                      <p>{data?.weight}</p>
                      <p></p>
                    </div>
                  </div>
                )}
                {data?.color_custom && (
                  <div className="flex gap-4">
                    <div className="flex gap-4 items-center w-full">
                      <div className="bg-white hidden lg:block p-3 rounded-lg">
                        <CubeIcon />
                      </div>
                      <div>
                        <h5>Colour</h5>
                        <p>{data?.color_custom}</p>
                        <p></p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </Link>
          </div>
        </div>
      ) : (
        <div className="flex rounded-lg ">
          <div className="variant-bg-right rounded-lg overflow-hidden mx-auto w-full py-4 px-4 pl-16 text-white">
            <Link href={productUrl} className="cusros-pointer">
              <div className="pb-4 ">
                <h1 className="font-bold text-lg line-clamp-2">
                  {data?.product_name}
                </h1>
              </div>

              <div className="grid grid-cols-2 w-full  gap-3">
                {data?.weight && (
                  <div className="flex gap-4 items-center w-full">
                    <div className="bg-white p-3 hidden lg:block rounded-lg">
                      <CubeIcon />
                    </div>
                    <div>
                      <h5>Height</h5>
                      <p>{data?.height}</p>
                      <p></p>
                    </div>
                  </div>
                )}
                {data?.weight && (
                  <div className="flex gap-4 items-center w-full">
                    <div className="bg-white hidden lg:block p-3 rounded-lg">
                      <CubeIcon />
                    </div>
                    <div>
                      <h5>Weight</h5>
                      <p>{data?.weight}</p>
                      <p></p>
                    </div>
                  </div>
                )}
                {data?.color_custom && (
                  <div className="flex gap-4">
                    <div className="flex gap-4 items-center w-full">
                      <div className="bg-white hidden lg:block p-3 rounded-lg">
                        <CubeIcon />
                      </div>
                      <div>
                        <h5>Colour</h5>
                        <p>{data?.color_custom}</p>
                        <p></p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </Link>
          </div>
          <div className=" bg-white w-full rounded-l-lg mx-auto ">
            <img
              className="mx-auto p-2"
              src={
                data?.image_url
                  ? `${process.env.NEXT_PUBLIC_API_BASE_URL_DEV}${data?.image_url}`
                  : "/assets/images/products/productImageNotFound.jpg"
              }
            />
          </div>
        </div>
      )}
    </>
  );
};

export default VariantView;
