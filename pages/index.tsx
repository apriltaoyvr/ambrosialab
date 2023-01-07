/* Dependencies */
import Head from 'next/head';
import { lazy } from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

/* Components */
import Navbar from 'components/utility/Navbar';
import Hero from 'components/sections/Hero/';
import About from 'components/sections/About';
import Research from 'components/sections/Research';
const Story = lazy(() => import('components/sections/Story'));
const Team = lazy(() => import('components/sections/Team'));
const Awards = lazy(() => import('components/sections/Awards'));
const Contact = lazy(() => import('components/sections/Contact'));
const Footer = lazy(() => import('components/sections/Footer'));

export default function Home() {
  return (
    <>
      <Head>
        <title>AmbrosiaLab</title>
      </Head>
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
    </>
  );
}

/* next-i18next */
export async function getServerSideProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
}
