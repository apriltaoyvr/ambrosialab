/* Libs */
import React, { useState, useEffect } from 'react';
import Head from 'next/head'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

/* Components */
import LoadingScreen from '../components/Loading/LoadingScreen';
import Navbar from '../components/Navbar/Navbar';
import Hero from '../components/Sections/Hero/Hero.jsx'
import About from '../components/Sections/About/About';
import Research from '../components/Sections/Research/Research';
import Story from '../components/Sections/About/Story';
import Team from '../components/Sections/Team/Team';
import Awards from '../components/Sections/Awards';
import Contact from '../components/Sections/Contact/Contact';
import Footer from '../components/Sections/Footer';

/* next-i18next */
export async function getServerSideProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
}

export default function Home() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => setLoading(false), 1250)
  }, [])

  return (
    <>
      <Head>
        <title>AmbrosiaLab</title>
      </Head>
      {loading === false ? (
        <>
          <Navbar />
          <Hero />
          <About />
          <Research />
          <Story />
          <Team />
          <Awards />
          <Contact />
          <Footer />
        </>
      ) : (<LoadingScreen />)}
    </>
  )
}
