import '../styles/globals.css';
import Layout from './../components/layout';
import React from 'react';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (<Layout>
    <Head>
      <title>Indian Stock Market IPO Dashboard</title>
    </Head>
    <Component {...pageProps} />
  </Layout>);
}

export default MyApp
