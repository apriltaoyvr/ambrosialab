import styled from 'styled-components';

export const ContactSection = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5rem;

  @media screen and (min-width: 1200px) {
    flex-direction: row;
  }
`;

export const ContactWrapper = styled.aside`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const ContactItem = styled.div`
  display: flex;
  gap: 1rem;
`;
