import { useMutation } from "@tanstack/react-query";

import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { conactForm } from "../../../fetchers/universalFetch";
import { CallingIcon } from "../../../public/assets/icons/icons";
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";
import Toaster from "../Toast/Toaster";

const RaiseInquiryForm = (props) => {
  const {
    register,
    getValues,
    setValue,
    reset,
    control,
    formState: { errors },
    handleSubmit,
  } = useForm({ mode: "onChange" });
  const [formdata, setFormData] = useState();

  const { mutate, isLoading, isError, isSuccess, status, data } = useMutation({
    mutationFn: (formdata) => {
      return conactForm(formdata);
    },
  });
  const contactFormDataHandle = (data) => {
    setFormData(data);
    mutate(data);
  };
  useEffect(() => {
    if (isSuccess) {
      Toaster.fire({
        icon: "success",
        title: data?.data?.result || "Form Submitted Successfully",
      });
      props.handleClose();
    }
    reset();
  }, [isSuccess]);

  return (
    <ErrorBoundary>
      <div className=" gap-5 items-center justify-center ">
        <div className=" w-full ">
          <div>
            <form className="" onSubmit={handleSubmit(contactFormDataHandle)}>
              <div className="grid gap-4 mb-8 md:grid-cols-1 lg:grid-cols-2 sm:grid-cols-1">
                <div>
                  <p className="">NAME</p>
                  <input
                    {...register("name", {
                      required: "Please enter your name",
                      maxLength: 100,
                    })}
                    type="text"
                    placeholder="Enter your name.."
                    className="rounded-xl h-14 w-full focus:ring-primary flex mt-3 border-gray-200   "
                  ></input>
                  {errors.name && (
                    <span className="text-red-500">{errors.name.message}</span>
                  )}
                </div>
                <div>
                  <p>EMAIL ADDRESS</p>
                  <input
                    {...register("email_from", {
                      required: "Please enter your email",
                      pattern: {
                        value: /\S+@\S+\.\S+/,
                        message: "Enter a valid email",
                      },
                    })}
                    type="text"
                    placeholder="Enter your name.."
                    className="rounded-xl h-14 mt-3 focus:ring-primary  border-gray-200 w-full"
                  ></input>
                  {errors.email_from && (
                    <span className="text-red-500">
                      {errors.email_from.message}
                    </span>
                  )}
                </div>
              </div>
              <div className="grid gap-4 mb-8 md:grid-cols-1 lg:grid-cols-2 sm:grid-cols-1">
                <div>
                  <p>PHONE NO.</p>
                  <input
                    {...register("phone", {
                      required: "Please enter your phone no.",
                    })}
                    type="number"
                    placeholder="Enter your phone no."
                    className="rounded-xl h-14 mt-3 focus:ring-primary  border-gray-200 w-full"
                  ></input>
                  {errors.phone && (
                    <span className="text-red-500">{errors.phone.message}</span>
                  )}
                </div>
                <div>
                  <p className="">COMPANY NAME</p>
                  <input
                    {...register("partner_name", {
                      required: "Please enter your company name",
                      maxLength: 100,
                    })}
                    type="text"
                    placeholder="Enter your company name."
                    className="rounded-xl h-14 w-full focus:ring-primary flex mt-3 border-gray-200   "
                  ></input>
                  {errors.partner_name && (
                    <span className="text-red-500">
                      {errors.partner_name.message}
                    </span>
                  )}
                </div>
              </div>
              <p className="">MESSAGES</p>
              <textarea
                {...register("description", {
                  required: "Write something",
                  maxLength: 5000,
                })}
                type="text"
                rows={6}
                placeholder="Enter your messages.."
                className="rounded-lg w-full  focus:ring-primary border-gray-200"
              ></textarea>
              {errors.description && (
                <span className="text-red-500">
                  {errors.description.message}
                </span>
              )}
              <div className="flex items-center my-8">
                <div className="w-full hidden lg:block">
                  <div className="py-4 mt-lg w-full  rounded-[30px] flex labelChips">
                    <span className="self-center  p-2 bg-purple-600/20 rounded-xl border-2 border-purple-300">
                      <p className="p-2 bg-purple-700 rounded-xl">
                        <CallingIcon />
                      </p>
                    </span>
                    <div>
                      <p className="pt-2 ml-2 text-purple-800 font-bold">
                        Mobile Number
                      </p>
                      <p className="ml-2">03 482 394 123</p>
                    </div>
                  </div>
                </div>

                <div className="w-full">
                  <button
                    disabled={isLoading}
                    type="submit"
                    className="bg-orange-500 w-full  text-white rounded-lg p-[13.5px]"
                  >
                    {isLoading ? "loading..." : "send Inquiry"}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </ErrorBoundary>
  );
};

export default RaiseInquiryForm;
