/* Dependencies */
import Head from 'next/head';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

/* Components */
import Navbar from 'src/components/utility/Navbar';
import Hero from 'src/components/sections/Hero';
import About from 'src/components/sections/About';
import Research from 'src/components/sections/Research';
import Story from 'src/components/sections/Story';
import Team from 'src/components/sections/Team';
import Awards from 'src/components/sections/Awards';
import Contact from 'src/components/sections/Contact';
import Footer from 'src/components/sections/Footer';

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
