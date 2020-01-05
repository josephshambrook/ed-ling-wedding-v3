import React from 'react';
import Head from 'next/head';
import '../css/bootstrap.min.css';
import '../css/custom.css';
import Banner from '../components/Banner/Banner';
import FAQs from '../components/FAQs/FAQs';
import faqContent from '../data/QAs.json';

const Home = () => {
  return (
    <>
      <Head>
        <link href="https://fonts.googleapis.com/css?family=Roboto+Slab:400,700&amp;display=swap" rel="stylesheet"/>
        <title>Edward & Ling - 28th June 2020</title>
      </Head>
      <Banner />
      <FAQs content={faqContent} />
    </>
  );
}

export default Home;
