import { useQuery } from "@tanstack/react-query";
import React from "react";
import { BannerImage, ErrorBoundary, YoutubeVideoCard } from "../Ui";

const YoutubePage = () => {
  return (
    <>
      <ErrorBoundary>
        <BannerImage
          text={"Belting solutions set to fix all your customized needs."}
          description="Thriving in the manufacturing Industry, We build durable & robust machines which are built to last for generations."
          classes="bg-[#120202]"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 lg:p-20  p-6 gap-8">
          <YoutubeVideoCard />
        </div>
      </ErrorBoundary>
    </>
  );
};

export default YoutubePage;
