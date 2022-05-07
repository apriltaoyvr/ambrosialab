import { useTranslation } from 'next-i18next';
import styled from 'styled-components';

import Partner from './Partner';

const StyledAbout = styled.section`
  border-top: 1px dashed var(--fg);
  & h1,
  & h2,
  & h3,
  & h4 {
    text-shadow: 0px 3px 6px hsl(2deg 46% 40%);
  }

  & p {
    text-shadow: 0px 1px 3px hsl(2deg 46% 40%);
  }
`;

const ParagraphWrapper = styled.article`
  padding: 1rem;
  width: 75%;
  align-self: center;
`;

const PartnerWrapper = styled.aside`
  display: flex;
  justify-content: space-around;
`;

const About = () => {
  const { t } = useTranslation('common');

  return (
    <StyledAbout>
      <hgroup>
        <h1>{t('section.about')}</h1>
        <h2>{t('about.subtitle')}</h2>
      </hgroup>
      <ParagraphWrapper>
        <p>{t('about.paragraph[0]')}</p>
      </ParagraphWrapper>
      <PartnerWrapper>
        <Partner
          title='Production Partners'
          number='50'
          description='For raw materials'
        ></Partner>
        <Partner
          title='Business Partners'
          number='60'
          description='Under an AmbrosiaLab licence'
        ></Partner>
        <Partner
          title='Production Partners'
          number='80'
          description='For finished products'
        ></Partner>
      </PartnerWrapper>
    </StyledAbout>
  );
};

export default About;
