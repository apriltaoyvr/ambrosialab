/* Libs */
import React, { useState, useEffect } from 'react';
import Head from 'next/head'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

/* Components */
import LoadingScreen from '../components/Loading/LoadingScreen';
import Navbar from '../components/utility/Navbar';
import Hero from '../components/sections/Hero/index.jsx'
import About from '../components/sections/About';
import Research from '../components/sections/Research';
import Story from '../components/sections/About/Story';
import Team from '../components/sections/Team';
import Awards from '../components/sections/Awards';
import Contact from '../components/sections/Contact';
import Footer from '../components/sections/Footer';

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
