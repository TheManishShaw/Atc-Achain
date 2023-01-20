import Image from 'next/image';
import React from 'react';
import { AboutPageIcon } from '../../public/assets/icons/icons';
import { CommonBtn, Slider, TeamSection, BannerImage } from '../Ui';
import PopularProductsGallery from './elements/PopularProductsGallery';

const AboutPage = () => {
  return (
    <>
      <BannerImage
        text={'Belting solutions set to fix all your customized needs.'}
        description="Thriving in the manufacturing Industry, We build durable & robust machines which are built to last for generations."
        classes="bg-[#120202]"
      />
      <div class="relative pt-20 pb-20 lg:pb-0 px-4 lg:px-20">
        <div class=" inset-0 flex items-center justify-start gap-6">
          <div class="w-32 lg:w-96 border-2 bg-black border-black"></div>
          <h1 className="text-5xl font-bold text-primary">Our Work</h1>
        </div>
        <div className="">
          <p className="text-xl px-2 lg:px-28 font-normal">
            Amet eu facilisi posuere ut at cras non ipsum proin nunc purus
            tellus ultricies velit elementum ut dui sed augue ultrices phasellus
            ullamcorper condimentum ut suspendisse viverra ornare sit venenatis
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-3 mt-10 lg:mt-18 items-start justify-center ">
            <div className="col-span-2  relative">
              <h1 className="text-9xl hidden lg:block 2xl:left-96 lg:left-20 absolute top-4 text-text-gray">
                01
              </h1>
              <div class="mx-5 block lg:grid  place-content-end">
                <div class="bg-gradient-to-r  rounded-2xl text-white text-center z-10 h-[25rem] lg:max-w-lg 2xl:max-w-2xl mx-auto">
                  <img
                    className="w-full h-full rounded-xl"
                    src="/assets/images/about/about-1.png"
                    alt="about-1"
                  />
                </div>
                <div class="  h-96  text-center rounded-2xl shadow-lg transform z-0  translate-y-10 lg:-translate-y-52 sm:-translate-y-72 max-w-lg ml-0 lg:-ml-72">
                  <img
                    className="w-full h-full rounded-xl"
                    src="/assets/images/about/about-2.png"
                    alt="about-2"
                  />
                </div>
              </div>
            </div>
            <div className=" flex items-start justify-start  p-6 col-span-1 ">
              <div className="mt-20">
                <h1 className="font-bold text-3xl text-primary my-4">
                  Louis Vuitton
                </h1>
                <p className="text-text-gray text-m+d">
                  Amet eu facilisi posuere ut at cras non ipsum proin nunc purus
                  tellus ultricies velit elementum ut dui sed augue ultrices
                  phasellus ullamcorper condimentum ut suspendisse viverra
                  ornare sit venenatis
                </p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 items-start justify-center ">
            <div className=" flex items-start justify-start  p-6 col-span-1 ">
              <div className="mt-20">
                <h1 className="font-bold text-3xl text-primary my-4">
                  Louis Vuitton
                </h1>
                <p className="text-text-gray text-m+d">
                  Amet eu facilisi posuere ut at cras non ipsum proin nunc purus
                  tellus ultricies velit elementum ut dui sed augue ultrices
                  phasellus ullamcorper condimentum ut suspendisse viverra
                  ornare sit venenatis
                </p>
              </div>
            </div>
            <div className="col-span-2 relative">
              <h1 className="text-9xl hidden lg:block 2xl:left-96 lg:left-20 absolute top-4 text-text-gray">
                02
              </h1>
              <div class="mx-5 block lg:grid place-content-end">
                <div class="bg-gradient-to-r from-blue-400 to-indigo-500 rounded-2xl text-white text-center h-[25rem] lg:max-w-lg 2xl:max-w-2xl mx-auto">
                  <img
                    className="w-full h-full rounded-xl"
                    src="/assets/images/about/about-3.png"
                    alt="about-3"
                  />
                </div>
                <div className="text-center rounded-2xl transform translate-y-10 lg:-translate-y-52 sm:-translate-y-72 max-w-lg ml-0 lg:-ml-72">
                  <img
                    className="w-full h-full rounded-3xl"
                    src="/assets/images/about/about-4.png"
                    alt="about-4"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4  items-center justify-between">
        <div className=" border-4 border-btn-primary rounded-full  text-lg font-bold -ml-10 p-4 col-span-2">
          <h1 className="text-3xl pl-20 font-bold text-primary capitalize">
            Teams
          </h1>
        </div>
        <div className="text-lg font-bold  p-10 rounded-lg">
          <div className="float-right -mr-10 hidden lg:block">
            <AboutPageIcon />
          </div>
        </div>
      </div>
      <section className="sandbox__carousel relative ">
        <Slider>
          <TeamSection />
        </Slider>
        <img
          src="/assets/icons/svg/teamSectionBottomIcon.svg"
          className=" hidden lg:block bg-cover bg opacity-30 -px-10 bottom-32 absolute -z-20 "
          alt="bannerBg"
        />
      </section>

      <div className="about-section-bg w-full h-full">
        <div className="block lg:flex items-center  justify-center w-full px-6 lg:px-20">
          <div className="lg:w-2/3 w-full mx-auto items-center">
            <div className=" block lg:flex gap-6">
              <div className="mx-auto w-full">
                <img
                  className="rounded-xl -mt-14  mx-auto hover:scale-110 transition-all  ease-in-out delay-100"
                  src="/assets/images/background/about1.png"
                  alt="about-1"
                />
              </div>
              <div className="text-white mt-14">
                <h1 className="font-bold text-4xl my-3">
                  Develop <br /> Without Limits
                </h1>
                <p className="my-5 w-full lg:w-2/3">
                  WooCommerce is developer friendly, too. Built with a REST API,
                  WooCommerce is scalable and can integrate with virtually any
                  service. Design a complex store from scratch, extend a store
                  for a client, or simply add a single product to a WordPress
                  site—your store, your way.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className=" block lg:flex items-center justify-center w-full px-6 lg:px-20">
          <div className=" w-full lg:w-2/3 mx-auto items-center">
            <div className="block lg:flex gap-6">
              <div className="text-white mt-14 pl-0 lg:pl-56">
                <h1 className="font-bold text-4xl my-3">
                  Develop <br /> Without Limits
                </h1>
                <p className="my-5 w-full  lg:w-2/3">
                  WooCommerce is developer friendly, too. Built with a REST API,
                  WooCommerce is scalable and can integrate with virtually any
                  service. Design a complex store from scratch, extend a store
                  for a client, or simply add a single product to a WordPress
                  site—your store, your way.
                </p>
              </div>
              <div className="w-full">
                <img
                  className="rounded-xl ml-0 lg:ml-20 mt-10 -mb-10 mx-auto hover:scale-110 transition-all ease-in-out delay-100"
                  src="/assets/images/background/about2.png"
                  alt="about-2"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <section>
        <div className="bg-primary text-white py-8">
          <div className="container mx-auto flex flex-col items-start md:flex-row my-12 md:my-24">
            <div className="flex flex-col w-full sticky md:top-36 lg:w-1/3 mt-2 md:mt-12 px-4">
              <p className="ml-2 text-yellow-300 uppercase tracking-loose">
                Working Process
              </p>
              <p className="text-3xl md:text-4xl leading-normal md:leading-relaxed mb-2">
                Our story & History
              </p>
              <p className="text-sm md:text-base text-gray-50 mb-4 text-justify">
                Our story in the manufacturing world began in the year 2015.
                Since then we have been committed to deliver impeccable services
                for more many years. Over the years, we have worked consistently
                on building a strong trustworthy bond with our Indian as well as
                Global clients. Our services stand for our ethics and integrity.
                We have been delivering high –end quality machines which convey
                end-to-end belt solutions to cater to the customized needs of
                our customers. Our focus is on creating reliable, innovative &
                quality products. Our Founder Mr. Ajay Patel believes in
                consistent work and commitment. We believe in a dignified
                approach when it comes to all our customers, vendors and
                Employees. Consistency and Dignity are the core ethics which our
                founder Mr. Ajay Patel believes in and consistently work upon
                every single day..
              </p>
            </div>
            <div className="ml-0 md:ml-12 lg:w-2/3 sticky">
              <div className="container mx-auto w-full h-full">
                <div className="relative wrap overflow-hidden p-10 h-full">
                  <div
                    className="border-2-2 border-yellow-555 absolute h-full border"
                    style={{ right: '50%', borderRadius: '1%' }}
                  ></div>
                  <div
                    className="border-2-2 border-yellow-555 absolute h-full border"
                    style={{ right: '50%', borderRadius: '1%' }}
                  ></div>
                  <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                    <div className="order-1 w-5/12"></div>
                    <div className="order-1 w-5/12 px-1 py-4 text-right">
                      <p className=" text-yellow-300 uppercase tracking-loose">
                        2015
                      </p>
                      <h4 className="mb-3 font-bold text-lg md:text-2xl text-yellow-300">
                        Year of Establishment
                      </h4>
                      <p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100 text-justify">
                        After extensive research, Our Founder Mr. Ajay Patel
                        entered the manufacturing world with the intention to
                        build durable transmission conveyor chains through
                        automation. After extensive R&D, target the concern
                        areas in the automotive Industry. :)
                      </p>
                    </div>
                  </div>
                  <div className="mb-8 flex justify-between items-center w-full right-timeline">
                    <div className="order-1 w-5/12"></div>
                    <div className="order-1  w-5/12 px-1 py-4 text-left">
                      <p className=" text-yellow-300 uppercase tracking-loose">
                        2017
                      </p>

                      <h4 className="mb-3 font-bold text-lg md:text-2xl text-yellow-300">
                        Era of manufacturing Modular Belt Production
                      </h4>
                      <p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100 ">
                        After receiving some incredible response from our
                        customers in the table top chains ATCchains shifted the
                        focus towards a better consumer-centric approach. After
                        extensive analysis, We entered the manufacturing space
                        of modular Belts.
                      </p>
                    </div>
                  </div>
                  <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                    <div className="order-1 w-5/12"></div>
                    <div className="order-1 w-5/12 px-1 py-4 text-right">
                      <p className=" text-yellow-300 uppercase tracking-loose">
                        2019
                      </p>
                      <h4 className="mb-3 font-bold text-lg md:text-2xl text-yellow-300">
                        Expanded product range with end-to-end conveying
                        solution.
                      </h4>
                      <p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100 text-justify">
                        Understanding the consumer requirement demand & having
                        an insight in the conveyor chains, Modular belts
                        industry we made the strategic move towards the
                        development of conveyor sprockets, wear strips, and
                        conveyor components etc. in a time span of 3 years. Our
                        goal is to deliver our committed quality end-to-end
                        conveying solutions to customers with diverse challenges
                      </p>
                    </div>
                  </div>

                  <div className="mb-8 flex justify-between items-center w-full right-timeline">
                    <div className="order-1 w-5/12"></div>

                    <div className="order-1  w-5/12 px-1 py-4">
                      <p className=" text-yellow-300 uppercase tracking-loose">
                        2021
                      </p>
                      <h4 className="mb-3 font-bold  text-lg md:text-2xl text-left text-yellow-300">
                        Entry in the World of Automation
                      </h4>
                      <p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100 ">
                        After gaining intrinsic insight and expertise in the
                        manufacturing sector, we have expanded and established 3
                        other plants. Within a short span of over 5 years, we
                        have expanded our products into a diverse range of 1100+
                        manufacturing products delivering high-quality end-to-
                        end conveying solutions to our consumers. Our Durable
                        products like We are one the largest manufacturers
                        across the countries like and we rigorously compete with
                        other international parallel companies executing
                        high-end quality machines. We deliver the best conveyor
                        fit for our consumers’ dynamic needs!
                      </p>
                    </div>
                  </div>
                </div>
                <img
                  className="mx-auto -mt-36 md:-mt-36"
                  src="https://user-images.githubusercontent.com/54521023/116968861-ef21a000-acd2-11eb-95ac-a34b5b490265.png"
                  alt="Timeline"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <PopularProductsGallery />
    </>
  );
};

export default AboutPage;
