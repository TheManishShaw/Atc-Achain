import React, { createContext, useContext, useState } from 'react';
const StateContext = createContext();

export const ContextProvider = ({ children }) => {
  const ButtonDatas = [
    {
      id: 1,
      dataSection: 'Bakery & Bevarages',
      images: [
        {
          imgid: 1,
          img: '/assets/images/products/product2.png',
          discription_img: 'FRUIT & VEGETABLES ',
        },
        {
          imgid: 2,
          img: '/assets/images/products/product2.png',
          discription_img: 'FRUIT & VEGETABLES ',
        },
        {
          imgid: 3,
          img: '/assets/images/products/product2.png',
          discription_img: ' FRUIT & VEGETABLES ',
        },
      ],

      title1: 'PRODUCT INFORMATION',
      discription1: `HOLDER & PLUG TYPE: E-27. Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                     sed do eiusmod tempor incididunt ut labore et labore et dolore magna aliqua. `,
      discription2: `RECOMMENDED BULB: LED, CFL or Incandescent Bulbs can be used. Lorem ipsum dolor sit amet, 
                     consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et labore et dolore magna aliqua. `,
      discription3: `NO. OF BULB HOLDERS: 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et labore et dolore magna aliqua. `,
      discription4: `BULB PROVIDED: Not Provided. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et labore et dolore magna aliqua. Lorem ipsum dolor sit amet, 
                    consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et labore et dolore magna aliqua. `,
    },
    {
      id: 2,
      dataSection: 'Meat & Food Induatry',
      images: [
        {
          imgid: 1,
          img: '/assets/images/products/product2.png',
          discription_img: 'FRUIT & VEGETABLES ',
        },
        {
          imgid: 2,
          img: '/assets/images/products/product2.png',
          discription_img: 'FRUIT & VEGETABLES ',
        },
        {
          imgid: 3,
          img: '/assets/images/products/product2.png',
          discription_img: 'FRUIT & VEGETABLES ',
        },
      ],
      title1: 'PRODUCT INFORMATION',
      discription1: `HOLDER & PLUG TYPE: E-27. Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                         sed do eiusmod tempor incididunt ut labore et labore et dolore magna aliqua. `,
      discription2: `RECOMMENDED BULB: LED, CFL or Incandescent Bulbs can be used. Lorem ipsum dolor sit amet, 
                     consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et labore et dolore magna aliqua. `,
      discription3: `NO. OF BULB HOLDERS: 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                     sed do eiusmod tempor incididunt ut labore et labore et dolore magna aliqua. `,
      discription4: `BULB PROVIDED: Not Provided. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et labore et dolore magna aliqua. Lorem ipsum dolor sit amet, 
                       consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et labore et dolore magna aliqua. `,
    },
    {
      id: 3,
      dataSection: 'Bottling Industry',
      image: '/assets/images/products/product2.png',
      title1: 'PRODUCT INFORMATION',

      discription1: `HOLDER & PLUG TYPE: E-27. Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                      sed do eiusmod tempor incididunt ut labore et labore et dolore magna aliqua. `,
      discription2: `RECOMMENDED BULB: LED, CFL or Incandescent Bulbs can be used. Lorem ipsum dolor sit amet, 
                            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et labore et dolore magna aliqua. `,
      discription3: `NO. OF BULB HOLDERS: 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                   sed do eiusmod tempor incididunt ut labore et labore et dolore magna aliqua. `,
      discription4: `BULB PROVIDED: Not Provided. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et labore et dolore magna aliqua. Lorem ipsum dolor sit amet, 
                    consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et labore et dolore magna aliqua. `,
    },
    {
      id: 4,
      dataSection: 'Automotive',
      image: '/assets/images/products/product2.png',
      title1: 'PRODUCT INFORMATION',

      discription1: `HOLDER & PLUG TYPE: E-27. Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                       sed do eiusmod tempor incididunt ut labore et labore et dolore magna aliqua. `,
      discription2: `RECOMMENDED BULB: LED, CFL or Incandescent Bulbs can be used. Lorem ipsum dolor sit amet, 
                      consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et labore et dolore magna aliqua. `,
      discription3: `NO. OF BULB HOLDERS: 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                      sed do eiusmod tempor incididunt ut labore et labore et dolore magna aliqua. `,
      discription4: `BULB PROVIDED: Not Provided. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et labore et dolore magna aliqua. Lorem ipsum dolor sit amet, 
                     consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et labore et dolore magna aliqua. `,
    },
    {
      id: 5,
      dataSection: 'Printing',
      image: '/assets/images/products/product2.png',
      title1: 'PRODUCT INFORMATION',

      discription1: `HOLDER & PLUG TYPE: E-27. Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                       sed do eiusmod tempor incididunt ut labore et labore et dolore magna aliqua. `,
      discription2: `RECOMMENDED BULB: LED, CFL or Incandescent Bulbs can be used. Lorem ipsum dolor sit amet, 
                     consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et labore et dolore magna aliqua. `,
      discription3: `NO. OF BULB HOLDERS: 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                     sed do eiusmod tempor incididunt ut labore et labore et dolore magna aliqua. `,
      discription4: `BULB PROVIDED: Not Provided. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et labore et dolore magna aliqua. Lorem ipsum dolor sit amet, 
                     consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et labore et dolore magna aliqua. `,
    },
    {
      id: 6,
      dataSection: 'Others',
      image: '/assets/images/products/product2.png',
      title1: 'PRODUCT INFORMATION',

      discription1: `HOLDER & PLUG TYPE: E-27. Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                     sed do eiusmod tempor incididunt ut labore et labore et dolore magna aliqua. `,
      discription2: `RECOMMENDED BULB: LED, CFL or Incandescent Bulbs can be used. Lorem ipsum dolor sit amet, 
                       consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et labore et dolore magna aliqua. `,
      discription3: `NO. OF BULB HOLDERS: 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et labore et dolore magna aliqua. `,
      discription4: `BULB PROVIDED: Not Provided. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et labore et dolore magna aliqua. Lorem ipsum dolor sit amet, 
                       consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et labore et dolore magna aliqua. `,
    },
  ];
  const [filteredData, setFilteredData] = useState({});
  const [showcontainer, setShowcontainer] = useState(false);

  return (
    <>
      <StateContext.Provider
        value={{
          ButtonDatas,
          showcontainer,
          setShowcontainer,
          filteredData,
          setFilteredData,
        }}
      >
        {children}
      </StateContext.Provider>
    </>
  );
};

export const useStateContext = () => useContext(StateContext);
