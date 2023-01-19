import React from "react";

const Banner = ({ image }) => {
  return (
    <div>
      <section className={`-mt-20 dark:bg-gray-900 ${image}`}>
        <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12 h-[50vh]"></div>
      </section>
    </div>
  );
};

export default Banner;
