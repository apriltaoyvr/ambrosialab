import Navbar from '../components/Navbar/Navbar';
import Hero from '../components/Other/Hero';
import About from '../components/About/About';
import Research from '../components/Research/Research';
import Story from '../components/About/Story';
import Team from '../components/Team/Team';
import Awards from '../components/Other/Awards';
import Contact from '../components/Contact/Contact';
import Footer from '../components/Other/Footer';

import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export async function getServerSideProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
}

export default function Home() {
  return (
    <>
      <Navbar />
        <Hero />
        <About />
        <Research />
        <Story/>
        <Team />
        <Awards/>
        <Contact />
        <Footer />
    </>
  )
}
