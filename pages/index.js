import Hero from '../components/Hero';
import About from '../components/About/About';
import Research from '../components/Research/Research';
import Team from '../components/Team/Team';
import Awards from '../components/Awards/Awards';
import Contact from '../components/Contact/Contact';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar/Navbar';

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
      <div>
        <Hero />
        <About />
        <Research />
        <Team />
        <Awards />
        <Contact />
      </div>


      <Footer />
    </>
  )
}
