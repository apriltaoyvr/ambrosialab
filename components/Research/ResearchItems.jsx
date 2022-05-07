import { useTranslation } from 'next-i18next';
import styled from 'styled-components';

const ResearchItems = () => {
  const { t } = useTranslation('common');

  return (
    <>
      <h3>{t('activities[0].title')}</h3>
    </>
  );
};

export default ResearchItems;
