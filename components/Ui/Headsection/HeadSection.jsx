import Head from "next/head";
import React from "react";

//internal imports

const HeadSection = ({title, description,keyWords,author}) => {
  return (
    <>
      <Head>
        <title>{title ? title : "ATC Chain"}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content={keyWords} />
        <meta name="author" content={author ? author : "Manish Shaw"} />
        <link rel="icon" href="/favicon.svg" />
      </Head>
    </>
  );
};

export default HeadSection;
