import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { getAllEmployee } from '../../../fetchers/universalFetch';
import { Loader, ProductNotFound } from '../../Ui';

const TeamSection = () => {
  const { isLoading, isError, data, error, onSuccess } = useQuery({
    queryKey: ['teamDetails'],
    queryFn: getAllEmployee,
  });

  const teams = data?.data?.employee;
  if (isLoading) return <Loader />;
  if (isError) return <ProductNotFound text="No Team Data Found" />;
  return (
    <>
      {teams &&
        teams.map((team, i) => (
          <div
            key={i}
            className="lg:flex md:flex sm:flex items-center mx-auto  my-32 hover:scale-110 transition-all delay-50 ease-in-out xl:justify-between flex-wrap md:justify-around sm:justify-around lg:justify-around"
          >
            <div className="relative mt-16 mb-32 w-80  mx-4 ">
              <div className="  overflow-hidden shadow-md group bg-[#D2EFFF] hover:bg-[#95d2f3] rounded-xl">
                <div className="absolute -mt-36  w-full flex justify-center">
                  <div className="h-80 w-64">
                    <img
                      src={
                        team?.image_url
                          ? `${process.env.NEXT_PUBLIC_API_BASE_URL_DEV}${team?.image_url}`
                          : '/assets/images/teams/team1.png'
                      }
                      alt="profile"
                      className="rounded-full border-8 object-cover h-full w-full shadow-md group-hover:brightness-110"
                    />
                  </div>
                </div>
                <div className=" mt-44 mb-10 text-primary">
                  <div className="font-bold text-xl py-4 text-center pb-1 w-full">
                    {team?.name}
                  </div>
                  <p className="text-text-gray group-hover:text-gray-200 text-sm text-center">
                    {team?.job_title ? team?.job_title : 'Designation'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
    </>
  );
};

export default TeamSection;
