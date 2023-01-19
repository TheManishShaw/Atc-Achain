import Image from "next/image";
import React from "react";
import { Select } from "flowbite-react";

const ProductFilterDropDown = () => {
  return (
    <div className="flex gap-2 items-center p-6 bg-white shadow-md shadow-cyan-500/20 dark:shadow-lg dark:shadow-cyan-800/80 rounded-[32px]">
      <div>
        <Image
          className="rounded-full"
          src="/assets/images/background/image 57.png "
          width={100}
          height={100}
          alt={"images"}
        />
      </div>
      <div id="select" className="w-full border-none">
        <select
          id="large"
          className="block w-full px-4 py-3 text-lg font-bold  text-text-primary border-none  rounded-lg bg-transparent focus:ring-transparent focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-200 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 "
        >
          <option value="US">Food & Beverages</option>
          <option value="US">Food 2 & Beverages</option>
          <option value="US">Food & Beverages</option>
          <option value="US">Food & Beverages</option>
          <option value="US">Food & Beverages</option>
        </select>
      </div>
    </div>
  );
};

export default ProductFilterDropDown;
