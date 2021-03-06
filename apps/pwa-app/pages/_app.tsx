import React from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';
import './styles.css';

const CustomApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>Welcome to pwa-app!</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
};

export default CustomApp;
