import { useTranslation } from 'next-i18next';
import styled from 'styled-components';

const StyledFooter = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem;
  border-top: 1px dashed ${props => props.theme.foreground};

  & p {
    font-size: 1rem;
  }
`;

const Footer = () => {
  return (
    <StyledFooter>
      <p>Copyright © 2016 AmbrosiaLab SRL</p>
      <p>PI 01598500385</p>
    </StyledFooter>
  );
};

export default Footer;
