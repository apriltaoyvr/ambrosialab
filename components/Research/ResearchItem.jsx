import { useTranslation } from 'next-i18next';
import styled from 'styled-components';

const ResearchItem = (props) => {
  const { t } = useTranslation('common');

  return (
    <>
      <h3>{props.title}</h3>
      <p>{props.description}</p>
      <img src={props.icon} alt="" />
    </>
  );
};

export default ResearchItem;
