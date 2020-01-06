import React from 'react';
import MainLayout from '../layouts/Main';
import Banner from '../components/Banner/Banner';
import FAQs from '../components/FAQs/FAQs';
import faqContent from '../content/QAs.json';

const Home = () => {
  return (
    <MainLayout>
      <Banner />
      <FAQs content={faqContent} />
    </MainLayout>
  );
}

export default Home;
