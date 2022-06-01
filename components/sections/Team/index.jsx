import { useTranslation } from 'next-i18next';
import { motion } from 'framer-motion';

import { fadeContainer, fadeItem } from '../../utility/framer';
import Member from './Member';
import { TeamWrapper } from './index.styled';

const Team = () => {
  const { t } = useTranslation('common');

  return (
    <motion.section
      id='team'
      variants={fadeContainer}
      initial='hidden'
      whileInView='visible'
      exit='hidden'
    >
      <motion.h1 variants={fadeItem}>{t('section.team')}</motion.h1>
      <TeamWrapper>
        {t('team', { returnObjects: true }).map((team, index) => (
          <Member
            name={team.name}
            title={team.title}
            description={team.description}
            image={team.image}
            variants={fadeItem}
            key={index}
          />
        ))}
      </TeamWrapper>
    </motion.section>
  );
};

export default Team;
