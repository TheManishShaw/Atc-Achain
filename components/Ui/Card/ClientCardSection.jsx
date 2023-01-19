import React from "react";
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";
import { useQuery } from "@tanstack/react-query";
import { getAllClients } from "../../../fetchers/universalFetch";
import Slider from "../slider/Slider";
import Loader from "../common/loader/Loader";
import { ClientLoader } from "../common/loader/customLoader";
import { CustomError } from "../common/error/customError";
import Image from "next/image";

const ClientCardSection = () => {
  const { isLoading, isError, data, error, isIdle, onSuccess } = useQuery({
    queryKey: ["clients"],
    queryFn: getAllClients,
  });
  const clients = data?.data?.clients;
  return (
    <ErrorBoundary>
      <div className=" lg:max-w-6xl md:max-w-3xl sm:max-w-2xl  max-w-lg w-full rounded-3xl pb-5 mb-6 lg:p-12 p-3 bg-primary">
        <div className="flex flex-col items-center justify-center text-white mb-6">
          <p>Wall of fame</p>
          <h1 className="font-bold text-4xl sm:text-3xl">Our Clients</h1>
        </div>
        <section className="sandbox__carousel">
          <Slider>
            {isIdle ? (
              "Not ready..."
            ) : isLoading ? (
              <ClientLoader />
            ) : isError ? (
              <CustomError message={error.message} />
            ) : (
              clients?.map((image, i) => {
                return (
                  <div key={i} className="max-w-[100px] min-w-[100px] mx-4">
                    {image?.image_url ? (
                      <Image
                        key={i}
                        width={800}
                        height={800}
                        src={
                          image?.image_url
                            ? `${process.env.NEXT_PUBLIC_API_BASE_URL_DEV}${image?.image_url}`
                            : ""
                        }
                        alt={image?.name}
                        className="mx-2 rounded-lg h-20"
                      />
                    ) : (
                      ""
                    )}
                  </div>
                );
              })
            )}
          </Slider>
        </section>
      </div>
    </ErrorBoundary>
  );
};

export default ClientCardSection;
