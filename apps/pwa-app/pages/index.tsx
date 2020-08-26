import React from 'react';
import Head from 'next/head';

export const Index = () => {
  return (
    <>
      <Head>
        <link rel="manifest" href='./manifest.json' />
      </Head>
      <img src="./icon-192.png"/>
    </>
  );
};

export default Index;
