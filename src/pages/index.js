import React from 'react';
import Head from 'next/head';
import '../css/bootstrap.min.css';
import '../css/custom.css';
import Banner from '../components/Banner/Banner';

const Home = () => {
  return (
    <>
      <Head>
        <link href="https://fonts.googleapis.com/css?family=Roboto+Slab:400,700&amp;display=swap" rel="stylesheet"/>
      </Head>
      <Banner />
    </>
  );
}

export default Home;
