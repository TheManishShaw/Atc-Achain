import React from 'react';

const PopularProductsGallery = () => {
  return (
    <section class="overflow-hidden text-gray-700 ">
      <div class="container px-5 py-2 mx-auto lg:pt-12 lg:px-32">
        <div className="flex items-center justify-center">
          <div className=" my-10">
            <h1 className="text-4xl my-6 text-primary font-semibold text-center">
              Our Recent Projects
            </h1>
            <p className="max-w-lg text-center text-lg">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.{' '}
            </p>
          </div>
        </div>
        <div className="flex flex-wrap -m-1 md:-m-2">
          <div className="flex flex-wrap w-1/3">
            <div className="w-full p-1 md:p-2">
              <img
                alt="gallery"
                className="block object-cover object-center w-full h-full rounded-lg"
                src="/assets/images/about/gallary-1.jpg"
              />
            </div>
          </div>
          <div className="flex flex-wrap w-1/3">
            <div className="w-full p-1 md:p-2">
              <img
                alt="gallery"
                className="block object-cover object-center w-full h-full rounded-lg"
                src="/assets/images/about/gallery-2.jpg"
              />
            </div>
          </div>
          <div className="flex flex-wrap w-1/3">
            <div className="w-full p-1 md:p-2">
              <img
                alt="gallery"
                className="block object-cover object-center w-full h-full rounded-lg"
                src="/assets/images/about/gallery-3.jpg"
              />
            </div>
          </div>
          <div className="flex flex-wrap w-1/3">
            <div className="w-full p-1 md:p-2">
              <img
                alt="gallery"
                className="block object-cover object-center w-full h-full rounded-lg"
                src="/assets/images/about/gallery-4.jpg"
              />
            </div>
          </div>
          <div className="flex flex-wrap w-1/3">
            <div className="w-full p-1 md:p-2">
              <img
                alt="gallery"
                className="block object-cover object-center w-full h-full rounded-lg"
                src="/assets/images/about/gallery-5.jpg"
              />
            </div>
          </div>
          <div className="flex flex-wrap w-1/3">
            <div className="w-full p-1 md:p-2">
              <img
                alt="gallery"
                className="block object-cover object-center w-full h-full rounded-lg"
                src="/assets/images/about/gallery-6.jpg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PopularProductsGallery;
