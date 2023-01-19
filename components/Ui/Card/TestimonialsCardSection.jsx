import { useQuery } from '@tanstack/react-query';
import Image from 'next/image';
import React from 'react';
import _ from 'lodash';
import 'react-multi-carousel/lib/styles.css';
import { getAllTestimonials } from '../../../fetchers/universalFetch';
import Loader from '../common/loader/Loader';
import { CustomError } from '../common/error/customError';

const TestimonialsCardSection = () => {
  const { isLoading, isError, data, error, isIdle } = useQuery(
    ['testimonials'],
    getAllTestimonials
  );
  const testimonials = data?.data?.Testi_Monial;

  return (
    <>
      {isIdle ? (
        'Not ready...'
      ) : isLoading ? (
        <Loader />
      ) : isError ? (
        <CustomError message={error.message} />
      ) : (
        testimonials &&
        testimonials?.map((testimonial, i) => {
          return (
            <div
              key={i}
              className="mb-8 m-4  border border-gray-200 rounded-2xl shadow-lg dark:border-gray-700 md:mb-12"
            >
              <figure className="flex flex-col items-start justify-start p-8 text-start bg-white border-b border-gray-200 rounded-2xl md:border-r dark:bg-gray-800 dark:border-gray-700">
                <blockquote className="max-w-2xl  mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white line-clamp-1">
                    {testimonial?.title}
                  </h3>
                  <p className="my-4 font-light line-clamp-5 h-30 w-96">
                    {testimonial?.testi_monial_des}
                  </p>
                </blockquote>
                <figcaption className="flex items-center justify-center space-x-3">
                  <Image
                    width={50}
                    height={50}
                    className="rounded-full"
                    src={
                      testimonial?.image_url && testimonial?.image_url
                        ? `${process.env.NEXT_PUBLIC_API_BASE_URL_DEV}${testimonial?.image_url}`
                        : '/assets/images/avatar/avatar-1.jpg'
                    }
                    alt="profile picture"
                  />
                  <div className="space-y-0.5 font-medium dark:text-white text-left">
                    <div>{testimonial?.name}</div>
                    <div className="text-sm font-light text-gray-500 dark:text-gray-400">
                      {testimonial?.function
                        ? testimonial?.function
                        : 'Designation'}
                    </div>
                  </div>
                </figcaption>
              </figure>
            </div>
          );
        })
      )}
    </>
  );
};

export default TestimonialsCardSection;
