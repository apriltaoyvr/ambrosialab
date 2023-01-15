/* Dependencies */
import Head from 'next/head';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

/* Components */
import Navbar from 'components/utility/Navbar';
import Hero from 'components/sections/Hero/';
import About from 'components/sections/About';
import Research from 'components/sections/Research';
import Story from 'components/sections/Story';
import Team from 'components/sections/Team';
import Awards from 'components/sections/Awards';
import Contact from 'components/sections/Contact';
import Footer from 'components/sections/Footer';

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
