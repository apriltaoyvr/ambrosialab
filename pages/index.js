import GlobalStyle from '../components/globalStyles';
import Hero from '../components/Hero';
import About from '../components/About/About';
import Research from '../components/Research/Research';
import Team from '../components/Team/Team';
import Awards from '../components/Awards';
import Contact from '../components/Contact/Contact';
import Footer from '../components/Footer';
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
      <GlobalStyle />
      <Hero/>
      <About  id='about'/>
      <Research id='research'/>
      <Team id='team'/>
      <Awards id='awards'/>
      <Contact id='contact'/>
      <Footer/>
    </>
  )
}
