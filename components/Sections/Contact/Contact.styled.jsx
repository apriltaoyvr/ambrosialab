import styled from 'styled-components';

export const ContactSection = styled.footer`
  display: flex;
  justify-content: center;
  gap: 5rem;
  flex-direction: column;

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
