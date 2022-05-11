/* Libs */
import Head from 'next/head'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

/* Components */
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
  return (
    <>
      <Head>
        <title>AmbrosiaLab</title>
        <meta name="description" content="A health, wellness, and cosmetics research company headquartered in Ferrara, Italy."/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <link rel="icon" type="image/svg" href="/static/images/logo.svg"/>
      </Head>
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
  )
}
