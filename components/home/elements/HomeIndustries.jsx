import React from 'react';
import { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
const indusExpert = [
  {
    image: './assets/images/industry/industry-1.png',
    title: 'Food & beverages Industry',
    text: `ATC chains offer a one stop solution for all your beverage
      necessities. We produce PET bottles, jars, containers and
      glass, bottle case, labeler and assemble so brands don’t
      have to bother about the labels & the process of white
      assembling. We deliver premium set of services that
      helps brand deliver premium products .`,
  },

  {
    image: './assets/images/industry/industry-1.png',
    title: 'Food & beverages Industry',
    text: `ATC chains offer a one stop solution for all your beverage
  necessities. We produce PET bottles, jars, containers and
  glass, bottle case, labeler and assemble so brands don’t
  have to bother about the labels & the process of white
  assembling. We deliver premium set of services that
  helps brand deliver premium products.`,
  },
  {
    image: './assets/images/industry/industry-1.png',
    title: 'Food & beverages Industry',
    text: `ATC chains offer a one stop solution for all your beverage
  necessities. We produce PET bottles, jars, containers and
  glass, bottle case, labeler and assemble so brands don’t
  have to bother about the labels & the process of white
  assembling. We deliver premium set of services that
  helps brand deliver premium products.`,
  },
  {
    image: './assets/images/industry/industry-1.png',
    title: 'Food & beverages Industry',
    text: `ATC chains offer a one stop solution for all your beverage
  necessities. We produce PET bottles, jars, containers and
  glass, bottle case, labeler and assemble so brands don’t
  have to bother about the labels & the process of white
  assembling. We deliver premium set of services that
  helps brand deliver premium products.`,
  },
];
const HomeIndustries = () => {
  return (
    <>
      {indusExpert &&
        indusExpert.map((detail) => (
          <div className="relative mx-2">
            <div className="">
              <div className="w-[400px] lg:w-[600px]" key={detail.title}>
                <img
                  className="rounded-[30px] w-full h-full "
                  src={detail.image}
                  alt=""
                />
                <div className="opacity-95 w-[350px] lg:w-[500px] mx-auto -mt-24 border bg-white rounded-3xl py-5 px-10  m-8">
                  <p className="text-primary font-semibold text-xl sm:text-2xl line-clamp-1 ">
                    {detail.title}
                  </p>
                  <p className="line-clam b-5 font-thin text-gray-500 mt-2 line-clamp-5">
                    {detail.text}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
    </>
  );
};

export default HomeIndustries;
