/* Libraries */
import { useTranslation } from 'next-i18next';
import Link from 'next/link';

/* Components */
import ResearchItem from './ResearchItem';
import FadeIn from '../../FadeIn';
import {
  StyledResearch,
  ItemWrapper,
  LogoWrapper,
  Logo,
} from './Research.styled';

/* Static Image Import */
import bionano from '../../../public/images/subsidiary/bionano.png';
import sd4 from '../../../public/images/subsidiary/sd4.png';

const Research = () => {
  const { t } = useTranslation('common');

  return (
    <StyledResearch id='research'>
      <FadeIn>
        <hgroup>
          <h1>{t('section.research')}</h1>
        </hgroup>
      </FadeIn>
      <FadeIn delay='1000'>
        <ItemWrapper>
          {t('research.activities', { returnObjects: true }).map(
            (activity, index) => (
              <ResearchItem
                title={activity.title}
                description={activity.description}
                info={activity.info}
                icon={activity.icon}
                key={index}
              />
            )
          )}
        </ItemWrapper>
      </FadeIn>
      <FadeIn delay='1500'>
        <hgroup>
          <h3>Projects, Publications, and Organizations</h3>
        </hgroup>
      </FadeIn>
      <FadeIn delay='1750'>
        <LogoWrapper>
          <Link href={'https://www.sbd4nano.eu/'} passHref>
            <Logo
              src={bionano}
              sizes='25%'
              fill='responsive'
              alt='Bionano logo'
            />
          </Link>
          <Link href={'https://www.bionanopolys.eu/'} passHref>
            <Logo src={sd4} alt='SD4 logo' />
          </Link>
        </LogoWrapper>
      </FadeIn>
    </StyledResearch>
  );
};

export default Research;
