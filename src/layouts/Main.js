import React from 'react';
import Head from 'next/head';
import '../css/bootstrap.min.css';
import '../css/custom.css';
import Footer from '../components/Footer/Footer';

const MainLayout = ({ children, title = '28th June 2020', className = '' }) => (
  <>
    <Head>
      <script async src="https://www.googletagmanager.com/gtag/js?id=UA-18052288-7"></script>
      <script>
        {'window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag(\'js\', new Date());gtag(\'config\', \'UA-18052288-7\');}'}
      </script>

      <link href="https://fonts.googleapis.com/css?family=Roboto+Slab:400,700&amp;display=swap" rel="stylesheet"/>
      <title>Edward & Ling - {title}</title>
    </Head>
    <main className={className}>{children}</main>
    <Footer />
  </>
);

export default MainLayout;
