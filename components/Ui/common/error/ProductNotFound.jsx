import Image from 'next/image';
import React from 'react';

const ProductNotFound = ({ text, customeClasses }) => {
  return (
    <div
      className={`flex items-center mx-auto  justify-center rounded-xl p-10 bg-white my-4 ${customeClasses}`}
    >
      <div className="text-center">
        <Image
          src="/assets/images/products/productNotFound.png"
          width={200}
          height={200}
          alt="Not Found"
        />
        <h1 className="my-10">{text}</h1>
      </div>
    </div>
  );
};

export default ProductNotFound;
