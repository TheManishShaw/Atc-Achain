import React from "react";
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";

const IndustryCardSection = () => {
  return (
    <ErrorBoundary>
      <div className="wrapper   antialiased text-gray-900">
        <div className="w-[740px]">
          <img
            src="/assets/images/industry/industry-1.png"
            alt=" random imgee"
            className="w-full object-cover object-center rounded-lg shadow-md"
          />

          <div className="relative px-6 -mt-24  ">
            <div className="bg-white p-6 rounded-3xl">
              <h4 className="mt-1 text-xl font-semibold  leading-tight truncate text-text-primary">
                Food & beverages Industry
              </h4>

              <div className="mt-3 text-xs leading-loose text-gray-400">
                ATC chains offer a one stop solution for all your beverage
                necessities. We produce PET bottles, jars, containers and glass,
                bottle case, labeler and assemble so brands don’t have to bother
                about the labels & the process of white assembling. We deliver
                premium set of services that helps brand deliver premium
                products.
              </div>
            </div>
          </div>
        </div>
      </div>
    </ErrorBoundary>
  );
};

export default IndustryCardSection;
