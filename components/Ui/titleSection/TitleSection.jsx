import React from 'react';
import { TitleIcon } from '../../../public/assets/icons/icons';

const TitleSection = ({ name }) => {
  return (
    <div className='flex -ml-12 mr-8 items-center justify-between rounded-full border-primary border-4 px-10 max-w-[90] min-w-[85]'>
      <h1 className='text-3xl font-bold text-primary pl-8 capitalize'>
        {name}
      </h1>
      <span className=' my-4'>
        <TitleIcon />
      </span>
    </div>
  );
};

export default TitleSection;
