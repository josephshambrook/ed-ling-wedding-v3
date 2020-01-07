import React, { useEffect } from 'react';
import Head from 'next/head';
// import '../css/bootstrap.min.css';
// import '../css/custom.css';
import '../scss/custom.scss';
import Banner from '../components/Banner/Banner';
import Nav from '../components/Nav/Nav';
import Footer from '../components/Footer/Footer';

const MainLayout = ({ children, title = '28th June 2020', className = '' }) => {
  useEffect(() => {
    if (process.env.NODE_ENV === 'production') {
      window.dataLayer = window.dataLayer || []
      function gtag() {
        dataLayer.push(arguments)
      }
      gtag('js', new Date())
      gtag('config', 'UA-18052288-7', {
        page_location: window.location.href,
        page_path: window.location.pathname,
        page_title: window.document.title,
      })
    }
  });

  return (
    <>
      <Head>
        <script async src="https://www.googletagmanager.com/gtag/js?id=UA-18052288-7"></script>
        <link href="https://fonts.googleapis.com/css?family=Roboto+Slab:400,700&amp;display=swap" rel="stylesheet"/>
        <title>Edward & Ling - {title}</title>
      </Head>
      <Banner />
      <Nav />
      <main className={className}>{children}</main>
      <Footer />
    </>
  );
}

export default MainLayout;
