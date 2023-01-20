import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { BannerImage, TitleSection } from '../Ui';
import IndustryDetails from './elements/IndustryDetails';
import ContextProvider from './ContextProvider';

const Industries = () => {
  return (
    <>
      <BannerImage image={'/assets/icons/svg/industryBannerBg.svg'} />
      <div className="my-20">
        <TitleSection name="Industries" />
      </div>

      <ContextProvider />
    </>
  );
};
export default dynamic(() => Promise.resolve(Industries), { ssr: false });
