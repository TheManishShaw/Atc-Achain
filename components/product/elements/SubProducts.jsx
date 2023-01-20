import { useQuery } from '@tanstack/react-query';
import { useRouter } from 'next/router';
import { getAllMainCategory } from '../../../fetchers/universalFetch';
import { Loader, PopOver, ProductNotFound } from '../../Ui';
import { motion } from 'framer-motion';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
const SubProducts = () => {
  const { isLoading, isError, data, error, isIdle, onSuccess } = useQuery({
    queryKey: ['SliderProducts'],
    queryFn: getAllMainCategory,
  });
  const productData = data?.data?.response?.primary_products;
  const router = useRouter();

  if (isLoading) return <Loader />;
  if (isError) return <ProductNotFound text="Product Not Found" />;

  const challengeSplide = productData?.map((product, index) => {
    return (
      <SplideSlide key={index}>
        <div className="flex">
          <motion.div className="transition-all  max-w-md duration-100 ease-in-out delay-150 py-10 px-2">
            <div className="border border-primary rounded-xl">
              <div className="flex flex-col space-y-4 md:space-y-8  md:mt-0  ">
                <div className="relative overflow-hidden group flex justify-center items-center rounded-t-xl w-full h-full ">
                  <img
                    className="object-center object-cover h-[300px] max-w-[400px]  rounded-t-xl"
                    src={
                      product?.image_1920 && product?.image_1920
                        ? `${process.env.NEXT_PUBLIC_API_BASE_URL_DEV}${
                            product?.image_1920
                              ? product?.image_1920
                              : product?.image_url
                          }`
                        : '/assets/images/products/product2.jpeg'
                    }
                    alt={product?.name}
                  />
                  <button className="focus:outline-none line-clamp-1 focus:ring-2 rounded-t-xl r   top-0 z-10 absolute text-xl font-bold leading-none  text-gray-100 py-5 w-full bg-primary/40">
                    {product?.name}
                  </button>
                  <div className="absolute opacity-0 group-hover:opacity-100 rounded-t-xl transition duration-500 top-0 py-[30px] z-0 px-20 w-full bg-primary/50 bg-opacity-50" />
                </div>
              </div>
              <div className="p-2 bg-primary text-white rounded-b-lg flex justify-between items-center px-6">
                <div>
                  <h3 className="text-lg font-bold line-clamp-1 ">
                    Click Here For more Detail
                  </h3>
                </div>
                <div className="relative">
                  <PopOver id={product?.id} />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </SplideSlide>
    );
  });
  return (
    <Splide
      options={{
        rewind: false,
        autoWidth: true,
        perPage: 6,
        perMove: 2,
        pagination: false,
        gap: '1em',
        focus: 'center',
        type: 'slide',
        easing: 'ease',
        arrows: true,
      }}
    >
      {challengeSplide}
    </Splide>
  );
};

export default SubProducts;
