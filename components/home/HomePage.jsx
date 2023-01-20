import React from 'react';
import { motion } from 'framer-motion';

// Internal import
import {
  ContactForm,
  HeroSection,
  HomeIndustries,
  ProductCard,
  ProductHoverOverView,
  Slider,
  SubProducts,
  TestimonialsCardSection,
  TitleSection,
  YoutubeVideoCard,
} from '../Ui';
import { staggerContainer } from '../../utils/motion';
import IndustryDetails from '../industries/elements/IndustryDetails';
import HomeBlogSection from './elements/HomeBlogSection';
import IndustrySolutionHome from './elements/IndustrySolutionHome';
import HowWeWorkHomeSection from './elements/HowWeWorkHomeSection';

const HomePage = () => {
  return (
    <div className="">
      <HeroSection />
      <div className=" border-none bg-gray-100/50 product-section-bg mt-72 lg:mt-0">
        <div className=" h-64 w-full ">
          <div className="lg:pl-96 px-2 flex items-center justify-start h-full ">
            <div>
              <h3 className="font-semibold text-text-primary text-xl mb-2">
                Our Products
              </h3>
              <div className="block lg:flex gap-14 items-center justify-start w-full">
                <h1 className="font-bold text-text-primary  max-w-full text-3xl lg:text-4xl 2xl:text-5xl leading-normal w-full">
                  Discover our Premium{' '}
                  <span className="text-primary">Range Of Products</span>
                </h1>
                <p className=" text-xl lg:text-2xl px-0 lg:px-12 w-full text-text-gray">
                  We deliver our customers with supreme quality & Durable
                  products built to last!
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="px-2">
          <ProductCard />
        </div>

        <ProductHoverOverView />
        <HomeBlogSection />
        <motion.div className="lg:pl-28   mx-0 h-full ">
          <div className="flex justify-between items-end">
            <div className=" mb-16">
              <p className="font-semibold text-primary mb-2">INDUSTRIES</p>
              <h1 className="font-bold text-[#1B1C57] text-4xl">
                Industries we have{' '}
                <span className="text-primary"> set our expertise on! </span>
              </h1>
            </div>
            <span className="hidden relative lg:block">
              <img
                className="-mb-44 top-0 left-0"
                src="/assets/icons/svg/homePage.svg"
              />
            </span>
          </div>
          <motion.section
            className="sandbox__carousel"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
          >
            <Slider>
              <HomeIndustries />
            </Slider>
          </motion.section>
        </motion.div>
      </div>
      <IndustrySolutionHome />
      <div>
        <div className="flex justify-around ">
          <div></div>
          <img
            className="hidden lg:block"
            src="/assets/icons/svg/homePageIcon.svg"
            alt="homeIcon"
          />
        </div>
        <HowWeWorkHomeSection />
      </div>
      <section id="industrySection" className="my-10 px-4">
        <TitleSection name="industries" />
        <div className="">
          <IndustryDetails />
        </div>
      </section>
      <section id="productSection" className="">
        <TitleSection name="Products" />
        <div className="px-4 overflow-x-hidden overflow-y-visible">
          <SubProducts />
        </div>
      </section>

      <section id="youtubeSection" className="my-10 px-4">
        <TitleSection name="Videos" />
        <div className="grid my-20 grid-cols-1 md:grid-cols-2 2xl:grid-cols-4 lg:grid-cols-3">
          <YoutubeVideoCard />
        </div>
      </section>
      <motion.div className=" pb-20  lg:pl-28  h-full testimonials-section-bg">
        <div className="my-10 pl-4">
          <p className="font-bold text-primary">Testimonials</p>
          <h1 className="font-bold text-secondary text-2xl  lg:text-3xl">
            Don't take <span className="text-primary">our word for it</span>
          </h1>
        </div>

        <TestimonialsCardSection />
      </motion.div>

      <motion.div className="bg-[#F6F8FB] py-2 ">
        <ContactForm />
      </motion.div>
    </div>
  );
};

export default HomePage;
