import { useTranslation } from 'next-i18next';
import styled from 'styled-components';

const Team = () => {
  const { t } = useTranslation('common');

  return (
    <>
      <h3>Name</h3>
      <h4>Title</h4>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita laboriosam ex rem rerum sint autem aspernatur dolor vitae quasi quas. Eius porro quibusdam error amet molestiae nihil magnam aliquam exercitationem.</p>
    </>
  );
};

export default Team;
