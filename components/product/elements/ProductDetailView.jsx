import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
// Internal Imports
import { getProductDetails } from "../../../fetchers/universalFetch";
import { CubeIcon, ProductBgIcon } from "../../../public/assets/icons/icons";

import {
  CustomSlider,
  ErrorBoundary,
  Loader,
  Modal,
  Slider,
  SubProducts,
  TitleSection,
} from "../../Ui";
import RaiseInquiryForm from "../../Ui/ContactForm/RaiseInquiryForm";
import DownloadAttachments from "../../Ui/common/DownloadAttachments";

const ProductDetailView = (currentPage) => {
  const [showModal, setShowModal] = useState({ isShow: false, name: "" });
  const router = useRouter();
  const { category, variantId, productId } = router.query;

  const { isLoading, isError, data, error, onSuccess } = useQuery({
    queryKey: ["product"],
    queryFn: () => getProductDetails(category, variantId, productId),
  });
  const product = data?.data?.final_product;
  const raiseInquiry = () => {
    setShowModal({
      isShow: true,
      name: "Inquiry Form",
    });
  };
  const downloadAttachments = () => {
    setShowModal({
      isShow: true,
      name: "Download Attchments",
    });
  };
  const modalhide = () => {
    setShowModal((prev) => ({ ...prev, isShow: false }));
  };
  if (isLoading) return <Loader />;

  return (
    <ErrorBoundary>
      {showModal.isShow ? (
        <Modal
          title={
            showModal.name == "Inquiry Form"
              ? " Inquiry Form"
              : showModal.name == "Download Attchments"
              ? " Download Attchments"
              : ""
          }
          handleClose={modalhide}
        >
          {showModal.name === "Inquiry Form" ? (
            <RaiseInquiryForm
              setShowModal={setShowModal}
              handleClose={modalhide}
            />
          ) : showModal.name === "Download Attchments" ? (
            <DownloadAttachments
              setShowModal={setShowModal}
              handleClose={modalhide}
              data={product}
            />
          ) : (
            ""
          )}
        </Modal>
      ) : (
        ""
      )}
      <div className="">
        <div className="pt-6">
          <div className="mx-auto px-3 pt-10 pb-16 sm:px-4 lg:grid   lg:gap-x-8 lg:px-4 lg:pt-16 lg:pb-24">
            <div className="lg:flex  block gap-4 bg-white border rounded-xl pb-6 shadow-lg">
              <div className="bg-primary relative rounded-lg w-full  p-16 text-white py-12 pb-20">
                <span className="absolute top-0 -right-0">
                  <ProductBgIcon />
                </span>

                <div className="py-4">
                  <h1 className="font-bold text-2xl w-52">
                    {product?.product_name}
                  </h1>
                </div>
                <div className="py-4 mb-2 lg:mb-4">
                  <p className="text-text-gray">{product?.description}</p>
                </div>
                <div>
                  <div className="grid grid-cols-2 gap-4 mb-5">
                    {product?.product_specification.map((specification, i) => (
                      <div key={i} className="flex gap-4 items-center w-full">
                        <div className="bg-white p-3 rounded-lg">
                          <CubeIcon />
                        </div>
                        <div>
                          <h5>
                            {specification?.name &&
                              specification?.name?.split(":")[0]}
                          </h5>
                          <p>
                            {" "}
                            {specification?.name &&
                              specification?.name?.split(":")[1]}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="w-full mb-4">
                <div className="py-8 px-4">
                  <div className="text-white flex items-center justify-center gap-4">
                    <button
                      onClick={() => raiseInquiry()}
                      className="bg-primary rounded-md px-6 py-2"
                    >
                      Raise Inquiry
                    </button>
                    <button
                      onClick={() => downloadAttachments()}
                      className="bg-bg-blue rounded-md px-6 py-2"
                    >
                      Attachments
                    </button>
                  </div>
                  <div className=" max-w-2xl min-w-3xl mx-auto w-full">
                    {/*  <img
                      className="overflow-hidden mt-14 mx-auto w-[80%] "
                      src={
                        product?.image_url
                          ? `${process.env.NEXT_PUBLIC_API_BASE_URL_DEV}${product?.image_url}`
                          : "/assets/images/products/image 39.png"
                      }
                      alt="product image"
                    />*/}
                    <CustomSlider
                      image={product?.image_url}
                      data={product?.multi_img}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="pb-6">
          <TitleSection />
          <div className=" hidden lg:flex gap-20 ">
            <img
              className="pl-44  z-10"
              src="/assets/icons/svg/productHangerIcon.svg"
            />

            <img
              className=" pr-64 z-10"
              src="/assets/icons/svg/productHangerIcon.svg"
            />
          </div>
        </div>
        <div className=" px-10">
          <section className="sandbox__carousel">
            <Slider>
              <SubProducts />
            </Slider>
          </section>
        </div>
      </div>
    </ErrorBoundary>
  );
};

export default ProductDetailView;
